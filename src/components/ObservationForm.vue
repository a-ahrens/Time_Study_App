<template>
  <div>
    <h3>Observation Form</h3>
    <div>
      <label for="task">Task:</label>
      <input type="text" id="task"><br>
      <label for="time-start">Time Start</label>
      <input type="text" id="time-start" /><br>
      <label for="time-end">Time End</label>
      <input type="text" id="time-end"><br>
      <label for="comments">Comments</label>
      <input type="text" id="comments"><br><br>
    </div>
    <div>
      <label for="flag-waste">Flag as Waste</label> <br>
      <input type="checkbox" id="flag-waste">
    </div>
    <div>
      <label for="flag-sop">Not SOP</label><br>
      <input type="checkbox" id="flag-sop">
    </div>
    <div>  
      <label for="flag-interruption">Interruption</label>
      <input type="checkbox" id="flag-interruption"><br>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>