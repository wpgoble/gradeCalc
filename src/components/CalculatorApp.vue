<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label>Attendance: </label>
    <input type="number" v-model="attendance"/>
    <label>Homework: </label>
    <input type="number" v-model="homework"/>
    <label>Labs: </label>
    <input type="number" v-model="labs"/>
    <label>Written Test: </label>
    <input type="number" v-model="midterm"/>
    <label>Lab Exam: </label>
    <input type="number" v-model="lab_exam"/>
    <label>Final Exam: </label>
    <input type="number" v-model="final_exam"/>
    <input type="button" value="Calculate Grade" 
        v-on:click="calculateGrade(attendance, homework, labs, midterm, lab_exam, final_exam)"/>
  </div>
</template>

<script>
export default {
  name: 'CalculatorApp',
  data() {
      return {
          msg: "Enter your grades and click calculate to see your potential final grade",
          attendance: 0,
          homework: 0,
          labs: 0,
          midterm: 0,
          lab_exam: 0,
          final_exam: 0,
          grade: 0,
      }
  },
  methods: {
      calculateGrade: function(attendance, homework, labs, midterm, lab_exam, final_exam){
        this.attendance = attendance
        this.homework = homework
        this.labs = labs
        this.midterm = midterm
        this.lab_exam = lab_exam
        this.final_exam = final_exam
        this.grade = (homework * 0.25) + (labs * 0.25) + (midterm * 0.15) + (lab_exam * 0.15) + (final_exam * 0.15) + (attendance * 0.05)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
