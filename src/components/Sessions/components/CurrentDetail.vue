<template>
  <div id="detail">
  	<router-link tag="div" to="/sessions/currentdetail/introducton" class="session-title">
		<div class="sessionname ellipsis">2017新春拍卖会</div>
		<div class="session-title-img"></div>
	</router-link>
	<router-link tag="div" to="/sessions/currentdetail/specialdetail" class="special-list" v-for="item in items">
	    <div class="special-ditail">
		    <div class="special-img">
			    <img :src="item.url">
		    </div>
		    <div class="special-details">
			    <div class="special-item-line">
				    <div class="session-state-left">{{item.state1}}</div>
				    <div class="session-state-right">{{item.state2}}</div>
			    </div>
			    <div class="special-item-line ellipsis special-item-font">{{item.info1}}</div>
	            <div class="special-item-one">
    		        <div class="sit-text">{{item.info2}}</div>
    		        <div class="sit-date">{{item.info3}}</div>
    	        </div>
    	        <div class="special-item-two">
                <div class="sit-text size-color-red">{{item.info4}}</div>
			   	<div class="sit-date size-color-red">{{item.time}}</div>
    			<div class="sit-address">{{item.adress}}</div>
    	        </div>
		    </div>
		    <div class="list-right"></div>
		</div>
	</router-link>
	<main id="portfolio">
	    <div class="loaders" id="loadDataEnd">
	        <div class="loader">
	            <div class="on-all">全部加载完毕</div>
	        </div>
	    </div>
	</main>
  </div>
</template>

<script>
export default {
    name:'CurrentDetail',
    data () {
    return {
      items:[],
      totalItems:[],
      num:4
    }
  },
  mounted () {
    this.$http.get('../../../../static/data/session/detail.json').then(function(response){
      this.totalItems=response.body;
      this.items=this.totalItems.slice(0, this.num);
      window.onscroll=()=>{
        var contentHeight=document.getElementsByClassName('content-list')[0].clientHeight;
        if(document.body.scrollTop+window.innerHeight>contentHeight*this.num){
          this.num+=4;
          this.items=this.totalItems.slice(0, this.num);
        }
      }
    },function(error){
      // error callback
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*拍卖详情页1*/
.session-title {
	width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #8e8e8e;
    text-align: center;
}

.sessionname {
	width: 95%;
    float: left;
    text-align: left;
    padding-left: 0.2rem;
}

.ellipsis {
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 17px;
}

.session-title-img {
	width: 5%;
    height: 44px;
    background: url(../../../../static/images/session/06.png) no-repeat center;
    display: inline-block;
    background-size: 7px 15px;
    float: right;
    z-index: 20;
    position: absolute;
    left: 95%;
}

.special-list {
	font-size: 15px;
}

.special-detail {
	width: 100%;
    height: 4rem;
    border-bottom: 1px solid #d3d3d3;
    background-color: #ffffff;
    overflow: hidden;
}

.special-img {
	width: 35%;
    height: 4rem;
    line-height: 4rem;
    float: left;
    text-align: center;
    background-color: #ffffff;
    overflow: hidden;
}

.special-img img {
	max-height: 3rem;
    max-width: 2.4rem;
    margin: 0 auto;
    vertical-align: middle;
    display: inline-block;
}

.special-details {
	width: 60%;
    height: 4rem;
    float: left;
    line-height: 4rem;
    overflow: hidden;
}

.special-item-line {
	width: 90%;
    height: 0.5rem;
    line-height: 0.5rem;
}

.session-state-left {
	float: left;
	width: 55px;
    height: 0.5rem;
    line-height: 0.5rem;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    background-color: #ff3900;
}

.session-state-right {
	float: right;
    margin: 0 0.3rem 0 0;
    width: 55px;
    height: 0.5rem;
    line-height: 0.5rem;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    background-color: #18bd6f;
}

.special-item-font {
	font-weight: 700;
	font-size: 15px;
}

.special-item-one {
	width: 100%;
    height: 1rem;
}

.sit-text {
	display: inline-block;
    height: 1rem;
    float: left;
    line-height: 0.5rem;
}

.sit-date {
	max-height: 1rem;
    line-height: 0.5rem;
    overflow: hidden;
    word-wrap: break-word;
}

.special-item-two {
	width: 100%;
    height: 2rem;
}

.special-item-two .sit-text {
	display: inline-block;
    height: 2rem;
    float: left;
    line-height: 0.5rem;
}

.size-color-red {
	color: #ff3900;
}

.special-item-two .sit-date {
	max-height: 1rem;
    line-height: 0.5rem;
    overflow: hidden;
    word-wrap: break-word;
    color: #ff3900;
}

.special-item-two .sit-address {
	max-height: 1rem;
    line-height: 0.5rem;
    overflow: hidden;
    word-wrap: break-word;
}

.list-right {
	width: 0.5rem;
    height: 4rem;
    background: url(../../../../static/images/session/06.png) no-repeat center;
    display: inline-block;
    background-size: 5px 10px;
    float: right;
    z-index: 20;
    /*position: absolute;
    left: 9.5rem;*/
}

main{
	width: 100%;
}

.loaders {
	width: 100%;
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
}

.loader {
	box-sizing: border-box;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.on-all {
	margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 80px;
    margin-bottom: 50px;
}
</style>
