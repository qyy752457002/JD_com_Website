$(document).ready(function(){	

	/*
		.hover() 是一个 jQuery 方法，用于设置鼠标悬停在元素上时要执行的函数。
		这里只提供了一个函数，它将在鼠标悬停在指定元素上时执行。
	*/
	$('#top #top_main .topright ul li .vip').hover(function(){

		// $(this) 引用当前被鼠标悬停的 .vip 类元素。
		$(this).css('background-position','0px -15px');

	},


	function(){

		$(this).css('background-position','0px 0px');

	}


	);


	$('#top #top_main .topright ul li').hover(function(){


		$(this).find('.phonetu').css('background-position','-128px -399px');


	},


		function(){

			$(this).find('.phonetu').css('background-position','-128px -360px');

		}
	);


	$('#serach .sou .kuang').click(function(){

		/*
			这是在 click 函数内执行的代码。
			$(this) 引用当前被点击的 .kuang 类元素。
			.val('') 是一个用于设置元素值的方法。它将选中元素的值设置为空字符串 ('')。
		*/
		$(this).val('');
	});


	/*

		setInterval(auto, 2000);：
		这行代码设置了一个定时器，每隔 2000 毫秒（即2秒）自动调用 auto 函数一次。
		setInterval 是 JavaScript 的一个内置函数，用于定期执行指定的函数。
		----------------------------------------------------------------------------------------------

		var n=1;：
		这里声明了一个变量 n 并初始化为 1。
		这个变量将在 auto 函数中使用，用于控制当前激活的导航项。
		----------------------------------------------------------------------------------------------

		函数 auto 的定义：
		这个函数用于计算新的导航项索引并更新导航栏的状态。
		----------------------------------------------------------------------------------------------

		var newn = n % 2;: 
		在函数内，首先计算 newn，它是 n 除以 2 的余数。
		这意味着 newn 的值将在 0 和 1 之间交替。
		----------------------------------------------------------------------------------------------

		$('#daohang .dhright .dhtu ul li').eq(newn).addClass('on').siblings().removeClass('on');：
		这行代码更新导航栏的状态，使索引为 newn 的 <li> 元素激活（添加 'on' 类），并移除其他兄弟元素的激活状态。
		----------------------------------------------------------------------------------------------

		n++;：
		在函数的最后，n 的值增加 1，为下一次函数调用准备。

	*/
	
	setInterval(auto, 2000);

	var n=1;


	function auto(){

		var newn = n % 2;

		$('#daohang .dhright .dhtu ul li').eq(newn).addClass('on').siblings().removeClass('on');

		n++;
	}

  // 大图轮播区域效果


	$('.nav li').mouseover(function(){

		clearInterval(time);

		index = $(this).index();

		nowzt(index);

	});


	$('.nav li').mouseout(function(){


		time = setInterval(lubo, 3000);


	});


	$('.pic li').mouseover(function(){


		clearInterval(time);


		/*
			这是一个 jQuery 方法，用于返回选定元素在其同级元素中的索引。
			索引是基于 0 的，意味着第一个同级元素的索引是 0，第二个是 1，依此类推。
		*/

		/*
			<li style="display:block"><img src="images/z1.jpg" alt="" /></li>
			<li><img src="images/z2.jpg" alt="" /></li>
			<li><img src="images/z3.jpg" alt="" /></li>
			<li><img src="images/z4.jpg" alt="" /></li>
			<li><img src="images/z5.jpg" alt="" /></li>
			<li><img src="images/z6.jpg" alt="" /></li>
		*/
		index = $(this).index();

		nowzt(index);

	});


	$('.pic li').mouseout(function(){


		time = setInterval(lubo, 3000);


	});


	//时钟轮播


	var time = setInterval(lubo, 3000);


	//索引


	index = 0;


	function lubo(){


		//判断索引 如果index已经到最后一个,就把它赋值0


		//结果 = 条件表达式?真:假;


		index = index == 5 ? 0 : ++index;


		//当前状态


		nowzt(index);


	}





	function nowzt(index){


		//更新轮标class

		/*
			$('.nav li')：

			这是一个 jQuery 选择器，用于选择所有的 <li> 元素，这些元素是类为 .nav 的元素的子元素。
			这通常意味着选择导航栏中的所有列表项。

			--------------------------------------------------------------------------------------
			.eq(index)：

			.eq() 方法用于选择匹配的元素集合中指定索引的元素。
			index 是一个变量，它指定了要选择的 <li> 元素的索引。例如，如果 index 是 0，则选择第一个 <li> 元素。

			--------------------------------------------------------------------------------------
			.addClass('on')：

			该方法为所选元素添加一个类，这里添加的是 'on' 类。
			添加 'on' 类通常用于应用某些特定样式，如高亮显示当前选中的导航项。

			--------------------------------------------------------------------------------------

			.siblings().removeClass('on')：

			.siblings() 方法选择所选元素的所有兄弟元素，即在这种情况下，选择除了当前选中的 <li> 之外的所有 <li> 元素。
			.removeClass('on') 从这些兄弟元素中移除 'on' 类，这样做是为了确保没有其他元素保持高亮状态。

		*/


		$('.nav li').eq(index).addClass('on').siblings().removeClass('on');


		//轮播图片


		$('.pic li').eq(index).fadeIn().siblings().hide();


	}





	  // 大图轮播区域结束





	   $('#main .mainleft .liulan .liuleft').hover(function(){


	   		$('#main .mainleft .liulan .liuleft .lefttu').css(


	  		{'background-position':'1px -6px','background-image':'url(images/15.png)'});


	  		$(this).css('background','#F3F3F3');


	   },


	   function(){


	   		$('#main .mainleft .liulan .liuleft .lefttu').css(


	  		{'background-position':'-83px -51px','background-image':'url(images/16.png)'});


	  		$(this).css('background','white');


	   }


	   );





	 $('#main .mainleft .liulan .liuright').hover(function(){


	 		$('#main .mainleft .liulan .liuright .righttu').css(

			
			/*
				{'background-position':'5px -42px'}：这设置了背景图像的位置。5px 表示背景图像从左边边缘向右移动 5 像素，
													 - 42px 表示从顶部向下移动 42 像素（由于是负值，实际上是向上移动）。

				{'background-image':'url(images/15.png)'}：这设置了背景图像。图像的路径是 images/15.png，
															这意味着它会加载相对于当前页面或 CSS 文件位置的 images 文件夹中名为 15.png 的图片作为背景。

			*/

	  		{'background-position':'5px -42px','background-image':'url(images/15.png)'});

			
			/*
				.css('background','#F3F3F3')：这是 jQuery 的 .css() 方法，用于改变选定元素的样式。
				在这个例子中，它将元素的 background（背景）属性设置为颜色 #F3F3F3，这是一种浅灰色调。
			*/

	  		$(this).css('background','#F3F3F3');
	 },


	 function(){


	 		$('#main .mainleft .liulan .liuright .righttu').css(


	  		{'background-position':'-50px -51px','background-image':'url(images/16.png)'});


	  		$(this).css('background','white');


	 }


	 ); 





	 // 点击移动


	 var width=606;


	 var w=0;


	 $('#main .mainleft .liulan .liuleft .lefttu').click(function(){


	 	w--;


	 	w = w == -1 ? 3 : w;


	 	// stop(0,1)立刻完成前面的动画


	 	$('#main .mainleft .liulan .liucenter ul').stop(0,1).animate({left:-w*width});


	 });


	  $('#main .mainleft .liulan .liuright .righttu').click(function(){


	 	w++;


		w %= 4;


		$('#main .mainleft .liulan .liucenter ul').stop(0,1).animate({left:-w*width});


	 });





	  $('#main .mainright .tubiao ul li.xiala').mouseover(function(){


	  	$('#main .mainright .tubiao ul').animate({'top':'-168px'});


	  })


	  $('#main .mainright .tubiao .tubiaola .close').click(function(){


	  	$('#main .mainright .tubiao ul').animate({'top':'0px'});


	  })





	$('#main .mainright .tubiao .tubiaola .close_menu ul li').mouseover(function(){


		var index1=$(this).index();


		$('#main .mainright .tubiao .tubiaola .c_main .box').eq(


			index1).show().siblings('').hide();	


		$(this).css('border-bottom','1px solid white').siblings().css(


			'border-bottom','1px solid #ccc');


	});


	$('#main .mainright .tubiao .tubiaola .c_main .box > ul > li').mouseover(function(){


		var index2=$(this).index();

		/*
			.show()：

			.show() 方法用于显示选定的元素。
			在这个上下文中，它使索引为 index2 的 .jpbox 元素变得可见。

			.siblings('.jpbox').hide()：

			.siblings('.jpbox') 选择所有与当前 .jpbox 元素同级的其他 .jpbox 元素。
			.hide() 方法随后被用于隐藏这些兄弟元素。

		*/

		$('#main .mainright .tubiao .tubiaola .c_main .box .jpbox').eq(index2).show().siblings('.jpbox').hide();


			$(this).css('border-bottom','1px solid #E4393C').siblings().css(


			'border-bottom','1px solid #ccc');	


	});


	// 设置鼠标移入图片，图片向左移动10PX


	$('#lifewindow .lifemain .tuarea1').hover(


	function(){



		/*
			$('#lifewindow .lifemain .tuarea1 img')：

			这是一个 jQuery 选择器，用于选择 ID 为 #lifewindow 的元素下的 .lifemain 类下的 .tuarea1 类中的所有 <img> 元素。
			这可能指向一个或多个图片元素，通常是在一个特定区域或容器内的图片。

			.stop()：

			.stop() 方法用于停止选定元素上当前正在运行的动画。
			这个方法是确保在开始新动画之前停止任何之前可能正在执行的动画，防止动画效果叠加或冲突。

			.animate({'left':'-10px'},300)：

			.animate() 方法用于在选定的元素上应用动画效果。
			{'left':'-10px'} 是动画的目标样式，这里指定元素（图片）的 left 属性变为 -10px，意味着图片将沿水平方向向左移动 10 像素。
			300 是动画持续时间，单位是毫秒，所以这里动画将在 300 毫秒内完成。

		*/

		$('#lifewindow .lifemain .tuarea1 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea1 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea2').hover(


	function(){





		$('#lifewindow .lifemain .tuarea2 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea2 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea3').hover(


	function(){





		$('#lifewindow .lifemain .tuarea3 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea3 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea4').hover(


	function(){





		$('#lifewindow .lifemain .tuarea4 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea4 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea5').hover(


	function(){





		$('#lifewindow .lifemain .tuarea5 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea5 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea6').hover(


	function(){





		$('#lifewindow .lifemain .tuarea6 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea6 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea7').hover(


	function(){





		$('#lifewindow .lifemain .tuarea7 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea7 img').stop().animate({'left':'0px'},300);


	}


	);


	$('#lifewindow .lifemain .tuarea8').hover(


	function(){





		$('#lifewindow .lifemain .tuarea8 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('#lifewindow .lifemain .tuarea8 img').stop().animate({'left':'0px'},300);


	}


	);


	// 设置鼠标移入图片，图片向左移动结束





	// 1F滑块效果开始


	$('#onefloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f1_left=index*158;


			$('#onefloor .one_top ul .huakuai').stop().animate({'left':f1_left+'px'});


			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');





			$('#onefloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 1F滑块效果结束


	// 2F滑块效果开始


	$('#twofloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f2_left=index*158;


			$('#twofloor .one_top ul .huakuai').stop().animate({'left':f2_left+'px'});


			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');





			$('#twofloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 2F滑块效果结束


	// 3F滑块效果开始


	$('#threefloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f3_left=index*158;


			$('#threefloor .one_top ul .huakuai').stop().animate({'left':f3_left+'px'});


			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');





			$('#threefloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 3F滑块效果结束





	// 4F滑块效果开始


	$('#fourfloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f3_left=index*158;


			$('#fourfloor .one_top ul .huakuai').stop().animate({'left':f3_left+'px'});


			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');





			$('#fourfloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 4F滑块效果结束





	// 5F滑块效果开始


	$('#fivefloor .one_top ul li').mouseover(function(){

			var index=$(this).index();

			var f3_left=index*158;

			$('#fivefloor .one_top ul .huakuai').stop().animate({'left':f3_left+'px'});

			$(this).find('h3').css('color','#E4393C');

			$(this).siblings('li').find('h3').css('color','#666');

			$('#fivefloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();

	});


	// 5F滑块效果结束





	// 6F滑块效果开始


	$('#sixfloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f3_left=index*158;


			$('#sixfloor .one_top ul .huakuai').stop().animate({'left':f3_left+'px'});

			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');

			$('#sixfloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 6F滑块效果结束





	// 7F滑块效果开始


	$('#sevenfloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f3_left=index*158;


			$('#sevenfloor .one_top ul .huakuai').stop().animate({'left':f3_left+'px'});


			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');





			$('#sevenfloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 7F滑块效果结束





	// 8F滑块效果开始


	$('#eightfloor .one_top ul li').mouseover(function(){


			var index=$(this).index();


			var f3_left=index*158;


			$('#eightfloor .one_top ul .huakuai').stop().animate({'left':f3_left+'px'});


			$(this).find('h3').css('color','#E4393C');


			$(this).siblings('li').find('h3').css('color','#666');





			$('#eightfloor .onemain .maincenter .cent1').eq(index).show().siblings('.cent1').hide();


	});


	// 8F滑块效果结束





	// 1F轮播图效果开始


	$('#onefloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#onefloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 1F轮播图效果结束





	// 2F轮播图效果开始


	$('#twofloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#twofloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});

		/*

			$(this).css('background','#7ABD54')：

				- $(this) 指的是当前事件处理函数中的元素。这个元素通常是触发某个事件（如点击或悬停）的元素。
				- .css('background','#7ABD54') 将该元素的背景颜色设置为 #7ABD54，这是一种绿色调。

			.siblings('li').css('background','#ccc')：

				- .siblings('li') 选取当前元素的所有 <li> 类型的同级元素（兄弟元素）。
				- .css('background','#ccc') 将这些兄弟元素的背景颜色设置为 #ccc，这是一种浅灰色。


		*/
		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 2F轮播图效果结束





	// 4F轮播图效果开始


	$('#fourfloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#fourfloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 4F轮播图效果结束





	// 5F轮播图效果开始


	$('#fivefloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#fivefloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 5F轮播图效果结束





	// 6F轮播图效果开始


	$('#sixfloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#sixfloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 6F轮播图效果结束





	// 7F轮播图效果开始


	$('#sevenfloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#sevenfloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 7F轮播图效果结束





	// 8F轮播图效果开始


	$('#eightfloor .onemain .maincenter .cent1 .cenlunbo ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*473;


		$('#eightfloor .onemain .maincenter .cent1 .cenlunbo .luntu').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 8F轮播图效果结束








	// 1F右侧轮播图效果开始


	$('#onefloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#onefloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 2F右侧轮播图效果开始


	$('#twofloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#twofloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 2F右侧轮播图效果结束


	// 3F右侧轮播图效果开始


	$('#threefloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#threefloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	// 3F右侧轮播图效果结束





	// 4F右侧轮播图效果开始


	$('#fourfloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#fourfloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	//4F右侧轮播图效果结束





	// 5F右侧轮播图效果开始


	$('#fivefloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#fivefloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	//5F右侧轮播图效果结束





	// 6F右侧轮播图效果开始


	$('#sixfloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#sixfloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	//6F右侧轮播图效果结束





	// 7F右侧轮播图效果开始


	$('#sevenfloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#sevenfloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	//7F右侧轮播图效果结束





	// 8F右侧轮播图效果开始


	$('#eightfloor .onemain .mainright .righttu ul li').mouseover(function(){


		var index=$(this).index();


		var tuleft=-index*209;


		$('#eightfloor .onemain .mainright .righttu .rightlun').stop().animate(


			{'left':tuleft+'px'});


		$(this).css('background','#7ABD54').siblings('li').css('background','#ccc');


	});


	//8F右侧轮播图效果结束





	// 3F图片滑动效果开始


	$('.onemain .maincenter .cent1 .f3tu1 .f3tu1_1').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu1 .f3tu1_1 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu1 .f3tu1_1 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu1 .f3tu1_2').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu1 .f3tu1_2 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu1 .f3tu1_2 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu2').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu2 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu2 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu3 .f3tu1_3').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu3 .f3tu1_3 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu3 .f3tu1_3 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu3 .f3tu1_4').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu3 .f3tu1_4 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu3 .f3tu1_4 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu4').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu4 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu4 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu5 .f3tu1_5').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu5 .f3tu1_5 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu5 .f3tu1_5 img').stop().animate({'left':'0px'},300);


	}


	);





	$('.onemain .maincenter .cent1 .f3tu5 .f3tu1_6').hover(


	function(){





		$('.onemain .maincenter .cent1 .f3tu5 .f3tu1_6 img').stop().animate({'left':'-10px'},300);


	},


	function(){


		$('.onemain .maincenter .cent1 .f3tu5 .f3tu1_6 img').stop().animate({'left':'0px'},300);


	}


	);


	// 3F图片滑动效果结束





	// 京东晒单效果


	$(function(){


		setInterval(function(){


			$('#hot .hotleft .shaidan .shaimain ul li').last().css('height','0');


			$('#hot .hotleft .shaidan .shaimain ul').prepend($('#hot .hotleft .shaidan .shaimain ul li').last());


			$('#hot .hotleft .shaidan .shaimain ul li').first().animate({'height':'80px'},500);


		},5000)


	})


	// 京东晒单效果





	// 京东热门效果


	$(function(){


		setInterval(function(){

			/*
				.last()：

				.last() 是一个 jQuery 方法，用于从匹配的元素集合中选择最后一个元素。
				在这个场景中，它选择 #hot .hotleft .shaidan1 .shaimain ul li 选择器匹配到的所有 <li> 元素中的最后一个。

			*/
			$('#hot .hotleft .shaidan1 .shaimain ul li').last().css('height','0');

			/*
				.prepend() 方法用于在被选元素的开头插入内容。
				这里，它用于在 #hot .hotleft .shaidan1 .shaimain ul 所选的 <ul> 元素的最前面添加新的内容。
			*/

			/*
								<div id="hot">
					<div class="hotleft">
						<div class="shaidan1">
							<div class="shaimain">
								<ul>
									<li>Item 1</li>
									<li>Item 2</li>
									<li>Item 3</li>
									<!-- 更多的 <li> 元素 -->
								</ul>
							</div>
						</div>
					</div>
				</div>
			*/

			/*
					<div id="hot">
						<div class="hotleft">
							<div class="shaidan1">
								<div class="shaimain">
									<ul>
										<li>Item 3</li>
										<li>Item 1</li>
										<li>Item 2</li>
										<!-- 其他 <li> 元素保持原样 -->
									</ul>
								</div>
							</div>
						</div>
					</div>
			*/
			$('#hot .hotleft .shaidan1 .shaimain ul').prepend($('#hot .hotleft .shaidan1 .shaimain ul li').last());


			$('#hot .hotleft .shaidan1 .shaimain ul li').first().animate({'height':'80px'},500);

		},5000)


	});


	// 京东热门效果





// 判断输入框的内容


	$('#hot .hotright .readbottom .shuru').click(function(){


		if($(this).val()=="请输入您的Email地址")


		{

			// 当前点击元素 的值设为 ''
			$(this).val('');


		}	


	});


	$('#hot .hotright .readbottom .shuru').blur(function(){


		if($(this).val()==''){


			$(this).val('请输入您的Email地址');


			$(this).css('color','#999');


		}		


	});


// 判断输入框的内容





// 跳转页面开始


	$(function(){





		$('a').click(function(){


			if(!$(this).attr('href')){


				//打开新页面


				window.open('404.html','_blank');


				return false;


			}


		})


	});


// 跳转页面结束


$(".fu ul li a").click(function(){


        var href = $(this).attr("href");


        var pos = $(href).offset().top;


        $("html,body").animate({scrollTop: pos}, 500);


        return false;


    });





// 悬浮开始





window.onscroll=function(){


		if($(document).scrollTop()>0){


			$('.fu').show();


		}else{


			$('.fu').hide();


		}


		var res=$(document).scrollTop();


		$('.futuhide').css('display','none');


		if(res>1000 && res<1400){


			index = 0;


		}else if (res>1400 && res<1800) {


			index = 1;


		}else if (res>1800 && res<2200) {


			index = 2;


		}else if (res>2200 && res<2600) {


			index = 3;


		}else if (res>2600 && res<3000) {


			index = 4;


		}else if (res>3000 && res<3400) {


			index = 5;


		}else if (res>3400 && res<3800) {


			index = 6;


		}else if (res>3800 && res<4200) {


			index = 7;


		}else{


			index = false;


		}

		index !== false?$('.fu ul li').eq(index).find(

			'.futuhide').css('display','block'):true;

		// $('title').text(res);

}


// 悬浮结束


})

/*
本代码由js代码收集并编辑整理;
尊重他人劳动成果;
转载请保留js代码链接 - www.jsdaima.com
*/