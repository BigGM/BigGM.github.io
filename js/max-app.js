
/**
 *
 **/  
(function() {
  'use strict';
  
   // Crea il modulo angularjs
   var app = angular.module('maxApp', ['ngSanitize']);
   
   // Aggiunge un servizio per le chiamate http
   app.service("maxAppService", function($http)
   {
   });
   
   
   // Aggiunge un controller "principale" per gestire la visibilita' dei pannelli
   // relativi alle voci di menu
   app.controller('maxAppController', maxAppController);
   function maxAppController($scope,  $filter, maxAppService)
   {
      var self = this;

      this.lista_quadri = angular.copy(data_quadri);
      this.ritratti     = angular.copy(ritratti);
      this.copie        = angular.copy(copie);
      this.quadri = [];
      
      
      this.calcWidth = function(quadro) {
         return quadro.hend_img * (quadro.w_img/quadro.h_img) + quadro.width_corr;
      }
      
      this.currentQuadro;     // il file immagine del quadro in primo piano
      this.currentTitolo;     // il titolo del quadro in primo piano
      this.max_img_w = 930;   // larghezza massima per la visualizzazione del quadro
      this.max_img_h = 630;   // altezza massima per la visualizzazione del quadro
      
      
      /**
       * Aggiunge lo sfocamento alle miniature in home page
       */
      this.blurMiniature = function() {
         this.lista_quadri.forEach( function(quadro) {
            
            var o = document.getElementById(quadro.id_div);
            if (o!=null) {
               console.log('blurMiniature ' + quadro.id_div)
               o.style.filter="blur(0.17rem)";
            }
            //$('#'+quadro.id_div).addClass('blur-outer-div');
         });
      }
      /**
       * Rimuove lo sfocamento alle miniature in home page
       */
      this.removeBlurMiniature = function() {
         this.lista_quadri.forEach( function(quadro) {
            //$('#'+quadro.id_div).removeClass('blur-outer-div');
            var o = document.getElementById(quadro.id_div);
            if (o!=null) {
               console.log('removeBlurMiniature ' + quadro.id_div)
               o.style.filter="blur(0.0rem)";
            }
         });
      }
      
      this.listaQuadri = function(this_pagina) {
         var out = [];
         this.lista_quadri.forEach( function(quadro) {
            if (quadro.pagina==this_pagina)
               out.push(quadro)
         });
         return out;
      }
      
      
      /**
       * Visualizza un quadro in primo piano.
       * Se e' in corso il il caricamento della home page ritorna subito.
       **/
      this.showQuadro = function(this_quadro) {

         // La home page si sta ancora riempiendo con i quadri
         if ( !G_HOME_FULL_LOADED ) {
            return;
         }
         
         $('#waitDiv').show();
         
         var img = new Image();
         img.src = this_quadro.quadro;
        
         this.currentQuadro = this_quadro.quadro;
         this.currentTitolo = this_quadro.titolo;
         this.currentScheda = this_quadro.scheda;
         
         //console.log(this.currentQuadro)
         
         img.onload = function() {
            $('#waitDiv').hide();
         
            var img_width  = this.width;
            var img_height = this.height;
            var r = img_height / img_width;
            
            //console.log( 'Original dimensions are : ' + img_width + 'x' + img_height + ' px' );
            //console.log(' this.max_img_w ' + self.max_img_w );
            var wf = Math.min(self.max_img_w,img_width);
            //console.log(wf);
            var hf = wf * r;
            
            if (hf > self.max_img_h) {
               hf = self.max_img_h;
               wf = hf/r;
            }
            //console.log( 'Calculated dimensions are : ' + wf + 'x' + hf + ' pixels' );
            $('#div-scheda-quadro').html("<label style=\"font-weight:normal;font-size:20px;\">"+self.currentScheda+"</label>");
            var scheda_w = $('#div-scheda-quadro').width() + 50;
            $('#div-view-quadro').css({'width':(wf+40+scheda_w)+'px','height':(hf+60)+'px'})
            $('#view-quadro').css({'width':wf+'px','height':hf+'px'})
            $('#cover-view-quadro').css({'display':'block'});
            $('#cover-view-quadro').animate({'opacity':1}, 650,
               // Visualizzazione della scheda a destra del quadro
               function() {
                  $('#div-scheda-quadro').animate({'opacity':1,'marginTop':'0px'},700)
               }
            );
            // aggiunge filtro per ottenere i quadri di fondo in grigio
            $('.img-quadro').addClass('filterQuadri');
            
            // e lo zoom interno
            $('#view-quadro').attr('data-zoom-image', self.currentQuadro);
            // Attiva lo zoom
            $('#view-quadro').elevateZoom({
               zoomType: "inner",
               cursor: "crosshair",
               zoomWindowFadeIn: 500,
               zoomWindowFadeOut: 750
            });
         }
      }  // showQuadro()
      
      
      /**
       * Chiude la visualizzaione di un quadro in primo piano. 
       * Se e' in corso il il caricamento della home page ritorna subito.
       **/
      this.hideQuadro = function() {
         // La home page si sta ancora riempiendo con i quadri
         if ( !G_HOME_FULL_LOADED ) {
            return;
         }
         
         $('#div-view-quadro').animate({'width':'+=80px','height':'+=80px'},650)
         $('#view-quadro').animate({'width':'+=80px','height':'+=80px'},650)
         $('#div-scheda-quadro').animate({'opacity':0,'marginTop':'-10px'},650)
         $('#cover-view-quadro').animate({'opacity':0 }, 650, function() {
            $('#cover-view-quadro').css({'display':'none'});
            $('.img-quadro').removeClass('filterQuadri');  
         });
         
         // E' necessario rimuove il container usato per lo zoom
         $('div.zoomContainer').remove();
      }

      
      /**
       * Mescola i ritardi di visualizzazione dei quadri nel caricamento della
       * home page in modo da ottenere ogni volta una sequenza di apparizione diversa.
       */
      this.nextRandom = function(min,max) {
         return Math.random()*(max-min) + min;
      }
      
      this.mixDelay = function() {
         
         var num_quadri = this.lista_quadri.length;
         
         for (var j=0; j<num_quadri; j++) {
            this.quadri[j] = j;
         }

         for (var k=0; k<num_quadri; k++) {
            var k1 = Math.floor((Math.random() * 1000) ) % num_quadri;
            var k2 = Math.floor((Math.random() * 1000) ) % num_quadri;
            var temp = this.quadri[k1];
            
            this.quadri[k1] = this.quadri[k2];
            this.quadri[k2] = temp;
         }

         for (var k=0; k<num_quadri; k++) {

            var step=1000;
            var delay = step * this.quadri[k];
            if ( delay == 0) {
               delay = 600;
            }
          
            data_quadri[k].start_delay = delay;
            
            var start_top = this.nextRandom(0,600);
            var end_top = this.nextRandom(0,600);
            
            var start_left = this.nextRandom(-200,1350);
            var end_left = this.nextRandom(-200,1350);
            
            data_quadri[k].start_top=start_top;
            data_quadri[k].end_top=end_top;
           

            var direction = Math.random();
            
            // orizzontale
            if (direction > 0.5) {
               data_quadri[k].start_top = start_top;
               data_quadri[k].end_top = end_top;
           
               var hdir = Math.floor(this.nextRandom(0,100) );
               // destra => sinistra
               if (hdir%2==0) {
                  data_quadri[k].start_left=1350;   
                  data_quadri[k].end_left=-400;
               }
               // sinistra => destra
               else {
                  data_quadri[k].start_left = -400
                  data_quadri[k].end_left = 1350;
               }
            }
            // verticale
            else {
               data_quadri[k].start_left=start_left;
               data_quadri[k].end_left=end_left;
               
               var vdir = Math.floor(this.nextRandom(0,100) );
               // alto ==> basso
               if (vdir%2==0) {
                  data_quadri[k].start_top=-800;   
                  data_quadri[k].end_top = 800;
               }
               // basso => alto
               else {
                  data_quadri[k].start_top= 800;   
                  data_quadri[k].end_top = -800;
               }
            } // moto in verticale
         }
      } // mixDelay()
      
      this.mixDelay();
      
      
      // Mostra la pagina del contatto
      this.showContatto = function() {
         $('#cover-contatto').css({'display':'block'});
         $('#div-contatto').css({display:'block'})
         $('#div-contatto').animate({opacity:1,top:'80px'}, 600);
         $('#dati-contatto').animate({paddingLeft:'15px'}, 600);
         $('.img-quadro').addClass('filterQuadri');
         //this.blurMiniature();
      }
      
      // Nasconde la pagina del contatto
      this.hideContatto = function() {
         $('#div-contatto').animate({opacity:0, top:'70px'}, 600,function() {
            $('#div-contatto').css({display:'none'})
            $('#cover-contatto').css({'display':'none'});
         });
         $('#dati-contatto').animate({paddingLeft:'0px'}, 600);
         $('.img-quadro').removeClass('filterQuadri');
         //this.removeBlurMiniature();
      }
      
      // Lista delle slide per la pagina "Genesi di un dipinto"
      this.slides = [
         "genesi_quadro/slide-1.jpg",
         "genesi_quadro/slide-3.jpg",
         "genesi_quadro/slide-4.jpg",
         "genesi_quadro/slide-5.jpg",
         "genesi_quadro/slide-6.jpg",
         "genesi_quadro/slide-7.jpg",
         "genesi_quadro/slide-8.jpg",
         "genesi_quadro/slide-9.jpg",
         "genesi_quadro/slide-10.jpg",
         "genesi_quadro/slide-11.jpg",
         "genesi_quadro/slide-12.jpg",
      ]
      
      this.showGenesi = function() {
         $('#cover-genesi').css({'display':'block'});
         $('#slideshow').css({'display':'block'})
         $('#slideshow').animate({opacity:1,top:'30px'}, 600);
         //this.blurMiniature();
         $('.img-quadro').addClass('filterQuadri');
      }
      this.hideGenesi = function() {
         $('#slideshow').animate({opacity:0,top:'20px'}, 500, function(){
            $('#cover-genesi').css({'display':'none'});
         });
         //this.removeBlurMiniature();
         $('.img-quadro').removeClass('filterQuadri');
      }

      this.showRitratti = function() {
         $('#cover-ritratti').css({'display':'block'});
         $('#ritratti').animate({opacity:1,top:'30px'}, 600);
         //this.blurMiniature();
         $('.img-quadro').addClass('filterQuadri');
      }

      this.hideRitratti = function() {
         $('#ritratti').animate({opacity:0,top:'20px'}, 500, function(){
            $('#cover-ritratti').css({'display':'none'});
         });
         //this.removeBlurMiniature();
         $('.img-quadro').removeClass('filterQuadri');
      }
      
      
      this.showCopie = function() {
         $('#cover-copie').css({'display':'block'});
         $('#copie').animate({opacity:1,top:'30px'}, 600);
         //this.blurMiniature();
         $('.img-quadro').addClass('filterQuadri');
      }
      
      this.hideCopie = function() {
         $('#copie').animate({opacity:0,top:'20px'}, 500, function(){
            $('#cover-copie').css({'display':'none'});
         });
         //this.removeBlurMiniature();
         $('.img-quadro').removeClass('filterQuadri');
      }
      
      
      
      /**
       * id    - id del div col ritratto
       * where - 'left', 'right' dove posizionare la scheda
       * Uso questo array per controllare le chiamate alla funzione "showSchedaRitratto()"; per
       * ragioni misteriore a volte viene chiamata ripetutamente, questo array di boolean permette
       * che venga rieseguito codice gia' eseguito.
       **/
      this.mouse_enter = [];
      // Lo inizializza a false per ogni ritratto
      this.ritratti.forEach (function(ritratto) {
         self.mouse_enter[ ritratto.id ] = false;
      });
      
      this.showSchedaRitratto = function(quadro) {
         
         //console.log("showSchedaRitratto " + id);
         if ( this.mouse_enter[quadro.id]===false ) this.mouse_enter[quadro.id] = true;
         else return;
         
         var id = quadro.id;

         $('#div-scheda-'+id).html("<label style=\"font-weight:normal;font-size:20px;\">"+quadro.scheda+"</label>");
         
         var him = $('#img-'+id).height();
         var hdiv = $('#'+id).height();
         
         if (hdiv !== him) {
            //console.log("fix hdiv to " + him)
            $('#'+id).css({height:him+'px'})
         }

         document.getElementById("img-"+id).style.transform = "scale(1.2)";
         $('#div-scheda-'+id).animate( {opacity:1}, 600);
      }
      
      this.hideSchedaRitratto = function(quadro) {
         let id = quadro.id;
         //console.log("hideSchedaRitratto " + id);
         this.mouse_enter[id] = false;
         document.getElementById("img-"+id).style.transform = "scale(1.0)";
         $('#div-scheda-'+id).animate( {opacity:0}, 250)
      }
      
      
      this.mouse_enter_copia = [];
      // Lo inizializza a false per ogni copia
      this.copie.forEach (function(copia) {
         self.mouse_enter_copia[ copia.id ] = false;
      });
      
      this.showSchedaCopia = function(q) {
         console.log("showSchedaCopia ");
         console.log(q);         
         
         if ( this.mouse_enter_copia[q.id]===false ) this.mouse_enter_copia[q.id] = true;
         else return;

         $('#div-scheda-'+q.id).html("<label style=\"font-weight:normal;font-size:20px;\">"+q.scheda+"</label>");
         
         var him = $('#img-'+q.id).height();
         var hdiv = $('#'+q.id).height();
         
         if (hdiv !== him) {
            //console.log("fix hdiv to " + him)
            $('#'+q.id).css({height:him+'px'})
         }

         document.getElementById("img-"+q.id).style.transform = "scale(1.2)";
         $('#div-scheda-'+q.id).animate( {opacity:1}, 600);
      }
      
      this.hideSchedaCopia = function(q) {
         //console.log("hideSchedaCopia " + id);
         this.mouse_enter_copia[q.id] = false;
         document.getElementById("img-"+q.id).style.transform = "scale(1.0)";
         $('#div-scheda-'+q.id).animate( {opacity:0}, 250)
      }

   } // maxAppController
  
})();
 