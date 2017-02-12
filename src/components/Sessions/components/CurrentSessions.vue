<template>
  <div id="current-sessions">
	   <router-link tag="div" to="/sessions/currentdetail" class="content-list" v-for="item in items">
	        <div class="session-list-picture"><img :src="item.url"></div>
	        <div class="session-list-right">
	            <div class="content-state-text">
				    <div class="session-state-left">{{item.state1}}</div>
				    <div class="session-state-right">{{item.state2}}</div>
			    </div>
	            <div class="content-text ellipsis title">{{item.title}}</div>
	            <div class="content-text ellipsis">{{item.info}}</div>
	            <div class="content-text ellipsis">{{item.time}}</div>
	            <div class="content-text ellipsis">{{item.address}}</div>
	       </div>
	       <div class="list-right"></div>
	   </router-link>
  </div>
</template>

<script>
export default {
  name:'CurrentSessions',
  data () {
    return {
      items:[],
      totalItems:[],
      num:4
    }
  },
  mounted () {
    this.$http.get('../../../../static/data/session/sessions.json').then(function(response){
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
/*当前拍卖*/
#current-sessions {
    padding-bottom: 2.665245rem;
}

.content-list {
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #d3d3d3;
    background-color: #ffffff;
}

.session-list-picture {
	width: 23%;
    height: 4rem;
    line-height: 4rem;
    float: left;
    overflow: hidden;
    text-align: center;
}

.session-list-picture img {
	max-width: 60px;
    max-height: 40px;
    vertical-align: middle;
    display: inline-block;
    margin: 0 auto;
}

.session-list-right {
    width: 72%;
    height: 4rem;
    line-height: 4rem;
    float: left;
}

.content-state-text {
	width: 100%;
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

.content-text {
	width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 15px;
}

.title {
	font-weight: 700;
}

.ellipsis {
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
</style>
