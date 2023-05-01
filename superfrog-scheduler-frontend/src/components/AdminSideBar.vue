<template>
  <div
      style="
        height: 100%;
        width: 20%;
        background-color: white;
        color: white;
        background-color: #301934;
      "
    >
      <div id="sidebar-main">
        <div style="flex-direction: column">
          <img
            style="margin-top: 15%; height: 90px; width: 90px"
            src="../assets/img/SuperFrogLogo.png"
            alt=""
          />
          <div>Super Frog Student</div>
        </div>

        <div id="sidebar-nav-button">
          <div id="sf-student-menu">
            <span class="menu-label">SuperFrog Students</span>
            <div class="dropdown" id="sf-menu-dropdown">
              <RouterLink to="/add-student" class="menu-label"
                >Add a New Student</RouterLink
              >
              <RouterLink to="/list-students" class="menu-label"
                >View All Students</RouterLink
              >
            </div>
          </div>
          <div id="requests-menu">
            <span class="menu-label">Requests</span>
            <div class="dropdown" id="requests-menu-dropdown">
              <RouterLink to="/select-date-time" class="menu-label"
                >Add a New Request</RouterLink
              >
              <RouterLink to="/list-requests" class="menu-label"
                >View All Requests</RouterLink
              >
            </div>
          </div>
          <div id="calendar">
            <span class="menu-label">Calendar</span>
          </div>
          <div id="reports">
            <span class="menu-label">Reports</span>
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
  width: 15%;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
}

#sidebar-main {
  text-align: center;
}

#sidebar-nav-button {
  text-align: left;
  margin-left: 20%;
  margin-top: 20%;
}
.icon {
  margin: 5px;
  font-size: px;
}
#calendar > * {
  display: inline;
}
#reports > * {
  display: inline;
}

.menu-label {
  font-size: 15px;
  font-weight: bold;
  color: white;
}

.dropdown > .menu-label {
  display: block;
}
<<<<<<< HEAD
</style>
=======



</style>
>>>>>>> main
