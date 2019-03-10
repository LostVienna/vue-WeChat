<template>
    <div class="consultation">
        <section class="head_goback" v-if="goBack" >
            <span class="return" @click="$router.go(-1)">返回</span>
        </section>
        <div class="content">
            <img src="./buy.jpg" alt="" class="img">
            <span>暂无购买</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goBack: true
        }
    }
}
</script>

<style scoped>
.head_goback{
    height: 50px;
    line-height: 50px;
    margin-top: 0px;
    color: #ffffff;
    background-color: #22b3a5;
    position: relative;
}
.head_goback::after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(225deg);
    position: absolute;
    left: 20px;
    top: 19px;
}
.return {
    margin-left: 40px;
}
.content{
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.img{
    margin-top: 120px;
    width: 50%;
    height: 50%;
}
</style>
