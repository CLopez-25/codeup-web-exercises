$(function () {
    // The weathermap API
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        printWeatherCards(data);
    });
    
    //This is my function for displaying my weather cards and icons with the current weather data inside them
    function printWeatherCards(data) {
        $("#card").html('');
        for (let i = 0; i < data.list.length; i++) {
            let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
            if (i % 8 === 0) {
                console.log("inside card for loop if statement" + i);
                $(`#card`).append(`
                    <div class="card text-center col-3 mx-4" style="width: 12.5rem;">
                        <div class="card-header bg-light">
                            ${seperatedDateAndTime[0]}
                        </div>
                        <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" rel="icon">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data.list[i].main.temp}°F</li>
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
    
    // This is displays the map with the current location being San Antonio
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');
    });

    // This code has my starting marker displayed on San Antonio and when the user searches a new location it creates a new marker and displays the forecast for that location as well as updates the current location text in the navbar.
    const codeupMarker = new mapboxgl.Marker({color: 'black', draggable: true})
        .setLngLat([-98.48962, 29.42784])
        .addTo(map);
    document.getElementById("findButton").addEventListener('click', function (e) {
        e.preventDefault();
        const address = $("#find").val();
        geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {
            $(".mapboxgl-marker").remove();
            const userMarker = new mapboxgl.Marker({color: 'black'}).setLngLat(coordinates).addTo(map);
            map.setCenter(coordinates);
            console.log(coordinates);
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat: coordinates[1],
                lon: coordinates[0],
                units: "imperial"
            }).done(function (data) {
                printWeatherCards(data);
                $("#currentLocation").html(`Current Location: ${data.city.name}`)
            })
        });
    });

    // This code creates a new marker when the user clicks on a new location, and it displays the forecast for that location as well as updates the current location text in the navbar.
    map.on('click', (e) => {
        $(".mapboxgl-marker").remove();
        const userMarker = new mapboxgl.Marker({color: 'black', draggable: true}).setLngLat(e.lngLat).addTo(map);
        map.setCenter(e.lngLat)
        map.setZoom(8)
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: e.lngLat.lat,
            lon: e.lngLat.lng,
            units: "imperial"
        }).done(function (data) {
            printWeatherCards(data);
            $("#currentLocation").html(`Current Location: ${data.city.name}`)
        });
    });
})