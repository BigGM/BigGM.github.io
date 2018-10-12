
/*
 * La radice dell'albero web.
 * In produzione inserire una stringa vuota come valore,
 * in ambiente locale definire una url completa CON '/' finale
 */
//var G_URL_ROOT = "http://81.29.176.113:47000/"


// Segnala quando e' terminato il riempimento della home page
// con tutte le immagini dei quadri
var G_HOME_FULL_LOADED = true;         // true solo per test


/**
* Popup per i messaggi di errore
**/
function custom_error(output_msg, title_msg) { 
  if (!title_msg) 
    title_msg = 'Error'; 
  bootbox.alert({  
    size: 'medium', 
    title: '<H3 style="color:white;">'+title_msg+"</H3>", 
    message: '<h4><label class="alert alert-danger" style="width:100%;font-weight:normal;">'+output_msg+'</label></h4>',
    draggable:true
  }); 
} // function custom_error(output_msg, title_msg) 


/**
 * Una popup per i messaggi di successo
 **/
function custom_success(output_msg) { 
   bootbox.alert({  
      size: 'medium', 
      title: '<H3 style="color:white;">Success</H3>', 
      message: '<h4><label class="alert alert-success" style="width:100%;font-weight:normal;">'+output_msg+'</label></h4>',
      draggable:true
   });
} // function custom_success(output_msg)


/**
 * Una popup per i messaggi di info
 **/
function custom_info(output_msg) { 
   bootbox.alert({  
      size: 'medium', 
      title: '<H3 style="color:white;">Info</H3>', 
      message: '<h4><label class="alert alert-info" style="width:100%;font-weight:normal;">'+output_msg+'</label></h4>',
      draggable:true,
   }); 
} // function custom_info(output_msg)



/**
 * Estrae il testo plain da una stringa di testo che contiene tag html
 **/
function html_to_plain(str_html) {
   var temp = document.createElement("div");
   temp.innerHTML = str_html;
   return temp.textContent || temp.innerText || "";
}


//var win_width  = $( window ).width();
//var win_height = $( window ).height();

var win_width  = $( '#outer-div' ).width();
var win_height = $( '#outer-div' ).height();

//console.log( win_width + " " + win_height );

function _top(img_height) {
   return (win_height - img_height)/2;
}

function _left(img_width) {
   return (win_width - img_width)/2;
}

function nextRandom(min,max) {
   return Math.floor(Math.random()*(max-min) + min )
}


/**
 * Animazione della label con il nome e cognome del pittore
 */
function animate_massimo() {
 //console.log( 'animate_massimo');
   
   //var delay = 53000;
   //var delay = 39500;
   var delay = 30500;
   
   $('#div-artista').css({zIndex:300})
   $('#div-artista').delay(delay).animate({opacity:1,top:'120px'}, 1000)
   
   $('#label-artista').delay(delay).animate({fontSize:'10vw'}, 1000
   ,function() {
      $('#div-artista').delay(2000).animate({opacity:0,top:'300px'}, 1500)
      $('#autoritratto').css({'display':'block'}).animate({opacity:1}, 1000)
      
      $('#label-artista').delay(2000).animate({fontSize:'13vw'}, 1500
      ,function() {
          $('#div-artista').css({display:'none'})
          $('#div-info-music').animate({top:'-40px'},1000)
          $('#div-menu').animate({top:'0px'},1000)
         
          data_quadri.forEach( function(quadro) {
            if (quadro.pagina==1)
               animate_cuadro_pagina1(quadro);
          });

          // Aggiunge la classe per effetto zoom su tutte le miniature
          data_quadri.forEach( function(quadro) {
            $('#'+quadro.id_div+"-img").addClass('img-quadro2')
          })

          $('#img-sfondo').animate({'opacity':0.1},700).removeClass('filter-sfondo')

          // e segna il completamento della home, questo consente di attivare
          // il click su una immagine (showQquadro e hideQuadro)
          G_HOME_FULL_LOADED = true;
      })
   })
} // animate_massimo


function animate_cuadro3(data) {
   //console.log( 'animate_cuadro3 ' + data.id_div + " delay " + data.start_delay);
 
   var q = $('#anim-'+data.id_div)
   var w = 270*data.zoom
   var h = w*(data.h_img/data.w_img)
   
   q.css({width:w+'px', height:h+'px', zIndex:500, top:data.start_top, left:data.start_left})
   
   var bezier_params = {
      start: {
         x: data.start_left,
         y: data.start_top,
         angle: 337.873,
         length: 0.561
      },
      end: {
         x: data.end_left,
         y: data.end_top,
         angle: 316.960,
         length: 0.435
      }
   };
   
   var bezier_params2 = {
      end: {
         x: data.start_left,
         y: data.start_top,
         angle: 337.873,
         length: 0.561
      },
      start: {
         x: data.end_left,
         y: data.end_top,
         angle: 316.960,
         length: 0.435
      }
   };
   
   var bezier_params3 = {
      start: {
         x: data.start_left,
         y: data.start_top,
          angle: 344.634,
              length: 0.539
      },
      end: {
         x: data.end_left,
         y: data.end_top,
        angle: 320.169,
              length: 1.111
      }
   };

   var durata = nextRandom(8700,9600)
   var durata2 = nextRandom(8700,9600)
   //var durata3 = nextRandom(9500,11000)
   
   q.delay( data.start_delay )
    .css({opacity:1.0})
    .animate( {path: new $.path.bezier(bezier_params)}, durata )
    .animate( {path: new $.path.bezier(bezier_params2)}, durata2 )
    //.animate( {path: new $.path.bezier(bezier_params3)}, durata3)
    
} //animate_cuadro3()



function animate_cuadro(data) {
  console.log(data)
  var q = $('#anim-'+data.id_div)
  var w = 270*data.zoom
  var h = w*(data.h_img/data.w_img)
  
  q.css({width:w+'px', height:h+'px', zIndex:500, top:data.start_top, left:data.start_left})

  let left1 = (1300-w)/2 + nextRandom(-200,200) + 'px'
  let top1 = (650-h)/2 + nextRandom(-150,150) + 'px'

  var durata1 = nextRandom(2000,3000)
  var durata2 = nextRandom(5000,6000)

  q.delay( data.start_delay )
   .animate({top:top1, left:left1,opacity:0.95}, durata1, 'easeOutQuad', function() {
      q.animate({width:3*w+'px', height:3*h+'px',opacity:0.1, top:data.start_left, left:data.start_top},durata2,'easeInBack', function() {
         q.css({'display': 'none'})
      })
   });
}


function animate_cuadro_pagina1(data) {
   var q = $('#'+data.id_div);
   q.css({display:'block'}).animate( {opacity:1}, 1000);
}
   


/**
 * Attiva le animazioni delle miniature che riempiono la home page
 **/
function startAnimation() {
   
  if (screenfull.enabled) {
		screenfull.request();
	} else {
		// Ignore or do something else
  }
   
   // nasconde il pulsante di avvio
   $('#btn-start').fadeOut(500, () => {
      $('#btn-start').css({'display':'none'});
   });
  
   // mostra l'informazione sulla musica di background
   $('#div-info-music').delay(1500).animate({top:'0px'},1000);
   $('#div-web-master').delay(500).animate({bottom:'0px'},1000);
   
   // attiva il background musicale
   var iframe = document.getElementById("sound-iframe");
   var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
   var audio = innerDoc.getElementById("audio-sound");
   audio.currentTime = 84.5;
   audio.ontimeupdate = function() { playUptoSecond(audio,84.5+32.8) };
   audio.play();
  
   /*
   // attiva le animazioni delle miniature
   data_quadri.forEach( function(quadro){
      animate_cuadro3(quadro);
   });
   **/
  data_quadri.forEach( function(quadro){
    animate_cuadro(quadro);
  });


   
   // attiva l'animazione della label col nome del pittore
   animate_massimo();
}

/**
 * Pone l'audio in pausa dopo 'seconds' secondi.
 */
function playUptoSecond(audio,second) {
   //console.log( audio.currentTime) ;
   if (audio.currentTime >= second) {
      audio.pause();
      audio.currentTime = 0;
   }
}

var currPage=1;
var totPages=4;
var duration = 150;
function nextPage() {

   $('#pagina-'+currPage).animate({opacity:0}, duration, function() {
      $('#pagina-'+currPage).css({'display':'none'})
      
      currPage++;
      if (currPage>totPages) currPage=1;
      console.log("nextPage " + currPage);

      if (currPage==1) {
         $('#pagina-1').css({'display':'inline-flex'})
         $('#pagina-1').animate({opacity:1}, duration);
      }
      else {
         console.log("display block and opacity 1");
         $('#pagina-'+currPage).css({'display':'block'})
         $('#pagina-'+currPage).animate({opacity:1}, duration);
      }
   });
}
function previousPage() {
   
   $('#pagina-'+currPage).animate({opacity:0}, duration, function() {
      $('#pagina-'+currPage).css({'display':'none'})
      
      currPage--;
      
      if (currPage==0) currPage=totPages;
      console.log("previousPage " + currPage);
      
      if (currPage==1) {
         $('#pagina-1').css({'display':'inline-flex'})
         $('#pagina-1').animate({opacity:1}, duration);
      }
      else {
         console.log("display block and opacity 1");
         $('#pagina-'+currPage).css({'display':'block'})
         $('#pagina-'+currPage).animate({opacity:1}, duration);
      }
   });
}

function closeWebMasterInfo() {
   $('#div-web-master').animate({bottom:'-50px'},1000)
}



