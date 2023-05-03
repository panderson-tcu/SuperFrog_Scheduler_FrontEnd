<script setup>
    import AdminSideBar from '../components/AdminSideBar.vue';
    import AdminHeader from '../components/AdminHeader.vue';
    import axios from 'axios';
    import api from "@/apis/config.js";

</script>
<template>
    <div id="outer-wrapper">
        <AdminSideBar />
        <div class="right-col">
            <AdminHeader />
            <h1>View a Super Frog Appearance Request!</h1>
            <form
                @submit.prevent="searchAppearances"
                style="display: flex; margin-bottom: 20px"
            >
            <button type="submit">Load all requests first!</button>
        </form>

        <select id="select-by" v-model="selectedOption">
            <option value="c-name">Customer Name</option>
            <option value="eventTitle">Event Title</option>
            <option value="status">Event Status</option>
        </select>
        <form>
            <div class="form-group">
                <label for="search-value">Enter the value you want to search by:</label>
                <input type="text" id="" v-model="searchVal">
            </div>
            <button type="button" @click="searchByVal">Search</button>

        </form>

            <div id="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <!-- <th>Event Date</th> -->
                            <th>Event Title</th>
                            <th>Request Status</th>
                            <th>Assigned SuperFrog</th>
                        </tr>
                    </thead>
                    <tbody v-if="displayData">
                        <tr
                            v-for="(item, index) in displayData"
                            :key="index"
                            @click="showPopup(item)"
                        >
                            <td>{{ item.E_id }}</td>
                            <td>{{ item.C_firstName + " " + item.C_lastName }}</td>
                            <!-- <td>{{ item.date }}</td> -->
                            <td>{{item.eventTitle}}</td>
                            <td>{{item.status}}</td>
                            <td>
                                {{item.studentWorker}}
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
            selectedOption: "",
            searchVal: "",
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
            .get(`http://localhost:8080/api/v1/appearances/get_all`)
            .then((response) => {
                this.dataList = response.data.data;
                console.log(this.dataList);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        searchByVal() {
            // const body = {
            //     temp: this.searchVal
            // }
            console.log(this.selectedOption);
            console.log(this.searchVal);

            const temp = this.dataList.filter(item => item.status == this.searchVal);
            this.dataList = temp;
            // api
            // .post(`http://localhost:8080/api/v1/appearances/admin/search_requests`, body)
            // .then((response) => {
            //     this.dataList = response.data.data;
            //     console.log(response.data.data);
            // })
            // .catch((error) => {
            //     console.log(error);
            // })
            
        }
    }
})
</script>

<style>
#table-wrapper {
    background-color: #4D1979;
    margin: 5px;
    padding-top: 200px;
    padding-bottom: 200px;

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
    min-height: 100%;
    max-height: fit-content;
    background-color: #4D1979;
    color: white;
}
</style>