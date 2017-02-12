<template>
  <div>
    <div class="search">
      <span class="search-icon"></span>
      <input type="text" name="" placeholder ="搜索商品、拍卖会">
    </div>
    <div class="goods-list">
    <ul>
      <li class="list-item first-line"><router-link to="">书画</router-link></li>
      <li class="list-item first-line"><router-link to="">古董</router-link></li>
      <li class="list-item first-line"><router-link to="">书籍</router-link></li>
      <li class="list-item first-line"><router-link to="">家具</router-link></li>
      <li class="list-item first-line"><router-link to="">珠宝</router-link></li>
      <li class="list-item sec-line"><router-link to="">邮币</router-link></li>
      <li class="list-item sec-line"><router-link to="">当代艺术</router-link></li>
      <li class="list-item sec-line"><router-link to="">西洋美术</router-link></li>
      <li class="list-item sec-line"><router-link to="">其它</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/*搜索框*/
.search {
  padding-top: 5px;
  text-align: center;
  height: 35px;
  width: 100%;
  overflow: hidden;
}

.search .search-icon {
  display: inline-block;
  width: 3em;
  height: 33px;
  background: red;
  margin-right: -4px;
  border:1px solid #cdcdcd;
  border-right: none;
  border-radius: 25px 0 0 25px;
  background: url(../../../../static/images/recommend/wap_search1.png) 7px 4px no-repeat;
}

.search input {
  display: inline-block;
  width: 70%;
  height: 33px;
  border: 1px solid #cdcdcd;
  border-left: none;
  vertical-align: top;
  border-radius: 0 25px 25px 0
}

/*商品列表*/
.goods-list {
  margin-top: 3px;
  border-bottom: 1px solid #cdcdcd;
}

.goods-list ul {
  height: auto;
  padding-bottom: 3px;
}

.goods-list .list-item {
  display: inline-block;
  text-align: center;
  padding: 8px 0;
}

.goods-list .first-line {
  width:20%;
}

.goods-list .first-line:not(:first-child) {
  margin-left: -4px;
}

.goods-list .sec-line {
  width: 25%
}

.goods-list .sec-line:not(:first-child) {
  margin-left: -4px;
}

.goods-list .list-item a {
  color: #696969;
  background-color: #FFFFFF;
  font-weight: 700;
  font-family: "Microsoft YaHei" "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
}
</style>

<script>
export default{
  name: 'WaitToShow',
}
</script>
