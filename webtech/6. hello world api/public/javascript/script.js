$(document).ready(function(){
	$.ajax({
		method:'get',
		url:'http://localhost:3000/messages/output',
		dataType: 'json',
        success: function(data) { 
			for(i=0; i<data.length; i++)
				$('.messageContainer').append("<div class='messageBox' style='box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);width:50%;margin:auto;background-color:white;'><h1 class='username'style='box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);color:white;background-color:#22AA4B;width:60%;text-align:center;padding:10px;margin:auto;'>"+data[i].user+"</h1><p class='userMessage' style='text-align:center;'>"+data[i].message+"</p></div");
		}
	});
});