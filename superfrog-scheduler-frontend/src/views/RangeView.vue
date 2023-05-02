<template>
    <div id="range-wrapper">
        <p id="range-label">
            Any request must be within 100 miles of Amon G Carter Stadium
        </p>
        <div id="back-home">
            <RouterLink to="landing-page">
                <button type="button" class="btn">Back</button>
            </RouterLink>
        </div>
    </div>

    
        
</template>

<style>
#range-label {
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin: auto;
    width: fit-content;
}
#back-home {
    margin: 5px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: auto;
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
}

#range-wrapper {
    background-color: #4D1979;
}
</style>