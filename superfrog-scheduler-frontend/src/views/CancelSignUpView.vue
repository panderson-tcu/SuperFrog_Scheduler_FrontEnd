<script setup>
import AdminSideBar from "../components/AdminSideBar.vue";
import AdminHeader from "../components/AdminHeader.vue";
import api from "@/apis/config.js";
</script>
<template>
  <div id="wrapper">
    <AdminSideBar />
    <div id="main-col">
      <AdminHeader />
      <div class="container">
        <h1>Cancel Student Sign-Up of an Appearance Request</h1>
        <form>
          <div class="form-group">
            <label for="first-name"
              >Enter the ID of the student you want to cancel the student
              sign-up requests for:</label
            >
            <input type="text" id="first-name" v-model="studentId" />
          </div>

          <button type="button" @click="cancelSignup">Cancel Sign-Up</button>
        </form>
      </div>
    </div>
    <div id="footer">
      <p>{{ university }} &copy; {{ year }} {{ title }}</p>
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
      paymentPreference: "Mail Check",
      university: "Texas Christian University",
      year: 2023,
      title: "SuperFrog Scheduler GOAT",
    };
  },

  methods: {
    cancelSignup() {
      console.log(this.eventId);
      const body = {
        appearances: null,
      };
      console.log(body);
      api
        .put(
          `http://localhost:8080/api/v1/students/admin/cancel/${this.studentId}`,
          body
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 20px;
  background-color: #4d1979;
  color: #444;
}

h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
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

#sidebar-wrapper {
  max-width: 30vw;
  height: 100vh;
  /* background-color: #4D1979;*/
}
#outer-wrapper {
  background-color: lightgrey;
}
.icon {
  color: white;
}

/* #header-wrapper {
        height: 40px;
        position: absolute;
        top: 0;
        right: 0;
        width: 66vw;
    } */

.right-col {
  position: absolute;
  top: 0;
  right: 0;
  width: 66vw;
}
</style>

<!-- <script setup>
    import AdminSideBar from '../components/AdminSideBar.vue';
    import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
    <div id="outer-wrapper">
        <AdminSideBar id="sidebar-wrapper"/>
        <AdminHeader id="header-wrapper"/>
        <h1>Add Student View</h1>
        <h2>This is an admin page</h2>
    </div>
    
</template>

<style>
#sidebar-wrapper {
    max-width: 30vw;
    height: 100vh;
    /* background-color: #4D1979;*/
}
#outer-wrapper {
    background-color: lightgrey;
}
.icon {
    color: white;
}

#header-wrapper {
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    width: 66vw;
}

</style> -->
