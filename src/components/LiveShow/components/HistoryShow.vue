<template>
  <div id="container" @scroll="load" v-bind:style="{ height: boxHeight2+'px',overflow:scroll}">
    <div class="box">
      <img class="showPic"src="../../../../static/images/liveshow/presentshow/1.jpg">
      <div class="allContent">
        <p class="title">横滨国际<span class="status">已结束</span></p>
        <p class="type">古董珍玩（一）专场</p>
        <p class="number">图录号：1001-1326</p>
        <p class="time">1-13 14:00</p>
      </div>
    </div>
    <div :class=item.boxClass v-for="item in items">
      <img :class=item.imgClass :src=item.imgurl>
      <div :class=item.contentClass>
        <p :class=item.titleClass>{{item.titleContent}}<span :class=item.statusClass>{{item.statusContent}}</span></p>
        <p :class=item.typeClass>{{item.typeContent}}</p>
        <p :class=item.numberClass>{{item.numberContent}}</p>
        <p :class=item.timeClass>{{item.timeContent}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container:after {
  content: "";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}

.box {
  width: 100%;
  border-bottom: 1px solid red;
  overflow: hidden;
}

.showPic {
  width: 2.8rem;
  height: 3.8rem;
  float: left;
  overflow: hidden;
  margin:20px;
}

.allContent {
  width: 8rem;
  height: 100%;
}

.status {
  display: inline-block;
  margin-left: 20px;
  font-size: 15px;
  background-color: grey;
  color: #eee7e7;
}

.title {
  line-height: 0.7rem;
  font-weight: 700;
  margin-top: 0.5rem;
  font-size: 16px;
}

.type {
  line-height: 0.7rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  padding: .2rem 0;
}

.number {
  font-size: 16px;
  padding: .2rem 0;
}

.time {
  font-size: 18px;
  padding: .2rem 0;
}
</style>

<script>
export default{
  name: 'HistoryShow',
  data:function(){
    return{
      totalItem:[],
      items:[],
      num:6,
      boxHeight2:0,
      scroll:"scroll"
    }
  },
  methods:{
    load:function(event){
      var containBox = document.getElementById('container');
      if(containBox.scrollTop+containBox.clientHeight>=containBox.childNodes[0].offsetHeight*(this.num)-50)
      {
        this.items = this.totalItem.slice(0,this.num+6);
      }
    }
  },
  mounted:function(){
        this.$http.get('../../../../static/data/liveshow/presentshow.json').then((response)=>{
        this.totalItem = response.body;
        this.items = this.totalItem.slice(0,this.num);
        this.boxHeight2 = window.outerHeight-100;
    },(response)=>{
        // error callback
    });
  }
}
</script>
