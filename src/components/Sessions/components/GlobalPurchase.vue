<template>
  <div id="global-purchase">
  	  <router-link tag="div" to="/sessions/fullsearch" class="sessions-search-nav">
  		    <div class="search">
  		        <span class="serach-text">搜索拍品、拍卖会</span>
  		    </div>
      </router-link>
	    <div class="content-nav">
	    	<router-link tag="span" to="/sessions/globalpurchase/currentsessions" class="current" active-class="active">当前拍卖</router-link>
	        <router-link tag="span" to="/sessions/globalpurchase/historysessions" class="history" active-class="active">历史拍卖</router-link>
	    </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'GlobalPurchase',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*全球代购*/
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
  background: url(../../../../static/images/session/wap_serach.png) no-repeat 2px 5px;
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
