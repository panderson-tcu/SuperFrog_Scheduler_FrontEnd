<!-- <script src="https://kit.fontawesome.com/03551b431b.js" crossorigin="anonymous"></script> -->

<template>
  <div id="wrapper">
    <div id="main-div">
      <!--header-->
      <div id="header">
        <div id="text">
          <h1>SuperFrog Scheduler</h1>
          <h3>
            Add TCU Spirit to your Event! <br />
            Request SuperFrog, TCU Cheerleaders, & Showgirls to your<br />
            wedding, grad party, and more!
          </h3>
        </div>
        <img src="../assets/img/SuperFrogSITE.JPG" alt="" />
      </div>

      <!--buttons-->
      <div id="button-row">
        <div id="price-button">
          <font-awesome-icon class="icon" icon="money-bill-1" />
          <div class="label">Price</div>
        </div>
        <div id="range-button">
          <font-awesome-icon class="icon" icon="location-dot" />
          <div class="label">Range</div>
        </div>
        <div id="request-button">
          <font-awesome-icon class="icon" icon="calendar-days" />
          <div class="label">Request</div>
        </div>
        <div id="modify-request-button">
          <font-awesome-icon class="icon" icon="pencil" />
          <div class="label">Modify</div>
        </div>
      </div>

      <div>
        <div>
          <p>Already have an account? <a href="sign-in" style="color: aliceblue;">Sign In</a></p>
          <p>Don't have an account yet? <a href="sign-up" style="color: aliceblue;">Sign Up</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4d1979;
  color: white;
}
#main-div {
  justify-content: center;
  align-items: center;
  text-align: center;
}
#header {
  display: flex;
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
