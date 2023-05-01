<script setup>
import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
  <div id="wrapper">
    <AdminHeader></AdminHeader>
      <div class="form-container">
        <h1 class="form-header">Complete Form</h1>
        <form>
          <h2>Selected Date</h2>
          <table>
            <tr>
              <th>Date</th>
                <th>{{ appearance.date }}</th>
            </tr>
            <tr>
              <th>Start Time</th>
              <th>{{ appearance.beginningTime }}</th>
            </tr>
            <tr>
              <th>End Time</th>
              <th>{{ appearance.endingTime }}</th>
            </tr>
          </table>
          <h2>Event Type</h2>
            <label for="eventType">Event Type:</label>
              <select id="tcu" v-model="eventType">
                <option value="false">TCU</option>
                <option value="true">Private</option>
              </select>

          <h2>Personal Contact Information</h2>
    
          <div class="form-group">
            <label for="first-name">Contact First Name:</label>
            <input type="text" id="first-name" v-model="C_firstName">
          </div>
    
          <div class="form-group">
            <label for="last-name">Contact Last Name:</label>
            <input type="text" id="last-name" v-model="C_lastName">
          </div>
    
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="text" id="phone" v-model="C_phone">
          </div>
    
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="C_email">
          </div>
    
          <h2>Event Information</h2>
    
          <div class="form-group">
            <label for="title">Event Title:</label>
            <textarea id="event-title" v-model="eventTitle"></textarea>
          </div>
    
          <div class="form-group">
            <label for="org-name">Name of Organization:</label>
            <textarea id="org-name" v-model="organizationName"></textarea>
          </div>
    
          <div class="form-group">
            <label for="address">Address of Appearance:</label>
            <textarea id="address" v-model="eventAddress"></textarea>
          </div>
    
          <div class="button-group">
            <router-link to="/policy-agreement">
              <button type="submit" class="btn">Continue</button>
            </router-link>
          </div>
    
          <div class="form-group">
            <router-link to="/select-date-time">
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
        appearance: {
          date: "",
          beginningTime: "",
          endingTime: "",
        },
        eventType: "",
        C_firstName: "",
        C_lastName: "",
        C_phone: "",
        C_email: "",
        eventTitle: "",
        organizationName: "",
        eventAddress: ""
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

  .button-group {
    display: flex;
    justify-content: space-between;
  }
  
  .table-wrapper{
    background-color: white;
    color: black;
  }

  td, th {
    border: 1px solid black;
    background-color: #fff;
    text-align: left;
    padding: 8px;
    color: #444;
  }

  td {
    padding: 10px;
    margin: auto;
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