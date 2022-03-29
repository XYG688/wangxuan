<template>
  <div class="login">
    <div class="container">
      <h3 class="login-title">Login Form</h3>
      <el-form :model="ruleForm" :rules="rules">
        <el-form-item prop="user">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="ruleForm.user"
            placeholder="Username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model="ruleForm.pass"
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="login">Login</el-button>
        </el-form-item>
        <p class="footer">
          <span>username:admin</span><span>password:123456</span>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
import instance from "@/request/api";
export default {
  name: "MyLogin",
  data() {
    let userfn = (rule, value, callback) => {
      // 正则验证用户5-10
      let reg = /^\w{5,10}$/;
      if (!reg.test(value)) return callback(new Error("用户名5-10个字符"));
      return callback();
    };
    let passfn = (rule, value, callback) => {
      // 正则验证密码6-10
      let reg = /^\w{6,10}$/;
      if (!reg.test(value)) return callback(new Error("密码6-10个字符"));
      return callback();
    };
    return {
      ruleForm: {
        user: "",
        pass: "",
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pass: [{ validator: passfn, trigger: "blur" }],
      },
      debounce: null,
    };
  },
  created() {
    //   防抖登录
    this.debounce = this.debouncefn(this.submitForm, 3000);
  },
  methods: {
    //   登录业务
    login() {
      this.debounce();
    },
    // 登录请求
    async submitForm() {
      let user = this.ruleForm.user;
      let pass = this.ruleForm.pass;
      let { data } = await instance.post("/login", { user, pass });
      console.log(data);
      if (data.message === "fail")
        return this.$message.error(data.data.message);
      if (data.message === "success") {
        let token = data.data.token;
        localStorage.setItem("token", token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push("/home");
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
}
.container {
  position: absolute;
  width: 375px;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.login-title {
  font-size: 25px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
}
.login .btn {
  width: 100%;
}
.login >>> .el-input {
  color: #fff;
}
.el-input >>> .el-input__inner {
  background: #2d3a4b;
}
.el-input >>> .el-input__inner {
  border: 1px solid #374352;
  color: #fff;
}
.footer {
  color: #fff;
  margin-top: 20px;
}
.footer span {
  font-size: 14px;
  margin-right: 20px;
}
</style>