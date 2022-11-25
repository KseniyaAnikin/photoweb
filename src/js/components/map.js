ymaps.ready(init);
    function init(){

        var myMap = new ymaps.Map("map", {
            center: [55.765882066722156,37.60959188903804],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl'],
            breakpoints: {
              500: {
                center: [55.76977615776208,37.62792003430169],
              }
            }
          }
        );

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([55.76977615776208,37.62792003430169], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'images/mappoint.svg',
            iconImageSize: [12, 12],
            iconImageOffset: [-15, -44]
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
    }
