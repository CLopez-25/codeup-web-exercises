    $(function() {
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            $('#weather-cards').append(`<div>
                    <div class="card-header">
                        ${formatTime(data.dt)}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${data.main.temp_max} / ${data.main.temp_min}</li>
                        <li class="list-group-item">Humidity: ${data.main.humidity}</li>
                        <li class="list-group-item">Wind: ${data.wind.speed}</li>
                        <li class="list-group-item">Pressure: ${data.main.pressure}</li>
                    </ul>
                </div>`);
        });
        
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
        }).done(function(data) {
        console.log(data); 
        });
    });

    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });