var apikey = '7bJzrp7JmWOfgCCD3m9dzCO4x4Cg3ip4';
var gifViewRow = document.getElementById("gifImages");

$(document).ready(function() {


  function encodeQueryData(data)
  {
     var ret = [];
     for (var d in data)
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
     return ret.join("&");
  }

  function httpGetAsync(theUrl, callback)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
              callback(xmlHttp.responseText);
      }
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.send(null);
  }


  function getGif(query) {
    console.log(query);
    query = query.replace(' ', '+');
    var params = { 'api_key': apikey, 'q': query};
    params = encodeQueryData(params);

    // api from https://github.com/Giphy/GiphyAPI#search-endpoint

    httpGetAsync('http://api.giphy.com/v1/gifs/search?' + params, function(data) {
      var gifs = JSON.parse(data);
      var gif_row ="";
      for (i = 0; i < 5; i++) {
        gif_row +=  "<img src=' " + gifs.data[i].images.fixed_height.url + " '/>";
        console.log(gifs.data[i].images.fixed_width.url);
      }
      gifViewRow.insertAdjacentHTML('afterbegin', gif_row);
      console.log(gifs.data);
    });
  }

  $("#submitButton").on("click", function() {
    var query = document.getElementById("inputQuery").textContent;
    console.log(query);
    getGif(query);
  });
})
