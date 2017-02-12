<template>
    <div id="sessions">
	    <swipe></swipe>
	    <div class="sessions-nav">
	    	<div class="sessions-nav-item">
	    	    <router-link tag="div" to="/sessions/sendauction" class="nav-item">
				    <img alt="" src="../../../static/images/session/Identification1.png">
				    <div class="nav-item-text">鉴定<br>送拍</div>
				</router-link>
			</div>
	    	<div class="sessions-nav-item">
	    	    <router-link tag="div" to="/sessions/globalpurchase" class="nav-item">
	    		    <img alt="" src="../../../static/images/session/globalPurchase1.png">
				    <div class="nav-item-text">全球<br>代购</div>
				</router-link>
	    	</div>
	    	<div class="sessions-nav-item">
	    	    <router-link to="/liveshow" class="nav-item">
	    		    <img alt="" src="../../../static/images/session/auctionLiving1.png">
				    <div class="nav-item-text">拍卖<br>直播</div>
				</router-link>
	    	</div>
	    </div>
	    <router-link tag="div" to="/sessions/fullsearch" class="sessions-search-nav">
  		    <div class="search">
  		        <span class="serach-text">搜索拍品、拍卖会</span>
  		    </div>
        </router-link>
	    <div class="content-nav">
	    	<router-link tag="span" to="/sessions/currentsessions" class="current" active-class="active">当前拍卖</router-link>
	        <router-link tag="span" to="/sessions/historysessions" class="history" active-class="active">历史拍卖</router-link>
	    </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Swipe from './components/Swipe.vue';

export default {
  name:'Sessions',
  components: {
    Swipe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*拍卖导航*/
.sessions-nav {
	width: 100%;
    height: 50px;
    border-bottom: 1px solid #696969;
    font-size: 15px;
    margin: 0 auto;
}

.sessions-nav-item {
	width: 33.333333%;
    height: 50px;
    float: left;
    text-align: center;
}

.nav-item {
    display: inline-block;
    margin: 5px auto;
    line-height: 20px;
    font-weight: 500;
}

.nav-item img {
	display: inline-block;
    width: 40px;
    height: 40px;
    float: left;
    border: none;
    vertical-align: middle;
}

.nav-item-text {
	display: inline-block;
    margin-left: 7px;
}
/*搜索框*/
.sessions-search-nav {
	width: 100%;
	height: 40px;
}

.sessions-search-nav .search {
	width: 7rem;
    height: 30px;
    margin: 5px auto 0;
    border: 1px solid #ccc;
    border-radius: 15px;
    line-height: 30px;
    padding-left: 55px;
    background: url(../../../static/images/session/wap_serach.png) no-repeat 2px 5px;
    background-size: 40px 20px;
}

.search span {
	color: #696969;
    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 700;
    font-size: 13px;
}
/*拍卖信息*/
.content-nav {
	width: 100%;
    height: 35px;
    cursor: pointer;
    font-size: 15px;
}

.content-nav span {
	width: 50%;
    display: inline-block;
    line-height: 35px;
    text-align: center;
    border-bottom: 1px solid #696969;
    color: #696969;
    float: left;
}

.content-nav span.active {
	border-bottom: 1px solid #ff3c00;
    color: #ff3c00 !important;
}
</style>
