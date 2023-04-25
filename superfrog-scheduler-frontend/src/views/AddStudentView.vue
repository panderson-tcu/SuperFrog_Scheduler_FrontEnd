<script setup>
    import AdminSideBar from '../components/AdminSideBar.vue';
    import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
    <div id="outer-wrapper">
        <AdminSideBar />
        <AdminHeader />
        <h1>Add Student View</h1>
        <h2>This is an admin page</h2>
    </div>
    
</template>

<style>
AdminSideBar {
    max-width: 30vw;;
    /* width-max: 30vw; */
}
#outer-wrapper {
    background-color: lightgrey;
}

</style>