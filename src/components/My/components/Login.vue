<template>
  <div id="login">
	<div class="landing-logo">
	    <img src="../../../../static/images/my/login/logo02.png" alt="logo">
	</div>
	<div class="landing-user">
	    <input type="text" placeholder="手机号" name="login-name" id="login-name">
	</div>
	<div class="landing-user">
	    <input type="password" placeholder="输入密码" name="password" id="password">
	</div>
	<div class="landing-getback">
	    <a href="">找回密码</a>
	</div>
	<div class="landing-login">
	    <input type="button" value="登录">
	</div>
	<div class="landing-register">
	    <a href="">立即注册</a>
	</div>
  </div>
</template>

<script>
export default {
    name:'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*登录界面*/
.landing-logo {
	width: 100%;
    padding: 5px 0;
    height: 40px;
}

.landing-logo img {
	margin: 0 auto;
    height: 100%;
    border: none;
    vertical-align: middle;
    display: block;
}

.landing-user {
	padding: 5px 10%;
}

.landing-user input {
    padding: 5px 2%;
    line-height: 25px;
    width: 96%;
    color: #000000;
    font: inherit;
    font-size: 18px;
    margin: 0;
    list-style: none;
    border: none;
    border-bottom: 1px solid #bfbfbf;
}

.landing-getback {
	padding: 5px 9% 5px 10%;
    margin: 10px 0;
}

.landing-getback a {
	text-align: right;
    color: #bfbfbf;
    display: block;
    line-height: 10px;
    font-size: 16px;
    height: 10px;
    width: 100%;
}

.landing-login {
	padding: 5px 10%;
}

.landing-login input {
	background-color: #ff3900;
    width: 100%;
    height: 40px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    line-height: normal;
    font: inherit;
    font-size: 14px;
    margin: 0;
    list-style: none;;
    border: none;
}

.landing-register {
	padding: 5px 10%;
    margin-top: 10px;
    height: 150px;
}

.landing-register a {
	width: 100%;
    height: 38px;
    font-size: 14px;
    font-weight: bold;
    color: #937e67;
    display: block;
    border: 1px solid #937e67;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
}
</style>
