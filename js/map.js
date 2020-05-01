function initMap(){

    var latitude;
    var longitude;
    var marker; 
        
    var vzm = {lat: 18.106, lng: 83.395}
    var options={
        zoom: 4,
        center: vzm
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    map.addListener('click', function(e){

        document.getElementById('data').innerHTML = base;
        latitude = e.latLng.lat(); 
        longitude = e.latLng.lng(); 

        console.log(latitude);
        console.log(longitude); 

        if(marker) marker.setMap(null);
        var location = {lat: latitude, lng: longitude}
        marker = new google.maps.Marker({position: location, map: map});
        
        getData(latitude, longitude); 
    });
}