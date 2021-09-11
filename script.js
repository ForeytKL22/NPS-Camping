var searchBtn = document.querySelector("#search-btn");
var selectedPark = document.querySelector("#park-select");
var campgrounds = document.getElementById("display-campgrounds");    
    
    var getPark = function(park) {
    var apiUrl = "https://developer.nps.gov/api/v1/campgrounds?parkCode=" + park + "&api_key=OVgQRxKePB0p7lftyy4zTtUvwhEp04gCZg3yJQR2";
        fetch(apiUrl)
            .then(function(response) {
            if (response.ok) {
               return response.json()
                .then(function(data) {
                console.log(data);

                campgrounds.innerHTML = "";

                 for (let i = 0; i < data.data.length; i++) {

             


            console.log(data.data[i].name);

            var campgroundList = document.createElement("p");
            campgroundList.classList.add("camplist"); 
            campgroundList.textContent = data.data[i].name;
            campgrounds.appendChild(campgroundList);
            }

                            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.data[0].latitude + "&lon=" + data.data[0].longitude + "&units=imperial&appid=d3f5af43f561d831f34569cf6fef321f")
                                .then(function(response) {
                                    return response.json();
                                })

                                .then(function(data) {

                                    console.log(data);
                                    console.log(data.current.temp);
                                    
                                var todayWeather = document.getElementById("display-weather");

                                todayWeather.innerHTML = "";

                                var dateHeader = document.createElement("h2");
                                var pTemp = document.createElement("p");
                                var pHumidity = document.createElement("p");
                                var pWind = document.createElement("p");
                                var pRain = document.createElement("p");
                                var pUv = document.createElement("p");

                                dateHeader.textContent = "Weather for " + moment.unix(data.daily[0].dt).format("L");
                                todayWeather.appendChild(dateHeader);

                                pTemp.textContent = "Temperature: " + data.current.temp;
                                todayWeather.appendChild(pTemp);

                                pHumidity.textContent = "Humiduty: " + data.current.humidity;
                                todayWeather.appendChild(pHumidity);

                                pWind.textContent = "Wind Speed: " + data.current.wind_speed;
                                todayWeather.appendChild(pWind);

                                pRain.textContent = "Rain: " + data.daily[0].rain;
                                todayWeather.appendChild(pRain);

                                pUv.textContent = "Uv Index: " + data.current.uvi;
                                todayWeather.appendChild(pUv);
            
                                });

                        });
                    }
                });
            }

    var clickSubmitEl = function(event) {
        event.preventDefault();
        var inputEl = selectedPark.value.trim();
        console.log(inputEl);
        if (inputEl) {
            getPark(inputEl);
        } else {
            alert("Select a park.");
        }
    };



    getPark();


    searchBtn.addEventListener("click", clickSubmitEl);