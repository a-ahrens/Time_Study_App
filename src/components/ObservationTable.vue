<template>
  <div class="observation-panel">
    <h3>Observation Table</h3>
    <div class="table-fixed">
      <table>
        <tr>
          <th><input type="checkbox" name="select" id=""></th>
          <th>Obs#</th>
          <th>Task</th>
          <th>Time Start</th>
          <th>Time End</th>
          <th>Time Delta</th>
          <th>Flag as Waste</th>
          <th>Not SOP</th>
          <th>Interruption</th>
          <th>Comments</th>
        </tr>
        <tr v-for="observation in observations" :key="observation.id">
          <td><input type="checkbox" name="select" id=""></td>
          <td>{{ observation.id }}</td>
          <td>{{ observation.task }}</td>
          <td>{{ observation.timeStart }}</td>
          <td>{{ observation.timeEnd }}</td>
          <td>{{ observation.timeDelta }}</td>
          <td><input type="checkbox" :checked="observation.isWaste" name="waste" id=""></td>
          <td><input type="checkbox" :checked="observation.isNotSOP" name="sop" id=""></td>
          <td><input type="checkbox" :checked="observation.interruption" name="interruption" id=""></td>
          <td>{{ observation.comments }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observations: [
        {
          id: 1,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 01'
        },
        {
          id: 2,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 02'
        },
        {
          id: 3,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 03'
        },
        {
          id: 4,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 04'
        },
        {
          id: 5,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 05'
        },
        {
          id: 6,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: true,
          comments: 'This is a comment 06'
        },
        {
          id: 7,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 07'
        },
        {
          id: 8,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: true,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 08'
        },
        {
          id: 9,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 09'
        },
        {
          id: 10,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 10'
        },
        {
          id: 11,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: false,
          interruption: false,
          comments: 'This is a comment 11'
        },
        {
          id: 12,
          task: 'Place container',
          timeStart: 22.0,
          timeEnd: 32.0,
          timeDelta: 10.0,
          isWaste: false,
          isNotSOP: true,
          interruption: false,
          comments: 'This is a comment 12'
        },
      ]
    };
  }

}
</script>

<style>
.observation-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

fieldset {
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  background-color: #eeeeee;
}

legend {
  background-color: gray;
  color: white;
  padding: 5px 10px;
}

input {
  margin: 5px;
}

th,
td {
  padding-right: 10px;
  padding-left: 10px;
}

th {
  top: 0;
  z-index: 2;
  position: sticky;
  background-color: #eeeeee;
}

tr:nth-child(even) {
  background-color: #D6EEEE;
}

.table-fixed {
  overflow: hidden;
  overflow-y: scroll;
  height: 300px;
  border: 2px solid black;
}
</style>