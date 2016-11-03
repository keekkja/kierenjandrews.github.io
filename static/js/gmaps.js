function initialize() {

    var stylesArray = [{
        "featureType": "all",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }, {
            "grayscale": 100
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "weight": 3
        }, {
            "visibility": "simplified"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }];

    var newStylesArray = [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            //   {
            //     "saturation": 36
            // }, {
            //     "color": "#1F2B3D"
            // }, {
            //     "lightness": 40
            // },
            {
                "visibility": "off"
            }
        ]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "weight": 1.5
        }, {
            "visibility": "simplified"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }, {
            "color": "#ffffff"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 21
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            // "lightness": 37
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 0
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#1F2B3D"
        }, {
            "lightness": -20
        }]
    }];

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

    var styledMap = new google.maps.StyledMapType(newStylesArray, {
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
