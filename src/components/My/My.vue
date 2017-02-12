<template>
  <div id="my">
  	<router-link tag="div" to="/my/login" class="personal-info">
		<div class="personal-info1">
			<div class="personal-picture">
			    <img id="avatar" src="../../../static/images/my/default_logo.jpg">
			</div>
		</div>
		<div class="personal-info2">
		    <div>请登录</div>
		</div>
		<div class="personal-info3">
			<span class="list-right"></span>
		</div>
		<span class="pfo1"></span> 
	</router-link>
	<router-link tag="div" to="/my/about" class="personal-list">
		<div class="about-us">
		    <div class="about">
		        <span class="about-us1"></span>
		        <span class="plt1">关于我们</span>
		    </div>
		</div>
	</router-link>
  </div>
</template>

<script>
export default {
    name:'My',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*个人中心*/
.personal-info {
	width: 100%;
    height: 92px;
    background-image: url(../../../static/images/my/personal04.png);
    background-position: center;
}

.personal-info1 {
	width: 30%;
    float: left;
    padding-top: 6px;
}

.personal-picture {
	width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #666;
    margin: 0 auto;
    overflow: hidden;
}

.personal-picture img {
	width: 50px;
    height: 50px;
    border: none;
    vertical-align: middle;
    display: block;
}

.personal-info2 {
	width: 60%;
    float: left;
    font-size: 16px;
    color: #5a4a39;
    line-height: 24px;
    padding-top: 6px;
}

.personal-info3 {
	width: 10%;
    float: left;
    height: 86px;
    padding-top: 6px;
}

.personal-info3 span {
	width: 100%;
    background: url(../../../static/images/my/personal05.png) no-repeat center;
    height: 86px;
    display: block;
}

.pfo1 {
	width: 100%;
    height: 100%;
    display: block;
    background-color: black;
    opacity: 0;
}

.personal-list {
	width: 100%;
    background-color: #f0f0f0;
}

.about-us {
	width: 100%;
    height: 50px;
    background: url(../../../static/images/my/personal07.png) no-repeat 96% center #fff;
    box-sizing: border-box;
}

.about-us1 {
	background-image: url(../../../static/images/my/personal-icon09.png);
	width: 18%;
    height: 60px;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    vertical-align: middle;
}

.plt1 {
	width: 65%;
    font-size: 20px;
    font-weight: bold;
    color: #969696;
    display: inline-block;
    vertical-align: middle;
}
</style>
