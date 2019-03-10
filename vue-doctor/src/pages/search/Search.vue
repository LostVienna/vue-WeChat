<template>
    <div class="search">
        <img src="./search.png" alt="" class="search_img">
        <input class="search_input" type="text" placeholder="疫苗事件, 你该知道的事">
        <img src="./remind.png" alt="" class="remind_img">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.search_img{
    width: 25px;
    height: 25px;
    position: relative;
    left: 18px;
    color: #39b8a2;
}
.search_input{
    width: 80%;
    height: 80%;
    background-color: #ebebeb;
    border: 1px solid #ebebeb;
    border-radius: 50px;
    font-size: 15px;
    padding-left: 40px;
    margin-left: -20px;
}
.remind_img {
    width: 30px;
    height: 30px;
}
</style>
