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
          <li v-for="(event, index) in events" :key="index">
            <div class="event-title">{{ event.eventTitle }}</div>
            <div class="event-date">{{ event.date }}</div>
            <div class="event-location">{{ event.eventAddress }}</div>
            <div class="event-signup">
              <div v-if="event.isSignedUp">
                <div class="superFrog-name">{{ event.superFrogFirstName }} {{ event.superFrogLastName }}</div>
                <div class="superFrog-contact">{{ event.superFrogPhone }} / {{ event.superFrogEmail }} / {{ event.SFS_Id }}</div>
                <button class="remove-btn" @click="removeSignup(index)">Cancel Sign-up</button>
              </div>
              <div v-else>
                <div class="signup-form">
                  <input type="text" placeholder="First Name" v-model="event.superFrogFirstName">
                  <input type="text" placeholder="Last Name" v-model="event.superFrogLastName">
                  <input type="text" placeholder="Phone" v-model="event.superFrogPhone">
                  <input type="email" placeholder="Email" v-model="event.superFrogEmail">
                  <input type="studentId" placeholder="StudentId" v-model="event.SFS_Id">
    
                  <button @click="event.SFS_Id ? toggleSignup(index) : null" :disabled="!event.SFS_Id">Sign Up</button>
                <div v-if="!event.SFS_Id" class="error-message">Please provide your Student ID</div>
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
            events: [
                {
                    eventTitle: "Wedding",
                    date: "2023-05-05",
                    eventAddress: "123 Main Street",
                    isSignedUp: false,
                    superFrogFirstName: "",
                    superFrogLastName: "",
                    superFrogPhone: "",
                    superFrogEmail: "",
                    SFS_Id: ""
                },
                {
                    eventTitle: "Public Event",
                    date: "2023-07-19",
                    eventAddress: "12 Convention Center Drive",
                    isSignedUp: true,
                    superFrogFirstName: "Annalise",
                    superFrogLastName: "Gadbois",
                    superFrogPhone: "408-656-4429",
                    superFrogEmail: "annalise.gadbois@example.com",
                    SFS_Id: "12345456"
                },
                {
                    eventTitle: "Graduation Party",
                    date: "2023-05-15",
                    eventAddress: "567 Berry Street",
                    isSignedUp: false,
                    superFrogFirstName: "",
                    superFrogLastName: "",
                    superFrogPhone: "",
                    superFrogEmail: "",
                    SFS_Id: ""
                }
            ]
        };
    },
    methods: {
        toggleSignup(index) {
            this.events[index].isSignedUp = !this.events[index].isSignedUp;
        },
        removeSignup(index) {
            this.events[index].isSignedUp = false;
            this.events[index].superFrogFirstName = "";
            this.events[index].superFrogLastName = "";
            this.events[index].superFrogPhone = "";
            this.events[index].superFrogEmail = "";
            this.events[index].SFS_Id = "";
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
  width: 66vw;
  height: 100%;
}

#wrapper {
  position: relative;
  min-height: 100vh; /* set the height to be at least the viewport height */
}

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #4D1979;
    color: #fff;
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
  
  .event-date {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
  }

  .event-location {
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

  button:hover {
  background-color: #ccc;
}

  </style>