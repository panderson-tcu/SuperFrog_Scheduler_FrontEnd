<template>
  <div class="form-container">
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
        <div class="button-group">
          <button @click="cancelAppearance(index)">Cancel</button>
          <button @click="markComplete(index)">Mark as Complete</button>
        </div>
      </li>
    </ul>
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
    }
  },
  methods: {
    declineAppearance(index) {
      this.appearances[index].status = "declined";
    },
    acceptAppearance(index) {
      this.appearances[index].status = "accepted";
    },
    cancelAppearance(index) {
      this.appearances.splice(index, 1);
    },
    markComplete(index) {
      this.appearances[index].status = "complete";
    }
  }
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
  background-color: #eee;
}

.checkmark {
  margin-left: 10px;
}
</style>
