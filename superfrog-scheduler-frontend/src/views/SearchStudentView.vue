<template>
  <div id="wrapper">
    <!--Admin side bar-->
    <AdminSideBar />
    <div id="main-col">
      <AdminHeader/>
      <!--body-->
      <div
        style="
          margin-right: 30px;
          margin-bottom: 10%;
          margin-top: 50px;
          margin-left: 30px;
        "
      >
        <h1>Find a Super Frog Student!</h1>

        <form
          @submit.prevent="searchStudents"
          style="display: flex; margin-bottom: 20px"
        >
          <div>
            <label for="firstName"> First Name : </label>
            <input type="text" id="firstName" v-model="firstName" />
          </div>

          <div>
            <label for="firstName"> Last Name : </label>
            <input type="text" id="lastname" v-model="lastName" />
          </div>
          <div>
            <label for="firstName"> Email : </label>
            <input type="text" id="email" v-model="email" />
          </div>
          <div>
            <label for="firstName"> Phone number : </label>
            <input type="text" id="phone" v-model="phoneNumber" />
          </div>
          <button type="submit">Search</button>
        </form>

        <div class="list-container">
          <h1>My List</h1>

          <!--Sort by-->
          <div>
            <label for="sort-by">Sorted By: </label>
            <select id="sort-by" v-model="selectedOption">
              <option value="lastName">Last Name</option>
              <option value="firstName">First Name</option>

              <option value="email">Email</option>
            </select>
            <button @click="sortData">Sort</button>
          </div>

          <!--Info Table-->

          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody v-if="dataList">
              <tr v-for="(item, index) in dataList" :key="index">
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
    <!--footer-->

    <div id="footer">
      <p>{{ university }} &copy; {{ year }} {{ title }}</p>
    </div>
  </div>
  
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import AdminSideBar from "../components/AdminSideBar.vue";
import api from "@/apis/config.js";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",

      responseAddress: "",

      dataList: [],
      university: "Texas Christian University",
      year: 2023,
      title: "SuperFrog Scheduler GOAT",
    };
  },
  methods: {
    searchStudents() {
      const data = {
        //conditional initialization
        ...(this.firstName && { firstName: this.firstName }),
        ...(this.lastName && { lastName: this.lastName }),
        ...(this.email && { email: this.email }),
        ...(this.phoneNumber && { phoneNumber: this.phoneNumber }),
      };

      if (Object.keys(data).length === 0) {
        alert("At least 1 field is required");
      } else {

        console.log(data);

        api
          .post("http://localhost:8080/api/v1/students/search_students", data)
          .then((response) => {
            this.apiResponse = response;
            this.dataList = this.apiResponse.data;
          })
          .catch((error) => {
            console.log(error);
          });



      }
    },

    sortData() {
      this.dataList.sort((a, b) => {
        return a[this.selectedOption].localeCompare(b[this.selectedOption]);
      });
    },
  },

  components: { AdminSideBar, AdminHeader },
};
</script>

<style>
#wrapper {
  color: white;
  width: auto;
  flex-direction: row;
  justify-content: flex-start;
}
#main-col {
  height: 100%;
  width: 100%;
  background-color: #4d1979;
  flex-direction: column;
  justify-content: flex-start;
}
h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
  width: 100%;
}
h3 {
  font-size: 25px;
  line-height: 30px;
}
#button-row {
  display: flex;
}
#button-row > div {
  justify-content: center;
  align-items: center;
  display: block flex;
  background-color: white;
  color: black;
  width: 200px;
  height: 100px;
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
}

.icon {
  font-size: 40px;
}

img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.list-container {
  height: 400px; /* Set a fixed height to make the list scrollable */
  overflow-y: scroll; /* Make the container scrollable */
}

td,
th {
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border: 1px solid white;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

#footer {
  background-color: #f0f0f0;
  color: #4d1979;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

tr:hover {
  background-color: rgba(0, 128, 255, 0.3);
}

tr:hover td {
  cursor: pointer;
}
</style>
