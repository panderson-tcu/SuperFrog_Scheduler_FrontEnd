<script setup>
import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
  <div id="wrapper">
    <!-- <AdminHeader></AdminHeader> -->
      <div class="form-container">
        <h1 class="form-header">Review Your Order</h1>
        <form>
            <h2>Review Your Information</h2>
            <h3>Select Date and Time</h3>

            <table class="table-wrapper">
            <tr>
                <th>Date Time</th>
                <th>05/15/2023</th>
            </tr>
            <tr>
                <td>Start Time</td>
                <td>9am</td> 
            </tr>
            <tr>
                <td>Edit Time</td>
                <td>1pm</td> 
            </tr>
          </table>
    
          <h2>Personal Contact Information</h2>            
            <table class="table-wrapper">
            <tr>
                <th>Name</th>
                <th>John Doe</th>
            </tr>
            <tr>
                <td>Phone</td>
                <td>(817)257-1234</td> 
            </tr>
            <tr>
                <td>Email</td>
                <td>johndoe@gmail.com</td> 
            </tr>
          </table>

          <h2>Event Information</h2>
            <table class="table-wrapper">
            <tr>
                <th>Event Name</th>
                <th>John's Graduation Party</th>
            </tr>
            <tr>
                <td>Organization</td>
                <td></td> 
            </tr>
            <tr>
                <td>Event Location</td>
                <td></td> 
            </tr>
            <tr>
                <td>Event Type</td>
                <td></td> 
            </tr>
            <tr>
                <td>Any Expensenes or Benefits</td>
                <td></td> 
            </tr>
            <tr>
                <td>Outside Organizations</td>
                <td></td> 
            </tr>
            <tr>
                <td>Event Decription</td>
                <td>11am</td> 
            </tr>
          </table>
          <h2>Cost</h2>            
            <table class="table-wrapper">
            <tr>
                <th>Super Frog ($175.00) x 1.5/hr</th>
            </tr>
            <tr>
                <td>Total Cost: $525</td>
            </tr>
          </table>
              
          <div class="button-group">
            <router-link to="/receipt">
              <button type="submit" class="btn">Submit</button>
            </router-link>
          </div>
    
          <div class="form-group">
            <router-link to="/policy-agreement">
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
  h3 {
    font-size: 16px;
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
    text-align: left;
    padding: 8px;
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