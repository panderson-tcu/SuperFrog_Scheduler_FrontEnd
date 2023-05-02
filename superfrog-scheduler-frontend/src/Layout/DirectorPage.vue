<script>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
export default {
  data() {
    return {
      studentLinks: [
        { name: 'newStudent', title: 'Add a New Student' },
        { name: 'allStudents', title: 'View All Students' },
      ],
      requestLinks: [
        { name: 'newRequest', title: 'Add a New Request' },
        { name: 'allRequests', title: 'View All Requests' },
        { name: 'modifyRequest', title: 'Modify Request'}, //just added
        { name: 'signupRequest', title: 'Sign Up Request'},
      ],
      reportLinks: [
        { name: 'addPaymentReport', title: 'Create a Payment Report' },
        { name: 'addPerformanceReport', title: 'Create a Performance Report' },
        { name: 'paymentReport', title: 'View Payment Reports' },
        { name: 'performanceReport', title: 'View Performance Reports' },
      ],
      restOfLinks: [
        { name: 'home', title: 'Back' },
      ],
    };
  },
  components: {
    Navbar
  },
  methods: {
    // simulate router-link's "to" functionality
    push(link) {
      this.$router.push({ name: link.name });
      // router.go(-1)
    },
  },
};
</script>

<template>
  <Navbar class="navigation"></Navbar>
  <div class="layout-member">
    <nav>
      <img src="@/images/img.png"/>
      <h1>
        Super Frog Students
      </h1>
      <div v-for="(link, index) of studentLinks" :key="index" @click="push(link)">
        {{ link.title }}
      </div>
      <h1>
        Requests
      </h1>
      <div v-for="(link, index) of requestLinks" :key="index" @click="push(link)">
        {{ link.title }}
      </div>
      <h1>
        Reports
      </h1>
      <div v-for="(link, index) of reportLinks" :key="index" @click="push(link)">
        {{ link.title }}
      </div>
      <h2 v-for="(link, index) of restOfLinks" :key="index" @click="push(link)">
        {{ link.title }}
      </h2>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
.layout-member {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #f3f3f3;
  nav {
    height: 100vh;
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    background: #4d1979;
    padding: 10px;
    div, h2 {
      margin-bottom: 20px;
      color: #fff;
      cursor: pointer;
    }
    h1 {
      margin-top: 15px;
      margin-bottom: 20px;
      color: #fff;
    }
    img {
      padding-left: 20%;
      width: 60%;
    }
  }
  main {
    padding: 20px;
    grid-column: span 9;
  }
}
</style>
