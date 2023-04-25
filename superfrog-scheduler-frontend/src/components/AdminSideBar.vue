<template>
    <div id="sidebar-wrapper">
        <img src="./img/SuperFrogLogo" alt="">
        <div id="sf-student-menu">
            <font-awesome-icon class="icon" icon ="address-book"/>
            <span class="menu-label">SuperFrog Students</span>
            <font-awesome-icon class="icon" icon ="circle-chevron-up"/>
            <div class="dropdown" id="sf-menu-dropdown">
                <RouterLink to="/add-student" class="menu-label">Add a New Student</RouterLink>
                <RouterLink to="/list-students" class="menu-label">View All Students</RouterLink>
            </div>
        </div>
       <div id="requests-menu">
            <font-awesome-icon class="icon" icon ="bars-progress"/>
            <span class="menu-label">Requests</span>
            <font-awesome-icon class="icon" icon ="circle-chevron-up"/>
            <div class="dropdown" id="requests-menu-dropdown">
                <RouterLink to="/select-date-time" class="menu-label">Add a New Request</RouterLink>
                <RouterLink to="/list-requests" class="menu-label">View All Requests</RouterLink>
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
    display: block;
    color: white;
    background-color: #4D1979;
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

</style>