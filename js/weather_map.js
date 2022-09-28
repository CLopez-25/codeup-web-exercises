    $(function() {
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
        });
        
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
        }).done(function(data) {
            printWeatherCards(data);
        });
            
            function printWeatherCards(data){
                for(let i=0; i < data.list.length; i++){
                    let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
                    if(i % 8 === 0){
                        console.log("inside card for loop if statement" + i);
                        $(`#card`).append(`
                    <div class="card text-center col-2 mx-2" style="width: 12.5rem;">
                        <div class="card-header bg-light">
                            ${seperatedDateAndTime[0]}
                        </div>
                        <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" rel="icon">
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
                }
    
        const geocode = (search, token) => {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                }).then(function(data) {
                    console.log(data);
                    return data.features[0].center;
                });
        }
        
        mapboxgl.accessToken = MAPBOX_API_TOKEN;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/dark-v10', // style URL
            center: [-98.4916, 29.4252], // starting position [lng, lat]
            zoom: 10, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        });
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });
        document.getElementById("findButton").addEventListener('click', function (e){
            e.preventDefault();
            const address = $("#find").val();
            geocode(address, MAPBOX_API_TOKEN).then(function (coordinates){
                const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
                map.setCenter(coordinates);
                console.log(coordinates);
                $.get("http://api.openweathermap.org/data/2.5/forecast", {
                    APPID: OPEN_WEATHER_APPID,
                    lat: coordinates[1],
                    lon: coordinates[0],
                    units: "imperial"
                }).done(function(data){
                    console.log("forecasts:")
                    printWeatherCards(data);
                })
            });
        });
    });

    
    
    
    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });