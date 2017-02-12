<template>
  <div id="session-search">
  	<div class="search-box">
  		<div class="input-group">
		  <input type="text" id="org-name" placeholder="请输入拍卖公司">
  		</div>
  		<div class="radio-group">
			<div class="radio-group-h">
				<div class="radio-group-t">分类：</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="lqb" name="good" checked="checked" hidden="true">
						<label for='lqb'></label>
						<span class="span-id">全部</span>
					</div>
				</div>
			</div>
			<div class="radio-group-divider"></div>
			<div class="radio-group-h">
				<div class="radio-group-t">境内：</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="jjll" name="good" hidden="true">
						<label for='jjll'></label>
						<span class="span-id">京津辽鲁</span>
					</div>
				</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="hzsw" name="good" hidden="true">
						<label for='hzsw'></label>
						<span class="span-id">沪浙苏皖</span>
					</div>
				</div>
			</div>
			<div class="radio-group-h">
				<div class="radio-group-t"></div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="my" name="good" hidden="true">
						<label for='my'></label>
						<span class="span-id">闽粤</span>
					</div>
				</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="gxn" name="good" hidden="true">
						<label for='gxn'></label>
						<span class="span-id">甘新宁</span>
					</div>
				</div>
			</div>
			<div class="radio-group-h">
				<div class="radio-group-t"></div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="cyex" name="good" hidden="true">
						<label for='cyex'></label>
						<span class="span-id">川渝鄂湘</span>
					</div>
				</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="sgj" name="good" hidden="true">
						<label for='sgj'></label>
						<span class="span-id">陕赣晋</span>
					</div>
				</div>
			</div>
			<div class="radio-group-h">
				<div class="radio-group-t"></div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="gnqt" name="good" hidden="true">
						<label for='gnqt'></label>
						<span class="span-id">国内其他</span>
					</div>
				</div>
			</div>
			<div class="radio-group-divider"></div>
			<div class="radio-group-h">
				<div class="radio-group-t">境外：</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="gat" name="good" hidden="true">
						<label for='gat'></label>
						<span class="span-id">港澳台</span>
					</div>
				</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="rb" name="good" hidden="true">
						<label for='rb'></label>
						<span class="span-id">日本</span>
					</div>
				</div>
			</div>
			<div class="radio-group-h">
				<div class="radio-group-t"></div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="mg" name="good" hidden="true">
						<label for='gm'></label>
						<span class="span-id">美国</span>
					</div>
				</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="fg" name="good" hidden="true">
						<label for='fg'></label>
						<span class="span-id">法国</span>
					</div>
				</div>
			</div>
			<div class="radio-group-h">
				<div class="radio-group-t"></div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="yg" name="good" hidden="true">
						<label for='yg'></label>
						<span class="span-id">英国</span>
					</div>
				</div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="ozqt" name="good" hidden="true">
						<label for='ozqt'></label>
						<span class="span-id">欧洲其他</span>
					</div>
				</div>
			</div>
			<div class="radio-group-h">
				<div class="radio-group-t"></div>
				<div class="radio-group-item">
					<div class="radio">
						<input type="radio" id="jwqt" name="good" hidden="true">
						<label for='jwqt'></label>
						<span class="span-id">境外其他</span>
					</div>
				</div>
			</div>
		</div>
		<button class="search-btn">搜&nbsp;&nbsp;索</button>
  	</div>
  </div>
</template>

<script>
export default {
	name:'SessionSearch',
	mounted () {
    	var oRadios=document.getElementsByClassName('radio');
    	for (var i = 0; i < oRadios.length; i++) {
    		oRadios[i].addEventListener('click',function(ev){
    			var oSpans=document.getElementsByClassName('span-id');
    			for (var i = 0; i < oSpans.length; i++) {
    				oSpans[i].classList.remove('span-color');
    			}
                if(ev.target.tagName=='LABEL'||ev.target.tagName=='SPAN'){
                	ev.target.parentNode.childNodes[0].checked='true';
                	ev.target.parentNode.childNodes[4].classList.add('span-color');
                }
    		},false)
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*拍品搜索*/
#session-search {
	width: 100%;
    height: 100%;
    margin-top: 5px;
    background-color: #fff;
    font-family: 'microsoft yahei';
}
.search-box {
	width: 100%;
    font-size: 14px;
}

.input-group {
	width: 9rem;
    margin: 0 auto;
}

.input-group input {
	width: 9rem;
    height: 32px;
    font-size: 15px;
    border: 1px solid #9e9e9e;
    padding: 5px 0.5rem;
    margin-top: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    font: inherit;
}

.radio-group {
	width: 9rem;
    margin: 20px auto;
}

.radio-group-t {
	width: 2rem;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
}

.radio-group-item {
	width: 3rem;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    display: inline-block;
}

.radio-group-item .radio {
	display: inline-block;
}

.radio-group-item input {
	vertical-align: middle;
	box-sizing: border-box;
	padding: 0;
	line-height: normal;
	color: inherit;
	font: inherit;
	margin: 0;
	list-style: none;
	border: none;
}

.radio-group-item label {
	vertical-align: middle;
    display: inline-block;
    margin-top: 4px;
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #9e9e9e;
}

.radio-group-item label:after {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    top: -1px;
    left: -1px;
    border: none;
    background: url(../../../../static/images/search/order01.png);
    opacity: 0;
}

input[type=radio]:checked + label:after {
    opacity: 1;
}

.radio span {
	display: inline-block;
	padding-left: 27px;
}

.radio span.span-color {
	color: #ff3c00;
}

.radio-group-divider {
	width: 9rem;
    height: 2px;
    margin: 5px 0;
    border-bottom: 2px solid #666666;
}

.search-btn {
	display: block;
	width: 9rem;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    margin: 25px auto 80px;
    color: #fff;
    background-color: #ff3c00;
    text-align: center;
    border: none;
    font: inherit;
    font-size: 18px;
    border-radius: 5px;
}
</style>
