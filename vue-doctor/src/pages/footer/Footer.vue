<template>
    <div class="footerBar">
        <router-link class="footerBar-item" :to="item.navigate" v-for="item in picList" :key="item.id"  > 
            <div class="content" @click="changePages(item.id)">
                <img :src="current==item.id?item.active:item.pic">
                <span :style="current==item.id?'color:#18b9a2':'color:#a0a0a0'" :class="current==item.id?'activeFont':''">{{item.text}}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
     data() {
        return {
            current: 1,
            picList: [{
                id: 1,
                pic: require('./home_active.png'),
                active: require('./home.png'),
                text: '首页',
                navigate: '/index'
            },{
                id: 2,
                pic: require('./inquiry.png'),
                active: require('./inquiry_active.png'),
                text: '问诊',
                navigate: '/inquery'
            },{
                id: 3 ,
                pic: require('./my.png'),
                active: require('./my_active.png'),
                text: '我的',
                navigate: '/my'
            }
            ]
        }
    },
    methods: {
        changePages(id) {
            console.log(id);
            this.current = id;
        },
    },

}
</script>

<style scoped>
.footerBar{
    position: fixed;
    bottom: 0;
    height: 60px;
    display: flex;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #cccccc;
}
.footerBar-item{
    flex: 1;
}
.content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.content img {
    width:30px;
    height: 30px;
    margin-top: 10px;
}
.content span{
    flex: 1;
    font-size: 16px;
    /* display: block; */
}
</style>
