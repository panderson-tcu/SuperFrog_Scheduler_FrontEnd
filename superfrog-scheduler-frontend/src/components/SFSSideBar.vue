<template>
    <div id="sidebar-wrapper">
        <img src="src/img/SuperFrog-TCU.png" alt="">
        <div id="sf-student-menu">
            <font-awesome-icon class="icon" icon ="address-book"/>
            <span class="menu-label">SuperFrog Students</span>
            <font-awesome-icon class="icon" icon ="circle-chevron-up"/>
            <div class="dropdown" id="sf-menu-dropdown">
                <RouterLink to="/student-profile" class="menu-label">View Student Profile</RouterLink>
            </div>
        </div>
       <div id="requests-menu">
            <font-awesome-icon class="icon" icon ="bars-progress"/>
            <span class="menu-label">Requests</span>
            <font-awesome-icon class="icon" icon ="circle-chevron-up"/>
            <div class="dropdown" id="requests-menu-dropdown">
                <RouterLink to="/list-all-appearances" class="menu-label">View Approved Requests</RouterLink>
                <RouterLink to="/sign-up" class="menu-label">Sign-up For Appearance</RouterLink>
            </div>
       </div>
       <div id="calendar">
            <font-awesome-icon class="icon" icon ="calendar-days"/>
            <span class="menu-label">Calendar</span>
       </div>
       <div id="reports">
            <font-awesome-icon class="icon" icon ="book"/>
            <span class="menu-label">Reports</span>
       </div>
    </div>
</template>

<style>
#sidebar-wrapper {
  flex-direction: column;
  color: white;
  background-color: #4D1979;
  min-height: 100vh; /* Set a minimum height of the viewport */
}

.icon {
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
    color: white;
}

.dropdown > .menu-label {
    display: block;
}
img {
  display: block;
  margin: 20px auto;
}


</style>