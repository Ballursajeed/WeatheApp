
const apiKey="3e8adf17e22095a48df3332cf8ce34b3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector("#cdtn");
async function checkWeather(city) {
 const response = await fetch(apiUrl+ city + `&appid=${apiKey}`) ;
 if (response.status==404) {
  document.querySelector(".error").style.display="block"; 
  document.querySelector(".weather").style.display="none"; 
 }else {
  var data= await response.json();
 document.querySelector("#city").innerHTML= data.name;
 document.querySelector("#tmp").innerHTML= Math.round( data.main.temp)+"°C";
 document.querySelector("#hmd").innerHTML= data.main.humidity+"%";
 document.querySelector("#windSpeed").innerHTML= data.wind.speed+"Km/h";
 
  if (data.weather[0].main == "Clouds") {
  	weathericon.innerHTML="Clouds";
  	}
  	else if (data.weather[0].main == "Clear") {
  		 	weathericon.innerHTML="Clear";
  		}
 	else if (data.weather[0].main == "Rain") {
  		 	weathericon.innerHTML="Rain";
  		}
  	else if (data.weather[0].main == "Drizzle") {
  		 	weathericon.innerHTML="Drizzle";
  		}
   else if (data.weather[0].main == "Mist") {
 	weathericon.innerHTML="Mist";
	  		}
	  		document.querySelector(".weather").style.display="block";
	  		  document.querySelector(".error").style.display="none"; 
 }
 }
 
 searchBtn.addEventListener("click",()=>{
   checkWeather(searchBox.value);
})

 