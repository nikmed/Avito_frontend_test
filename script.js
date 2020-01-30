var requestURL = 'http://134.209.138.34/items';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var response = request.response;
  fillTab(response)
}



function fillTab(jsonObj)
{
  document.body.innerHTML += "<dd>"

  for (var i = 0; i < jsonObj.length; i++)
  {
    document.body.innerHTML += "<dl>" + "<a href='second_page.html?" + jsonObj[i]['id'] + "''>" + "<img src=" + jsonObj[i]['previewImage'] + ">" + "</dl><dt>"  + jsonObj[i]['title'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['address'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['price'] + "</dt>"
    document.body.innerHTML += "<dt>" + jsonObj[i]['id'] + "</dt>"
  }


}
