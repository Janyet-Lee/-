<template>
  <div class="main">
    <div class="choose">
      <span id="choose">筛选拍卖公司</span>
      <select class="selection">
          <option class="options" value="volvo">请选择</option>
          <option class="options" value="saab">横滨国际</option>
      </select>
    </div>
    <ul>
      <li class="show"><router-link active-class="active" to="/liveshow/prensentshow">当前直播</router-link></li>
      <li class="show"><router-link active-class="active" to="/liveshow/historyshow">历史直播</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.active {
  display: inline-block;
  border-bottom: 1px solid red;
  width: 100%;
}

/*头部*/
.choose {
  text-align: center;
  line-height: 37px;
  /*border-bottom: 2px solid  #514F4F;*/
  height: 40px;
  padding-top: 10px;
  padding-bottom: 5px;
}

#choose {
  font-weight: 700;
  font-size: 16px;
  margin-right: .5rem;
}

/*选择框样式*/
.selection {
  width: 6rem;
  max-height: 12rem;
  height: 32px;
  margin-top: 3px;
  border: solid 1px #000;
  font-size: 16px;
  border-radius: 6px;
}

.options {
  width: 5rem;
  border: none;
  font-weight: normal;
  font-size: 16px;
}

/*当前直播历史直播样式*/
.show {
  display: inline-block;
  width: 50%;
  /*border-bottom: 1px solid #ff3c00;*/
  color: #ff3c00;
  text-align: center;
  font-size: 17px;
  line-height: 36px;
  color: #696969;
}

.show:not(:first-child) {
  margin-left: -10px;
}
</style>

<script>
export default{
  name: 'LiveShow'
}
</script>


