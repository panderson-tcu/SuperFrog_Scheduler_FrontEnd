<template>
  <div class="profile-container">
    <h1>{{ user.name }}'s Profile</h1>
    <p>First Name: {{ user.firstName }}</p>
    <p>Last Name: {{ user.lasttName }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
}
</script>

<style>
.profile-container {
  background-color: #4D1979;
  color: #fff;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
