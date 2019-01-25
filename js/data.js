// Données de bouchonnage

var personnes = {
    0:{
        nom:"Ullmann",
        prenom:"Yanis",
        avatar:"img/avatar01.jpg",
        role:"partage",
        couleur:"green",
        tel:"06.06.06.06.07",
        long:"47.301906",
        lat:"1.555031"
    },
    1:{
        nom:"Soudant",
        prenom:"Raphael",
        avatar:"img/avatar01.jpg",
        role:"beneficiaire",
        couleur:"orange",
        tel:"06.06.06.06.08",
        long:"47.301906",
        lat:"1.555031"
    },
    2:{
        nom:"Perroni",
        prenom:"Camille",
        avatar:"img/avatar01.jpg",
        role:"beneficiaire",
        couleur:"orange",
        tel:"06.06.06.06.09",
        long:"47.301906",
        lat:"1.555031"
    },
    3:{
        nom:"AlainGuillaume",
        prenom:"Thomas",
        avatar:"img/avatar01.jpg",
        role:"beneficiaire",
        couleur:"orange",
        tel:"06.06.06.06.10",
        long:"47.301906",
        lat:"1.555031"
    },
    4:{
        nom:"Dupin",
        prenom:"Martin",
        avatar:"img/avatar01.jpg",
        role:"beneficiaire",
        couleur:"orange",
        tel:"06.06.06.06.11",
        long:"47.301906",
        lat:"1.555031"
    },
    5:{
        nom:"Ricou",
        prenom:"Louis",
        avatar:"img/avatar01.jpg",
        role:"beneficiaire",
        couleur:"orange",
        tel:"06.06.06.06.11",
        long:"47.301906",
        lat:"1.555031"
    }
}


// Domicile
var infoposDomicileNom ="Domicile"
var infoposDomicileLat = "47.301906";
var infoposDomicileLong = "-1.555031";


// Travail
var infoposTravailNom ="Travail"
var infoposTravailLat = "47.224553";
var infoposTravailLong = "-1.574735";

// Position courrante
var infoposCourranteNom ="Here !"
var infoposCourranteLat = "47.301906";
var infoposCourranteLong = "1.555031";

// Position ralliement
var infoposRalliementInfo ="Join here !"
var infoposRalliementLat = "";
var infoposRalliementLong = "";

// id Map
var id ="";

// icon

var hereIcon = L.icon({
    iconUrl: 'img/star-3.png',
    iconSize: [32, 37], // size of the icon
    iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -30] // point from which the popup should open relative to the iconAnchor
});

var homeIcon = L.icon({
    iconUrl: 'img/townhouse.png',
    iconSize: [32, 37], // size of the icon
    iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -30] // point from which the popup should open relative to the iconAnchor
});


var workIcon = L.icon({
    iconUrl: 'img/office-building.png',
    iconSize: [32, 37], // size of the icon
    iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -30] // point from which the popup should open relative to the iconAnchor
});

