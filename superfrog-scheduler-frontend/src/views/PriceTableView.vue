<template>
    <div id="price-wrapper">
        <div id="content-wrapper">
            <p class="type-of-appearance">GENERAL APPEARANCES - Rates Per appearance</p>

<table id="price-table">
    <tbody>
        <tr>
            <td>*30 minute SuperFrog appearance Flat Fee</td>
            <td>$75</td>
        </tr>
        <tr>
            <td class="header">TCU On Campus</td>
            <td></td>
        </tr>
        <tr>
            <td>SuperFrog</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>Small Group of 2-3 Spirit Squad Members</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>Large Group of 4-6 Spirit Squad Members</td>
            <td>$150</td>
        </tr>
        <tr>
            <td class="header">Public Schools or Non-Profit</td>
            <td></td>
        </tr>
        <tr>
            <td>SuperFrog</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>Small Group of 2-3 Spirit Squad Members</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>Large Group of 4-6 Spirit Squad Members</td>
            <td>$150</td>
        </tr>
        <tr>
            <td class="header">Private or Residential</td>
            <td></td>
        </tr>
        <tr>
            <td>SuperFrog</td>
            <td>$175</td>
        </tr>
        <tr>
            <td>Small Group of 2-3 Spirit Squad Members</td>
            <td>$175</td>
        </tr>
        <tr>
            <td>Large Group of 4-6 Spirit Squad Members</td>
            <td>$200</td>
        </tr>
    </tbody>
</table>

<p class="type-of-appearance">DAY BEFORE GAME DAY - Rates Per appearance</p>

<table id="price-table">
    <tbody>
        <tr>
            <td>*30 minute SuperFrog appearance Flat Fee</td>
            <td>$150</td>
        </tr>
        <tr>
            <td class="header">TCU On Campus</td>
            <td></td>
        </tr>
        <tr>
            <td>SuperFrog</td>
            <td>$200</td>
        </tr>
        <tr>
            <td>Small Group of 2-3 Spirit Squad Members</td>
            <td>$150</td>
        </tr>
        <tr>
            <td>Large Group of 4-6 Spirit Squad Members</td>
            <td>$200</td>
        </tr>
        <tr>
            <td class="header">Public Schools or Non-Profit</td>
            <td></td>
        </tr>
        <tr>
            <td>SuperFrog</td>
            <td>$200</td>
        </tr>
        <tr>
            <td>Small Group of 2-3 Spirit Squad Members</td>
            <td>$150</td>
        </tr>
        <tr>
            <td>Large Group of 4-6 Spirit Squad Members</td>
            <td>$200</td>
        </tr>
        <tr>
            <td class="header">Private or Residential</td>
            <td></td>
        </tr>
        <tr>
            <td>SuperFrog</td>
            <td>$250</td>
        </tr>
        <tr>
            <td>Small Group of 2-3 Spirit Squad Members</td>
            <td>$200</td>
        </tr>
        <tr>
            <td>Large Group of 4-6 Spirit Squad Members</td>
            <td>$250</td>
        </tr>
    </tbody>
</table>
<p class="type-of-appearance">
    ON GAME DAYS - Appearances will not be accepted. <br> We appreciate your understanding and apologize for any inconvenience.
</p>
        </div>

        <div id="back-home">
            <RouterLink to="landing-page">
                <button type="button" class="btn">Back</button>
            </RouterLink>
        </div>
        
    </div>

</template>

<style>
#back-home {
    margin: 5px;
    justify-content: center;
    align-items: center;
}
.btn {
    display: block;
    padding: 10px 20px;
    background-color: #fff;
    color: #4D1979;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin: auto;
    width: fit-content;
}
table {
    margin: auto;
}
#price-wrapper {
    display: block flex;
    background-color: #4D1979;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: fit-content;
    padding-top: 5vh;
    padding-bottom: 5vh;

}

#content-wrapper {
    background-color: white;
    margin: auto;
    width: fit-content;
    padding: 20px;
}

#price-table {
    background-color: #eee;
    color: black;
    margin: auto;
}
td {
    border: 1px solid #dddddd;
}

.type-of-appearance {
    position: block;
    justify-self: center;
    margin: 10px 0px;
    color: black;
    font-weight: bold;
}

.header {
    font-weight: bold;
}

</style>