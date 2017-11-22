$(function(){
	 new WOW().init();
	$.ajax({
		type:'get',
		url:'js/news.json',
		dataType:'json',
		success:function(data){
			data.forEach(function(json,id){
				$(".contentMi").append(`<li class='wow fadeInRight' data-wow-duration='0.4s' data-wow-delay='${0.1*id}s' data-wow-offset='-500'>
						<div class="left">
							<a href="news.html?id=${id}"><img src="${json.img_s}" alt=""></a>
						</div>
						<div class="right">
							<a href="news.html?id=${id}" class = "tit">${json.title}</a>
							<span class="comment">${json.comment}</span>
							<p class="excerpt">${json.content}</p>
						</div>
					</li>`)
			})
		}
	})
})