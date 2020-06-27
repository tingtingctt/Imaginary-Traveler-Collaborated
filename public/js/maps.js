var map, infoWindow, pos;
var directionsRenderer;
var directionsService;

var user;
// var user = {
//   name: "Sailor Moon",
//   email: "s@s.com",
//   preference: "jazz"
// }

var all = [];
// var all = [
//   {
//     name: "Academy LA",
//     type: "nightclub",
//     coords: { lat: 34.1020, lng: -118.3209 },
//   },
//   {
//     name: "Perry's Beach Cafe",
//     type: "cafe",
//     coords: { lat: 34.0157309, lng: -118.5015921 },
//   },
// ];

var markers = [];

var icons = {
  jazz: {
    icon: "TT_images/jazz.png"
  },
  nightclub: {
    icon: "TT_images/nightclub.png"
  },
  cafe: {
    icon: "TT_images/cafe.png"
  },
  lounge: {
    icon: "TT_images/lounge.png"
  },
  sports: {
    icon: "TT_images/sports.png"
  },
  beer: {
    icon: "TT_images/beer.png"
  }
};


document.addEventListener("DOMContentLoaded", function() {
  $.get("/api/business").then(function(data) {
    for (i=0; i<data.length; i++){
      var place = {
        name: data[i].name,
        type: data[i].type,
        address: data[i].address,
        coords: { lat: data[i].lat, lng: data[i].lng }
      };
      all.push(place);
    };
    console.log(all);
  });

  $.get("/api/user").then(function(data) {
      user = data;
      console.log(user);

      initMap();
      defaultMarkers();
  });

});


// initiate styled map with user location
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    // center: beverlyHills, 
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }]
        // stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
        // stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        // stylers: [{ color: '#1f2835' }]
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
        // stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'off' }]
      }
    ]
  });

  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: "TT_images/sailor.png"
      });

      infoWindow.setPosition(pos);
      infoWindow.setContent('Go Drink!');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter())
    });

  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}



// drop markers
function addMarkerWithTimeout(venue, timeout) {
  console.log(venue);
  window.setTimeout(function() {
    const newMarker = new google.maps.Marker({
      position: venue.coords,
      map: map,
      icon: icons[venue.type].icon,
      animation: google.maps.Animation.DROP
    })
    google.maps.event.addListener(newMarker, "click", function(){
      infoWindow.setContent(
        `<div data-name="${venue.name}">
          <h5 id='title'> ${venue.name} \n </h5> 
          <p>Type: ${venue.type} \n</p> 
          <p>Address: ${venue.address}\n</p> 
          <button class='btn btn-dark btn-sm pano'>TELEPORT</button> &nbsp; 
          <button class='btn btn-dark btn-sm directions'>Directions</button>
        </div>`);
      infoWindow.open(map,newMarker)
    })
    markers.push(newMarker);
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function defaultMarkers(){
  const userPref = all.filter(a => a.type === user.preference);
  for (i=0; i<userPref.length; i++){
      addMarkerWithTimeout({...userPref[i],i}, i * 200);
    }
}

function dropAll() {
  clearMarkers();
  for (var i = 0; i < all.length; i++) {
    addMarkerWithTimeout({...all[i],i}, i * 200);
  }
}

function dropNightclub(){
  clearMarkers();
  const clubs = all.filter(a=> a.type === 'nightclub');
  for (i=0; i<clubs.length; i++){
    addMarkerWithTimeout({...clubs[i],i}, i * 200);
  }
}

function dropJazz(){
  clearMarkers();
  const jazz = all.filter(a=> a.type=== "jazz")
  for (i=0; i<jazz.length; i++){
      addMarkerWithTimeout({...jazz[i],i}, i * 200);
  }
}

function dropCafe(){
  clearMarkers();
  const cafe = all.filter(a=> a.type==="cafe")
  for (i=0; i<cafe.length; i++){
      addMarkerWithTimeout({...cafe[i],i}, i * 200);
    }
}

function dropSports(){
  clearMarkers();
  const sports = all.filter(a=> a.type==="sports")
  for (i=0; i<sports.length; i++){
      addMarkerWithTimeout({...sports[i],i}, i * 200);
    }
}

function dropLounge(){
  clearMarkers();
  const lounge = all.filter(a=> a.type==="lounge")
  for (i=0; i<lounge.length; i++){
      addMarkerWithTimeout({...lounge[i],i}, i * 200);
    }
}

function dropBeer(){
  clearMarkers();
  const beer = all.filter(a=> a.type==="beer")
  for (i=0; i<beer.length; i++){
      addMarkerWithTimeout({...beer[i],i}, i * 200);
    }
}



// show directions
function calculateAndDisplayRoute(destination = {lat: 34.1020, lng: -118.3209}) {
  directionsRenderer.setMap(map);
  directionsService.route(
      {
        origin: pos,
        destination,
        travelMode: 'DRIVING'
      },
      function(response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
}

// directions off
function directionOff(){
  directionsRenderer.setMap(null);
}


// teleport
function panorama(location) {
  $("#map").attr("style", "display:none");
  $("#street-view").attr("style", "display:block");
  var panorama;
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      position: location,
      pov: { heading: 165, pitch: 0 },
      zoom: 1
    });
}

// back to maps
function back(){
    $("#map").attr("style", "display:block");
    $("#street-view").attr("style", "display:none");
}




// -------------------------- onclick events --------------------------

// Teleport
$(document).on('click', ".pano", function(){
  let j = 0;
  for (i=0; i<all.length; i++){
    if (all[i].name === $(this).parent('div').attr("data-name")){
      j = i;
    }
  };
  panorama(all[j].coords);
});

// show directions
$(document).on('click', ".directions", function(){
  let j = 0;
  for (i=0; i<all.length; i++){
    if (all[i].name === $(this).parent('div').attr("data-name")){
      j = i;
    }
  };
  calculateAndDisplayRoute(all[j].coords);
});

// silly animation buttons
$("#cheesy").on("click", function () {
  $("#canvas").attr("style", "display:block");
  daisy();
});

$("#partyOn").on("click", function () {
  $("#club").attr("style", "display:block");
  $("#avatar").attr("style", "animation:dance 2s infinite");
});

$("#beachOn").on("click", function () {
  $("#avatar").attr("src", "TT_images/beach.gif");
});

// stop silly animations
$("#partyOff").on("click", function () {
  $("#club").attr("style", "display:none");
  $("#canvas").attr("style", "display:none");
  $("#avatar").attr("style", "animation:none");
  $("#avatar").attr("src", "TT_images/sailor-moon.gif");
})



// ---------------------------- animation scripts ---------------------------
var ctx;
var imgDrops;
var x = 0;
var y = 0;
var noOfDrops = 10;
var fallingDrops = [];
var canvas = document.querySelector("#canvas");

function draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i=0; i< noOfDrops; i++){
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); 
        fallingDrops[i].y += fallingDrops[i].speed; 
        if (fallingDrops[i].y > window.innerHeight + 70) { 
            fallingDrops[i].y = -70 
            fallingDrops[i].x = Math.random() * window.innerWidth;   
        }
    }
}

function daisy() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        setInterval(draw, 36);

        for (var i = 0; i < noOfDrops; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            fallingDr.image.src = 'TT_images/daisy.png';
            fallingDr["x"] = Math.random() * window.innerWidth;
            fallingDr["y"] = Math.random() * 5;
            fallingDr["speed"] = 3 + Math.random() * 5;
            fallingDrops.push(fallingDr);
        }
    }  
}




