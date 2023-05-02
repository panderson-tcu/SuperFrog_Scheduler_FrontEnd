<!-- <script src="https://kit.fontawesome.com/03551b431b.js" crossorigin="anonymous"></script> -->

<template>
  <div id="wrapper">
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      "
    ></div>
    <div>
      <h1>Sign In</h1>
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit" @click.prevent="signIn">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signIn() {

       /* 
      // Replace this with your sign in logic, e.g. send API request to verify credentials
      if (this.username === "user" && this.password === "password") {
        // If credentials are valid, navigate to /search-student
        this.$router.push("/search-student");
      } else {
        // If credentials are invalid, show an error message
        alert("Invalid username or password");
      }

      */
      this.$router.push("/search-student");

    },
  },
};
</script>

<style>
#wrapper {
  background-color: #4d1979;
  color: white;
}
#header {
  display: flex;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
  width: 100%;
}
h3 {
  font-size: 25px;
  line-height: 30px;
}
#button-row {
  display: flex;
}
#button-row > div {
  justify-content: center;
  align-items: center;
  display: block flex;
  background-color: white;
  color: black;
  width: 200px;
  height: 100px;
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
}

.icon {
  font-size: 40px;
}

img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
