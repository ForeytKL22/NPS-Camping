
var searchFormEl = document.querySelector("#search-form");
// have one listener that applies to all buttons
    //take some sort of data from whatever button was clicked and use it in your JS
var parkId = "";


// function demo(park) {
//     'http:jfweioawpfjejwapi' + park + 'apikey'
// }

// demo(code)


var getPark = function(search) {
    var apiUrl = "https://developer.nps.gov/api/v1/parks?parkCode=grca&api_key=OVgQRxKePB0p7lftyy4zTtUvwhEp04gCZg3yJQR2";
        fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log(data);
                    })
                }
        })
}

getPark();

var clickSubmitEl = function(event) {
    event.preventDefault();
    
    var inputEl = searchFormEl.value;
    if (inputEl) {
        getPark(inputEl);
    } else {
        alert("please select a park.")
    };

};


searchFormEl.addEventListener("submit", clickSubmitEl);