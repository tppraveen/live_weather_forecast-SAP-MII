# live_weather_forecast-SAP-MII
we are going to create a SAP MII Project to display weather forecast information using an API. I have used OpenWeatherMap service to implement this with SAP MII. We will just grab the weather information provided by the API and display it in the dashboard.
<!DOCTYPE html>
<html lang="en">
<title>PRAVEEN-Forecast Weather using OpenWeatherMap with SAP MII</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}
.w3-sidebar {
  z-index: 3;
  width: 250px;
  top: 43px;
  bottom: 0;
  height: inherit;
}
#player-overlay {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000        
    z-index:999;
}
</style>
<body>

<!-- Navbar -->
<div class="w3-top">
  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
    <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
    <a href="https://tppraveen.github.io/" class="w3-bar-item w3-button w3-theme-l1">Praveen</a>
    <a href="tel:+918825860181" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Call Me</a>
    <a href="http://wa.me/+918825860181" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Whatsapp</a>
    <a href="mailto:tppkpraveen@gmail.com" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Hire Me !</a>
  </div>
</div>

<!-- Sidebar -->
<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
    <i class="fa fa-remove"></i>
  </a>
  <h4 class="w3-bar-item">
  <a class="w3-bar-item w3-button w3-hover-black" href="#Home">Home</a>
  </h4>
  <a class="w3-bar-item w3-button w3-hover-black" href="#Demo_Video">Demo Video</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#Get_OpenWeatherMap">Get OpenWeatherMap API key</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#Locate">Locate city id</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#Transcation">Transcation to Request Weather Forecast by sending keys and location</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#XML">XML Code to Show Weather Forecasts</a>
  <a class="w3-bar-item w3-button w3-hover-black"  href="#JSON">JSON Code to bind data</a>
  <a class="w3-bar-item w3-button w3-hover-black"  href="#Output">Output of Weather Forecast using OpenWeatherMap with SAP MII</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#Screenshot">Screenshot of codes</a>
  <a class="w3-bar-item w3-button w3-hover-black" href="#SourceCode">Download Source Code</a>
  
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- Main content: shift it to the right by 250 pixels when the sidebar is visible -->
<div class="w3-main" style="margin-left:250px">

  <div class="w3-row w3-padding-64">
      <h1 class="w3-text-teal">Forecast Weather using OpenWeatherMap with SAP MII</h1>
   
<!-- Home -->
   <div class=" w3-container">
      <h1 class="w3-text-teal"  id="Home">Home</h1>
      <p>In this tutorial, we are going to create a PHP application to display weather forecast information using an API. I have used OpenWeatherMap service to implement this with PHP. We will just grab the weather information provided by the API and display it in the application.<br><br>
This is one of the best API service that provides weather forecast. It provides tremendous volume of weather data regularly. It is a free service with limited access. For basic usage, it should be sufficient and for advanced you may have to pay for it. Integrating this API with a PHP application is easy. The following three steps are used for the integration.
</p>

<ol>
  <li> Get API key</li>
  <li>Locate city id </li>
  <li>Request weather forecast by sending API key and city id </li>
</ol>


    </div>
  </div>
<!-- Demo Video -->
  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="w3-text-teal" id="Demo_Video">Demo Video</h1>
   <video width="600" controls class=" w3-container">
  <source src=" " type="video/mp4">
  <source src=" " type="video/ogg">
  Your browser does not support HTML video.
</video>
  </div>
    <div class="w3-third w3-container">
      <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
    </div>
  </div>


<!-- Get OpenWeatherMap API key --> <div class=" w3-container">
      <h1 class="w3-text-teal" id="Get_OpenWeatherMap"> Get OpenWeatherMap API key</h1>
    
       <ol>
  <li>To get the API key, we need to register with <a href="https://openweathermap.org/">OpenWeatherMap</a> . After signing up, it will redirect us to the profile settings.</li>
  <li>Above the profile settings form, there is a top menu containing several tabs. Click the API keys tab and copy the API key. This will be later used to request API for the weather forecasts.</li>
</ol>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
    </div>
  
<!-- Locate city id -->
   <div class=" w3-container">
      <h1 class="w3-text-teal" id="Locate">Locate city id</h1>
      <p>
      By clicking the below link, the cities name will be given in a url. Unzip the file and get the id of the city/state.
<br>
<H6>https://api.openweathermap.org/data/2.5/weather?q={CITY NAME}&appid={API ID}</H6>

<br>
Example:<br>
<a href="https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=60bab3f0f3e6d69db68e049b3990b213">https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=60bab3f0f3e6d69db68e049b3990b213</a>
<br><br>
After loading, it will have the JSON formatted data containing an array of datails. Each array item contains the geodata like latitude, longitude, country, city/state,temp,huminnity, city id.</p>
   
  </div>
<!--Transcation to Request Weather Forecast by sending keys and location -->
   <div class=" w3-container">
      <h1 id="Transcation" class="w3-text-teal">Transcation to Request Weather Forecast by sending keys and location</h1>
      <p>
      This is the Transcation to request the OpenWeatherMap service to get the weather forecasts. While sending the request, the API key and the city id is sent with request URL query string.

I used TEXT LOADER to send the API request. It response will be in a JSON format. we can get the weather data.</p>
    </div>
  </div>
 
<!-- XML Code to Show Weather Forecasts -->
  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="w3-text-teal" id="XML">XML Code to Show Weather Forecasts</h1>
      <p>This XML code is used to display the weather forecast by decoding the JSON object response. In this section, we access the location, weather description, icon, min-max ranges of the temperature, humidity and wind speed.</p>
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
    </div>
    <div class="w3-third w3-container">
      <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      
    </div>
  </div>
  
<!-- JSON Code to bind data -->
   <div class=" w3-container">
      <h1 class="w3-text-teal" id="JSON">JSON Code to bind data</h1>
      
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  
    </div>
  </div>
<!--Output of Weather Forecast using OpenWeatherMap with SAP MII -->
   <div class=" w3-container">
      <h1 class="w3-text-teal" id="Output">Output of Weather Forecast using OpenWeatherMap with SAP MII</h1>
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
    </div>
  </div>
 
<!--Screenshot of codes -->

  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="w3-text-teal" id="Screenshot">Screenshot of codes</h1>
  <br>
      
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://phppot.com/wp-content/uploads/2018/09/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  
    </div>
    <div class="w3-third w3-container">
      <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
    </div>
  </div>

      <h1 class="w3-text-teal" id="SourceCode">
      <div class="w3-center">
<button class="w3-button w3-white w3-border w3-border-red w3-round-large">

<a href="https://github.com/tppraveen/live_weather_forecast-SAP-MII">Download Source Code</a>

</button>
<br>


</div>
</h1>
      
  <footer id="myFooter">
    <div class="w3-container w3-theme-l2 w3-padding-32"><div class="w3-center">
      <h4>Created by <a href="https://tppraveen.github.io/" target="_blank">Praveen Kumar</a></h4> 
    </div></div>

  </footer>

<!-- END MAIN -->
</div>

<script>
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
</script>

</body>
</html>
