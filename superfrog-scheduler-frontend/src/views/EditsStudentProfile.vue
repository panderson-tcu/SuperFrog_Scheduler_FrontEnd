<script setup>
  import AdminHeader from '../components/AdminHeader.vue';
  import SFSSideBar from '../components/SFSSideBar.vue';
</script>

<template>
    <SFSSideBar style="position: fixed; height: 100vh; width: 25%; top: 0; left: 0; max-height: 100vh; overflow-y: scroll;"></SFSSideBar>
    <div class="right-col">
      <admin-header />
      <div id="wrapper" style="height: 100%;">
        <div class="container" style="height: 100%;">
          <h1>Edit Profile Information</h1>
          <form>
            <div class="form-group">
              <label for="first-name">First Name:</label>
              <input type="text" id="first-name" v-model="firstName">
            </div>
            <div class="form-group">
              <label for="last-name">Last Name:</label>
              <input type="text" id="last-name" v-model="lastName">
            </div>
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input type="text" id="phone" v-model="phone">
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="address">Address:</label>
              <textarea id="address" v-model="address"></textarea>
            </div>
            <div class="form-group">
              <label for="international">International:</label>
              <select id="international" v-model="isInternational">
                <option value="false">Not International</option>
                <option value="true">International</option>
              </select>
            </div>
            <div class="form-group">
              <label for="payment-preference">Payment Preference:</label>
              <select id="payment-preference" v-model="paymentPreference">
                <option value="Mail Check">Mail Check</option>
                <option value="Pick up check">Pick up check</option>
              </select>
            </div>

            <RouterLink to="/student-profile"> <!-- Should maybe be clickabke to a view profile page -->
                <button type="submit" class="btn">Save Changes</button>
            </RouterLink>
          </form>
        </div>
      </div>
  </div>
  </template>
  
  <script>
    export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            isInternational: false,
            paymentPreference: "Mail Check"
        };
    },
    components: { SFSSideBar }
}
  </script>
  
  <style>

  #wrapper {
  position: relative;
}

.form-container {
  /* max-width: 800px; */
    /* margin: 0 auto;
    padding: 20px; */
    background-color: #4D1979;
    color: #fff;
    width: 90%;
    margin-top: 5%;
}
  
  h1 {
    font-weight: 700;
    color: #fff;
  }
  
  button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #fff;
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
  .right-col {
  position: fixed;
  top: 0;
  right: 0;
  width: 68vw;
  height: 100%;
}

</style>
