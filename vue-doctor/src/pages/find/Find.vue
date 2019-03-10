<template>
    <div class="find">
        <section class="head_goback" v-if="goBack" >
            <span class="return" @click="$router.go(-1)">查找</span>
        </section>
        <div class="txt">选科室查医院</div>
        <div class="content" v-for="item in contents" :key="item.index">
            <h5>{{item.title}}</h5>
            <p style="font-size:16px;color:#999999">{{item.content  }}</p>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            goBack: true,
            desc:'',
            contents:[
                {
                    title: '疫苗咨询',
                    content: '疫苗问题，来问丁香医生'
                },
                {
                    title: '皮肤性病科',
                    content: '痘痘、狐臭、脚气、皮肤过敏'
                },
                {
                    title: '儿科',
                    content: '小儿发烧、咳嗽、流鼻涕'
                },
                {
                    title: '妇产科',
                    content: '怀孕、孕检、月经不调'
                },
                {
                    title: '骨科',
                    content: '骨折、颈肩痛、骨质疏松'
                },
                {
                    title: '神经内科',
                    content: '头晕、头疼、失眠、记忆力下降、脑出血'
                }
            ]
        }
    }
}
</script>

<style scoped>
.head_goback{
    height: 50px;
    line-height: 50px;
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
.txt {
    background: #f4f4f4;
    color: #c7c7c7;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
}
.content {
    position: relative;
    height: 80px;
    border-bottom: 1px solid #ebebeb;
    line-height: 35px;
    padding-left: 20px;
}
.content::after{
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 2px solid #656565;
    border-right: 2px solid #656565;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    left: 330px;
    top: 34px;
}
</style>
