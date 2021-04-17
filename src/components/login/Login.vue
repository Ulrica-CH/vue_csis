<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img src="../../assets/img/logo.png" alt="">
        </div>
        <!-- 表单区域 -->
        <div>
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
            <h1>课堂签到管理系统 | IMUT</h1>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" ></el-input>
          </el-form-item>

          <el-form-item class="btns">
            <el-button type="primary" @click="Login">登录</el-button>
            <el-button type="primary">注册</el-button>
            <el-button type="info" @click="resetLoginFormRef">重置</el-button>
          </el-form-item>
           </el-form>
        </div>
        
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //数据绑定
      loginForm:{
        username:'admin',
        password:'123456'
      },
      //数据校验
      loginFormRules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]
      }
    }
  },
  methods:{
    //点击重置按钮 重置登录表单
    resetLoginFormRef() {
      this.$refs.loginFormRef.resetFields()
    },
    //登陆前验证
    Login() {
      this.$refs.loginFormRef.validate(async valid=>{
        if(!valid) return;
        //这里是解构赋值 把返回的data给res
        const {data:res} =await this.$http.post('login',this.loginForm)
        if(res.meta.status !== 200) return this.$message.error("登陆失败")
        this.$message.success('登录成功');

        
        window.sessionStorage.setItem('token',res.data.token)
      })
    }
  }

}
</script>

<style scored>
body{
  background-color: #2b4b6b;
}
.login_box{
  width: 550px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.856);
  border-radius: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  
}
.avator_box{
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 10px;
  width: 120px;
  height: 120px;
  border: 1px solid #ddd;
  border-radius: 50%;
  box-shadow: 0 0 5px;
  

}
.avator_box img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
  
}
.login_form{
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  
}
.login_form h1{
  text-align: center;
  margin-bottom: 45px;
  letter-spacing: 5px;
}
.btns{
  
  display: flex;
  justify-content: center;
}

</style>