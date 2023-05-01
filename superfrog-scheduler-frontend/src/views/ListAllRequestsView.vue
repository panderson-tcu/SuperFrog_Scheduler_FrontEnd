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
                        <th>Customer Name</th>
                        <th>Event Date</th>
                        <th>Event Title</th>
                        <th>Request Status</th>
                        <th>Assigned SuperFrog</th>
                        <th>Approve/Cancel</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lisa James</td>
                        <td>Aug 31, 2022</td>
                        <td>Wedding</td>
                        <td>Pending</td>
                        <td>
                            <font-awesome-icon class="table-icon" icon="xmark" />
                            None
                        </td>
                        <td>
                            <font-awesome-icon class="table-icon" icon="check" />
                            <font-awesome-icon class="table-icon" icon="xmark" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jim McMaster</td>
                        <td>Sep 10, 2022</td>
                        <td>Wedding</td>
                        <td>Approved</td>
                        <td>
                            <font-awesome-icon class="table-icon" icon="xmark" />
                            Jim Doe
                        </td>
                        <td>
                            <font-awesome-icon class="table-icon" icon="check" />
                            <font-awesome-icon class="table-icon" icon="xmark" />
                        </td>
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
    padding-top: 341px;
    padding-bottom: 341px;

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