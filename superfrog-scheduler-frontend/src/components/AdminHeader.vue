<template>
    <div class="header" style="display: flex; justify-content: flex-end;">
    <div class="user-profile">
      <img src="../assets/img/SuperFrogLogo.png" alt="Profile Image" class="rounded"/>
      <span class="user-name">Hiep Nguyen</span>
    </div>
  </div>

  
</template>

<style>
.header {
  background-color: #f5f5f5;
  width: 100%;
  padding: 0.5rem 1rem;
}

.user-profile {
  display: flex;
  align-items: center;
  color: #000;
}

.user-profile img {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}

.user-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
}


</style>
