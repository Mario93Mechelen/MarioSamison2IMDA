$(document).ready(function(){
	$.ajax({
		method:'get',
		url:'http://localhost:3000/messages/output',
		dataType: 'json',
        success: function(data) { 
			for(i=0; i<data.length; i++)
				$('.messageContainer').append("<div class='messageBox' style='width:50%;margin:auto;background-color:white;'><h1 class='username'style='color:white;background-color:#22AA4B;width:60%;text-align:center;padding:10px;margin:auto;'>"+data[i].user+"</h1><p class='userMessage' style='text-align:center;'>"+data[i].message+"</p></div");
		}
	});
});