$(document).ready(function() {
    // on récupère le container parent auquel on souhaite ajouter les personnes
    var $parent = $('.carrousel-slick');
    // on boucle sur le tableau des personnes
    for (var i = 0; i < personnes.length; i++) {

        var $carrouselslide=$('<div class="carrousel-slide">');
        var $card=$('<div class="card mx-1">');
        var $cardbody=$('<div class="card-body">');
        var $cardtitle=$('<h4 class="card-title">');
        $cardtitle.text(personnes[i].prenom + ' ' + personnes[i].nom);
        $cardbody.append($cardtitle);
        $card.append($cardbody);
        $carrouselslide.append($card);
        $parent.append($carrouselslide);
    }
});

/* <div class="carrousel-slide">
<div class="card mx-1">
   <script> document.write('<img class="card-img-top" src="' + personnes[0].avatar + '" alt="Card image">') </script>

   <!-- <script> document.write('<div class="card-body">'+ 'style="background-color:' + personnes[0].couleur + '"' ) </script> -->

    <div class="card-body">
        <p style="background-color:greenyellow"> </p>
        <h4 class="card-title"><script> document.write(personnes[0].prenom) </script> <script> document.write(personnes[0].nom) </script></h4>
        <p class="card-text tel">Tél :
            <script>
                document.write(personnes[0].tel)
            </script>
        </p>
        <p class="card-text maPosLat">
            <span class="maPosLat">Lat : <script> document.write(personnes[0].lat) </script></span>
            <span class="maPostLon">Long : <script> document.write(personnes[0].long) </script></span>
        </p>
        <button type="button" class="btn btn-primary" onclick="javascript:watchPosition()">Activation</button>
        <button type="button" class="btn btn-primary" onclick="javascript:clearRoute()">Clear</button>
    </div>
</div>
</div> */