$(function(){
	$('.imgs').children('.img_a').hide()
	//动态效果
	$('.product_info').eq(0).animate({top:'10px'},1000)
	setTimeout(function(){
		$('.product_info').eq(1).animate({top:'10px'},1000)
	},300)
	setTimeout(function(){
		$('.product_info').eq(2).animate({top:'10px'},1000)
	},600)
	setTimeout(function(){
		$('.product_info').eq(3).animate({top:'10px'},1000)
	},900)
	$('.imgs').hover(function(){
		$(this).children('.img_a').fadeIn(1000)
		$(this).next().children().animate({width:"260px"},500)
	},function(){
		$(this).children('.img_a').fadeOut(1000)
		$(this).next().children().animate({width:0},500)
	})
	// ajax动态添加内容
	$.ajax({
		type:"get",
		url:'js/product.json',
		dataType:'json',
		success:function(data){
			for(var i=0;i<$('.product_info').length;i++){
				$('.product_info').eq(i).children('p').html(data.summary[i])
				$('.text').eq(i).html(data.name[i])
				$('.imgs').eq(i).children('img').attr('src',data.imgs[i])
			}	
		}
	})
	//页面跳转
	$('.imgs').click(function(){
		var product_index=$(this).parent().index()
		localStorage.product_index=product_index
		// window.location.href='http://localhost/product/product-info.html'
		window.location.href='product-info.html'
		
	})
})