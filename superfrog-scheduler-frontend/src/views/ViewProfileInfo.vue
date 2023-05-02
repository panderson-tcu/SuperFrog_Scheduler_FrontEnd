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
        <h1>{{ user.firstName }}'s Profile</h1>
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
  position: relative;
  min-height: 100vh; /* set the height to be at least the viewport height */
}

 .profile-container {
  background-color: #4D1979;
    color: #fff;
    width: 85%;
    margin-top: 5%;
} 

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
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
  width: 68vw;
  height: 100%;
}
</style>
