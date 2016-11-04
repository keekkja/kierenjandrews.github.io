function initialize() {

    var stylesArray = [{
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "color": "#f3f4f4"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }, {
            "weight": 0.9
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#83cead"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road",
        "stylers": [{
            "color": "#ffffff"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.arterial",
        "stylers": [{
            "color": "#fee379"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "color": "#fee379"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.local",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "color": "#7fc8ed"
        }, {
            "visibility": "on"
        }]
    }]

    var mapOptions = {
        center: new google.maps.LatLng(-37.817708, 144.967302),
        zoom: 10,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var styledMap = new google.maps.StyledMapType(stylesArray, {
        name: "Styled Map"
    });

    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    // var marker = new google.maps.Marker({
    //     position: mapOptions.center,
    //     map: map,
    // });

    // Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
