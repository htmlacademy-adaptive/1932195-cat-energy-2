/* КАРТА */

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [59.938679, 30.3230044],
      zoom: 14,
      controls: []
    });

    const screenWidth = window.innerWidth;

    let iconSize;

    if (screenWidth >= 768) {
      iconSize = [113, 106];
    } else {
      iconSize = [57, 53];
    }

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-pin.png',
      iconImageSize: iconSize,
      iconImageOffset: [-26, -42]
    });

    myMap.geoObjects.add(myPlacemark);
  });
});
