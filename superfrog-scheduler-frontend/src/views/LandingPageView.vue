<!-- <script src="https://kit.fontawesome.com/03551b431b.js" crossorigin="anonymous"></script> -->
<script setup>
    import AdminHeader from '../components/AdminHeader.vue';
</script>

<template>
    <div id="wrapper">
        <AdminHeader />

        <div id="header">

            <div id="text">
                <h1>SuperFrog Scheduler</h1>
                <h3>Add TCU Spirit to your Event! <br>
                    Request SuperFrog, TCU Cheerleaders, & Showgirls to your<br>
                    wedding, grad party, and more!
                </h3>
            </div>
            <img src="src/img/SuperFrogSITE.JPG" alt="">
        </div>
        
        <div id="button-row">
            <div id="price-button">
                <font-awesome-icon class="icon" icon="money-bill-1" />
                <div class="label">Price</div>
                
            </div>
            <div id="range-button">
                <font-awesome-icon class="icon" icon="location-dot" />
                <div class="label">Range</div>
            </div>
            <div id="request-button">
                    <router-link to="/select-date-time">
                    <font-awesome-icon class="icon" icon="calendar-days" />
                    <div class="label">Request</div>
                </router-link>
            </div>
            <div id="modify-request-button">
                <font-awesome-icon class="icon" icon="pencil" />
                <div class="label">Modify</div>
            </div>
        </div>
    </div>
</template>

<style>
/* #app{
  margin: 0;
  padding: 0;
} */
#wrapper {
    /* position: relative; */
    justify-content: center;
    align-items: center;
    background-color: #4D1979;
    color: white;
}
#header {
    display: flex;
}
h1 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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

</style>