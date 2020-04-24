//api functions


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


function getWorldSummary() {
  fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.text())
    .then(result => parseWorld(result))
    .catch(error => console.log('error', error));
    return parseWorld(result)
};
    

// function getCountrySummary(country) {
//   fetch("https://api.covid19api.com/summary", requestOptions)
//     .then(response => response.text())
//     var json_res = JSON.parse(result);
//     var globalData = {
//         TotalCases = json_res.Global.TotalConfirmed,
//         TotalDeaths = json_res.Global.TotalDeaths,
//         TotalRecovered = json_res.Global.TotalRecovered
//     }

//     //.then(result => parseCountry(country, result))
//     .catch(error => console.log('error', error));
//     return globalData
//     //return result
// };

function parseWorld(res) {
  var json_res = JSON.parse(res);
  var globalData = {
    TotalCases: json_res.Global.TotalConfirmed,
    TotalDeaths: json_res.Global.TotalDeaths,
    TotalRecovered: son_res.Global.TotalRecovered
}
  return globalData
};

function parseCountry(country_target, res) {
  var json_res = JSON.parse(res);

  json_res.Countries.forEach(country => {
    let countrySum = []
    if (country.Country == country_target) {
        countrySum[0] = country.TotalConfirmed;
        countrySum[1] = country.TotalDeaths;
        countrySumy[2] = country.TotalRecovered;
    }
    return countrySum
  });
};

