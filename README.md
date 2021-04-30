# live_weather_forecast-SAP-MII

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- Main content: shift it to the right by 250 pixels when the sidebar is visible -->
<div class="w3-main" style="margin-left:250px">

  <div class="w3-row w3-padding-64">
   
<!-- Home -->
   <div class=" w3-container">
      <p>We are going to create a SAP MII application to display weather forecast information using an API. I have used OpenWeatherMap service to implement this with SAP MII. We will just grab the weather information provided by the API and display it in the application.<br><br>
This is one of the best API service that provides weather forecast. It provides tremendous volume of weather data regularly. It is a free service with limited access. For basic usage, it should be sufficient and for advanced you may have to pay for it. Integrating this API with a SAP MII application is easy. The following three steps are used for the integration.
</p>

<ol>
  <li> Get API key</li>
  <li>Locate city id </li>
  <li>Request weather forecast by sending API key and city id </li>
</ol>


    </div>
  </div>
<!-- Demo Video 
  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="w3-text-teal" id="Demo_Video">Demo Video</h1>
   <video width="600" controls class=" w3-container">
  <source src=" " type="video/mp4">
  <source src=" " type="video/ogg">
  Your browser does not support HTML video.
</video>
  </div>
  </div>
-->

<!-- Get OpenWeatherMap API key --> <div class=" w3-container">
      <h1 class="w3-text-teal" id="Get_OpenWeatherMap"> Get OpenWeatherMap API key</h1>
    
       <ol>
  <li>To get the API key, we need to register with <a href="https://openweathermap.org/">OpenWeatherMap</a> . After signing up, it will redirect us to the profile settings.</li>
  <li>Above the profile settings form, there is a top menu containing several tabs. Click the API keys tab and copy the API key. This will be later used to request API for the weather forecasts.</li>
</ol>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Screenshot%20of%20codes/signup-to-get-api-key.jpg" class="w3-border" alt="Norway" style="padding:16px;width:30%">
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
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Screenshot%20of%20codes/transcation.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
    </div>
 

  

<!-- XML Code to Show Weather Forecasts -->
  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="w3-text-teal" id="XML">XML Code to Show Weather Forecasts</h1>
      <p>This XML code is used to display the weather forecast by decoding the JSON object response. In this section, we access the location, weather description, icon, min-max ranges of the temperature, humidity and wind speed.</p>
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Screenshot%20of%20codes/app-1-code1.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  </div>
  </div>
  
<!-- JSON Code to bind data -->
   <div class=" w3-container">
      <h1 class="w3-text-teal" id="JSON">JSON Code to bind data</h1>
      
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Screenshot%20of%20codes/app-1-code2.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Screenshot%20of%20codes/app-1-code3-linechart.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Screenshot%20of%20codes/app-1-code3-columnchart.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  
    </div>
<!--Output of Weather Forecast using OpenWeatherMap with SAP MII -->
   <div class=" w3-container">
      <h1 class="w3-text-teal" id="Output">Output of Weather Forecast using OpenWeatherMap with SAP MII</h1>
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Output%20ScreenShot/App1-1.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Output%20ScreenShot/App2-2.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
  <br>
  <img src="https://tppraveen.github.io/live_weather_forecast-SAP-MII/Output%20ScreenShot/App2-3.png" class="w3-border" alt="Norway" style="padding:16px;width:100%">
    </div>
 
<!--Download Source Code -->

      <h1 class="w3-text-teal" id="SourceCode">
      <div class="w3-center">
<button class="w3-button w3-white w3-border w3-border-red w3-round-large">

<a href="https://github.com/tppraveen/live_weather_forecast-SAP-MII/tree/main/weather">Download Source Code</a>

</button>
<br>

  </div>

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
