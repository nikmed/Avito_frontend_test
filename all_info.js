var currentURL = window.location.href
var id = currentURL.split('?')[1]
requestId(id)
var image_array
var current_image = 0


function requestId(id)
{
  var requestURL = 'http://134.209.138.34/item/' + id;
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var response = request.response;
    fillTab(response)
  }
}


function fillTab(jsonObj)
{

  document.body.innerHTML += "<dd>"

  for (var i = 0; i < jsonObj.length; i++)
  {
    image_array = jsonObj[i]['images']
    document.body.innerHTML += "<h2><dt>" + jsonObj[i]['title'] + "</dt>"
    document.body.innerHTML += "<dt>" + "<img src = " + image_array[current_image] + " id='main_image'>"
    document.body.innerHTML +=  "<img src='img/left_arrow.png' width=45px heigth=45px onclick='left_arrow()'>" + "<img src='img/right_arrow.png' width=45px heigth=45px onclick='right_arrow()'>" + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['address'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['price'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['description'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['sellerName'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['id'] + "</dt></dd>"
  }


}


function right_arrow() // Открытие следующей картинки(движение вправо)
{
 var obj = document.getElementById("main_image");
  if (current_image < image_array.length-1)  current_image++
   else
     current_image = 0;
     obj.src = image_array[current_image];
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{
 var obj = document.getElementById("main_image");
if (current_image > 0) current_image--;
  else
    current_image = image_array.length-1;
    obj.src = image_array[current_image];
}
