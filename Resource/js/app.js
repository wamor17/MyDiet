
Platillos = {
    Desayuno: {
        Licuados: {
            LicuadoPapayaFresa: [{ Nombre: 'Licuado de Papaya y Fresas',
                                   Ingredientes: [  '1 taza de papaya',
                                                    'taza de fresas',
                                                    '1 taza de agua',
                                                    '1 cucharada de avena',
                                                    '1 cucharada de linaza']
                                }],
            LicuadoFresas:      [{ Nombre: 'Licuado de Fresa',
                                   Ingredientes: [  '1 taza de fresas',
                                                    '1 taza de agua',
                                                    '1 cucharada de avena',
                                                    '1 cucharada de linaza',
                                                    '5 almendras']
                                }],
            LicuadoVerde:       [{ Nombre: 'Licuado Verde',
                                   Ingredientes: [  '1 pezado de Nopal',
                                                    '1 pedazo de Perejil',
                                                    '1 pedazo de Apio',
                                                    '1 Manzana',
                                                    '1 pedazo de Papaya',
                                                    '1 cucharada de linaza',
                                                    '1 cucharada de avena',
                                                    '1 taza de agua',
                                                    ]
                                }]
        }
    },
    Almuerzo: {
        HotCake: [{ Nombre: 'Hot Cake',
                    Ingredientes: [ '1/3 de taza de avena',
                                    'Canela al gusto',
                                    '1 Calabacita',
                                    '1/2 de taza light',
                                    '5 almendras'
                    ]
        }],
        Sandwich: [{ Nombre: 'Sandwich',
                     Ingredientes: [ '2 rebandas de pan integral',
                                     'Salsa',
                                     '1/3 de aguacate',
                                     'Jitomate',
                                     'Cebolla',
                                     '2 rebandas de jamón de pavo'

                     ]
        }]
    },
    Colacion: {
        PostAlmuerzo: [{
            Gazpacho: [{
                Nombre: 'Gaspacho',
                Ingredientes: [
                    '5 Alemndraz',
                    '1 taza de gaspacho sin queso',
                    '1 gelatina light'
                ]
            }],
            NuecesYPera: [{
                Nombre: 'Pera con Nueces',
                Ingredientes: [
                    '5 nueces',
                    '1 pera',
                    'Gelatina liquida'
                ]
            }],
            PistachesYPapaya: [{
                Nombre: 'Papaya con pistaches',
                Ingredientes: [
                    '5 pistaches',
                    '1 taza de papaya',
                    '1 gelatina light'
                ]
            }],
            MelonYAlmendras: [{
                Nombre: 'Melón con almendras',
                Ingredientes: [
                    '5 almendras',
                    '1 taza de melón',
                    '1 gelatina light'
                ]
            }],
            NuecesYManzana: [{
                Nombre: 'Manzana con nueces',
                Ingredientes: [
                    '5 nueces',
                    '1 manzana',
                    '1 gelatina light'
                ]
            }]
        }],
        PostComida: [{
            Garbanzos: [{
                Nombre: 'Garbanzos',
                Ingredientes: [
                    '1/2 taza de garbanzos',
                    '5 almendras',
                    '1 gelatina light'
                ]
            }]
        }]
    },
    Comida: {
        BisteckALaMexicana: [{
            Nombre: 'Bisteck a la mexicana',
            Ingredientes: [
                '1/2 taza de frijoles molidos',
                '200 g de bisteck de res',
                'Jitomate',
                'Cebolla',
                '1 cucharada de guacamole',
                '1 taza de ensalada de verduras crudas',
                '1/2 taza de arroz'
            ]
        }],
        Tinga: [{
            Nombre: 'Tinga',
            Ingredientes: [
                '1/2 taza de lentajas',
                '90 g de pollo',
                '1 cucharada de guacamole',
                '1 taza de ensalada de verduras crudas',
                '1/2 taza de arrioz'
            ]
        }],
        Tsurimi: [{
            Nombre: 'Tsurimi',
            Ingredientes: [
                '1/2 taza de garbanzos',
                '2 barras de tsurimi',
                '1 cucharada de guacamole',
                '1 taza de ensalada de verduras crudas',
                '1/2 taza de arroz'
            ]
        }]
    },
    Cena: {
        LicuadoManzanaLeche: [{
            Nombre: 'Licuado de Manzana con leche',
            Ingredientes: [
                '1 taza de leche light',
                '1 manzana',
                '5 almendras',
                '1 cucharada de avena'
            ]
        }]
    }
};

DietWeek = {
    Desayuno: {
        Hora:       '07:30 am',
        Lunes:      Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Martes:     Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Miercoles:  Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Jueves:     Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Viernes:    Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Sabado:     Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Domingo:    Platillos.Desayuno.Licuados.LicuadoPapayaFresa
    },
    Almuerzo:{
        Hora:       '10:00 am',
        Lunes:      Platillos.Almuerzo.Sandwich,
        Martes:     Platillos.Almuerzo.Sandwich,
        Miercoles:  Platillos.Almuerzo.Sandwich,
        Jueves:     Platillos.Almuerzo.Sandwich,
        Viernes:    Platillos.Almuerzo.Sandwich,
        Sabado:     Platillos.Almuerzo.Sandwich,
        Domingo:    Platillos.Almuerzo.Sandwich
    },
    ColacionPostAlmuerzo:{
        Hora:       '12:00-01:00 pm',
        Lunes:      Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Martes:     Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Miercoles:  Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Jueves:     Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Viernes:    Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Sabado:     Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Domingo:    Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
    },
    Comida:{
        Hora:       '03:00 pm',
        Lunes:      Platillos.Comida.BisteckALaMexicana,
        Martes:     Platillos.Comida.BisteckALaMexicana,
        Miercoles:  Platillos.Comida.BisteckALaMexicana,
        Jueves:     Platillos.Comida.BisteckALaMexicana,
        Viernes:    Platillos.Comida.BisteckALaMexicana,
        Sabado:     Platillos.Comida.BisteckALaMexicana,
        Domingo:    Platillos.Comida.BisteckALaMexicana,
    },
    ColacionPostComida:{
        Hora:       '06:00 pm',
        Lunes:      Platillos.Colacion.PostComida[0].Garbanzos,
        Martes:     Platillos.Colacion.PostComida[0].Garbanzos,
        Miercoles:  Platillos.Colacion.PostComida[0].Garbanzos,
        Jueves:     Platillos.Colacion.PostComida[0].Garbanzos,
        Viernes:    Platillos.Colacion.PostComida[0].Garbanzos,
        Sabado:     Platillos.Colacion.PostComida[0].Garbanzos,
        Domingo:    Platillos.Colacion.PostComida[0].Garbanzos,
    },
    Cena:{
        Hora:       '09:00 pm',
        Lunes:      Platillos.Cena.LicuadoManzanaLeche,
        Martes:     Platillos.Cena.LicuadoManzanaLeche,
        Miercoles:  Platillos.Cena.LicuadoManzanaLeche,
        Jueves:     Platillos.Cena.LicuadoManzanaLeche,
        Viernes:    Platillos.Cena.LicuadoManzanaLeche,
        Sabado:     Platillos.Cena.LicuadoManzanaLeche,
        Domingo:    Platillos.Cena.LicuadoManzanaLeche,
    },
}

$(function(){
    $('.collapsible').collapsible();


//    ShowWeekDiet();
    ShowDietPerDay("Lunes");
    
});

function ShowDietPerDay(Dia){
    var collection_element_default =    "<ul class='collection with-header show-diet-per-day'>"+
                                    "<li class='collection-header'><h4>"+Dia+"</h4></li>";

    Desayuno  = DietWeek.Desayuno[""+Dia+""];
    Almuerzo  = DietWeek.Almuerzo[""+Dia+""];
    Colacion1 = DietWeek.ColacionPostAlmuerzo[""+Dia+""];
    Comida    = DietWeek.Comida[""+Dia+""];
    Colacion2 = DietWeek.ColacionPostComida[""+Dia+""];
    Cena      = DietWeek.Cena[""+Dia+""];

    console.log(Desayuno[0].Nombre);
    var ing1 = "", ing2 = "";
    Desayuno[0].Ingredientes.forEach(elements => { ing1  = ing1 + "<i> - "+elements+"<br></i>"; });
    Almuerzo[0].Ingredientes.forEach(elements => { ing2  = ing2 + "<i> - "+elements+"<br></i>"; });

    var collection_item = "<li class='collection-item'> <h5> Desayuno </h5> <strong>"+Desayuno[0].Nombre+":</strong> <br> "+ing1+"</li>";
    collection_item     = collection_item + "<li class='collection-item'> <h5> Almuerzo </h5> <strong>"+Almuerzo[0].Nombre+":</strong> <br> "+ing2+"</li>";

    var collection_element = "";
    var collection_element = collection_element_default + collection_item + "</ul>";
//    $('.show-selection-diet').html(collection_element);
//    <li class="collection-item">Alvin</li>
//    show-diet-per-day
}

function ShowWeekDiet(){
    var elements = "";

    for( i in DietWeek ){

        var ingl = "", ingm = "", ingmi = "", ingj = "", ingv = "", ings = "", ingd = "";
        
        DietWeek[""+i+""].Lunes[0].Ingredientes.forEach(elements =>     { ingl  = ingl  + "<li>"+elements+"</li>"; });
        DietWeek[""+i+""].Martes[0].Ingredientes.forEach(elements =>    { ingm  = ingm  + "<li>"+elements+"</li>"; });
        DietWeek[""+i+""].Miercoles[0].Ingredientes.forEach(elements => { ingmi = ingmi + "<li>"+elements+"</li>"; });
        DietWeek[""+i+""].Jueves[0].Ingredientes.forEach(elements =>    { ingj  = ingj  + "<li>"+elements+"</li>"; });
        DietWeek[""+i+""].Viernes[0].Ingredientes.forEach(elements =>   { ingv  = ingv  + "<li>"+elements+"</li>"; });
        DietWeek[""+i+""].Sabado[0].Ingredientes.forEach(elements =>    { ings  = ings  + "<li>"+elements+"</li>"; });
        DietWeek[""+i+""].Domingo[0].Ingredientes.forEach(elements =>   { ingd  = ingd  + "<li>"+elements+"</li>"; });

        elements = elements + "<tr>" +
                                "<td>" + DietWeek[""+i+""].Hora   + "</td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Lunes[0].Nombre     +"</strong><br><br> Ingredientes: "+ingl+" <br></td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Martes[0].Nombre    +"</strong><br><br> Ingredientes: "+ingm+" <br></td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Miercoles[0].Nombre +"</strong><br><br> Ingredientes: "+ingm+" <br></td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Jueves[0].Nombre    +"</strong><br><br> Ingredientes: "+ingm+" <br></td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Viernes[0].Nombre   +"</strong><br><br> Ingredientes: "+ingm+" <br></td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Sabado[0].Nombre    +"</strong><br><br> Ingredientes: "+ingm+" <br></td>"+
                                "<td> <strong>" + DietWeek[""+i+""].Domingo[0].Nombre   +"</strong><br><br> Ingredientes: "+ingm+" <br></td>"+
                            +"</tr>"; 
    }



    $('.show_diet').html(elements);

}

$('.collapsible').on('click', '.collapsible-header', function(){    
    $(this).parent().siblings().children().removeClass('collapsible-active');
    $(this).addClass('collapsible-active');

    var DayWeek  = $('select.select-week-day').val();
    var TypeDish = $(this).text().split(' ')[1];
    var TypeDishSelected;

    if( TypeDish == 'Colación' )
        TypeDishSelected = DietWeek["ColacionPostAlmuerzo"];
    else if( TypeDish == 'Merienda' )
        TypeDishSelected = DietWeek["ColacionPostComida"];
    else
        TypeDishSelected = DietWeek[""+TypeDish+""];

    var DayDishSelected = TypeDishSelected[""+DayWeek+""];
    var ing = "";
    DayDishSelected[0].Ingredientes.forEach(elements => { ing  = ing + "<li>"+elements+"</li>"; });

    var InnerText_CollapsibleBody = "</h4><strong>" + DayDishSelected[0].Nombre + "</strong></h4> <br><br> Ingredientes: <br>" + ing;

    $(this).siblings().html(InnerText_CollapsibleBody);
});

$('.list-daily-diet').on('click', '.dish-item', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    var DayWeek = $('select.select-week-day').val();
    var TypeDish = $(this).text().split(' ')[0];
    var TypeDishSelected;

    if( TypeDish == 'Colación' )
        TypeDishSelected = DietWeek["ColacionPostAlmuerzo"];
    else if( TypeDish == 'Merienda' )
        TypeDishSelected = DietWeek["ColacionPostComida"];
    else
        TypeDishSelected = DietWeek[""+TypeDish+""];

    var DayDishSelected = TypeDishSelected[""+DayWeek+""];

    var collection_element =    "<ul class='collection with-header show-diet-per-day'>"+
                                    "<li class='collection-header'><h4 class='center-align'>"+DayDishSelected[0].Nombre+"</h4> <br> <h5> Ingredientes: </h5> </li>";

    var ing1 = "";
    DayDishSelected[0].Ingredientes.forEach(elements => { ing1  = ing1 + "<li class='collection-item'>"+elements+"</li>"; });
    collection_element = collection_element + ing1 + '</ul>';

    $('.show-selection-diet').html(collection_element);
});

obj = {
    Martes: {
        Desayuno: Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Almuerzo: Platillos.Almuerzo.Sandwich,
        Colacion1: Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Comida: Platillos.Comida.BisteckALaMexicana,
        Colacion2:  Platillos.Colacion.PostComida[0].Garbanzos,
        Cena:       Platillos.Cena.LicuadoManzanaLeche
    },
    Miercoles: {
        Desayuno: Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Almuerzo: Platillos.Almuerzo.Sandwich,
        Colacion1: Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Comida: Platillos.Comida.BisteckALaMexicana,
        Colacion2:  Platillos.Colacion.PostComida[0].Garbanzos,
        Cena:       Platillos.Cena.LicuadoManzanaLeche
    },
    Jueves: {
        Desayuno: Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Almuerzo: Platillos.Almuerzo.Sandwich,
        Colacion1: Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Comida: Platillos.Comida.BisteckALaMexicana,
        Colacion2:  Platillos.Colacion.PostComida[0].Garbanzos,
        Cena:       Platillos.Cena.LicuadoManzanaLeche
    },
    Viernes: {
        Desayuno: Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Almuerzo: Platillos.Almuerzo.Sandwich,
        Colacion1: Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Comida: Platillos.Comida.BisteckALaMexicana,
        Colacion2:  Platillos.Colacion.PostComida[0].Garbanzos,
        Cena:       Platillos.Cena.LicuadoManzanaLeche
    },
    Sabado: {
        Desayuno: Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Almuerzo: Platillos.Almuerzo.Sandwich,
        Colacion1: Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Comida: Platillos.Comida.BisteckALaMexicana,
        Colacion2:  Platillos.Colacion.PostComida[0].Garbanzos,
        Cena:       Platillos.Cena.LicuadoManzanaLeche
    },
    Domingo: {
        Desayuno: Platillos.Desayuno.Licuados.LicuadoPapayaFresa,
        Almuerzo: Platillos.Almuerzo.Sandwich,
        Colacion1: Platillos.Colacion.PostAlmuerzo[0].NuecesYPera,
        Comida: Platillos.Comida.BisteckALaMexicana,
        Colacion2:  Platillos.Colacion.PostComida[0].Garbanzos,
        Cena:       Platillos.Cena.LicuadoManzanaLeche
    }
}