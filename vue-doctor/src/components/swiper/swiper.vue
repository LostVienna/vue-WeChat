<template>
  <div class="block">
    <el-carousel height="120px">
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <h3><img :src="item.image" alt="" class="img"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
export default {
    data(){
        return{
                images:[{
                    image: 'http://special.dxycdn.com/topic/lizy/resource/dxy-com/112v2.png?t=1532414502207',
                    index:0
                },
                {
                    image: 'http://special.dxycdn.com/topic/lizy/resource/dxy-com/127.png?t=1528856982903',
                    index:1
                },
                {
                  image: 'http://special.dxycdn.com/topic/lizy/resource/dxy-com/112v2.png?t=1532414502207',
                    index:2
                },
                {
                  image: 'http://special.dxycdn.com/topic/lizy/resource/dxy-com/127.png?t=1528856982903',
                    index:3
                }
            ]
        }
        
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 120px;
    margin: 0;
  }
  .img{
      width: 100%;
      height: 100%;
  }
</style>