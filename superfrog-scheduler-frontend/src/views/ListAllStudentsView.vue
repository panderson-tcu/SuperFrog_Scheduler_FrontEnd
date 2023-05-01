<script setup>
    import AdminSideBar from '../components/AdminSideBar.vue';
    import AdminHeader from '../components/AdminHeader.vue';
</script>
<template>
    <div id="outer-wrapper">
        <AdminSideBar />
        <div class="right-col">
            <AdminHeader />
            <div id="table-wrapper">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last</th>
                        <th>Email</th>
                        <th>Account Status</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john.doe@tcu.edu</td>
                        <td>Valid</td>
                        <td>Action</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tom</td>
                        <td>Green</td>
                        <td>tom.green@tcu.edu</td>
                        <td>Valid</td>
                        <td>Action</td>
                    </tr>
                </table>
            </div>
            
        </div>
    </div>
    
</template>

<style>
#table-wrapper {
    background-color: white;
    margin: 5px;
}

table {
    margin: auto;

}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

td {
    padding: 10px;
    margin: auto;
}

th {
    background-color: rgb(38, 145, 216);
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

.right-col {
    /* height: 40px; */
    position: absolute;
    top: 0;
    right: 0;
    width: 66vw;
}
</style>