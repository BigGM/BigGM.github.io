var win_width  = 1300;
var win_height = 740;

data = [
{
   quadro     : "cuadro-1.png",  // nome del file, solo per eventuale log
   id_div     : '#quadro-1', // id del div  che contiene l'immagine
   w_img      : 439,         // larghezza dell'immagine
   h_img      : 286,         // altezza immagine
   hend_img   : 224,         // altezza finale dell'immagine nel collage
   width_corr : 0,           // correzione larghezza finale nel collage
   start_left : 0,           // posizione iniziale x
   start_top  : 0,           // posizione iniziale y
   end_left   : 2,           // posizione finale in x
   end_top    : 516,         // posizione finale in y
   stat_delay : 600          // attesa iniziale prima dell'animazione
   zoom       : 1.5          // fattore di zooom
},
{
   id_div     : '#quadro-2', // id del div  che contiene l'immagine
   quadro     : "cuadro-2.png",  // nome del file, solo per eventuale log
   w_img      : 362,         // larghezza dell'immagine
   h_img      : 479,         // altezza immagine
   hend_img   : 224,         // altezza finale dell'immagine nel collage
   width_corr : 2,           // correzione larghezza finale nel collage
   start_left : win_width,   // posizione iniziale x
   start_top  : win_height,  // posizione iniziale y
   end_left   : 295,         // posizione finale in x
   end_top    : 516,         // posizione finale in y
   stat_delay : 6500,        // attesa iniziale prima dell'animazione
   zoom       : 1.5          // fattore di zooom
},

]

function animate_cuadro(data) {
   console.log( 'animate_cuadro ' + data.quadro);
   
   var q = $(data.id_div);
   var w_img    = data.w_img;     // larghezza immagine alla prima animazione
   var h_img    = data.h_img;     // altezza immagine alla prima animazione
   var hend_img = data.hend_img;  // altezza finale dell'immagine (altezza del div contenitore)
   var mid_top   = (win_height - h_img)/2;
   var mid_lef   = (win_width  - w_img)/2;
   
   var w_im   = hend_img* (w_img/h_img) + width_corr;
   var q_top  = data.end_top;       // top finale
   var q_left = data.end_left;      // left finale
   
   var bezier_params = {
        start: {
            x: start_left,
            y: start_top,
            angle: 37.987,
            length: 1.024
        },
        end: {
            x: mid_left,
            y: mid_top,
            angle: 259.034,
            length: 0.532
        }
   };
   
   var fz = data.zoom;
     q.css({top:data.start_top, left:data.start_left});

     q.delay(data.start_delay)
      .animate( {opacity:1,width:w_img+'px',height:h_img+'px', path : new $.path.bezier(bezier_params)}, 3500)
      .animate( {width:(w_img*fz)+'px', height:(h_img*fz)+'px', top:_top(h_img*fz), left:_left(w_img*fz), borderRadius:'0%'},2000 )
      .delay(600)
      .animate({left:q_left, top:q_top+'px', width:w_im+'px',height:hend_img+'px' },2000);
}