function getData(latitude, longitude){
    data_token = 'a077e6d48a028c210313655c9e008ff0932627b8';
    var data_url = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${data_token}`;
    document.getElementById('data').innerHTML = base;
    
    $.getJSON(data_url, function(json){

        var aqi = json.data.aqi;
        var area;

        if(json.data.city) area = json.data.city.name;
        
        var prop = json.data.iaqi;
        var pm25, pm10, o3, no2, so2, co, t, w, r, h, d, p; 
        
        if(prop.pm25) pm25 = prop.pm25.v;
        if(prop.pm10) pm10 = prop.pm10.v; 
        if(prop.o3) o3 = prop.o3.v;
        if(prop.no2) no2 = prop.no2.v; 
        if(prop.so2) so2 = prop.so2.v; 
        if(prop.co) co = prop.co.v;  
        if(prop.t) t = prop.t.v;
        if(prop.w) w = prop.w.v;  
        if(prop.r) r = prop.r.v; 
        if(prop.h) h = prop.h.v;
        if(prop.d) d = prop.d.v;  
        if(prop.p) p = prop.p.v; 
        
        console.log(aqi, area, pm25, pm10, o3, no2, so2, co, t, w, r, h, d, p);
        var values = [area, aqi, pm25, pm10, o3, no2, so2, co, t, w, r, h, d, p];
        
        document.getElementById('data').innerHTML = base;
        for(var i=2; i<values.length; i++){
            Number(values[i]).toFixed(3);
        }
        for(var i=0; i<values.length; i++){
            if(values[i]){
                document.getElementById(i.toString()).style.display = 'block';
                document.getElementById(i.toString()).append(values[i]); 
            }
        } 
        
    });
}