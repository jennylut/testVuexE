<template>
    <div class="login-container">
        <div class="title">小码王自营学习系统</div>
        <el-form :rules="rules" :model="loginForm" ref="loginForm" class="login-form-line" auto-complete="on">
            <el-form-item prop="username">
                <el-input
                        v-model="loginForm.username"
                        placeholder="请输入用户名"
                        name="username"
                        type="text"
                        auto-complete="on"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="password" class="password">
                <el-input
                        :type="passwordType"
                        v-model="loginForm.password"
                        placeholder="请输入密码"
                        auto-complete="on"
                        name="password"
                        @keyup.enter.native="handleLogin"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="is_loading" class="btn" type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    // import request from '../utils/request'

    export default {
        name: "login",
        data () {
            return {
                is_loading: false,
                loginForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [{required: true, message: '请输入账户', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                },
                passwordType: 'password'
            }
        },
        methods: {
            handleLogin () {
                // let _this = this
                this.$refs.loginForm.validate(valid=>{
                    if (valid) {
                        this.is_loading = true
                        // request.post('sesuapi/account/user/login',{
                        //     username: _this.loginForm.username,
                        //     password: _this.loginForm.password,
                        //     token: ''
                        // }).then((res)=>{
                        //     // eslint-disable-next-line
                        //     console.log(res)
                        // }, err=>{
                        //     // eslint-disable-next-line
                        //     console.log(err)
                        // })
                        this.$store.dispatch('LoginByUserName',this.loginForm).then(()=>{
                            this.$message({
                                message:'登陆成功！',
                                type:'success'
                            })
                            this.is_loading = false
                            this.$router.push('/hello')
                        }).catch(err=>{
                            this.is_loading = false
                            this.$message({
                                message:err.message,
                                type:'error'
                            })
                        })
                    }
                    this.is_loading = false
                })
            }
        }
    }
</script>

<style scoped>
.login-container{
    width: 20%;
    margin:100px auto;
}
</style>
