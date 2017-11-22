$(function(){
	// $.fn.extend({
	//     animateCss: function (animationName, callback) {
	//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	//         this.addClass('animated ' + animationName).one(animationEnd, function() {
	//             $(this).removeClass('animated ' + animationName);
	//             if (callback) {
	//               callback();
	//             }
	//         });
	//         return this;
	//     }
	// });
	// $("#test").click(function(){
	// 	$(".news .col").animateCss("fadeInUpBig")
	// })
	// 
	new WOW().init();
	$(".team .dot").click(function(){
		var index=$(this).index();
		var width=$('.team .eng').width();
		$(".team .wrapper").css('left',-width*index+'px')
		$(this).addClass('active').siblings().removeClass('active')
	})
	$('.product a').click(function(){
		localStorage.product_index=$(this).parent('.col').index();
	})
})