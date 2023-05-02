<script setup>
    import AdminHeader from '../components/AdminHeader.vue';
  import SFSSideBar from '../components/SFSSideBar.vue';
</script>

<template>
  <SFSSideBar style="position: fixed; height: 100vh; width: 25%; top: 0; left: 0;"></SFSSideBar>
  <div class="right-col">
      <AdminHeader />
      <div id="wrapper" style="height: 100%;">
      <div class="container" style="height: 100%;">
        <h1>Sign-Up For Appearances</h1>
        <ul>
          <li v-for="(appearance, index) in appearance" :key="index">
            <div class="event-title">{{ appearance.eventTitle }}</div>
            <div class="event-info">{{ appearance.C_firstName }} {{ appearance.C_lastName }}| {{ appearance.date }} | {{ appearance.eventAddress }}</div>
            <div class="event-signup">
              <div v-if="appearance.isSignedUp">
                <div class="superFrog-name">{{ appearance.superFrogFirstName }} {{ appearance.superFrogLastName }}</div>
                <div class="superFrog-contact">{{ appearance.superFrogPhone }} / {{ appearance.superFrogEmail }} / {{ appearance.SFS_Id }}</div>
                <button class="remove-btn" @click="removeSignup(index)">Cancel Sign-up</button>
              </div>
              <div v-else>
                <div class="signup-form">
                  <input type="text" placeholder="First Name" v-model="appearance.superFrogFirstName">
                  <input type="text" placeholder="Last Name" v-model="appearance.superFrogLastName">
                  <input type="text" placeholder="Phone" v-model="appearance.superFrogPhone">
                  <input type="email" placeholder="Email" v-model="appearance.superFrogEmail">
                  <input type="studentId" placeholder="StudentId" v-model="appearance.SFS_Id">
    
                  <button @click="appearance.SFS_Id ? toggleSignup(index) : null" :disabled="!appearance.SFS_Id">Sign Up</button>
                <div v-if="!appearance.SFS_Id" class="error-message">Please provide your Student ID</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
          appearance: [
                {
                    eventTitle: "TCU Event",
                    C_firstName: "John",
                    C_lastName: "Doe",
                    date: "2023-05-05",
                    eventAddress: "123 Main Street",
                    isSignedUp: false,
                    superFrogFirstName: "",
                    superFrogLastName: "",
                    superFrogPhone: "",
                    superFrogEmail: "",
                    SFS_Id: ""
                },
            ]
        };
    },
    methods: {
        toggleSignup(index) {
            this.appearance[index].isSignedUp = !this.appearance[index].isSignedUp;
        },
        removeSignup(index) {
            this.appearance[index].isSignedUp = false;
            this.appearance[index].superFrogFirstName = "";
            this.appearance[index].superFrogLastName = "";
            this.appearance[index].superFrogPhone = "";
            this.appearance[index].superFrogEmail = "";
            this.appearance[index].SFS_Id = "";
        }
    },
    components: { SFSSideBar }
}
  </script>

  
  <style>
.right-col {
  position: fixed;
  top: 0;
  right: 0;
  width: 68vw;
  height: 100%;
}

#wrapper {
  position: relative;
  min-height: 100vh; /* set the height to be at least the viewport height */
}

  .container {
    background-color: #4D1979;
    color: #fff;
    width: 85%;
    margin-top: 5%;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
  }
  
  .event-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
  }
  
  .event-info {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
  }
  
  .event-signup {
    display: flex;
    align-items: center;
    color: #fff;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  label {
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
  
  .remove-btn {
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #ccc;
    color: #444;
    cursor: pointer;
  }

  </style>