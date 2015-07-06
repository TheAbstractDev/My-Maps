/*jslint browser:true node:true*/
/*global google*/
"use strict";

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
  '&signed_in=true&callback=initialize&libraries=places';
  document.body.appendChild(script);
}

window.onload = loadScript;

var geocoder;
var map;
var directionsDisplay;
var img;
var marker;
var start;
var end;
var autocompleteStart;
var autocompleteEnd;
var autocompleteSearch;

function initialize() {
    var style = [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#f7f1df"
        }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#d0e3b4"
        }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#fbd3da"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#bde6ab"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#ffe15f"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#efd151"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#ffffff"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "black"
        }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#cfb2db"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#a2daf2"
        }
        ]
    }
    ];

    var styledMap = new google.maps.StyledMapType(style,
        {name: "Styled Map"});


    var mapOpts = {
        zoom: 10,
        center: new google.maps.LatLng(33.768333, -118.195556),
        setMap: map,

        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };
    map = new google.maps.Map(document.getElementById("map"), mapOpts);



    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');


    img = "asset/img/marker.png",
    marker = new google.maps.Marker({

        position: new google.maps.LatLng(33.768333, -118.195556),
        map: map,
        title: "Mon Marker",
        animation: google.maps.Animation.DROP,
        draggable : false,
        icon: img,
    });

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

    google.maps.event.addListener(map, 'click', function(event)
    {
        addMarker(event.latLng);
    });

    var autocompleteStart = new google.maps.places.Autocomplete(document.getElementById("start"));
    autocompleteStart.bindTo('bounds', map);

    var autocompleteEnd = new google.maps.places.Autocomplete(document.getElementById("end"));
    autocompleteEnd.bindTo('bounds', map);

    var autocompleteSearch = new google.maps.places.Autocomplete(document.getElementById("place"));
    autocompleteSearch.bindTo('bounds', map);
}



function GetPos(position) {

   var myPlace = new google.maps.LatLng(position.coords.latitude,
     position.coords.longitude);

   var infowindow = new google.maps.InfoWindow({
    map: map,
    position: myPlace,
    content: 'Vous êtes ici.'
});

   map.center(myPlace), function() {
      handleNoGeolocation(true);
  };
}



var fullS = document.getElementById("fullScreen");

function fullScr(e)
{
    var myMap = document.getElementById("map");

    if (myMap.requestFullscreen) {
      myMap.requestFullscreen();
  } else if (myMap.msRequestFullscreen) {
      myMap.msRequestFullscreen();
  } else if (myMap.mozRequestFullScreen) {
      myMap.mozRequestFullScreen();
  } else if (myMap.webkitRequestFullscreen) {
      myMap.webkitRequestFullscreen();
  }

  e.preventDefault();
}

var tmp = 0;
document.getElementById('fullScreen').addEventListener('click', fullScr);


var locateStart = document.getElementById("locateStart");
var locateEnd = document.getElementById("locateEnd");

var clicked = 0;

locateStart.addEventListener('click', function() {
    clicked = 1;
    console.log(clicked);
});

locateEnd.addEventListener('click', function() {
    clicked = 2;
    console.log(clicked);

});


function displayRoute() {

    if (clicked == 0)
    {
        start = document.getElementById("start").value;
        end = document.getElementById("end").value;
    }

    else if(clicked == 1)
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(pos)
            {
                start = new google.maps.LatLng(pos.coortds.latitude,
                 pos.coords.longitude);

                var geocodeStart = new google.maps.Geocoder()
                geocodeStart.geocode({
                    'address': start
                }),

                function(results, status)
                {
                    console.log("start = " + start);

                    if (status == google.maps.GeocoderStatus.OK) {
                        start = results[0];
                    }
                }

                console.log(geocodeStart);
                console.log(start);
                handleNoGeolocation(true);
            });

        }

        else
        {
           handleNoGeolocation(false);
       }
   }

   else if (clicked == 2)
   {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function(posit)
            {
                end = new google.maps.LatLng(posit.coords.latitude,
                 posit.coords.longitude);

                console.log(end);
                handleNoGeolocation(true);
            });

        } 

        else
        {
           handleNoGeolocation(false);
       }
}


console.log(start);
console.log(end);


var request = {
    origin : start,
    destination : end,
    travelMode : google.maps.TravelMode.DRIVING,
};

var directionsService = new google.maps.DirectionsService(); 
directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        marker.setMap(null);
    }
});
}

document.getElementById("itinerary").addEventListener('click', displayRoute);

var localizeBtn = document.getElementById("localize");

localizeBtn.addEventListener('click', function(e) {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(GetPos);

    } else {
        handleNoGeolocation(false);
    }
});

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = "Une erreur est survenue lors de la localisation, s'il vous plait, veuillez réessayer";
} else {
    var content = "Votre naviateur ne supporte pas la géolocalisation";
}
}


function searchPlace() {

   var place = document.getElementById('place').value;

   geocoder = new google.maps.Geocoder()
   geocoder.geocode({
    'address': place
},

function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      map.setZoom(12);
      
      marker.setMap(null);

      marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          animation: google.maps.Animation.DROP,
          draggable : false,
          icon: img,
      });
  } else {
      alert("Désolé, la recherche n'a as pu aboutir...");
  }

});

}

document.getElementById("searchBtn").addEventListener('click', searchPlace);


function addMarker(currentPosition)
{
    marker = new google.maps.Marker({
        map: map,
        position: currentPosition,
        animation: google.maps.Animation.DROP,
        draggable : false,
        icon: img,
    });
}