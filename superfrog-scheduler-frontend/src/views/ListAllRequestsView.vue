<script setup>
    import AdminSideBar from '../components/AdminSideBar.vue';
    import AdminHeader from '../components/AdminHeader.vue';
import axios from 'axios';

</script>
<template>
    <div id="outer-wrapper">
        <AdminSideBar />
        <div class="right-col">
            <AdminHeader />
            <div id="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Event Date</th>
                            <th>Event Title</th>
                            <th>Request Status</th>
                            <th>Assigned SuperFrog</th>
                            <th>Approve/Cancel</th>
                        </tr>
                    </thead>
                    <tbody v-if="displayData">
                        <tr
                            v-for="(item, index) in displayData"
                            :key="index"
                            @click="showPopup(item)"
                        >
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{item.eventType}}</td>
                            <td>{{item.status}}</td>
                            <td>
                                <font-awesome-icon class="table-icon" icon="xmark" />
                                {{item.studentWorker}}
                            </td>
                            <td>
                                <font-awesome-icon class="table-icon" icon="check" />
                                <font-awesome-icon class="table-icon" icon="xmark" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </div>
    </div>
</template>

<script>
export default (await import('vue')).defineComponent({
    data() {
        return {
            dataList:[],
        }
    },
    computed: {
        displayData(){
            return this.dataList;
        }
    },
    methods: {
        searchAppearances() {
            axios
            .get(`http://localhost:8080/api/v1/requests/find_all`)
            .then((response) => {
                this.dataList = response.data.data;
                console.log(this.dataList);
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
})
</script>

<style>
#table-wrapper {
    background-color: #4D1979;
    margin: 5px;
    padding-top: 341px;
    padding-bottom: 341px;

}

table {
    margin: auto;

}

td, th {
  border: 1px solid red;
  text-align: left;
  padding: 8px;
  color: white;
  /* background-color: white; */
}

td {
    padding: 10px;
    margin: auto;
}

/* th {
    background-color: rgb(38, 145, 216);
} */
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