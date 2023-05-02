<script setup>
  import AdminHeader from '../components/AdminHeader.vue';
  import SFSSideBar from '../components/SFSSideBar.vue';
</script>

<template>
  <SFSSideBar style="position: fixed; height: 100vh; width: 25%; top: 0; left: 0;"></SFSSideBar>
    <div class="right-col">
        <AdminHeader />
        <div id="wrapper" style="height: 100%;">
          <div class="form-container" style="height: 100%;">
          <h1>Approved Appearances</h1>
          <ul>
            <li v-for="(appearance, index) in appearances" :key="index">
              <h2>
                {{ appearance.eventTitle }}
                <span v-if="appearance.status === 'complete'" class="checkmark">&#10004;</span>
              </h2>
              <div class="event-info">{{ appearance.C_firstName }} {{ appearance.C_lastName }} | {{ appearance.LocalDateTime }} | {{ appearance.eventAddress }} | {{ appearance.status }}</div>
              <!-- <p>{{ appearance.LocalDateTime }}</p> -->
              <!-- <p>{{ appearance.eventAddress }}</p> -->
              <!-- <p> {{ appearance.status }}</p> -->
              <!-- <p> {{ SuperFrogStudent.complete }}</p> -->
              <div class="button-group">
                <button @click="cancelAppearance(index)">Cancel</button>
                <button @click="markComplete(index)">Mark as Complete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            appearances: [
                {
                    eventTitle: "TCU Event",
                    C_firstName: "John",
                    C_lastName: "Smith",
                    LocalDateTime: "2023-06-15",
                    eventAddress: "Fort Worth, TX",
                    status: "Pending"
                },
                {
                    eventTitle: "Private Event",
                    C_firstName: "John",
                    C_lastName: "Doe",
                    LocalDateTime: "2023-03-15",
                    eventAddress: "Arlington, TX",
                    status: "Pending"
                },
                {
                    eventTitle: "Wedding",
                    C_firstName: "John",
                    C_lastName: "Smith",
                    LocalDateTime: "2023-05-18",
                    eventAddress: "Burlington, TX",
                    status: "Pending"
                },
            ]
        };
    },
    methods: {
        cancelAppearance(index) {
            this.appearances.splice(index, 1);
        },
        markComplete(index) {
            this.appearances[index].status = "Complete";
        }
    },
    components: { SFSSideBar }
}
</script>

<style>
.right-col {
  position: fixed;
  top: 0;
  right: 0;
  width: 68vw;
  height: 100%;
}

#wrapper {
  position: relative;
  min-height: 100vh; /* set the height to be at least the viewport height */
}

.form-container {
    background-color: #4D1979;
    color: #fff;
    width: 85%;
    margin-top: 5%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
  }

  .event-info {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #fff;
  }

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ccc;
}

.checkmark {
  margin-left: 10px;
}

</style>
