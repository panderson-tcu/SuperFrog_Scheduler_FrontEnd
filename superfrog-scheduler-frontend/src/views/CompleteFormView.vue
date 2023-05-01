<script setup>
import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
  <div id="wrapper">
    <AdminHeader></AdminHeader>
      <div class="form-container">
        <h1 class="form-header">Complete Form</h1>
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
    
          <h2>Personal Contact Information</h2>
    
          <div class="form-group">
            <label for="first-name">Contact First Name:</label>
            <input type="text" id="first-name" v-model="firstName">
          </div>
    
          <div class="form-group">
            <label for="last-name">Contact Last Name:</label>
            <input type="text" id="last-name" v-model="lastName">
          </div>
    
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="text" id="phone" v-model="phone">
          </div>
    
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
          </div>
    
          <h2>Event Information</h2>
    
          <div class="form-group">
            <label for="title">Event Title:</label>
            <textarea id="event-title" v-model="title"></textarea>
          </div>
    
          <div class="form-group">
            <label for="org-name">Name of Organization:</label>
            <textarea id="org-name" v-model="orgName"></textarea>
          </div>
    
          <div class="form-group">
            <label for="address">Address of Appearance:</label>
            <textarea id="address" v-model="address"></textarea>
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
            date: "",
            startTime: "",
            endTime: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            title: "",
            orgName: "",
            address: ""
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