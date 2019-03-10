<template>
    <div class="container">
    <Search></Search>
    <div class="txt">
        <span><img src="./hospital.png" alt="">全三甲医院主治医师</span>
        <span><img src="./love.png" alt="">服务200万+患者</span>
    </div>
    
      <div class="quick">
        <router-link class="list" to="/find" v-for="item in lists" :key="item.idex">
        <div class="item">
          <span class="quick-img">
            <img :src="item.img" alt="" style="width:50px;height:50px;">
          </span>
          <span class="quick-text">{{item.text}}</span>
        </div>
          
         </router-link>
    </div>
   
    
    <div class="middle">
      <span>
          <span class="middle-content">
            <p style="font-weight:bold">一起变美</p>
            <p style="font-size:12px">颜值大作战</p>
          </span>
          <span>
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329843900,3179152956&fm=27&gp=0.jpg" alt="">
          </span>
      </span>
      <span>
          <span class="middle-content">
            <p style="font-weight:bold">疫苗专区</p>
            <p style="font-size:12px">如何更安全</p>
          </span>
          <span>
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3598891815,2949526370&fm=27&gp=0.jpg" alt="" >
          </span>
      </span>
    </div>

    <Swiper></Swiper>
    <div class="tab border-1px">
      <span class="tab-item">
      <router-link to="/Pediatric">儿科</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/Dermatology">皮肤科</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/Psychiatric">精神科</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/Neurology">神经内科</router-link>
      </span>
      </div>
      <router-view></router-view>
    </div>
    
</template>

<script>
import Search from '@/pages/search/Search'
import Swiper from '@/components/swiper/swiper'
export default {
    data() {
        return {
            index: 0,
            changed:true,
            lists:[
              {
                index:1,
                img:require('./list1.png'),
                text:'找寻医生'
              },
              {
                index:2,
                img:require('./list2.png'),
                text:'医师讲堂'
              },
              {
                index:3,
                img:require('./list3.png'),
                text:'查找疾病'
              },
              {
                index:4,
                img:require('./list4.png'),
                text:'语音问诊'
              },
               {
                index:5,
                img:require('./list4.png'),
                text:'名医义诊'
              },
              {
                index:6,
                img:require('./list3.png'),
                text:'开药问诊'
              },
              {
                index:7,
                img:require('./list2.png'),
                text:'查找医院'
              },
              {
                index:8,
                img:require('./list1.png'),
                text:'疫苗咨询'
              }
            ]
        }
    },
     components: {
      Swiper,
      Search
  }
}
</script>

<style scoped>
.txt{
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
}
.txt span{
  display: inline-block;
  margin-right: 15px;
}
.txt img{
  position: relative;
  top: 10px;
  width: 30px;
  height: 30px;
}
.middle {
  font-size: 16px;
  padding-bottom: 10px;
}
.middle span{
  display: inline-block;
  margin-left: 10px;
}
.middle-content {
  position: relative;
  bottom: 25px;
}
.middle img {
  height: 80px;
  width: 80px;
}
.list {
  display: inline-block;
}
.item{
  margin:10px 18px;
}
.quick-text{
  display: block;
  font-size: 14px;
  color: #656565;
}
.tab-item {
  display: inline-block;
  margin: 10px 8px;
}
</style>
