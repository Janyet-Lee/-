<template>
  <div id="about">
  	<div class="container">
	        <h3>关于我们</h3>
		    <h4>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的用户，APP雅鉴是由北京寻宝科技有限公司为艺术品收藏爱好者开发的一款移动应用产品。</h4>
		    <h4>&nbsp;&nbsp;&nbsp;&nbsp;    该产品在资深艺术品鉴定专业人士的指导下收集和整理了艺术品行业最权威的古今艺术品数据资料，便于艺术品收藏爱好者快速浏览、查找和学习，是您从事收藏投资活动的好帮手！</h4>
		    <h4><strong>&nbsp;&nbsp;&nbsp;&nbsp;雅鉴在手，鉴定不愁！</strong></h4>
		    <h4>欢迎您提出宝贵的建议和需求，帮助我们把这款产品越做越好。</h4>
            <div class="connection">
	        <div class="connect">客服手机/微信：</div>
	        <div class="connect"><span>15711157551 </span>小雅-雅鉴客服</div>
	        <div class="connect"><span>13366041774</span> 鉴鉴-雅鉴客服</div>
	        <div class="connectimg imgone">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击手机咨询： <a href="tel:15711157551">15711157551</a></div>
	        <div class="connectimg imgtwo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击电话咨询： <a href="tel:010-87731775">010-87731775</a></div>
	        <div class="connectimg imgthree">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱： <a href="mailto:kefu@yajian518.com">kefu@yajian518.com</a></div>
	        <p class="payway">线下支付信息：</p>
	        <p>方式一：工商银行收款</p>
	        <p>名称：吴娜</p>
	        <p>账号：6212880200002598338</p>
	        <p>开户行：工商银行北京潘家园支行</p>
	        <br>
	        <p>方式二：微信转账</p>
	        <p>微信账号：15711157551</p>
	        <p>微信昵称：小雅-雅鉴客服</p>
	        <br>
	        <p>方式三：支付宝转账</p>
	        <p>支付宝账号：15711157551</p>
	        <p>支付宝名称：小雅-雅鉴客服</p>
	        <br>
	        <p>方式四：支付宝转账</p>
	        <p>支付宝账号：13910208744</p>
	        <p>支付宝名称：北京寻宝科技有限公司</p>
	        <br>
	        <p>方式五：中国银行收款</p>
	        <p>名称：吴娜</p>
	        <p>账号：621787860100000292632</p>
	        <p>开户行：中国银行北京清华园支行</p>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
	name:'About',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*关于我们*/
#about {
	background: url(../../../../static/images/my/about/bg.jpg);
    background-size: cover;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    padding-bottom: 100px;
}

.container {
	margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}

.container h3 {
	font-size: 24px;
	padding-top: 20px;
	font-weight: 500;
}

.container h4 {
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 18px;
    font-weight: 500;
}

.connect {
	width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
}

.connect span {
	color: blue;
}

.connectimg {
	width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
}

.connectimg a {
	color: #428bca;
}

.imgone {
	background: url(../../../../static/images/my/about/contact_imgone.png);
}

.imgtwo {
	background: url(../../../../static/images/my/about/contact_imgtwo.png);
}

.imgthree {
	background: url(../../../../static/images/my/about/contact_imgthree.png);
}

.payway {
	height: 30px;
    line-height: 30px;
}
</style>
