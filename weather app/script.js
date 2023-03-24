const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'afc79ed904msh148ada5c25e3f34p1ded2ajsn2e1d93e4f341',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    city_name.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloudpctny.innerHTML = response.cloud_pct
        tempny.innerHTML = response.temp
        feels_likeny.innerHTML = response.feels_like
        humidityny.innerHTML = response.humidity
        min_tempny.innerHTML = response.min_temp
        max_tempny.innerHTML = response.max_temp
        wind_speedny.innerHTML = response.wind_speed
        wind_degreesny.innerHTML = response.wind_degrees
        sunriseny.innerHTML = response.sunrise
        sunsetny.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloudpctsg.innerHTML = response.cloud_pct
        tempsg.innerHTML = response.temp
        feels_likesg.innerHTML = response.feels_like
        humiditysg.innerHTML = response.humidity
        min_tempsg.innerHTML = response.min_temp
        max_tempsg.innerHTML = response.max_temp
        wind_speedsg.innerHTML = response.wind_speed
        wind_degreessg.innerHTML = response.wind_degrees
        sunrisesg.innerHTML = response.sunrise
        sunsetsg.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloudpcttk.innerHTML = response.cloud_pct
        temptk.innerHTML = response.temp
        feels_liketk.innerHTML = response.feels_like
        humiditytk.innerHTML = response.humidity
        min_temptk.innerHTML = response.min_temp
        max_temptk.innerHTML = response.max_temp
        wind_speedtk.innerHTML = response.wind_speed
        wind_degreestk.innerHTML = response.wind_degrees
        sunrisetk.innerHTML = response.sunrise
        sunsettk.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloudpctps.innerHTML = response.cloud_pct
        tempps.innerHTML = response.temp
        feels_likeps.innerHTML = response.feels_like
        humidityps.innerHTML = response.humidity
        min_tempps.innerHTML = response.min_temp
        max_tempps.innerHTML = response.max_temp
        wind_speedps.innerHTML = response.wind_speed
        wind_degreesps.innerHTML = response.wind_degrees
        sunriseps.innerHTML = response.sunrise
        sunsetps.innerHTML = response.sunset
    })
    .catch(err => console.error(err));