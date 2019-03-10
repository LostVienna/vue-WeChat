<template>
    <div class="my">
        <div class="top">
            <img src="@/images/avatar.jpeg" alt="" class="avatar" width="100%">
            <p>蜂蜜柚子</p>
            <router-link to="/login">
                <span class="login">登录 | 注册</span>
            </router-link>   
        </div>
        <div class="message1">
            <router-link to="/consultation">
                <div class="message1_detail" v-for="item in message1" :key="item.index">
                    <span ><img :src="item.image" alt="" class="image"></span>
                    <span class="title">{{item.title}}</span>
                    <span class="num">{{item.num}}</span>
                </div>
            </router-link>
        </div>
        <div class="message2">
            <div class="message2_detail" v-for="item in message2" :key="item.index">
                <span ><img :src="item.image" alt="" class="image"></span>
                <span class="title">{{item.title}}</span>
            </div>
        </div>
        <div class="message3">
            <div class="message3_detail" v-for="item in message3" :key="item.index">
                <span ><img :src="item.image" alt="" class="image"></span>
                <span class="title">{{item.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message1: [
                {
                   index: 0,
                   image: require('@/images/inquery.png'),
                   title: '最近的问诊',
                   num: 0 
                },
                {
                   index: 1,
                   image: require('@/images/lecture.png'),
                   title: '购买的讲堂',
                   num: 0 
                },
                {
                    index: 2,
                    image: require('@/images/cart.png'),
                    title: '购买的药品',
                    num: 0
                }
            ],
            message2:[
                {
                    index: 0,
                    image: require('@/images/tool.png'),
                    title: '工具箱',
                    num: 0
                },
                {
                    index: 1,
                    image: require('@/images/discounts.png'),
                    title: '我的优惠',
                    num: 0
                }
            ],
            message3:[
                {
                    index: 0,
                    image: require('@/images/message.png'),
                    title: '问诊人信息',
                    num: 0
                },
                {
                    index: 1,
                    image: require('@/images/doctor.png'),
                    title: '关注的医生',
                    num: 0
                },
                {
                    index: 2,
                    image: require('@/images/set.png'),
                    title: '设置',
                    num: 0
                }
            ]
        }
    }
}
</script>

<style scoped>
.my{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f3f3f3;
}
.top{
    width: 100%;
    height: 120px;
    text-align: center;
    font-size: 16px;
    padding-top: 20px;
    background-color: #fff;
}
.avatar{
    width: 60px;
    height: 60px;
    border: 1px solid #ffffff;
    border-radius: 50%;
}
.message1{
    margin-top: 10px;
    background-color: #fff;
}
.message1_detail{
    border-bottom: 1px solid #ebebeb;
    position: relative;
}
span {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
}
.image{
    width: 25px;
    height: 25px;
    margin-left: 10px;
    position: absolute;
    top: 12.5px;
}
.title {
    padding-left: 45px;
}
.num {
    padding-left: 180px;
} 
.message1_detail::after{
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 1px solid #656565;
    border-right: 1px solid #656565;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    left: 330px;
    top: 21px;
}
.message2{
    margin-top: 10px;
    background-color: #fff;
}
.message2_detail{
    border-bottom: 1px solid #ebebeb;
    position: relative;
}
.message2_detail::after{
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 1px solid #656565;
    border-right: 1px solid #656565;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    left: 330px;
    top: 21px;
}
.message3{
    margin-top: 10px;
    background-color: #fff;
}
.message3_detail{
    border-bottom: 1px solid #ebebeb;
    position: relative;
}
.message3_detail::after{
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 1px solid #656565;
    border-right: 1px solid #656565;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    left: 330px;
    top: 21px;
}
</style>
