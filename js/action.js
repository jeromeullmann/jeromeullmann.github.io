function activerGeolocalisation(){
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(afficherPosCallback, errorCallback, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 60000
        });
    } else {
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
    }
}


function afficherPosCallback(position) {

    // l'objet position est alimenté automatiquement par la position gps

    var infopos = "Position déterminée :\n";
    var infoposCourranteLat = position.coords.latitude;
    var infoposCourranteLon = position.coords.longitude;

    var res = afficherMarker(infoposCourranteLat, infoposCourranteLon, "ici");

    //   infopos += "Latitude : " + position.coords.latitude + "\n";
    //   infopos += " / Longitude: " + position.coords.longitude + "\n";
    //   document.getElementById("infoposition").innerHTML = infopos;

};

function errorCallback(error) {
    console.warn('ERROR(' + error.code + '): ' + error.message);
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("L'utilisateur n'a pas autorisé l'accès à sa position");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("L'emplacement de l'utilisateur n'a pas pu être déterminé");
            break;
        case error.TIMEOUT:
            console.log("Le service n'a pas répondu à temps");
            break;
    }
};



function watchPosition(){

    // la fonction afficherPosCallback reçoit en parametre un objet position du systeme

    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(afficherPosCallback, errorCallback, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 60000
        });
    } else {
        console.log("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
    }
}

function clearRoute(){
    navigator.geolocation.clearWatch(id);

}

function afficherMarker(lat, lon, Nom) {

    switch (Nom) {
        case 'ici' : 
            console.log('ici');
            L.marker([lat, lon], {icon: hereIcon}).addTo(map).bindPopup(Nom);
            map.setView([lat, lon], 16);
            break;
        case 'Domicile' :
            console.log('Domicile');
            L.marker([lat, lon], {icon: homeIcon}).addTo(map).bindPopup(Nom);
            map.setView([lat, lon], 16);
            break;
        case 'Travail' :
             console.log('Travail');
            L.marker([lat, lon], {icon: workIcon}).addTo(map).bindPopup(Nom);
            map.setView([lat, lon], 16);
            break;
        default :
            console.log('default');
    }
    
}

/* function afficherPosition() {
    navigator.geolocation.getCurrentPosition(afficherPosCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    });
} */

/* function joindrePosition(nomUtilisateur) {
    navigator.geolocation.getCurrentPosition(joindrePosCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    });
    
    if (infoposRalliementLat !== null && infoposRalliementLon !== null) {
        afficherMarker(infoposRalliementLat,infoposRalliementLon,nomUtilisateur);
    }

} */

/* function joindrePosCallback(position) {
    infoposRalliementLat = position.coords.latitude;
    infoposRalliementLon = position.coords.longitude;
};
 */