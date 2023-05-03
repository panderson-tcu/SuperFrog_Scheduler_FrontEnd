<template>
  <div
      style="
        height: 100%;
        width: 23%;
        background-color: white;
        color: white;
        background-color: #4D1979;
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
            <font-awesome-icon class="sidebar-icon" icon ="address-book"/>
            <span class="menu-label">SuperFrog Students</span>
            <font-awesome-icon class="sidebar-icon" icon ="circle-chevron-up"/>
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
            <font-awesome-icon class="sidebar-icon" icon ="bars-progress"/>
            <span class="menu-label">Requests</span>
            <font-awesome-icon class="sidebar-icon" icon ="circle-chevron-up"/>
            <div class="dropdown" id="requests-menu-dropdown">
              <RouterLink to="/select-date-time" class="menu-label"
                >Add a New Request</RouterLink
              >
              <RouterLink to="/list-requests" class="menu-label"
                >View All Requests</RouterLink
              >
              <RouterLink to="/cancel-signup" class="menu-label"
                >Cancel Sign-Up</RouterLink
              >
              <RouterLink to="/edit-request" class="menu-label"
                >Edit Request Status</RouterLink
              >
            </div>
          </div>
          <div id="calendar">
            <font-awesome-icon class="sidebar-icon" icon ="calendar-days"/>
            <span class="menu-label">Calendar</span>
          </div>
          <div id="reports">
            <font-awesome-icon class="sidebar-icon" icon ="book"/>
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
  /* width: 23%; */
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
  font-size: 20px;
  /* font-weight: bold; */
  color: white;
}

.dropdown > .menu-label {
  display: block;
}
</style>