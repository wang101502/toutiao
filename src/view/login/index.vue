<template>
  <div class="container-login">
    <el-card class="box-card">
      <img src="~@/assets/images/logo_index.png" alt />
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号码" v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width: 280px;" placeholder="请输入验证码" v-model="ruleForm.code"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox name="type" v-model="checkbox"></el-checkbox>
          <span style="margin:0 3px">我已阅读并同意</span>
          <el-link type="primary" :underline="false">用户协议</el-link>
          <span style="margin:0 2px">和</span>
          <el-link type="primary" :underline="false">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="btnLogin('ruleForm')">登 陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { getInfo } from "@/api/login.js";
export default {
  name: "Login",
  data() {
    const validateMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的手机号"));
      }
    };
    return {
      checkbox: true,
      ruleForm: {
        mobile: "13911111111",
        code: "246810"
      },
      rules: {
        mobile: [{ validator: validateMobile, trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "长度是6位数字", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    btnLogin(ruleForm) {
      this.$refs[ruleForm].validate(async valid => {
        if (valid) {
          try {
            const {
              data: { data }
            } = await getInfo(this.ruleForm.mobile, this.ruleForm.code);
            window.sessionStorage.setItem("wxq-toutiao", JSON.stringify(data));
            this.$router.push({ name: "home" });
          } catch (error) {
            this.$message.error("登陆失败");
          }
        }
      });
    }
  }
};
</script>
<style scoped lang='less'>
.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(~@/assets/images/login_bg.jpg) no-repeat center;
  .box-card {
    width: 460px;
    height: 340px;
    img {
      display: block;
      margin: 10px auto 20px;
      width: 200px;
    }
  }
}
</style>