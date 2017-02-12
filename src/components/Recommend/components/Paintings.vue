<template>
  <div>
    <div id="container" @scroll="load" v-bind:style="{ height: boxHeight2+'px',overflow:scroll}">
      <router-link to='/detailpage' v-for="item in items">
      <div v-bind:class="item.boxClass" >
          <span v-bind:class="item.spanClass">{{item.spanContent}}</span>
          <img v-bind:class="item.imgClass" v-bind:src="item.url">
          <p v-bind:class="item.nameClass">{{item.nameContent}}</p>
          <p v-bind:class="item.priceClass">{{item.priceContent}}</p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#container {
  overflow: scroll;
  padding-bottom: 50px;
}

#container:after {
  content: "";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}

/*每个小容器的样式属性*/
.box {
  width: 33.3%;
  float: left;
  margin:0;

}

.box:last-child {
  padding-bottom: .1rem;
}

.box .time-clock {
  display: block;
  width: 100%;
  font-size: 12px;
  padding:4px 0;
  text-align: center;
}

.box .show-pic {
  padding-top: 5px;
  display: block;
  max-height: 106px;
  margin:0 auto;
  border: 1px solid grey;
  box-shadow: 0 2px 10px grey;
}

.box .pic-name {
  width: 100%;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-top: 4px;
  text-align: center;
}

.box .price {
  padding-top: 4px;
  text-align: center;
  color: red;
}
</style>

<script>
  export default {
    name:'Paintings',
    data:function(){
      return{
        totalItem:[],
        items:[],
        num:21,
        boxHeight2:0,
        scroll:"scroll"
      }
  },
  methods:{
    load:function(event){
      var containBox = document.getElementById('container');
      if(containBox.scrollTop+containBox.clientHeight>=containBox.childNodes[0].childNodes[0].offsetHeight*(this.num/3)-100)
      {
        this.items = this.totalItem.slice(0,this.num+9);
      }
    }
  },
  mounted:function(){
        this.$http.get('../../../../static/data/recommend/show.json').then((response)=>{
        this.totalItem = response.body;
        this.items = this.totalItem.slice(0,this.num);
        this.boxHeight2 = window.outerHeight-215;
    },(response)=>{
        // error callback
    });
  }
}
</script>
