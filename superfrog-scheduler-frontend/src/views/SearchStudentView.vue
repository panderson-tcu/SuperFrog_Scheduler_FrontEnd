<template>
  <div id="wrapper">
    <AdminSideBar />

    <!--body-->
    <div style="margin-right: 30px; margin-bottom: 10%">
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

    <!--footer-->

    <div id="footer">
      <p>{{ university }} &copy; {{ year }} {{ title }}</p>
    </div>
  </div>
</template>

<script>
import AdminSideBar from "../components/AdminSideBar.vue";
import axios from "axios";

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
        axios
          .post("http://localhost:8080/api/v1/students/search_students", data)
          .then((response) => {
            this.apiResponse = response;
            this.dataList = this.apiResponse.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    sortData() {
      this.dataList.sort((a, b) => {
        return a[this.selectedOption].localeCompare(b[this.selectedOption])
      })
    }
  },

  components: { AdminSideBar },
};
</script>

<style>
#wrapper {
  background-color: #4d1979;
  color: white;
  width: auto;
}
#header {
  display: flex;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  height: 500px; /* Set a fixed height to make the list scrollable */
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
</style>
