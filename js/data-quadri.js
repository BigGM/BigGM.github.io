/**
 * Tutti i quadri che appaiono sulla home page
 * Il primo della lista e' l'autoritratto e va lasciato in quella posizione
 **/
 
var data_quadri = [
{
   id_div     : 'quadro-7',  // id del div  che contiene l'immagine
   pagina     : 0,           // numero di pagina su cui appare questo quadro,
   nome       : "quadro-7.jpg",  // nome del file, solo per eventuale log
   w_img      : 266,         // larghezza dell'immagine
   h_img      : 547,         // altezza immagine
   zoom       : 0.8,          // fattore di zooom
   quadro     : "quadri/ridimensionati/DSC_0126luce.jpg",
   scheda     : "<p><b>Autoritratto in rosso</b></p>Olio su tela</p></p>96x47 cm</p>",
   titolo     : "Autoritratto in rosso"
},

{
   id_div     : 'quadro-17', // id del div  che contiene l'immagine
   pagina     : 1,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-17.jpg",  // nome del file, solo per eventuale log
   w_img      : 362,         // larghezza dell'immagine
   h_img      : 492,         // altezza immagine
   zoom       : 0.9,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-17.jpg",
   scheda     : "<p><b>Il vaso azzurro</b></p>Olio su tela</p></p>80x60 cm</p>",
   titolo     : "Il vaso azzurro"
},
{
   id_div     : 'quadro-2', // id del div  che contiene l'immagine
   pagina     : 1,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-2.jpg",  // nome del file, solo per eventuale log
   w_img      : 362,         // larghezza dell'immagine
   h_img      : 479,         // altezza immagine
   zoom       : 0.9,         // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-2.jpg",
   scheda     : "<p><b>Gatto</b></p>Olio su tela</p></p>40x30cm</p>",
   titolo     : "Gatto"
},

{
   id_div     : 'quadro-18', // id del div  che contiene l'immagine
   pagina     : 1,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-18.jpg",  // nome del file, solo per eventuale log
   w_img      : 313,         // larghezza dell'immagine
   h_img      : 410,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-18.jpg",
   scheda     : "<p><b>Danza in bianco</b></p>Olio su tavola</p></p>100x75 cm</p>",
   titolo     : "Danza in bianco"
},

{
   id_div     : 'quadro-12', // id del div  che contiene l'immagine
   pagina     : 1,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-12.jpg",  // nome del file, solo per eventuale log
   w_img      : 342,         // larghezza dell'immagine
   h_img      : 461,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-12.jpg",
   scheda     : "<p><b>Papaveri</b></p><p>Olio su tela</p><p>80x60 cm</p>",
   titolo     : "Papaveri"
},
{
   id_div     : 'quadro-3', // id del div  che contiene l'immagine
   pagina     : 1,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-3.jpg",  // nome del file, solo per eventuale log
   w_img      : 359,         // larghezza dell'immagine
   h_img      : 542,         // altezza immagine
   zoom       : 0.9,         // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-3.jpg",
   scheda     : "<p><b>Scheda</b></p>",
   titolo     : "Titolo"
},
{
   id_div     : 'quadro-4', // id del div  che contiene l'immagine
   pagina     : 3,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-4.jpg",  // nome del file, solo per eventuale log
   w_img      : 400,         // larghezza dell'immagine
   h_img      : 480,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-4.jpg",
   scheda     : "<p><b>La sedia</b></p>Olio su tela</p></p>60x50 cm</p>",
   titolo     : "La sedia"
},
{
   id_div     : 'quadro-5', // id del div  che contiene l'immagine
   //pagina     : 1,          // numero di pagina su cui appare questo quadro,
   pagina     : 2,
   nome       : "quadro-5.jpg",  // nome del file, solo per eventuale log
   w_img      : 366,         // larghezza dell'immagine
   h_img      : 365,         // altezza immagine
   zoom       : 1.1,         // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-5.jpg",
   scheda     : "<p><b>Omaggio a Peter Wagemans</b></p>Olio su tela</p></p>50x50 cm</p>",
   titolo     : "Omaggio a Peter Wagemans"
},

{
   id_div     : 'quadro-14', // id del div  che contiene l'immagine
   //pagina     : 3,          // numero di pagina su cui appare questo quadro,
   pagina :2,
   nome       : "quadro-14.jpg",  // nome del file, solo per eventuale log
   w_img      : 438,         // larghezza dell'immagine
   h_img      : 338,         // altezza immagine
   zoom       : 1.2,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-14.jpg",
   scheda     : "<p><b>Omaggio a Natalie Picoulet</b></p><p>Olio su tela</p><p>50x40 cm</p>",
   titolo     : "Omaggio a Natalie Picoulet"
},


{
   id_div     : 'quadro-8', // id del div  che contiene l'immagine
   pagina     : 2,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-8.jpg",  // nome del file, solo per eventuale log
   w_img      : 406,         // larghezza dell'immagine
   h_img      : 300,         // altezza immagine
   zoom       : 1.2,          // fattore di zooom
   quadro     : "quadri/ridimensionati/DSC_0122.jpg",
   scheda     : "<p><b>Chicago</b></p>Tecnica mista, smalto pi&ugrave olio su tela e carta stropicciata</p></p>80x60 cm</p>",
   titolo     : "Chicago"
},
{
   id_div     : 'quadro-9', // id del div  che contiene l'immagine
   //pagina     : 2,          // numero di pagina su cui appare questo quadro,
   pagina : 1,
   nome       : "quadro-9.jpg",  // nome del file, solo per eventuale log
   w_img      : 265,         // larghezza dell'immagine
   h_img      : 458,         // altezza immagine
   zoom       : 0.8,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-9.jpg",
   scheda     : "<p><b>Foglie</b></p>Olio su tela</p></p>50x30 cm</p>",
   titolo     : "Foglie"
},
{
   id_div     : 'quadro-10', // id del div  che contiene l'immagine
   pagina     : 2,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-10.jpg",  // nome del file, solo per eventuale log
   w_img      : 277,         // larghezza dell'immagine
   h_img      : 339,         // altezza immagine
   start_delay : 600,         // attesa iniziale prima dell'animazione
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-10.jpg",
   scheda     : "<p><b>Vaso con fiori e insetti</b></p>Olio su tela</p></p>70x60 cm</p>",
   titolo     : "Vaso con fiori e insetti"
},
{
   id_div     : 'quadro-11', // id del div  che contiene l'immagine
   pagina     : 2,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-11.jpg",  // nome del file, solo per eventuale log
   w_img      : 409,         // larghezza dell'immagine
   h_img      : 353,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-11.jpg",
   scheda     : "<p><b>Omaggio a Igor Levashov</b></p><p>Olio su tela</p><p>70x60 cm</p>",
   titolo     : "Omaggio a Igor Levashov"
},

{
   id_div     : 'quadro-1', // id del div  che contiene l'immagine
   //pagina     : 4,          // numero di pagina su cui appare questo quadro,
   pagina : 3,
   nome       : "quadro-1.jpg",  // nome del file, solo per eventuale log
   w_img      : 439,         // larghezza dell'immagine
   h_img      : 286,         // altezza immagine
   zoom       : 1.3,         // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-1.jpg",
   scheda     : "<p><b>Nudo sdraiato</b></p>Tecnica mista, matita e olio su cartoncino</p></p>75x50 cm</p>",
   titolo     : "Nudo sdraiato"
},
{
   id_div     : 'quadro-13', // id del div  che contiene l'immagine
   pagina     : 3,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-13.jpg",  // nome del file, solo per eventuale log
   w_img      : 379,         // larghezza dell'immagine
   h_img      : 518,         // altezza immagine
   zoom       : 0.9,         // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-13.jpg",
   scheda     : "<p><b>Leo</b></p>Olio su tela</p></p>80x60 cm</p>",
   titolo     : "Leo"
},

{
   id_div     : 'quadro-6', // id del div  che contiene l'immagine
   pagina     : 2,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-6.jpg",  // nome del file, solo per eventuale log
   w_img      : 315,         // larghezza dell'immagine
   h_img      : 377,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-6.jpg",
   scheda     : "<p><b>Scheda</b></p>",
   titolo     : "Titolo"
},


{
   id_div     : 'quadro-15', // id del div  che contiene l'immagine
   //pagina     : 3,          // numero di pagina su cui appare questo quadro,
   pagina: 2,
   nome       : "quadro-15.jpg",  // nome del file, solo per eventuale log
   w_img      : 327,         // larghezza dell'immagine
   h_img      : 282,         // altezza immagine
   zoom       : 1.1,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-15.jpg",
   scheda     : "<p><b>Omaggio a Denis Oktyabr</b></p>Olio su tela</p></p>70x60 cm</p>",
   titolo     : "Omaggio a Denis Oktyabr"
},
{
   id_div     : 'quadro-16', // id del div  che contiene l'immagine
   pagina     : 3,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-16.jpg",  // nome del file, solo per eventuale log
   w_img      : 430,         // larghezza dell'immagine
   h_img      : 239,         // altezza immagine
   zoom       : 1.3,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-16.jpg",
   scheda     : "<p><b>Danza in rosa</b></p>Olio su tela</p></p>90x50 cm</p>",
   titolo     : "Danza in rosa"
},

{
   id_div     : 'quadro-19', // id del div  che contiene l'immagine
   pagina     : 3,          // numero di pagina su cui appare questo quadro,
   nome       : "quadro-19.jpg",  // nome del file, solo per eventuale log
   w_img      : 536,         // larghezza dell'immagine
   h_img      : 380,         // altezza immagine
   zoom       : 1.3,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-19.jpg",
   scheda     : "<p><b>Natura morta con pappagalli</b></p>Olio su tela</p></p>80x60 cm</p>",
   titolo     : "Natura morta con pappagalli"
},
{
   id_div     : 'quadro-20', // id del div  che contiene l'immagine
   //pagina     : 4,          // numero di pagina su cui appare questo quadro,
   pagina : 3,
   nome       : "quadro-20.jpg",  // nome del file, solo per eventuale log
   w_img      : 465,         // larghezza dell'immagine
   h_img      : 320,         // altezza immagine
   zoom       : 1.3,          // fattore di zooom
   quadro     : "quadri/ridimensionati/quadro-20.jpg",
   scheda     : "<p><b>Scheda</p>",
   titolo     : "Titolo"
},
{
   id_div     : 'quadro-21', // id del div  che contiene l'immagine
   //pagina     : 4,          // numero di pagina su cui appare questo quadro,
   pagina : 2, 
   nome       : "quadro-21.jpg",  // nome del file, solo per eventuale log
   w_img      : 534,         // larghezza dell'immagine
   h_img      : 577,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/Generalic, Josip, 1936 - 2004, Cicogna.jpg",
   scheda     : "<p><b>Cicogna</b></p>Olio su tela</p></p>60x70 cm</p><p><i>Originale di Josip Generalic</i></p>",
   titolo     : "Cicogna"
},
{
   id_div     : 'quadro-22', // id del div  che contiene l'immagine
   //pagina     : 4,          // numero di pagina su cui appare questo quadro,
   pagina : 3,
   nome       : "quadro-22.jpg",  // nome del file, solo per eventuale log
   w_img      : 618,         // larghezza dell'immagine
   h_img      : 460,         // altezza immagine
   zoom       : 1.3,          // fattore di zooom
   quadro     : "quadri/ridimensionati/Gallo di podravina - Ivan Generalic.jpg",
   scheda     : "<p><b>Gallo</b></p>Olio su tela</p></p>60x45cm</p><p><i>Originale di Ivan Generalic</i></p>",
   titolo     : "Gallo"
},
{
   id_div     : 'quadro-23', // id del div  che contiene l'immagine
   //pagina     : 4,          // numero di pagina su cui appare questo quadro,
   pagina : 3,
   nome       : "quadro-23.jpg",  // nome del file, solo per eventuale log
   w_img      : 535,         // larghezza dell'immagine
   h_img      : 547,         // altezza immagine
   zoom       : 1.0,          // fattore di zooom
   quadro     : "quadri/ridimensionati/gatto.jpg",
   scheda     : "<p><b>Gatto</b></p>Olio su tela</p></p>43x43cm</p><p><i>Originale di Ivan Generalic</i>",
   titolo     : "Gatto"
}
];


/**
 * I quadri che appaiono sulla pagina dei ritratti
 */
var ritratti = [
   {
      id      : 'ritratto-3',       // id del div che contiene il file immagine
      nome    : "quadro-3.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/quadro-3.jpg",
      scheda  : "<p><b>Scheda ritratto-3</b></p>",
      titolo  : "Titolo",
      top_pos : "130px"             // posizione verticale relativa al div che contiene tutti i ritratti
   },
   {
      id      : 'ritratto-13',
      nome    : "quadro-13.jpg",
      quadro  : "quadri/ridimensionati/quadro-13.jpg",
      scheda  : "<p><b>Leo</b></p>Olio su tela</p></p>80x60 cm</p>",
      titolo  : "Leo",
      top_pos : "60px"
   },
   {
      id      : 'ritratto-7',
      nome    : "quadro-7.jpg",
      quadro  : "quadri/ridimensionati/DSC_0126luce.jpg",
      scheda  : "<p><b>Autoritratto in rosso</b></p>Olio su tela</p></p>96x47 cm</p>",
      titolo  : "Autoritratto in rosso",
      top_pos : "25px"
   },
   {
      id      : 'ritratto-2',
      nome    : "quadro-2.jpg",
      quadro  : "quadri/ridimensionati/quadro-2.jpg",
      scheda  : "<p><b>Gatto</b></p>Olio su tela</p></p>40x30cm</p>",
      titolo  : "Gatto",
      top_pos : "130px"
   }
]

var copie = [
   {
      id      : 'copia-14',       // id del div che contiene il file immagine
      nome    : "quadro-14.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/quadro-14.jpg",
      scheda  : "<p><b>Omaggio a Natalie Picoulet</b></p><p>Olio su tela</p><p>50x40 cm</p>",
      titolo  : "Omaggio a Natalie Picoulet"
   },
   {
      id      : 'copia-10',       // id del div che contiene il file immagine
      nome    : "quadro-10.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/quadro-10.jpg",
      scheda  : "<p><b>Vaso con fiori e insetti</b></p>Olio su tela</p></p>70x60 cm</p>",
      titolo  : "Vaso con fiori e insetti"
   },
   {
      id      : 'copia-20',       // id del div che contiene il file immagine
      nome    : "quadro-20.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/quadro-20.jpg",
      scheda  : "<p><b>Scheda</b></p>",
      titolo  : "Titolo",
   },
   {
      id      : 'copia-26',       // id del div che contiene il file immagine
      nome    : "Generalic Josip, 1936 - 2004, Cicogna.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/Generalic, Josip, 1936 - 2004, Cicogna.jpg",
      scheda  : "<p><b>Cicogna</b></p>Olio su tela</p></p>60x70 cm</p><p><i>Originale di Josip Generalic</i></p>",
      titolo  : "Cicogna",
   },
   {
      id      : 'copia-11',       // id del div che contiene il file immagine
      nome    : "quadro-11.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      scheda  : "<p><b>Omaggio a Igor Levashov</b></p><p>Olio su tela</p><p>70x60 cm</p>",
      quadro  : "quadri/ridimensionati/quadro-11.jpg",
      scheda  : "<p><b>Omaggio a Igor Levashov</b></p><p>Olio su tela</p><p>70x60 cm</p>",
      titolo  : "Omaggio a Igor Levashov"
   },
   {
      id      : 'copia-5',       // id del div che contiene il file immagine
      nome    : "quadro-5.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/quadro-5.jpg",
      scheda  : "<p><b>Omaggio a Peter Wagemans</b></p>Olio su tela</p></p>50x50 cm</p>",
      titolo  : "Omaggio a Peter Wagemans"
   },
   {
      id      : 'copia-22',       // id del div che contiene il file immagine
      nome    : "Gallo di podravina - Ivan Generalic.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/Gallo di podravina - Ivan Generalic.jpg",
      scheda  : "<p><b>Gallo</b></p>Olio su tela</p></p>60x45cm</p><p><i>Originale di Ivan Generalic</i></p>",
      titolo  : "Gallo",
   },
   {
      id      : 'copia-24',       // id del div che contiene il file immagine
      nome    : "gatto.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/gatto.jpg",
      scheda  : "<p><b>Gatto</b></p>Olio su tela</p></p>43x43cm</p><p><i>Originale di Ivan Generalic</i>",
      titolo  : "Gatto",
   },
   {
      id      : 'copia-15',       // id del div che contiene il file immagine
      nome    : "quadro-15.jpg",     // nome del file immagine sulla dir quadri/ridimensionati/mini/
      quadro  : "quadri/ridimensionati/quadro-15.jpg",
      scheda  : "<p><b>Omaggio a Denis Oktyabr</b></p>Olio su tela</p></p>70x60 cm</p>",
      titolo  : "Omaggio a Denis Oktyabr"
   },

]