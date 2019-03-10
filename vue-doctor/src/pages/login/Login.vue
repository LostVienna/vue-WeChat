<template>
    <div class="login-container">
        <section class="head_goback" v-if="goBack" >
            <span class="return" @click="$router.go(-1)"> 返回</span>
        </section>
        <el-form class="login-form" ref="loginForm" :model="loginForm"
            :rules="loginRules" label-position="left">
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <el-button type="primary" :loading="loading" style="width:100%;margin-bottom:30px" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
        
    </div>
</template>

<script>
import { isvalidateUsername } from '@/utils/validate'
export default {
    data() {
        const validateUsername = (rule,value,callback) =>{
            if(!isvalidateUsername(value)) {
                callback(new Error('请输入正确的用户名'));
            }
            else{
                callback();
            }
        }
        const validatePassword = (rule,value,callback) =>{
            if(value.length <6){
                callback(new Error('密码至少6位'));
            }
            else{
                callback();
            }
        }
        return{
            loading:false,
            showDialog:false,
            goBack: true,
            loginForm: {
                username:'',
                password:'',
            },
            loginRules:{
                username:[{
                    // 必填
                    required:true,
                    //光标移开后验证
                    trigger:'blur',
                    // 验证规则
                    validator:validateUsername
                }],
                password:[{
                    required:true,
                    trigger:'blur',
                    validator:validatePassword
                }]
            },
        }
       
    },
    methods:{
        handleLogin(){
            this.$refs.loginForm.validate(valid => {
                if(valid){
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                    }, 1000);
                    console.log('提交成功');
                    this.$router.replace({ path: '/my' });
                }
                else {
                    console.log('用户名或密码错误');
                    return false;
                }
            })
        }        
    }

}
</script>

<style scoped>
.head_goback{
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    margin-top: 0;
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
.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
}
.login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 80%;
    margin: 50px auto;
}
.title-container {
    position: relative;
}
.title {
    font-size: 26px;
    font-weight: 400;
    color: #22b3a5;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
}
.set-language {
    color: #fff;
    position: absolute;
    top: 5px;
    right: 0px;
} 

</style>
