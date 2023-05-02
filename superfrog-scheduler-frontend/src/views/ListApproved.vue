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
              <p>{{ appearance.C_firstName }}</p>
              <p>{{ appearance.C_lastName }}</p>
              <p>{{ appearance.LocalDateTime }}</p>
              <p>{{ appearance.eventAddress }}</p>
              <p> {{ appearance.status }}</p>
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
                    status: "pending"
                },
                {
                    eventTitle: "Private Event",
                    C_firstName: "John",
                    C_lastName: "Doe",
                    LocalDateTime: "2023-03-15",
                    eventAddress: "Arlington, TX",
                    status: "pending"
                },
                {
                    eventTitle: "Wedding",
                    C_firstName: "John",
                    C_lastName: "Smith",
                    LocalDateTime: "2023-05-18",
                    eventAddress: "Burlington, TX",
                    status: "pending"
                },
            ]
        };
    },
    methods: {
        cancelAppearance(index) {
            this.appearances.splice(index, 1);
        },
        markComplete(index) {
            this.appearances[index].status = "complete";
        }
    },
    components: { SFSSideBar }
}
</script>

<style>
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #4D1979;
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

.right-col {
  position: fixed;
  top: 0;
  right: 0;
  width: 66vw;
  height: 100%;
}
</style>
