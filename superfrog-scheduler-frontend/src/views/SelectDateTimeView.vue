<script setup>
import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
  <div id="wrapper">
    <AdminHeader></AdminHeader>
      <div class="form-container">
        <h1 class="form-header">Select Date Time</h1>
        <form>
          <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="date">
          </div>
          <div class="form-group">
            <label for="start-time">Start Time:</label>
            <input type="time" id="start-time" v-model="startTime">
          </div>
    
          <div class="form-group">
            <label for="end-time">End Time:</label>
            <input type="time" id="end-time" v-model="endTime">
          </div>

          <!-- <table class="table-wrapper">
            <tr>
                <th>Time</th>
                <th>Unavlaible times</th>
            </tr>
            <tr>
                <td>10am</td>
                <td>10am</td> 
            </tr>
            <tr>
                <td>11am</td>
                <td>11am</td> 
            </tr>
            <tr>
                <td>12pm</td>
                <td>12pm</td> 
            </tr>
            <tr>
                <td>1pm</td>
                <td>1pm</td> 
            </tr>
            <tr>
                <td>2pm</td>
                <td></td> 
            </tr>
            <tr>
                <td>3pm</td>
                <td></td> 
            </tr>
            <tr>
                <td>4pm</td>
                <td></td> 
            </tr>
            <tr>
                <td>5pm</td>
                <td></td> 
            </tr>
            <tr>
                <td>6pm</td>
                <td></td> 
            </tr>
            <tr>
                <td>7pm</td>
                <td></td> 
            </tr>
            <tr>
                <td>8pm</td>
                <td></td> 
            </tr>
          </table> -->

          <div class="button-group">
            <router-link to="/complete-form">
              <button type="submit" class="btn">Continue</button>
            </router-link>
          </div>
    
          <div class="form-group">
            <router-link to="/landing-page">
              <button type="button" class="btn">Back</button>
            </router-link>
          </div> 
        </form>
     </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            date: "",
        };
    },
    components: { AdminHeader }
}
  </script>
  
  
  <style>
  #wrapper {
      /* position: relative; */
      justify-content: center;
      align-items: center;
      background-color: #4D1979;
      color: white;
  }
  .form-container {
    max-width: 800px;
    min-height: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #4D1979;
    color: #fff;
  }
  
  .form-header {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }

  /* .table-wrapper{
    background-color: white;
    color: black;
  }

  td, th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }

  td {
    padding: 10px;
    margin: auto;
  } */

  .button-group {
    display: flex;
    justify-content: space-between;
  }
  
  label {
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  input[type="text"],
  input[type="email"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #444;
    background-color: #fff;
  }
  
  textarea {
    height: 100px;
  }
  
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fff;
    color: #4D1979;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #ccc;
    color: #fff;
  }
</style>