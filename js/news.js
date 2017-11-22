$(function(){
	$.ajax({
		type:'get',
		url:'js/news.json',
		dataType:'json',
		success:function(data){
			var result=window.location.href.match(/id=(\d)/);
			if(result){
				var id=Number(result[1]);
				if(id>=0&&id<=data.length-1){
					data.forEach(function(json,id){
						$(".info").append(`<li><i></i><a href="news.html?id=${id}">${json.title}</a></li>`)
					})
					$('.title').text(data[id].title);
					$(".wrapper_img img").attr('src',data[id].img_l);
					$('.content').text(data[id].content);
					if(id==0){
						$(".prev").text('没有了').attr('href','#')
						$(".next").text(data[id+1].title).attr('href','news.html?id='+(id+1))
					}else if(id==data.length-1){
						$(".next").text('没有了').attr('href','#')
						$(".prev").text(data[id-1].title).attr('href','news.html?id='+(id-1))
					}else{
						$(".prev").text(data[id-1].title).attr('href','news.html?id='+(id-1))
						$(".next").text(data[id+1].title).attr('href','news.html?id='+(id+1))
					}
					return;
				}
			}
			window.location.href='news.html?id=0';
		}		
	})
})