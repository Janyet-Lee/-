<template>
  <div id="send-auction">
  	<div class="container">
		<div class="service">
			<img alt="" src="../../../../static/images/session/sendauction/lianxikefu.png">
		</div>
		<h3 class="identify">鉴定</h3>
		<h4 class="bold">本平台开设的鉴定服务如下：</h4>
		<h4>一&nbsp;&nbsp;鉴定品类：书画，瓷器，玉器，古籍，杂项、钱币、家具、佛像、铜器。</h4>
		<div style="height: 10px;">&nbsp;</div>
		<h4>二&nbsp;&nbsp;鉴定方式及收费标准</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;网络鉴定：50元/件</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;实物鉴定：</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）行家实物鉴定：1000元/件</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）专家实物鉴定：3000元/件，鉴定证书按藏品估值的1%-5%另行收费。</h4>
		<h4 class="bold">专家名单如下：</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;青铜组：李学勤、李建民</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瓷器组：李宗杨</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玉器组：张广文</h4>
		<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;佛像组：金申</h4>
  	</div>
  	<div class="container send">
		<h3 class="identify">送拍</h3>
		<p class="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送拍还在为找不到门路发愁吗？一家家上门送货舟车劳顿还在被拒收吗？让小雅来帮您吧！我们强大的拍卖圈人脉和精准的艺术品市场专业知识可以帮您的拍品安排最理想的拍卖公司和最适当的拍卖时间，让您的拍品价值最大化。</p>
		<p class="title bold">更低的佣金更省力的委托，就找小雅来帮您！</p>
		<div style="height: 20px;">&nbsp;</div>
		<p>一：送拍流程</p>
		<p>&nbsp;&nbsp;&nbsp;&nbsp;①网络鉴定&nbsp;&nbsp;②实物验看&nbsp;&nbsp;③签署协议</p>
		<p>二：佣金收取</p>
		<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;不成交不收费</p>
		<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;合同底价由双方协商</p>
		<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;成交后按照成交额收取8%-14%</p>
		<p>三：送拍公司</p>
		<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据作品的适销对路状况和拍卖排期，选取中国大陆境内与本平台有战略合作的、信誉良好的拍卖公司送拍。</p>
        <div class="connection">
        <div style="height: 10px;">&nbsp;</div>
	        <div class="connect">客服手机/微信：</div>
	        <div class="connect"><span>15711157551 </span>小雅-雅鉴客服</div>
	        <div class="connect"><span>13366041774</span> 鉴鉴-雅鉴客服</div>
	        <div class="connectimg imgone">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击手机咨询： <a href="tel:15711157551">15711157551</a></div>
	        <div class="connectimg imgtwo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击电话咨询： <a href="tel:010-87731775">010-87731775</a></div>
	        <div class="connectimg imgthree">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱： <a href="mailto:kefu@yajian518.com">kefu@yajian518.com</a></div>
        </div>
	</div>
  </div>
</template>

<script>
export default {
	name:'SendAuction',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*送拍界面*/
#send-auction {
	width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 2.665245rem;
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5;
    background-color: #f5f5f5;
}

.container {
	margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}

.service {
	width: 100%;
    margin: 0 auto;
    text-align: center;
}

.service img {
	width: 80%;
	vertical-align: middle;
	border: 0;
}

.identify {
	text-align: center;
    margin: 0px;
    color: #ff3900;
    font-weight: bold;
    font-size: 24px;
}

.container h4 {
	margin-top: 10px;
    margin-bottom: 10px;
	font-weight: normal;
	font-size: 16px;
}

.container .bold {
	font-size: 16px;
    font-weight: bold;
}

.send p {
	font-size: 16px;
    line-height: 26px;
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
    margin-top: 5px;
    margin-bottom: 5px;
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
	background: url(../../../../static/images/session/sendauction/contact_imgone.png);
}

.imgtwo {
	background: url(../../../../static/images/session/sendauction/contact_imgtwo.png);
}

.imgthree {
	background: url(../../../../static/images/session/sendauction/contact_imgthree.png);
}
</style>
