<template>
  <div class="time-study-panel">
      <VideoDisplay class="video-display"/>
      <ObservationForm class="observation-form"/>
      <ObservationTable class="observation-table"/>
  </div>
</template>

<script>
import ObservationForm from '../components/ObservationForm.vue'
import ObservationTable from '../components/ObservationTable.vue'
import VideoDisplay from '../components/VideoDisplay.vue'

export default {
  components: {
    ObservationForm,
    ObservationTable,
    VideoDisplay
  }
}
</script>

<style >
.time-study-panel {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "VideoDisplay ObservationForm"
    "ObservationTable ObservationTable";
  position: fixed;
}

.observation-form {
  grid-area: ObservationForm;
}

.observation-table {
  grid-area: ObservationTable;
}

.video-display {
  grid-area: VideoDisplay;
}
</style>