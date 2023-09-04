<script>
export default {
  name: 'LoginForm',
  data(){
    return{
    }
  },
  props:['CloseMaskLogin'],
  methods:{
    close_mask_login(){
      this.$emit('close_mask_login',!this.CloseMaskLogin)
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
}
</script>

<template>
  <div class="login-mask">
    <form class="login-form">
      <div class="login-form-header">
        <div class="login-form-title">登录掘金畅享更多权益</div>
        <i class="iconfont icon-guanbi1 logo-in-close" @click="close_mask_login"></i>
      </div>
      <div class="login-form-bottom">
        <div class="login-body">
          <div class="login-main">
            <div class="panel">
              <h1>验证码登录</h1>
              <div class="input-group">
                <div class="tel_number">
                  <div class="tel_number_area">
                    <div>+86</div>
                    <i class="iconfont icon-sanjiaoxing"></i>
                  </div>
                  <input placeholder="请输入手机号" v-focus name="tel">
                </div>
                <div class="error-text" v-if="false">账号不能为空</div>
                <div class="password_box">
                  <input placeholder="请输入验证码" maxlength="4" name="password">
                  <button>获取验证码</button>
                </div>
                <div class="error-text" v-if="false">密码不能为空</div>
              </div>
              <button>登录</button>
            </div>
            <div class="other-login">
              <div>
                <span>其他登录：</span>
                <i class="iconfont icon-weibo"></i>
                <i class="iconfont icon-weixin"></i>
                <i class="iconfont icon-github-fill"></i>
              </div>
              <span class="password-login">密码登录</span>
            </div>
          </div>
          <div class="login-qrcode">
            <h1>扫码登录
              <span>（6.4.1及以上版本支持）</span>
            </h1>
            <div class="qrcode-img-wrap">
              <img src="@/assets/images/login-qrcode.png" alt="login">
              <img src="@/assets/images/juejin.7c9cb48.png" alt="login">
            </div>
            <div class="qrcode-text">
              <span>打开&nbsp;<a>稀土掘金App</a></span>
              <span>点击“我-左上角扫一扫”登录</span>
            </div>
          </div>
        </div>
        <div class="agreement-box">
          <span>注册登录即表示同意&nbsp;</span>
          <a>用户协议 </a>
          <span>&nbsp;和&nbsp;</span>
          <a> 隐私政策</a>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  display: flex;
}

.login-form {
  margin: auto;
  width: 647px;
  height: 415px;
  background-color: white;
  border-radius: 4px;
}

.login-form-header {
  width: 592px;
  height: 28px;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f5;
}

.login-form-title {
  color: #333333;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

.logo-in-close:hover {
  cursor: pointer;
}

.login-form-bottom {
  width: 592px;
  height: 306px;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login-body {
  width: 592px;
  height: 248px;
  display: flex;
  justify-content: space-between;
}

.login-main {
  width: 320px;
  height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.panel {
  width: 320px;
  height: 203px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

.input-group {
  width: 320px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
}

.password_box,
.tel_number {
  width: 300px;
  height: 38px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: #f2f3f5;
}

.tel_number {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.tel_number input{
  width: 204px;
  height: 18px;
  padding: 10px;
  background-color: #f2f3f5;
}
.tel_number_area{
  width: 60px;
  height: 18px;
  display: flex;
  align-content: center;
}
.tel_number_area>div{
  height: 18px;
  padding-top: 10px;
}
.tel_number_area>i{
  padding-left: 25px;
  padding-top: 8px;
  cursor: pointer;
}
.password_box {
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.password_box > button {
  color: #1f80ff;
  cursor: pointer;
}

.password_box > input {
  width: 210px;
  padding: 10px;
  vertical-align: middle;
  background-color: #f2f3f5;
}
.password_box:focus-within,
.tel_number:focus-within{
  border: 1px solid #1f80fe;
}
.error-text {
  height: 20px;
  color: red;
  padding: 0 10px;
}

.panel > button {
  width: 100%;
  height: 28px;
  padding: 6px 16px;
  background-color: #1f80ff;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
}

.other-login {
  width: 320px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.other-login>div{
  width: 166px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #515767;
}
.other-login i{
  width: 24px;
  height: 24px;
  background-color: #f2f3f5;
  border-radius: 50%;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
}
.password-login{
  font-size: 14px;
  color: #515767;
  cursor: pointer;
}

/*#region二维码*/
.login-qrcode {
  height: 248px;
  width: 200px;
//background-color: skyblue; padding-left: 36px; border-left: 1px solid #f2f2f5; display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login-qrcode > h1,
.panel h1 {
  display: flex;
  font-size: 15px;
  font-weight: 500;
  color: #252933;
}

.login-qrcode > h1 > span {
  margin: auto 0;
  font-size: 12px;
  font-weight: 400;
  color: #8a919f;
}

.qrcode-img-wrap {
  position: relative;
  width: 155px;
  height: 155px;
  border: 2px solid #e3e6ea;
  border-radius: 4px;
  margin-top: 10px;
}

.qrcode-img-wrap img:first-child {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.qrcode-img-wrap img:last-child {
  width: 37px;
  height: 37px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.qrcode-text {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #515767;
}

.qrcode-text a {
  color: #1f80ff;
}

.agreement-box a {
  color: #1f80ff;
  font-size: 14px;
}

.agreement-box {
  width: 592px;
  height: 18px;
  display: flex;
  justify-content: center;
}

.agreement-box span {
  font-size: 14px;
  color: #8a91ad;
}

/*#endregion*/
</style>