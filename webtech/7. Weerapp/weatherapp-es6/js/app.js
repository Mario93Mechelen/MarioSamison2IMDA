class Weather
{
    constructor(options){
		//set default
		this.weather = localStorage.getItem("weather");
		localStorage.setItem("weather",this.weather);
		this.time = localStorage.getItem("time");
		localStorage.setItem("time",this.time);
		this.latitude="";
		this.longitude="";
		this.apikey=options.apikey;
		
		this.init();
    }
	
	init(){
		this.getMyLocation();
	}
	
	getMyLocation(){
		var that = this;
		navigator.geolocation.getCurrentPosition(function(position) {
  			console.log(position);
			that.latitude = position.coords.latitude;
			that.longitude = position.coords.longitude;
			that.getWeather();
		});
	}
	
	getWeather(){
		var that = this;
		const call = `https://api.darksky.net/forecast/${that.apikey}/${that.latitude},${that.longitude}?units=ca`;
		if(that.time==undefined)
		{
		$.ajax({
			method:'GET',
			url:call,
			dataType:"jsonp"
		}).done(function(response){
			console.log(response);
			that.weather = response.currently.apparentTemperature;
			that.time = new Date().getTime();
			that.storeInCache();
			that.updateUI();
			console.log("this is the first time you visit this page");
		});
		}else{
			that.time = localStorage.getItem("time");
			localStorage.setItem("time",that.time);
			var newTime = new Date().getTime();
			that.time = parseInt(that.time);
			console.log(newTime);
			console.log(that.time);
			console.log(that.time+60*60*1000);
			if(newTime>that.time+60*60*1000){
			$.ajax({
			method:'GET',
			url:call,
			dataType:"jsonp"
			}).done(function(response){
			console.log(response);
			that.weather = response.currently.apparentTemperature;
			that.time = new Date().getTime();
			that.storeInCache();
			that.updateUI();
			console.log("current time is bigger");
			});	
			}else{
				that.weather = localStorage.getItem("weather");
				localStorage.setItem("weather",that.weather);
				console.log("just getting the weather from the cache");
				console.log(localStorage);
				that.updateUI();
			}
		}
		
	}
	
	updateUI(){
		var that = this;
		var hour = new Date().getHours();
		console.info(hour);
		var color;
		var background;
		var info;
		var visibility;
		var pic = "url(images/deer-white.png";
		if((hour<9 && hour>5) || (hour>19 && hour<21)){
			color = "white";
			background = '#3AB795';
			visibility = "url(images/eye-fully.png)";
			info = "It's possible you can spot a deer grazing";
			if(that.weather<0){
			color = "white";
			background = '#246EB9';
			visibility = "url(images/eye-closed.png)";
			info = "It's forbidden to hunt deer when it's snowing";
			}
		}else{
			color="white";
			background = "black";
			visibility ="url(images/eye-partly.png)" ;
			info="You won't possibly spot any deer at this moment of the day";
		}
		$("#temp").append(`<h1 style="color:${color};">${Math.round(that.weather)}°C</h1>`)
		$('#app').css("background-color",background);
		$("#pic").css("background-image",pic);
		$('#info').append(`<h2 style="color:${color};">${info}</h2`);
		$("#visibility").css("background-image",visibility);
	}
	
	storeInCache(){
		var that = this;
		localStorage.setItem("time", that.time);
		localStorage.setItem("weather", that.weather);
	}
	
}


const options = {
    'apikey': '24831460ab8b2fb39b956bc4e04be677',
    'el': '#app'
};

const App = new Weather(options);