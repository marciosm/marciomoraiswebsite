function initMap() {
        var myLatLng = {lat: -23.651072, lng: -46.718696};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Encontre o Wally! Rua Adele, 119.'
        });
}
