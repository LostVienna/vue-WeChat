<template>
    <div class="ask">
        <section class="head_goback" v-if="goBack" >
            <span class="return" @click="$router.go(-1)"> 返回</span>
            <span class="next">下一步</span>
        </section>
        <textarea class="textarea" placeholder="请描述你的年龄、性别、症状及就诊经历，便于医生进行准确分析，我们会确保你的隐私安全">
        </textarea>
        <el-upload 
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><em>添加图片 / 视频</em></div>
        </el-upload>
        <p class="request">
            <span>你上传的附件仅对解答问题的医生可见</span>
            <span>可上传9张</span>
        </p>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            goBack: true,
            desc:''
        }
    }
}
</script>

<style>
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
.next {
    margin-left: 200px;
}
.textarea{
    width: 94%;
    height: 100px;
    font-size: 16px;
    padding: 10px;
    border:none;
    color: #cccccc;
    letter-spacing: 2px;
    padding-left: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.el-upload-dragger{
    width: 130px;
    height: 130px;
    background-color: #f4f4f4;
    margin-left: 20px;
}
.request{
    position: relative;
    width: 200px;
    top: -110px;
    left: 160px;
    color: #999999;
    letter-spacing: 2px;
    font-size: 20px;
    line-height: 25px;
}
</style>
