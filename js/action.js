function afficherPosCallback(position) {
    var infopos = "Position déterminée :\n";
    var infoposCourranteLat = position.coords.latitude;
    var infoposCourranteLon = position.coords.longitude;

    var res = afficherMarker(infoposCourranteLat, infoposCourranteLon, "Ma position");

    //   infopos += "Latitude : " + position.coords.latitude + "\n";
    //   infopos += " / Longitude: " + position.coords.longitude + "\n";
    //   document.getElementById("infoposition").innerHTML = infopos;

};

function errorCallback(error) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("L'utilisateur n'a pas autorisé l'accès à sa position");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("L'emplacement de l'utilisateur n'a pas pu être déterminé");
            break;
        case error.TIMEOUT:
            alert("Le service n'a pas répondu à temps");
            break;
    }
};

function activerGeolocalisation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(afficherPosCallback, errorCallback, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 60000
        });
    } else {
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
    }
}

function afficherPosition() {
    navigator.geolocation.getCurrentPosition(afficherPosCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
    });
}

function joindrePosition(nomUtilisateur) {
    navigator.geolocation.getCurrentPosition(joindrePosCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
    });
    
    if (infoposRalliementLat !== null && infoposRalliementLon !== null) {
        afficherMarker(infoposRalliementLat,infoposRalliementLon,nomUtilisateur);
    }

}

function joindrePosCallback(position) {
    infoposRalliementLat = position.coords.latitude;
    infoposRalliementLon = position.coords.longitude;
};

function watchPosition(){
    id = navigator.geolocation.watchPosition(afficherPosCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
    });
}

function clearRoute(){
    navigator.geolocation.clearWatch(id);

}

function afficherMarker(lat, lon, Nom) {
    L.marker([lat, lon]).addTo(mymap)
        .bindPopup(Nom)
        .openPopup();
    mymap.setView([lat, lon], 13);
}