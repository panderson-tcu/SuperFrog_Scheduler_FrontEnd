<template>
    <div id="header-wrapper">
        <font-awesome-icon class="header-icon" icon ="bell"/>
        <RouterLink to="/view-profile">
            <font-awesome-icon class="header-icon" icon ="user"/>
        </RouterLink>

        <span id="admin-name">Ryan</span>
    </div>
</template>

<style>
#header-wrapper {
    background-color: white;
    color: black;
    justify-content: right;
    align-items: right;
}

#admin-name {
    font-size: 16px;
    margin-top: 5px;
    text-align: center;
    text-justify: center;
}
.header-icon {
    color: black;
    padding: 5px;
}

</style>