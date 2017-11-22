$(function(){


$.fn.Judage=function(obj){	
	var oP
	var reg=obj.reg;	
   $(this).on("blur",function(){
	var txt=$(this).val()			
	if(reg.test(txt)){		
		oP=$("<p>"+obj.valus+"</p>").addClass("name_oP")
		$(this).parent().append(oP)
	}
})		
   $(this).on("focus",function(){
     $(this).nextAll().remove()				
   })
  
}
  $("#Name").Judage({
		id:"#Name",
		reg:/[\f]/,
		valus:"名字不能含空格"
	   })
  
  $("#Email").Judage({
		id:"#Email",
		reg:/[\W]|[\s]/,
		valus:"Email输入有误"
   })
	$("#Phone").Judage({
		id:"#Phone",
//		全空格字符：^\s*$ \s   匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\r\t\v]
		reg:/[a-zA-z]|[\W]/,
		valus:"电话不能为字母或符号"
	})
	 $("#textarea").Judage({
		id:"#Email",
		reg:/\f/,
		valus:""
   })
	

//点击提交事件
      function BtnClink (){	      	
        var Ntxt=$("#Name").val();
      	var Etxt=$("#Email").val();
      	var Ttxt=$("textarea").val();       	
      	var Ptxt=$("#Phone").val();  
      	var n=0
      	if(!Ntxt){  
      	  var oP=$("<p>这个是必填项喔</p>").addClass("name_oP")     		
		   $("#Name").parent().append(oP)
      	}else{
      		n++
      	}
      	if(!Etxt){     		
      	var oP=$("<p>这个是必填项喔</p>").addClass("name_oP")
		  $("#Email").parent().append(oP)     		
      	}else{
      		n++
      	}
      	if(!Ttxt||Ttxt.length==0){
      	var oP=$("<p>这个是必填项喔</p>").addClass("name_oP")      	
		  $("textarea").parent().append(oP).show(1000)
		}else{
      		n++
      	}
      	if(Ptxt.length>0 && Ptxt.length<6){
      		var oP=$("<p>无效的电话号码</p>").addClass("name_oP")      		     	 
		  $("#Phone").parent().append(oP).show(1000)
      	}
      	if(n==3){
      		$(".c_sublist_name input").val("")
      		$(".c_sublist_email input").val("")
      		$(".c_sublist_phone input").val("")
      		$("#textarea").val("")
      		var oAlert=$("<div>数据提交成功</div>").addClass("oAlert")
      		$(".contact_Cboxs").append(oAlert)
      	}
      }

   $("#btn0").click(function(){  	
       $(".c_sublist_submit span").removeClass("span") 	
       $(".c_sublist_nav input").nextAll().remove()			  	
       $(".c_sublist_nav textarea").nextAll().remove()
       $(".c_sublist_submit span").addClass("span")
	   BtnClink()
})
   
   $(document).keyup(function(ev){
     	$(".c_sublist_nav input").nextAll().remove()			  	
       $(".c_sublist_nav textarea").nextAll().remove()	
   	var e=ev||window.event
   	if(e.keyCode==13){
	   BtnClink()   		
   	}  	   
   })
   

     var Etxt;
   $(".c_select").change(function(){
     Etxt=$("#Email").val() 
     var reg = /\@(.*)$/g;
     Etxt = Etxt.replace(reg,"").trim();
      	$("#Email").val(Etxt+$(this).val())
   	     
   })

 



})
