"use strict";

function initMap() {

    // Map options
    const options = {
        zoom: 11.6,
        center: { lat: 37.5407, lng: -77.4360 }
    }

    // creating a new map
    const map = new google.maps.Map(document.getElementById("map"), options);

    const marker1 = new google.maps.Marker({
        position: { lat: 37.56992066130741, lng: -77.4742449297391 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker2 = new google.maps.Marker({
        position: { lat: 37.57145578877037, lng: -77.36407116773164 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker3 = new google.maps.Marker({
        position: { lat: 37.52613921900992, lng: -77.55704652957156 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker4 = new google.maps.Marker({
        position: { lat: 37.51336391413559, lng: -77.43713384741791 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker5 = new google.maps.Marker({
        position: { lat: 37.58636919449926, lng: -77.50485222109893 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker6 = new google.maps.Marker({
        position: { lat: 37.53924821207482, lng: -77.32527475569091 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker7 = new google.maps.Marker({
        position: { lat: 37.60420567740537, lng: -77.53995401391789 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker8 = new google.maps.Marker({
        position: { lat: 37.47395470541021, lng: -77.3720906450579 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker9 = new google.maps.Marker({
        position: { lat: 37.47679856964566, lng: -77.48791915917087 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

    const marker10 = new google.maps.Marker({
        position: { lat: 37.616743869810456, lng: -77.43187253045707 },
        map: map,
        icon: "/images/fridge-icon.png"
    });

}

