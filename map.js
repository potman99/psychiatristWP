
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('#map').length > 0)
    {
      if (document.querySelector('html').lang)
        lang = document.querySelector('html').lang;
      else
        lang = 'en';
  
      var js_file = document.createElement('script');
      js_file.type = 'text/javascript';
      js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBU4tmBmAzqW5mH3Lj_jK680FmhBRu0WT8&callback=initMap';
      document.getElementsByTagName('head')[0].appendChild(js_file);
    }
  });
  
  
  function initMap(){

    var pos = {lat: 50.947788, lng: 21.372892};

    var map = new google.maps.Map(
        mapDOM,
        {zoom:17,center:pos}
    );

    var contentString = `<h2><a href=${posLink}>Sienkiewicza 80,<br> 27-400, Ostrowiec Świętokrzyski</a></h2>`

    var info = new google.maps.InfoWindow({
        content:contentString
    });

    var marker = new google.maps.Marker({
        position: pos, map:map
    });

    info.open(map,marker);

}