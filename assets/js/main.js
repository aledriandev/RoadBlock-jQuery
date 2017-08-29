var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];
var map2 = [" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];
var map3 = [" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];
var map4 = ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];
var map5 = ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                  I  ",
    "         *                             *                       W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;
var map6 = [  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

var mapas = [map1, map2, map3, map4, map5, map6]; //contenedor de mapas
var mapa = [];
var tableros;
var x; //Posicion actual x
var y; //Posicion actual y
var xTrans = []; //Posicion x de trasportacion
var yTrans = []; //Posicion y de transportacion
var transp;
var filas; // filas del mapa
var columnas; // columnas del mapa
var arrayMapa = [];
var tabla;
var level = 0; //contador de niveles, para que cambie de mapa

var chuckGif;


var t = null;
/****** FUNCIONALIDAD GAME ******/
$(document).ready(function(){
    $('h2').text("Este codigo esta con jQuery")
    tableros = $('<div>');
    $('#level-1').append(tableros);   
    var generaMapa = function(){
        mapa = mapas[level];
        for (var i = 0; i < mapa.length; i++) {
           for (var j = 0; j < mapa[i].length; j++) {
              var M= mapa[i].split("");
           }
           arrayMapa.push(M);
        }
        filas = mapa.length;
        columnas = mapa[0].length;

        tabla = $('<table>');
        tabla.border = "0";
        for (var i = 0; i < filas; i++) {
            var fila = $('<tr>');
            for (var j = 0; j < columnas; j++) {
                var celda = $('<td>');
                if (mapa[i][j] == "*") {
                    celda.addClass('pared');
                    var imgPared = $('<img>',{
                        'src' : "assets/img/tnt.png"
                    });
                    celda.append(imgPared);
                } else if(mapa[i][j] == "o") {
                    celda.addClass('inicio')
                    chuckGif = $('<img>',{
                        "id":'img-chuck',
                        "src": "assets/img/angry.gif"
                    });
                    celda.append(chuckGif);
                    x = i;
                    y = j;
            } else if(mapa[i][j] == "W") {
                celda.addClass('final')
                nest = $('<img>',{
                    "id" :'img-nest',
                    "src" : "assets/img/nido.png"
                });
                celda.append(nest);
           } else if(mapa[i][j] == "I") {
                celda.addClass('transporta');
                xTrans.push(i);
                yTrans.push(j);
           }else{
                celda.addClass('blanco');
           }
           fila.append(celda);
           arrayMapa[i][j] = celda;
          }
          tabla.append(fila);
        }
        tableros.append(tabla);
    }

    $('#start-button').click(function(){
        $('#menu').css({'display':'none'});
        generaMapa()
    });

    var mover = function(a,b) {
      if(mapa[x+a][y+b] != "*"){
          arrayMapa[x][y].empty();
          arrayMapa[x+a][y+b].append(chuckGif);
    	    if( mapa[x+a][y+b]=="W" ){
    	      level++;
    		    tableros.remove(tabla);
    		    generaMapa();
            clearTimeout(t);
            return;
    		  }
    		  x=x+a;
    		  y=y+b;

    			t = setTimeout(function(){ mover(a, b) }, 150);
          if( x == 0 || y == 0 || x == filas -1 || y == columnas-1){
    	       clearTimeout(t);
    	    	 tableros.remove(tabla);
    		     generaMapa();
    	    }
    	} else {
    		  clearTimeout(t);
    	}
    }

    $(document).keyup(function(evento){
        evento.preventDefault();
        var tt = setTimeout ( function() {
          switch(evento.keyCode){
            case 38: //UP
                mover(-1, 0);
            break;
            case 40: //down
                mover(1, 0);
            break;
            case 37: //LEFT
                 mover(0, -1);
            break;
            case 39: //rigth
                mover(0, 1);
            break;
            }
        }, 120);
        })

});