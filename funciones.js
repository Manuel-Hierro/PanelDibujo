 var pintando = false;
 var color_activo = "color1";
 var table;

 /* Generar la Tabla */
 table = '<table class="tablero" border>';
 for (i = 0; i < 30; i++) {
     table += '<tr>';
     for (j = 0; j < 30; j++) {
         table += '<td></td>';
     }
     table += '</tr>';
 }
 table += '</table>';

 /* Cambiar el estado del pincel */
 function cambiar_estado() {
     if (pintando == true) {
         pintando = false;
     } else {
         pintando = true;
     }
 }
 /* Esto es como el Evento Load de Jquery cuando la pagina esta cargada */
 $(function () {

     /* Añade el Tablero */
     $('.zona_de_dibujo').append(table);

     /* Al hacer click en uno de los colores
     1º Quita la clase - seleccionado en el que acabas de pulsar
     2º Añade la clase - seleccionado en el que acabas de pulsar */
     $('.paleta td').click(function () {
         $('.paleta td').removeClass('seleccionado');
         color_activo = $(this).attr('class');
         $(this).addClass('seleccionado');
     });

     /* Al hacer click en una de las celdas, se añade el color a la clase de ese elemento */
     $('.tablero td').click(function () {
         $(this).addClass(color_activo);

         /* Cambia el estado del pincel - Por defecto esta ne false */
         cambiar_estado();
         
         /* Cambia el texto segun el estado del pincel */
         if (pintando) {
             $('.pincel').text('El Pincel esta activo');
         } else {
             $('.pincel').text('El Pincel esta desactivo');
         }

         /* Al pasar el raton por encima pinta del color seleccionado, si pintando es True */
         $('.tablero td').hover(function (event) {
             if (pintando) {
                 $(this).addClass(color_activo);
             }
         });
     });
 });