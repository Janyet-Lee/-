<template>
  <div id="main">
    <div id="container">
      <div class="countContainer">
      <img class="picture" src="../../../../static/images/recommend/detailpage/1.jpg">
      <div class="list">
        <ul>
          <li><span class="leftArrow" @click="decrease"></span></li>
          <li><span class="rightArrow" @click="increase"></span></li>
          <li>
            <div class="littleList" v-show="check">
              <router-link to=""><div>购物车</div></router-link>
              <router-link to=""><div>我的订单</div></router-link>
            </div>
            <span class="check"  @click="toggle"></span>
          </li>
          <li><span class="collect"></span></li>
        </ul>
      </div>
    </div>
    <p class="paintingTitle" >{{items.title}}</p>
    <div class="description">
      <div class="paintingDetails">
          <div class="subTitle">拍品详情</div>
          <div>
            <span>作品分类</span>
            <span class="secondPart">{{items.type}}</span>
          </div>
          <div>
            <span>创作年代</span>
            <span class="secondPart">{{items.time}}</span>
          </div>
          <div>
            <span>尺寸</span>
            <span class="secondPart">{{items.size}}</span>
          </div>
          <div>
            <span>估价</span>
            <span class="secondPart">{{items.price}}</span>
          </div>
          <div>
            <span>成交价</span>
            <span class="secondPart">{{items.finalPrice}}</span>
          </div>
          <div>
            <span class="top">作品描述</span>
            <span class="secondPart clasify">{{items.description}}
              </span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
      </div>
      <div class="sellingDetails">
          <div class="subTitle">拍卖详情</div>
          <div>
            <span>拍卖公司</span>
            <span class="secondPart">福建运通</span>
          </div>
          <div>
            <span>拍卖会</span>
            <span class="secondPart">2017迎春艺术品拍卖</span>
          </div>
          <div>
            <span>拍卖专场</span>
            <span class="secondPart">闽贤·近现代闽籍重臣及文人作品专场</span>
          </div>
          <div>
            <span>拍卖时间</span>
            <span class="secondPart"></span>
          </div>
          <div>
            <span>拍卖地点</span>
            <span class="secondPart">厦门宾馆·明宵厅</span>
          </div>
          <div>
            <span class="top">预展时间</span>
            <span class="secondPart clasify">2017年1月14日 上午9:00-晚上20:002017年1月15日 上午9:00-下午13:30
              </span>
          </div>
          <div>
            <span class="top">预展地点</span>
            <span class="secondPart clasify">厦门宾馆·富园厅（思明区虎园路16号）
              </span>
          </div>
      </div>
       <div class="relativeDetails">
           <div class="subTitle">相关拍品</div>
            <ul>
              <li><img src="../../../../static/images/recommend/abouttosell/1.jpg" alt=""></li>
              <li><img src="../../../../static/images/recommend/abouttosell/1.jpg" alt=""></li>
              <li><img src="../../../../static/images/recommend/abouttosell/1.jpg" alt=""></li>
            </ul>
      </div>
    </div>
    <div class="shop">
      <div class="shoppingCar"><span></span></div>
      <div class="buy">委托竞拍</div>
      <div class="help"><span></span></div>
    </div>
  </div>
</template>

<style scoped>
#container {
      font-size: 16px;
      font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
      padding-bottom: 37px;
}

/*图片展示区*/
.picture {
    max-width: 100%;
    max-height: 9.5rem;
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    display: block;
    padding: .2rem 0;
}

/*图片下方按钮*/
.list ul {
  width: 100%;
  margin-top: -0px;
}

.list ul li {
  display: inline-block;
  width: 25%;
  height: 50px;
  background-color:#2b2929;
  opacity: 0.5;

}

.list ul li:not(:first-child) {
  margin-left: -4.8px;
}

.list ul li div.littleList {
  position: absolute;
  display: block;
  margin-top: -75px;
  margin-left: 20px;
  text-align: center;
  width: calc(100%/4);
}

.list ul li div.littleList div {
  background-color: #2b2929;
  height: 25px;
  color: white;
  padding: 5px 0
 }

.list ul li div.littleList div:first-child {
  margin-bottom: 2px;
}

.list ul li span {
  display: block;
  width: 100%;
  height: 50px;
}

.list ul li span.rightArrow {
  background:url(../../../../static/images/recommend/detailpage/RightArrow.png) 50% 50% no-repeat;
}

.list ul li span.leftArrow {
  background:url(../../../../static/images/recommend/detailpage/LeftArrow.png) 50% 50% no-repeat;
}

.list ul li span.check {
  background:url(../../../../static/images/recommend/detailpage/save.png) 50% 50% no-repeat;
}

.list ul li span.collect {
  background:url(../../../../static/images/recommend/detailpage/collect.png) 50% 50% no-repeat;
}

/*作品名字*/
.paintingTitle {
  line-height: 1rem;
  padding-left: 0.5rem;
}

/*公共样式*/
.subTitle {
  line-height: 40px;
  padding-left: 0.5rem;
  background-color: #808080;
  color: #fff;
}

.description span {
  width: 30%;
  padding: 10px 0 10px 0.5rem;
  display: inline-block;
  line-height: 22px;
  text-align: left;
}

.description span.secondPart {
  width: 60%;
  padding: 0;
  text-align: center;
}

/*细节*/
.paintingDetails span.top {
 vertical-align: top;
}
.paintingDetails span.clasify {
  text-align: left;
}

/*相关拍品*/
.relativeDetails ul {
  width: 100%;
  padding: 20px 0;
}

.relativeDetails ul li {
  display: inline-block;
  width:33.3%;
}

.relativeDetails ul li:not(:first-child) {
  margin-left: -5px;
}

.relativeDetails ul li img {
  display: block;
  width: 2.5rem;
  height: 3rem;
  margin:0 auto;
}

/*购物车*/
.shop {
  width: 100%;
}

.shop>div {
  width: 33.3%;
  height: 1.2rem;
  background-color: #808080;
  display: inline-block;
}

.shop>div:not(:first-child) {
  margin-left: -5px;
}

.shop>div span {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.shop>div.shoppingCar span {
  background:url(../../../../static/images/recommend/detailpage/shoppingcar.png) 50% 50% no-repeat;
}

.shop>div.buy {
  line-height: 1.2rem;
  text-align: center;
  vertical-align: top;
  color: white;
  font-size: 18px;
}

.shop>div.help span {
  background:url(../../../../static/images/recommend/detailpage/consult.png) 50% 50% no-repeat;
}
</style>

<script>
export default{
  name:'DetailPage',
  data:function(){
    return{
      items:'',
      totalItems:[],
      check:false
    }
  },
  methods:{
    // 箭头增加
    increase:function(){
      if(this.$store.state.paint.num<this.totalItems.length-1){
        this.$store.dispatch('paintingincrease');
        var a = this.$store.state.paint.num;
        this.items = this.totalItems[a]
      }else{
        return false;
      }
    },
    decrease:function(){
      if(this.$store.state.paint.num>0){
        this.$store.dispatch('paintingdecrease');
        var a = this.$store.state.paint.num;
        this.items = this.totalItems[a]
      }else{
        return false;
      }
    },
    toggle:function(){
      this.check = !this.check;
    }
  },
  mounted:function(){
    window.onscroll = null;
    this.$http.get('../../../../static/data/recommend/detail.json').then((response)=>{
      this.totalItems = response.body;
      var number = this.$store.state.paint.num;
      this.items = response.body[number]
    })
  }
}
</script>
