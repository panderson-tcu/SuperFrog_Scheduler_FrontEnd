<script setup>
import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
  <div id="wrapper">
    <AdminHeader></AdminHeader>
    <div class="profile-container">
      <!-- <h1>{{ user.name }}'s Profile</h1> -->
      <h1>Lindsey's Profile</h1>
      <p>First Name: {{ user.firstName }}</p>
      <p>Last Name: {{ user.lasttName }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Address: {{ user.address }}</p>
      <p>isInternational: {{ user.international }}</p>
      <p>Payment Type: {{ user.payment }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
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

.profile-container {
  background-color: #4D1979;
  color: #fff;
  padding: 20px;
  max-width: 800px;
  max-height: 100%;
  margin: 0 auto;
}
</style>
