    $(function() {
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            // $('#weather-cards').append(`<div>
            //         <div class="card-header text-center">
            //             ${formatTime(data.dt)}
            //         </div>
            //         <ul class="list-group list-group-flush">
            //             <li class="list-group-item text-center">${data.main.temp_max} / ${data.main.temp_min}</li>
            //             <li class="list-group-item">Humidity: ${data.main.humidity}</li>
            //             <li class="list-group-item">Wind: ${data.wind.speed}</li>
            //             <li class="list-group-item">Pressure: ${data.main.pressure}</li>
            //         </ul>
            //     </div>`);
        });
        
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
        }).done(function printWeatherCards(data){
                for(let i=0; i < data.list.length; i++){
                    let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
                    if(i % 8 === 0){
                        console.log("inside card for loop if statement" + i);
                        $(`#card`).append(`
                    <div class="card text-center col-2 mx-2" style="width: 12.5rem;">
                        <div class="card-header bg-light">
                            ${seperatedDateAndTime[0]}
                        </div>
                        <img src="http://openweathermap.org/img/w/[icon].png" rel="icon">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data.list[i].main.temp}</li>
                            <li class="list-group-item">Description: ${data.list[i].weather[0].description}</li>
                            <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                            <li class="list-group-item">Wind: ${data.list[i].wind.speed}</li>
                            <li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>
                        </ul>
                    </div>
                    `);
                    }
                    }
                });
        
    });
    
    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });