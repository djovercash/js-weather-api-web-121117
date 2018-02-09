var API_KEY = "692ae25469c02f8c";
var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";

function getFahrenheits(result){
  return result.hourly_forecast.map(function(data) {
    return data.temp.english
  })
}
  // Your code goes here


function getHours(result){
  return result.hourly_forecast.map(function(data) {
    return data.FCTTIME.hour
  })
  // Your code goes here
}

function generateDataSet(labels, data) {
  let returnObj = { labels: labels,
    datasets: [{
           label: "My First dataset",
           backgroundColor: 'rgb(255, 99, 132)',
           data: data,
         }]
       }
  return returnObj
}
  // Your code goes here

function makeRequest(endpoint, success) {
  // Your code goes here
  return fetch(endpoint).then(res => res.json()).then(json => success(json))
  }
