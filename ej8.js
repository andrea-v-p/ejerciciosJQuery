/*Asignar el evento click:
      *input(listaGeneral) => crearJuegoLista
      *input(listaAnual) => asignarListaYear
      */
      function asignarEventos(){
        $("input[name='listaGeneral']").on("click", crearJuegoLista);
        $("input[name='listaAnual']").on("click", asignarListaYear);
      }
      
      /*
      *Recorre el array asociativo juegos y crea un nuevo elemento de la lista
      * en el div de Listado de juegos general.
      * Asocia a ese elemento de la lista (li) el año del juego usando $.data
      */
      function crearJuegoLista(){
        var juegos = {
          'Days Gone':'2018',
          'Far Cry 5':'2018',
          'Monster Hunter: World':'2018',
          'Assassins Creed Origins':'2017',
          'Horizon Zero Dawn':'2017',
          'Destiny 2':'2017',
          'Dark Souls III':'2016',
          'Final Fantasy XV':'2016'
        };
        //tu código empieza aquí
        var listaJuegosGeneral = $("ul:first");
        for (var titol in juegos) {
          var juego = $("<li>").data("any", juegos[titol]).text(titol);
          listaJuegosGeneral.append(juego);
        }
        //juegos.forEach(juego => {});
      }

      /*
      *Recorre la lista general y consultando la información guardada en data
      * de los elementos crea un nuevo elemento en la lista del año que toque
      */
      function asignarListaYear(){
        var llistaLi = $("li");
        for (var i = llistaLi.length; i >= 0; i--) {
           var any = $(llistaLi[i]).data("any");
           console.log( $("ul").eq(1)[0]);


          if (any == 2018) {
            $("ul").eq(1)[0].append($(llistaLi[i]).text());

          }else if (any == 2017) {
             $("ul").eq(2)[0].append($(llistaLi[i]).text());

          }else if (any == 2016) {
            $("ul").eq(3)[0].append($(llistaLi[i]).text());

          }
        }

      }

      $(document).ready(asignarEventos);