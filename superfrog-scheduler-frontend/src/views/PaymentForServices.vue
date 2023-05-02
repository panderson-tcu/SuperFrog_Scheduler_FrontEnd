<template>
  <div id="wrapper">
    <!--Admin side bar-->
    <AdminSideBar />
    <div id="main-col">
      <AdminHeader />
      <!--body-->
      <div
        style="
          margin-right: 30px;
          margin-bottom: 10%;
          margin-top: 50px;
          margin-left: 30px;
        "
      >
        <h1>TCU Honorarium - Payment for Services</h1>

        <form
          @submit.prevent="searchStudents"
          style="display: flex; margin-bottom: 20px"
        >
          <button type="submit">Load all students first!</button>
        </form>
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

        <!--input start date/ end date-->
        <div style="margin-top: 10px">
          <label style="margin-right: 5px" for="begin-date">Begin Date: </label>
          <input
            style="margin-right: 5px"
            type="text"
            id="begin-date"
            v-model="beginDate"
          />

          <label style="margin-right: 5px" for="end-date">End Date: </label>
          <input
            style="margin-right: 5px"
            type="text"
            id="end-date"
            v-model="endDate"
          />
        </div>

        <div style="margin-top: 10px">
          <button @click="showPopup">GENERATE TCU HONORARIUM</button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <!-- new column for checkboxes -->
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <!--table body-->
            <tbody v-if="displayedData">
              <tr v-for="(item, index) in displayedData" :key="index">
                <td>
                  <input
                    type="checkbox"
                    v-model="requestIds"
                    :value="item.id"
                  />
                </td>
                <td>{{ item.id }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.address }}</td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <button :disabled="currentPage === 1" @click="prevPage">
              Prev
            </button>
            <button :disabled="currentPage === totalPages" @click="nextPage">
              Next
            </button>
          </div>

          <div style="height: 100px"></div>

          <!--pop up-->
          <div class="popup" v-if="popup" style="">
            <div style="height: 80px"></div>

            <div
              style="
                position: fixed;
                top: 0;
                right: 0;
                margin-right: 20px;
                margin-top: 10px;
              "
            >
              <button @click="hidePopup">X</button>
            </div>

            <h2 style="font-weight: bold; margin-left: 30px; margin-top: 30px; margin-bottom: 30px;"> TCU Honorarium - Payment for Services</h2>
            <table style="width: 80%; margin-left: 30px; margin-bottom: 30px; margin: 0 auto;">
                <!--table head-->
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Amount</th>
                    <th>Begin</th>
                    <th>End</th>
                  </tr>
                </thead>
                <!--table body-->
                <tbody>
                  <tr v-for="(item, index) in honorarium" :key="index">
                    <td>{{ item.studentId }}</td>
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.amount }} USD</td>
                    <td>{{ beginDate }}</td>
                    <td>{{ endDate }}</td>
                  </tr>
                </tbody>
              </table>









          </div>

          <!--end of pop up-->
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
import axios from "axios";

export default {
  data() {
    return {
      beginDate: "",
      endDate: "",
      requestIds: [],
      paymentPeriod: {
        beginDate: this.beginDate,
        endDate: this.endDate,
      },

      honorarium: [],

      popup: false,

      selectedData: {},
      dataList: [],
      currentPage: 1,
      itemsPerPage: 4,
      university: "Texas Christian University",
      year: 2023,
      title: "SuperFrog Scheduler GOAT",
    };
  },
  computed: {
    displayedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.dataList.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.dataList.length / this.itemsPerPage);
    },
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
        console.log(this.requestIds);
        console.log(this.beginDate);
        console.log(this.endDate);
        return a[this.selectedOption].localeCompare(b[this.selectedOption]);
      });
    },
    showPopup(data) {
      this.popup = true;
      this.selectedData = data;

      console.log(this.requestIds);
      console.log(this.beginDate);
      console.log(this.endDate);
      //fetch the account data
      axios
        .post(`http://localhost:8080/api/v1/payment-forms`, {
          requestIds: this.requestIds,
          paymentPeriod: this.paymentPeriod,
        })
        .then((response) => {
          this.honorarium = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hidePopup() {
      console.log("hide pop-up clicked");
      this.popup = false;
    },
    prevPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
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
  border: 1px solid red;
}
table {
  width: 100%;
  height: 20px;
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
.popup {
  position: fixed;
  color: #4d1979;
  background-color: rgba(
    255,
    255,
    255,
    0.95
  ); /* 80% opacity white background */
  width: 98%;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  height: 500px;
  overflow: auto;
}
.popup-content {
  /* styles for the popup content */
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-btn {
  /* styles for the close button */
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
}
</style>
