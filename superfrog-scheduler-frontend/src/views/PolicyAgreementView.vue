<template>
    <div id="wrapper">
        <div id="header">
            <div id="text">
                <h1>SuperFrog Scheduler</h1><br>
                <h2>TCU Spirit Team Terms and Conditions</h2> <br>
                <h3>
                    <ul>
                        <li>Submission of a request does not guartantee the event will be accepted.</li>
                        <li>TCU athletics take priority over all other appearances.</li>
                        <li>TCU Spirit has until 5 days prior the date of th event to accept or decline a request.</li>
                        <li>Once approved via email, payment must be submitted a minimum of 24 hours prior to the event or it will be canceled.</li>
                        <li>Even after an event is conformed, it is still subject to immediate cancellation due to a TCU Althetic Department fucntion, weather or an emergencey </li>
                        <li>The SuperFrog suit is NOT rented out to the third party.</li>
                    </ul> <br>
                </h3>
                 <h3 id="check-box">I agree to the terms & conitions of a TCU Spirit appearances</h3>  
            </div>
        </div>

        <div id="button-row">
            <RouterLink to="/complete-form" >
                <div id="back-button" class="change-page">
                    <font-awesome-icon class="icon" icon="arrow-left-long" />
                    <div class="label">Back</div>
                </div>
            </RouterLink>

            <RouterLink to="/review-submit">
                <div id="continue-button" class="change-page">
                    <font-awesome-icon class="icon" icon="arrow-right-long" />
                    <div class="label">Continue</div>
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
    text-align: center; 
    font-size: 34px;
    line-height: 30px;
}
h3 {
    font-size: 20px;
    line-height: 30px;
}
li{
    margin-right: 10%;
    margin-left: 10%;
}
#check-box {
    text-align: center;
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
    width: 200px;
    margin: 20px 100px;
    border-radius: 20px;
    padding: 10px 30px;
}
.icon {
    color: black;
}
.label {
    text-decoration: none !important;
    color: black;
}

</style>