/* КАРТА */

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map-pin.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
