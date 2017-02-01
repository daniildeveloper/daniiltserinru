ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("ymaps", {
            center: [43.236893, 76.915401],
            zoom: 5
        });
    }