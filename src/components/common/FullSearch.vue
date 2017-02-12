<template>
  <div id="full-search">
  	<div class="content-nav">
	    <router-link tag="span" to="/sessions/fullsearch/goodsearch" class="good" active-class="active">搜拍品</router-link>
	    <router-link tag="span" to="/sessions/fullsearch/sessionsearch" class="session" active-class="active">搜拍卖会</router-link>
	</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'FullSearch',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*搜索界面*/
.content-nav {
	width: 100%;
  height: 40px;
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
