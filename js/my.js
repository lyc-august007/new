/*
	* @Author: Administrator
	* @Date:   2018-09-13 09:51:55
	* @Last Modified by:   Administrator
	* @Last Modified time: 2018-09-13 11:24:31
*/
$(function(){
	var num=0;
	var timer;
	// 代码执行太快了，来不及执行动画过程

	$('.screen1').removeClass('one')

	// li绑定点击事件
	$('li').click(function(event) {
		$(this).addClass('current');
		// 把点击和滚动联系起来
		num=$(this).index()
		$(this).siblings().removeClass('current')
		$('section').stop().animate({'top':-100*$(this).index()+'%'})
		$('section>div').eq(num).removeClass('one').siblings().addClass('one')
	});

	// mousewheel事件
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			// d向下滚动-1  向上滚动1
			// console.log(d)
			num=num-d;
			if(num<0){
				num=0;
			}
			if(num>6){
				num=6;
			}
			$('section').stop().animate({'top':-100*num+'%'})
			$('ol li').eq(num).addClass('current');
			$('ol li').eq(num).siblings().removeClass('current')
			$('section>div').eq(num).removeClass('one').siblings().addClass('one')
		},300)
	})

// 函数节流
})