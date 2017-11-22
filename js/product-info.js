$(function(){
	console.log(localStorage.product_index)
	var product_n=localStorage.product_index//为了实现页面跳转时显示不同的内容
	//获取数据动态添加菜单
	$.ajax({
		type:'get',
		url:'js/product.json',
		dataType:'json',
		success:function(data){
			$.each(data.name,function(k,v){
				var productName=$('<li>').addClass("product_name").html(v)
				$(".productInfo_menu ul").append(productName)
			})
			$(".productInfo_menu ul li").eq(product_n).addClass('On')
		}
	})


	//图片蒙尘的显示隐藏
	$('.productInfo_imgs span').hide()
	$('.productInfo_imgs').mouseenter(function(){
		$(this).children('span').fadeIn(1000)
	})
	$('.productInfo_imgs').mouseleave(function(){
		$(this).children('span').fadeOut(1000)
	})


	//菜单的鼠标划过及点击菜单内容随之改变
	$(".productInfo_menu ul").on("mouseover",'li',function(){
		$(this).siblings().removeClass('Hover')
		$(this).addClass('Hover')
	})
	$(".productInfo_menu ul").on("mouseout",'li',function(){
		$(this).removeClass('Hover')
	})
	fn(product_n)
	$(".productInfo_menu ul").on("click",'li',function(){
		$(this).siblings().removeClass('On')
		$(this).addClass('On')
		product_n=$(this).index()
		fn(product_n)
	})
	
})
function fn(n){
	$.ajax({
		type:'get',
		url:'product.json',
		dataType:'json',
		success:function(data){
			$('.productInfo_con_right>span').html(data.name[n])
			$('.productInfo_summary p').html(data.summary[n])
			$('.productInfo_imgs img').attr('src',data.imgs[n])
			$('.nature_info').html('')
			$.each(data.nature[n],function(k,v){
				var nature=$('<p><span>'+k+'</span>'+v+'</p>')
				$('.nature_info').append(nature)
			})
		}
	})
}