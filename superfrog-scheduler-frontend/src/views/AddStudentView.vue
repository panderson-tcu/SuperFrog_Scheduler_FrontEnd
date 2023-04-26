<script setup>
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

</style>