<script>
import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
export default {
  data() {
    return {
      studentLinks: [
        { name: 'viewmyrequest', title: 'View My Request' },
      ]
    };
  },
  components: { Navbar },
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
      <div>
        <img src="@/images/img.png" />
      </div>
      
      <h1>
        Requests
      </h1>
      <div v-for="link of studentLinks"  @click="push(link)">
        {{ link.title }}
      </div>

      <div class="backholder">
          <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
      </div>
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
    justify-content: center;


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

.backtext {
    font-size: 15px;
    font-weight: 200;
}
.backholder {
    border: 1.5px solid blue;
    border-radius: 15px;
    background-color: ghostwhite;
    display: grid;
    align-items: center;
    text-align: center;
    width: 170px;
    height: 50px;
    margin: 30px;
}

.backholder:hover {
    border: 1.5px solid orangered;
    background-color: blueviolet;   
    font-weight: 700;
}
</style>

