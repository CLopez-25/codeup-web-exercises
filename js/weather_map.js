    $(function() {
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            console.log(data.main.temp); /* this gets the current temp */
            console.log(data.wind.speed);
            // $('body').append(`<p>The current temperature in ${data.name} is ${data.main.temp}</p>`);
            
        });
    });

        // $.get("http://api.openweathermap.org/data/2.5/onecall", {
        //     APPID: OPEN_WEATHER_APPID,
        //     lat: 29.423017,
        //     lon: -98.48527
        // }).done(function(data) {
        //     console.log(data);
        // });
    
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log("forecasts:");
        console.log(data); 
    });
    
    