<script setup>
    import AdminSideBar from '../components/AdminSideBar.vue';
    import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
    <AdminSideBar />
    <div class="right-col">
        <AdminHeader />
        <div class="container">
            <h1>Cancel Student Sign-Up of an Appearance Request</h1>
            <form>
            <div class="form-group">
                <label for="first-name">Enter the ID of the appearance request you want to cancel the sing-up for:</label>
                <input type="text" id="first-name" v-model="firstName">
            </div>
    
            <RouterLink to="/cancel-request">
                <button type="submit" class="btn">Cancel Sign-Up</button>
            </RouterLink>
            </form>
            
      </div>

    </div>
    </template>
    
    <script>
  
    export default {
      data() {
        return {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          isInternational: false,
          paymentPreference: 'Mail Check'
        }
      }
    }
    </script>
    
    <style>
    .container {
        width: 100%;
      /* max-width: 800px; */
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