<template>
  <div id="wrapper">
    <AdminSideBar />

    <!--body-->
    <div style="margin-right: 30px; margin-bottom: 10%">
      <h1>View a Super Frog Student Account!</h1>

      <form
        @submit.prevent="searchStudents"
        style="display: flex; margin-bottom: 20px"
      >
        <button type="submit">Load all students first!</button>
      </form>

      <div class="list-container">
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
        <div>
          <h2>Click on each row to view individual students</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody v-if="dataList">
              <tr
                v-for="(item, index) in dataList"
                :key="index"
                @click="showPopup(item)"
              >
                <td>{{ item.id }}</td>

                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.address }}</td>
              </tr>
            </tbody>
          </table>

          <!--Pop up when clicking each row-->
          <div class="popup" v-if="popup">
            <div class="popup-content">
              <h3 style="margin-top:30px;">
                Apperance requests completed by
                {{ this.selectedData["firstName"] }}
                {{ this.selectedData["lastName"] }}
              </h3>

              <!--table for completed appearances-->
              <table v-if="completedAppearances">
                <thead>
                  <tr>
                    <th>Event ID</th>
                    <th>Customer First Name</th>
                    <th>Customer Last Name</th>
                    <th>Event Title</th>
                    <th>Beginning Time</th>
                    <th>Ending Time</th>
                    <th>Event Address</th>
                  </tr>
                </thead>
                <tbody v-if="completedAppearances">
                  <tr
                    v-for="(item, index) in completedAppearances"
                    :key="index"
                  >
                    <td>
                      {{ JSON.stringify(item["E_id"]) }}
                    </td>

                    <td>
                      {{ JSON.stringify(item["C_firstName"]) }}
                    </td>
                    <td>
                      {{ JSON.stringify(item["C_lastName"]) }}
                    </td>
                    <td>
                      {{ JSON.stringify(item["eventTitle"]) }}
                    </td>
                    <td>
                      {{ JSON.stringify(item["beginning_time"]) }}
                    </td>
                    <td>
                      {{ JSON.stringify(item["ending_time"]) }}
                    </td>
                    <td>
                      {{ JSON.stringify(item["eventAddress"]) }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button @click="hidePopup" style="margin-top: 100px;">Close</button>
            </div>
          </div>
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
import AdminSideBar from "../components/AdminSideBar.vue";
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      popup: false,
      responseAddress: "",
      completedAppearances: [],
      selectedData: {},

      dataList: [],
      university: "Texas Christian University",
      year: 2023,
      title: "SuperFrog Scheduler GOAT",
    };
  },
  methods: {
    searchStudents() {
      axios
        .get(`http://localhost:8080/api/v1/students/find_all`)
        .then((response) => {
          this.dataList = response.data.data;
          console.log(this.dataList);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sortData() {
      this.dataList.sort((a, b) => {
        return a[this.selectedOption].localeCompare(b[this.selectedOption]);
      });
    },
    showPopup(data) {
      this.popup = true;
      this.selectedData = data;
      let student_id = this.selectedData["id"];
      console.log(student_id);
      //fetch the account data
      axios
        .get(`http://localhost:8080/api/v1/students/${student_id}`)
        .then((response) => {
          this.completedAppearances = response.data.data["appearances"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hidePopup() {
      this.popup = false;
    },
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
  height: 800px; /* Set a fixed height to make the list scrollable */
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
