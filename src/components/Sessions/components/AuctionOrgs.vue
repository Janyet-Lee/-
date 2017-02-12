<template>
  <div id="auction-orgs">
	<div class="introduction-item">
		<div class="introduction-names">公司</div>
		<div class="introduction-cons">横滨国际拍卖</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">地点</div>
		<div class="introduction-cons">（日本）〒231-0023  日本神奈川県横浜市中区山下町84番5 メトロタワー山下町５阶；（香港）中国香港湾仔莊士敦道181号，大有大厦802室；（ 北京）朝阳区光华路8号北京和乔丽致酒店公寓1505</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">电话</div>
		<div class="introduction-cons">
			<a href="tel:（日本）(81) 45 228 8639  张先生：13901051831 ；（香港）(852) 2786 3778   周小姐（852）9355 0151；（北京）(86) 6581 5088 祁先生：18610588488">（日本）(81) 45 228 8639  张先生：13901051831 ；（香港）(852) 2786 3778   周小姐（852）9355 0151；（北京）(86) 6581 5088 祁先生：18610588488</a>
		</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">传真</div>
		<div class="introduction-cons">（日本）(81) 45 228 8638  （香港）(852) 2786 3877 （北京）(86) 6581 5088</div>
	</div>
	<div class="introduction-item">
		<div class="introduction-names">邮箱</div>
		<div class="introduction-cons">
		    <a href="mailto:（日本）info@ykauction.com；（香港）info@ykhkauction.com">（日本）info@ykauction.com； （香港）info@ykhkauction.com</a>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	name:'AuctionOrgs',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*拍卖公司*/
#auction-orgs {
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

/*.introduction-img {
	width: 5%;
    height: 22px;
    padding: 10px 0;
    float: left;
    background: url(../../../../static/images/session/06.png) no-repeat center;
    background-size: 7px 14px;
}*/

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
