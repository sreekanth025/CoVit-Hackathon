function getLocation(marker,map) {
    var latitude; 
    var  longitude; 

    function showPosition(position){
        document.getElementById('gps').innerHTML = "Your location: " + "<br>Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        getData(latitude, longitude);
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else{ 
        document.getElementById('data').innerHTML = "Geolocation is not supported by this browser.";
    }
}
