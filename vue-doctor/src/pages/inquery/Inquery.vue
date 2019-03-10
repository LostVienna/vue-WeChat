<template>
    <div class="inquery"> 
        <div class="top">
            <h4>咨询医生</h4>
            <p>全三甲医院主治医师 / 患者隐私保护 / 医生资格人工审核</p>
        </div>
        <router-link class="inquery_methods" to="/ask">
            <div class="lists" v-for="item in lists" :key="item.index">
                <span>
                    <img :src="item.image" alt="" class="img" width="100%">
                </span>
                <p>
                    <span class="title">{{item.title}}</span>
                <span class="detail">{{item.detail}}</span>
                </p>
                
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            askid: '',
            lists:[
                {
                    index: 0,
                    image: require('./graphic.png'),
                    title: '图文问诊',
                    detail: '快速匹配医生 评价一小时回复'
                },
                {
                    index: 1,
                    image: require('./voice.png'),
                    title: '语音问诊',
                    detail: '一对一实时语音 平均60秒接通'
                },
                {
                    index: 2,
                    image: require('./ask.png'),
                    title: '问医生',
                    detail: '按科室挑选合适的医生'
                }
            ]
        }
    },
    mounted(){
        this.askid = this.lists.index;
    }
}
</script>

<style scoped>
.top{
    margin: 20px;
}
p{
    color: #bababa;
    font-size: 13px;
    padding-top: 20px;
}
.inquery_methods{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.lists{
    width: 90%;
    height: 140px; 
    margin-top: 20px;
    box-shadow: 1px 1px 1px 2px #cdcdcd;
    border-radius: 10px;
    position: relative;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.img{
    width: 80px;
    height: 80px;
}
.title{
    font-size: 22px;
    font-weight: bold;
    color: #333333;
    display: block;
    padding-bottom: 12px;
}
.detail {
    color: #999999;
    font-size: 16px;
    display: inline-block;
    padding-bottom: 20px;
}
.lists::after{
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 3px solid #cccccc;
    border-right: 3px solid #cccccc;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    left: 300px;
    top: 60px;
}
</style>
