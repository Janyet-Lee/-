<template>
  <div id="introduction">
	<router-link tag="div" to="/sessions/currentdetail/auctionorgs" class="introduction-item">
		<div class="introduction-name">拍卖公司</div>
		<div class="introduction-con">横滨国际</div>
		<div class="introduction-img"></div>
	</router-link>
	
	<div class="introduction-item">
		<div class="introduction-names">预展时间</div>
		<div class="introduction-cons">2017年1月13日 上午10:00</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">预展地点</div>
		<div class="introduction-cons">〒106-0032　东京都港区六本木1-5-2　泉ガーデンギャラリー</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">拍卖时间</div>
		<div class="introduction-cons">2017/01/13—01/15</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">拍卖地点</div>
		<div class="introduction-cons">〒106-0032　东京都港区六本木1-5-2　泉ガーデンギャラリー</div>
	</div>
  </div>
</template>

<script>
export default {
	name:'Introduction',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*拍卖介绍*/
#introducton {
	width: 100%;
	
}

.introduction-item {
	width: 100%;
    height: auto;
    border-bottom: 1px solid #cacaca;
    overflow: auto;
    font-size: 15px;
}

.introduction-name {
	width: 30%;
    padding: 10px 0;
    float: left;
    text-align: center;
    line-height: 22px;
}

.introduction-con {
	width: 65%;
    padding: 10px 0;
    float: left;
    line-height: 22px;
}

.introduction-img {
	width: 5%;
    height: 22px;
    padding: 10px 0;
    float: left;
    background: url(../../../../static/images/session/06.png) no-repeat center;
    background-size: 7px 14px;
}

.introduction-names {
	width: 30%;
    padding: 10px 0;
    float: left;
    text-align: center;
    line-height: 22px;
}

.introduction-cons {
	width: 67%;
    padding: 10px 0;
    float: left;
    line-height: 22px;
}
</style>
