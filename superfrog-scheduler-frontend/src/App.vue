<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">LandingPage</RouterLink>
        <RouterLink to="/add-student">AddStudent</RouterLink>
        <RouterLink to="/list-students">ListStudents</RouterLink>
        <RouterLink to="/list-requests">ListRequests</RouterLink>
        <RouterLink to="/select-date-time">SelectDateTime</RouterLink>
        <RouterLink to="/complete-form">CompleteForm</RouterLink>
        <RouterLink to="/policy-agreement">PolicyAgreement</RouterLink>
        <RouterLink to="/review-submit">ReviewSubmit</RouterLink>
        <RouterLink to="/receipt">Receipt</RouterLink>

      </nav>
    </div>
  </header> -->
  <!-- <font-awesome-icon icon="phone" /> -->

  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
div{
  margin: 0;
  padding: 0;
}
</style>
