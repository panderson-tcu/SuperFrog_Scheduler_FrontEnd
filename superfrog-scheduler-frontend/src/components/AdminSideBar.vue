<template>
  <div
      style="
        height: 100%;
        width: 23%;
        color: white;
        background-color: #4D1985;
      "
    >
      <div id="sidebar-main">
        <div style="flex-direction: column">
          <img
            style="margin-top: 15%; height: 90px; width: 90px"
            src="../img/SuperFrog-TCU.png"
            alt=""
          />
          <div class="menu-label">Spirit Director</div>
        </div>

        <div id="sidebar-nav-button">
          <div id="sf-student-menu">

            <div class="dropdown" id="sf-menu-dropdown">
              <RouterLink to="/add-student" class="menu-label"
                >Add a New Student</RouterLink
              >
              <RouterLink to="/list-students" class="menu-label"
                >View All Students</RouterLink
              >
              <RouterLink to="/deactivate" class="menu-label"
                >Deactivate Student</RouterLink
              >
            </div>
          </div>
          <div id="requests-menu">
            <div class="dropdown" id="requests-menu-dropdown">
              <RouterLink to="/select-date-time" class="menu-label"
                >Add a New Request</RouterLink
              >
              <RouterLink to="/list-requests" class="menu-label"
                >View All Requests</RouterLink
              >
              <RouterLink to="/view-superfrog-student-account" class="menu-label"
                >View Student Account</RouterLink
              >
              <RouterLink to="/cancel-signup" class="menu-label"
                >Cancel Sign-Up</RouterLink
              >
              <RouterLink to="/edit-request" class="menu-label"
                >Edit Request Status</RouterLink
              >
              <RouterLink to="/payment-form" class="menu-label"
                >Honorarium</RouterLink
              >
              <RouterLink to="/performance-reports" class="menu-label"
                >Performance Reports</RouterLink
              >

            </div>
          </div>


        </div>
      </div>
    </div>
</template>

<style>
#sidebar-wrapper {
  position: fixed;
  left:0;
  display: block;
  color: white;
  background-color: #301934;
  height: 100%;
  /* width: 23%; */
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
}

#sidebar-main {
  text-align: center;
  margin-right:20px;
}

#sidebar-nav-button {
  text-align: left;
  margin-left: 20%;
  margin-top: 20%;
}
.sidebar-icon {
  margin: 5px;
  font-size: 30px;
}
#calendar > * {
  display: inline;
}
#reports > * {
  display: inline;
}

.menu-label {
  font-size: 15px;
  margin-bottom: 5px;
  /* font-weight: bold; */
  color: white;
}

.dropdown > .menu-label {
  display: block;
}
</style>