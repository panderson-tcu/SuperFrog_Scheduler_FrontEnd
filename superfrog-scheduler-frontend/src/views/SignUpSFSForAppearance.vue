<template>
    <!-- <admin-header /> -->
    <div class="container">
      <h1>Sign-Up For Appearances</h1>
      <ul>
        <li v-for="(event, index) in events" :key="index">
          <div class="event-title">{{ event.eventName }}</div>
          <div class="event-date">{{ event.date }}</div>
          <div class="event-location">{{ event.location }}</div>
          <div class="event-signup">
            <div v-if="event.isSignedUp">
              <div class="superFrog-name">{{ event.superFrogFirstName }} {{ event.superFrogLastName }}</div>
              <div class="superFrog-contact">{{ event.superFrogPhone }} / {{ event.superFrogEmail }} / {{ event.SFS_Id }}</div>
              <button class="remove-btn" @click="removeSignup(index)">Remove</button>
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
  </template>
  
  <script>
    import AdminHeader from '../components/AdminSideBar.vue';
  export default {
    data() {
      return {
        events: [
          {
            eventName: 'Wedding',
            date: '2023-05-05',
            location: '123 Main Street',
            isSignedUp: false,
            superFrogFirstName: '',
            superFrogLastName: '',
            superFrogPhone: '',
            superFrogEmail: '',
            SFS_Id: ''
          },
          {
            eventName: 'Public Event',
            date: '2023-07-19',
            location: '12 Convention Center Drive',
            isSignedUp: true,
            superFrogFirstName: 'Annalise',
            superFrogLastName: 'Gadbois',
            superFrogPhone: '408-656-4429',
            superFrogEmail: 'annalise.gadbois@example.com',
            SFS_Id: '12345456'
          },
          {
            eventName: 'Graduation Party',
            date: '2023-05-15',
            location: '567 Berry Street',
            isSignedUp: false,
            superFrogFirstName: '',
            superFrogLastName: '',
            superFrogPhone: '',
            superFrogEmail: '',
            SFS_Id: ''
          }
        ]
      }
    },
    methods: {
      toggleSignup(index) {
        this.events[index].isSignedUp = !this.events[index].isSignedUp;
      },
      removeSignup(index) {
        this.events[index].isSignedUp = false;
        this.events[index].superFrogFirstName = '';
        this.events[index].superFrogLastName = '';
        this.events[index].superFrogPhone = '';
        this.events[index].superFrogEmail = '';
        this.events[index].SFS_Id = '';
      }
    }
  }
  </script>

  
  <style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #4D1979;
    color: #444;
  }
  
  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
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
  </style>