var searchBtn = document.querySelector("#search-btn");
var selectedPark = document.querySelector("#park-select");
// have one listener that applies to all buttons
    //take some sort of data from whatever button was clicked and use it in your JS


    // function myFunction() {
    //     var x = document.getElementById("park-select").text;
    //     document.getElementById("display-campgrounds").innerHTML = x;
    // };

    


    // function demo(park) {
    //     'http:jfweioawpfjejwapi' + park + 'apikey'
    // }
    
    // demo(code)
    
    
    var getPark = function(park) {
        var apiUrl = "https://developer.nps.gov/api/v1/campgrounds?parkCode=" + park + "&api_key=OVgQRxKePB0p7lftyy4zTtUvwhEp04gCZg3yJQR2";
            fetch(apiUrl)
                .then(function(response) {
                    if (response.ok) {
                        response.json()
                        .then(function(data) {
                            console.log(data);

                            for (let i = 0; i < data.data.length; i++) {

                                var campgrounds = document.getElementById("display-campgrounds");

                                console.log(data.data[i].name);

                                var campgroundList = document.createElement("p");
                                // campgroundList.classList = 
                                campgroundList.textContent = data.data[i].name;
                                campgrounds.appendChild(campgroundList);

                            }


                            // for (let i = 0; i < data.data[i].description; i++) {
                            //     console.log(data[i].description);
                                
                            // }
                        })
                    }
            })
    }




var getWeather = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=imperial&appid=d3f5af43f561d831f34569cf6fef321f";
    
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