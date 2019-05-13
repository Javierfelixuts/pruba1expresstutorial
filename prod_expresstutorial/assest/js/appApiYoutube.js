$(document).ready(function () {
    var repTitulo = document.querySelector("#rep-titulo");

    var key = 'AIzaSyCH3tJmtRcL32R0iczM8noIcROxESE1uvw'; //key de console.google.developers
    var playlistId = 'PL0fLfoZ8stE4keHtPdbpkysuaOqoRSgv_'; //PlaylistId se agarra en la url despues del = 
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems'; //se agarra de documentacion YTBE


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 35,
        playlistId: playlistId
    }

    loadVids();
    loadVidsLoop()
    var contador = 1;
    setInterval(function(){
        contador++;
        if (contador >= 35) {
            contador = 1;
        }else{
           console.log(contador);
        loadVids(); 
        }
        
    }, 240000);
    console.log(contador);
    function loadVids() {
        $.getJSON(URL, options, function (data) {
            console.log("data", data.items);
            var lastVideo = data.items.length - contador;
            var id = data.items[lastVideo].snippet.resourceId.videoId;
            var titleV = data.items[lastVideo].snippet.title;
            var desV = data.items[lastVideo].snippet.description;

            mainVid(id, titleV, desV);
        });
    }
    function loadVidsLoop() {
        $.getJSON(URL, options, function (data) {
            resultsLoop(data);
        });
    }

    function mainVid(id, title, des) {
        console.log("Mi titulo " + title);
        $('.content-video').html(`


            <div class="brand">
                <div class="titulo"> <h4>${title}</h4></div>

            </div>
            <div class="banner">
                <section id="video" class="video-container">
                    <iframe class"mainVideo" width="560" height="315" src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="o" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </section>
                <div class="brand">
                    <h4>Descripcion</h3>
                </div>
                <div class="content-description">
                <p>${des}</p>
                </div>
                
            </div>
            
           `);

    }

    var mainVideo, cordenadaTop;
    function obtenerCordenada(){
     mainVideo = $("#video").position();

     cordenadaTop = mainVideo.top;
 }

 function resultsLoop(data) {

    $.each(data.items, function (i, item) {

        var thumb = item.snippet.thumbnails.medium.url;
        var title = item.snippet.title.substring(0, 25);
        var desc = item.snippet.description.substring(0, 130);
        var vid = item.snippet.resourceId.videoId;



        $('.rowNews').append(`
         <div class="itemNew"   data-key="${vid}" data-title="${title}" data-descrip="${desc}">

         <img src="${thumb}" alt="" class="thumb">
         <div class="newBody">
         <div class="brandTitle">${title}</div>
         <p>${desc}</p>
         </div>

         </div>
         `);
    });
}


$('.rowNews').on('click','.itemNew', function (e) {
    console.log(e.target);
    var id = $(this).attr('data-key');
    var title = $(this).attr('data-title');
    var descri = $(this).attr('data-descrip');
    console.log(title);
    console.log(descri);
    mainVid(id, title, descri);

});

$(document).ready(function() {
	$('.rowNews').on('click','.itemNew', function (){  //referimos el elemento ( clase o identificador de acción )
		obtenerCordenada();
        $('html, body').animate({scrollTop:cordenadaTop}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
        return false;
    });


});


});

















/*$(document).ready(function(){

	var key = 'AIzaSyCH3tJmtRcL32R0iczM8noIcROxESE1uvw ';
	var playlistId = 'PL0fLfoZ8stE4keHtPdbpkysuaOqoRSgv_';
	var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';



var options = {
	part: 'snippet',
	key: key,
	maxResults: 20,
	playlistId: playlistId
}

loadVids();

function loadVids(){
	$.getJSON(URL, options, function(data){
		console.log(data)
	})
}
});

*/