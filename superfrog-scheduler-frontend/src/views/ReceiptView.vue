<template>
    <div id="wrapper">
        <div id="header">
            <div id="text">
                <h1>SuperFrog Scheduler</h1>
                <h2>Thank You!</h2> 
                <h3>
                    Your Request has been submitted. <br>
                    An email of your request is sent to your email. <br>
                    Here is your request ID.
                </h3> <br>
                <h2 class="ID">SG1025602DGH</h2>   
            </div>
        </div>
        <div id="button-row">
            <RouterLink to="/" >
                <div id="home-button" class="change-page">
                    <font-awesome-icon class="icon" icon="house" />
                    <div class="label">Home</div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style>
#app{
  margin: 0;
  padding: 0;
}
#wrapper {
    position: relative;
    width: 100%;
    min-height: 100%;
    margin: 0;
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
h2 {
    justify-content: center;
    text-align: center; 
    font-size: 34px;
    line-height: 30px;
}
h3 {
    justify-content: center;
    text-align: center; 
    font-size: 20px;
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
    height: 40px;
    border-radius: 25px;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
}
#continue-button{
    justify-content: right;
}

.icon {
    font-size: 40px;
}

.change-page {
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100px;
    margin: 20px 100px;
    border-radius: 50%;
    padding: 10px 30px;
}

</style>