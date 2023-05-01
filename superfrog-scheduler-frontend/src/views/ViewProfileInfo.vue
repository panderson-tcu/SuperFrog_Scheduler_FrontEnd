<script setup>
import AdminHeader from '../components/AdminHeader.vue';
import SFSSideBar from '../components/SFSSideBar.vue';
</script>
<template>
  <SFSSideBar style="position: fixed; height: 100vh; width: 25%; top: 0; left: 0;"></SFSSideBar>
  <div class="right-col">
    <AdminHeader />
    <div id="wrapper" style="height: 100%;">
      <div class="profile-container" style="height: 100%">
        <h1>{{ user.name }}'s Profile</h1>
        <!-- <h1>Ryan's Profile</h1> -->
        <p>First Name: {{ user.firstName }}</p>
        <p>Last Name: {{ user.lastName }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Address: {{ user.address }}</p>
        <p>isInternational: {{ user.international }}</p>
        <p>Payment Type: {{ user.payment }}</p>
      <!-- </div> -->
        <div class="form-group">
          <router-link to="/edit-student-profile">
            <button type="button" class="btn">Edit Profile</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        international: '',
        payment: ''
      }
    };
  },
  components: { AdminHeader, SFSSideBar }
}

</script>

<style>
#wrapper {
    /* position: relative; */
    justify-content: center;
    align-items: center;
    background-color: #4D1979;
    min-height: 100%;
    min-width: 100%;
    color: white;
}

.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #4D1979;
  color: #fff;
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
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
  .right-col {
  position: fixed;
  top: 0;
  right: 0;
  width: 66vw;
  height: 100%;
}
</style>
