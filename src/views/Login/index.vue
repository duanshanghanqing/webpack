<template>
  <div class="Login">
    <div class="left">
      <p class="title">加油小程序后台管理系统</p>
      <img v-bind:src="imgsrc" />
      <img v-bind:src="bg" />
    </div>
    <div class="right">
      <div class="reg_body">
        <p class="title">登陆</p>
        <a-button type="primary">Primary</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/images/bg.png'
export default {
  name: 'Login',
  data() {
    return {
      imgsrc: 'https://hao1.qhimg.com/t012ca96bd4815f49e7.png',
      bg,
      ruleForm: {
        name: '',
        password: '',
        savepassword: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./index.less";
</style>
