<template>
  <div class="video-panel">
    <h3>Video Display</h3>
    <div class="video-player">
      <!-- Display video -->
      <video 
        ref="video"
        :src='videoSrc'
        controls
        height="400"
        width="600"
        @timeupdate="updateCurrentTime">
      </video>
    </div>
    <!-- Select a video file from PC -->
    <div>
      <input type="file" accept="video/mp4" @change="onFileChange">
      <span v-if="currentTime">Current Time: {{ currentTime }}</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'VideoDisplay',
  data() {
    return {
      videoSrc: null,
      currentTime: 0,
    };
  },

  methods: {
    onFileChange(e) {
      console.log("File Change event: ")
      console.log(e);
      const file = e.target.files[0]
      if (file) {
        this.videoSrc = URL.createObjectURL(file);
        this.$refs.video.load();
      }
    },
    
    updateCurrentTime() {
      this.currentTime = this.$refs.video.currentTime;
    },
  }
}
</script>

<style>
.video-panel {
  display: flex;
  flex-direction: column;
  align-content: center;
}

</style>