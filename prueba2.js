let botonlim = document.getElementById('limpiar');
let fuego = document.getElementsByClassName('fire')[0];
let fuego2 = document.getElementsByClassName('fire2')[0];
//Variables adjuntas a tacos de pollo con nopales
let platillo1;
const imagenTN = document.createElement('img');
let instrucciones1;

//Variables adjuntas a quesadillas con epazote
let platillo2;
const imagenQE = document.createElement('img');
let instrucciones2;

//Variables adjuntas a guacamole
let platillo3;
const imagenGM = document.createElement('img');
let instrucciones3;

//Variables adjuntas a ensalada caprese
let platillo4;
const imagenEC = document.createElement('img');
let instrucciones4;

//Variables adjuntas a espagueti al pesto
let platillo5;
const imagenEP = document.createElement('img');
let instrucciones5;

//Variables adjuntas a sopa de tomate
let platillo6;
const imagenST = document.createElement('img');
let instrucciones6;

//Variables adjuntas a bruschetta
let platillo7;
const imagenBC = document.createElement('img');
let instrucciones7;

//Variables adjuntas a Arroz con pollo
let platillo8;
const imagenAP = document.createElement('img');
let instrucciones8;

//VAriables adjuntas a Chilaquiles 
let platillo9;
const imagenCH = document.createElement('img');
let instrucciones9;

//Variables adjuntas a Sopa de lentejas
let platillo10;
const imagenTA = document.createElement('img');
let instrucciones10;

//Sopa tortilla
let platillo11;
const imagenSTO = document.createElement('img');
let instrucciones11;

//Enchiladas verdes
let platillo12;
const imagenEV = document.createElement('img');
let instrucciones12;

//Boton menu1
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');
//Selector de td
let mtable = document.querySelectorAll('td');

//Selector de tablas
let tabla = document.getElementById('table');
let tabla2 = document.getElementById('table2');
tabla.style.visibility = 'hidden';
tabla2.style.visibility = 'hidden';

menu1.addEventListener('click', menu_1);
function menu_1(){
    if(tabla.style.visibility === 'hidden'){
        tabla.style.visibility = 'visible';
    } else {
        tabla.style.visibility = 'hidden';
    }
    mtable.forEach((data) => {
        data.addEventListener('click',function(){
            if(data.style.backgroundColor === 'gray'){
                data.style.backgroundColor = 'white';
            } else {
                data.style.backgroundColor = 'gray';
            }
            //TACOS DE POLLO CON NOPALES
            if(mtable[5].style.backgroundColor === 'gray' && mtable[7].style.backgroundColor === 'gray' && mtable[12].style.backgroundColor === 'gray' && mtable[14].style.backgroundColor === 'gray' && mtable[21].style.backgroundColor === 'gray' && mtable[26].style.backgroundColor === 'gray' && mtable[33].style.backgroundColor === 'gray'){
                platillo1 = document.createElement('h1');
                platillo1.innerHTML = "TACOS DE POLLO CON NOPALES";
                platillo1.style.position = "absolute";
                platillo1.style.left = '825px';
                platillo1.style.top = '300px';
                platillo1.style.fontSize = '30px';
                platillo1.style.color = '#000';
                platillo1.style.visibility = 'visible';
                platillo1.id = 'tacos';
                instrucciones1 = document.createElement('p');
                instrucciones1.innerHTML = 'Intrucciones para su preparacion: <br> 1.Cocina el pollo: Hierve las piezas de pollo en agua con sal y un poco de cebolla hasta que estén bien cocidas. Desmenuza el pollo y reserva. <br> 2. Prepara los nopales: Corta los nopales en tiras finas y hiérvelos en agua con sal y un poco de epazote para quitar el sabor baboso. Escúrrelos bien. <br> 3. Salsa de chile pasilla: Asa los chiles pasilla, jitomates, ajo y cebolla. Luego licúa todo junto con un poco de caldo de pollo y sal. <br> 4. Ensamble de los tacos: Calienta las tortillas de maíz, rellénalas con pollo desmenuzado y nopales. Acompaña con cilantro, cebolla picada y unas gotas de limón. Sirve con la salsa de chile pasilla.';
                instrucciones1.style.position = "absolute";
                instrucciones1.style.left = '800px';
                instrucciones1.style.top = '350px';
                instrucciones1.style.fontSize = '15px';
                instrucciones1.style.color = '#000';
                instrucciones1.style.visibility = 'visible';
                instrucciones1.id = 'instru';
                imagenTN.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1H796etSolEu_rZ6ulndI5__g3jhZyZgSA&s";
                imagenTN.style.position = "absolute";
                imagenTN.style.top = '525px';
                imagenTN.style.left = '950px';
                imagenTN.style.width = '150px';
                imagenTN.style.height = '150px';
                imagenTN.style.visibility = 'visible';
                imagenTN.id = 'imagen';

                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo1);
                    document.body.appendChild(instrucciones1);
                    document.body.appendChild(imagenTN);
                    const elemento = document.getElementById('tacos');
                    const elemento1 = document.getElementById('instru');
                    const elemento2 = document.getElementById('imagen');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);

            }
        
            //Quesadillas de queso y epazote
            if(mtable[17].style.backgroundColor === 'gray' && mtable[32].style.backgroundColor === 'gray' && mtable[33].style.backgroundColor === 'gray'){
                platillo2 = document.createElement('h1');
                platillo2.innerHTML = "QUESADILLAS DE QUESO OAXACA CON EPAZOTE";
                platillo2.style.position = "absolute";
                platillo2.style.left = '825px';
                platillo2.style.top = '275px';
                platillo2.style.fontSize = '20px';
                platillo2.style.color = '#000';
                platillo2.style.visibility = 'visible';
                platillo2.id = 'quesa';
                instrucciones2 = document.createElement('p');
                instrucciones2.innerHTML = 'Intrucciones para su preparacion: <br> 1.Rellenar: Coloca una porción de queso Oaxaca deshebrado y unas hojas de epazote en el centro de la tortilla. <br> 2. Cocción: Dobla la tortilla y sella los bordes. Cocina en un comal a fuego medio, girando hasta que el queso se derrita y la tortilla esté dorada. <br> 3. Servir: Acompaña con salsa de chile serrano o jitomate si prefieres un poco de picante.';
                instrucciones2.style.position = "absolute";
                instrucciones2.style.left = '800px';
                instrucciones2.style.top = '340px';
                instrucciones2.style.fontSize = '15px';
                instrucciones2.style.color = '#000';
                instrucciones2.style.visibility = 'visible';
                instrucciones2.id = 'instru2';
                imagenQE.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw31zVYjQ2l7VEdsIIOuJMG3itCrzeR3iBCw&s";
                imagenQE.style.position = "absolute";
                imagenQE.style.top = '470px';
                imagenQE.style.left = '950px';
                imagenQE.style.width = '150px';
                imagenQE.style.height = '150px';
                imagenQE.style.visibility = 'visible';
                imagenQE.id = 'imagen2';

                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo2);
                    document.body.appendChild(instrucciones2);
                    document.body.appendChild(imagenQE);
                    const elemento = document.getElementById('quesa');
                    const elemento1 = document.getElementById('instru2');
                    const elemento2 = document.getElementById('imagen2');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }

                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            
            }
            //Guacamole
            if(mtable[4].style.backgroundColor === 'gray' && mtable[5].style.backgroundColor === 'gray' && mtable[14].style.backgroundColor === 'gray' && mtable[21].style.backgroundColor === 'gray' && mtable[34].style.backgroundColor === 'gray'){
                platillo3 = document.createElement('h1');
                platillo3.innerHTML = "GUACAMOLE";
                platillo3.style.position = "absolute";
                platillo3.style.left = '925px';
                platillo3.style.top = '300px';
                platillo3.style.fontSize = '30px';
                platillo3.style.color = '#000';
                platillo3.style.visibility = 'visible';
                platillo3.id = 'guaca';
                instrucciones3 = document.createElement('p');
                instrucciones3.innerHTML = '1. Machaca los aguacates <br> 2. Picar tomate, cebolla, y cilantro. <br> 3. Mezclar el aguacate previamente machacado con el tomate, cebolla y cilantro picados. <br> 4. Añadir un poco de limon y sal al gusto.';
                instrucciones3.style.position = "absolute";
                instrucciones3.style.left = '800px';
                instrucciones3.style.top = '350px';
                instrucciones3.style.fontSize = '15px';
                instrucciones3.style.color = '#000';
                instrucciones3.style.visibility = 'visible';
                instrucciones3.id = 'instru3';
                imagenGM.src = "https://es.giallozafferano.com/images/3-376/Guacamole_650x433_wm.jpg";
                imagenGM.style.position = "absolute";
                imagenGM.style.top = '450px';
                imagenGM.style.left = '950px';
                imagenGM.style.width = '150px';
                imagenGM.style.height = '150px';
                imagenGM.style.visibility = 'visible';
                imagenGM.id = 'imagen3';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo3);
                    document.body.appendChild(instrucciones3);
                    document.body.appendChild(imagenGM);
                    const elemento = document.getElementById('guaca');
                    const elemento1 = document.getElementById('instru3');
                    const elemento2 = document.getElementById('imagen3');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);

            }
            //Platillo 4: Ensalada caprese
            if(mtable[1].style.backgroundColor === 'gray' && mtable[32].style.backgroundColor === 'gray' && mtable[34].style.backgroundColor === 'gray'){
                platillo4 = document.createElement('h1');
                platillo4.innerHTML = "ENSALADA CAPRESE";
                platillo4.style.position = "absolute";
                platillo4.style.left = '925px';
                platillo4.style.top = '300px';
                platillo4.style.fontSize = '30px';
                platillo4.style.color = '#000';
                platillo4.style.visibility = 'visible';
                platillo4.id = 'ec';
                instrucciones4 = document.createElement('p');
                instrucciones4.innerHTML = '1. Corta los tomates y el queso en rodajas. <br> 2. Coloca intercaladamente las rodajas de tomate y queso en el plato. <br> 3. Añade hojas de albahaca, rocia con aceite de oliva y sal al gusto.';
                instrucciones4.style.position = "absolute";
                instrucciones4.style.left = '800px';
                instrucciones4.style.top = '350px';
                instrucciones4.style.fontSize = '15px';
                instrucciones4.style.color = '#000';
                instrucciones4.style.visibility = 'visible';
                instrucciones4.id = 'instru4';
                imagenEC.src = "https://deliciaskitchen.b-cdn.net/wp-content/uploads/2022/07/ensalada-caprese-receta-original-italiana-1170x781.webp";
                imagenEC.style.position = "absolute";
                imagenEC.style.top = '450px';
                imagenEC.style.left = '950px';
                imagenEC.style.width = '150px';
                imagenEC.style.height = '150px';
                imagenEC.style.visibility = 'visible';
                imagenEC.id = 'imagen4';
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo4);
                    document.body.appendChild(instrucciones4);
                    document.body.appendChild(imagenEC);
                    const elemento = document.getElementById('ec');
                    const elemento1 = document.getElementById('instru4');
                    const elemento2 = document.getElementById('imagen4');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
        
            }
            //Platillo5: Espaguetis al pesto
            if(mtable[0].style.backgroundColor === 'gray' && mtable[1].style.backgroundColor === 'gray' && mtable[16].style.backgroundColor === 'gray' && mtable[27].style.backgroundColor === 'gray' && mtable[32].style.backgroundColor === 'gray'){
                platillo5 = document.createElement('h1');
                platillo5.innerHTML = "ESPAGUETI AL PESTO";
                platillo5.style.position = "absolute";
                platillo5.style.left = '875px';
                platillo5.style.top = '300px';
                platillo5.style.fontSize = '30px';
                platillo5.style.color = '#000';
                platillo5.style.visibility = 'visible';
                platillo5.id = 'ep';
                instrucciones5 = document.createElement('p');
                instrucciones5.innerHTML = 'Intrucciones para su preparacion: <br> 1.Cocinar los espaguetis según las instrucciones del paquete. <br> 2. En una licuadora, mezcle albahaca, ajo, piñones, queso parmesano y aceite de oliva para hacer el pesto. <br> 3. Mezcle el pesto con los espaguetis cocidos.';
                instrucciones5.style.position = "absolute";
                instrucciones5.style.left = '800px';
                instrucciones5.style.top = '350px';
                instrucciones5.style.fontSize = '15px';
                instrucciones5.style.color = '#000';
                instrucciones5.style.visibility = 'visible';
                instrucciones5.id = 'instru5';
                imagenEP.src = "https://imag.bonviveur.com/espaguetis-al-pesto-listos-para-comer.jpg";
                imagenEP.style.position = "absolute";
                imagenEP.style.top = '450px';
                imagenEP.style.left = '950px';
                imagenEP.style.width = '150px';
                imagenEP.style.height = '150px';
                imagenEP.style.visibility = 'visible';
                imagenEP.id = 'imagen5';
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo5);
                    document.body.appendChild(instrucciones5);
                    document.body.appendChild(imagenEP);
                    const elemento = document.getElementById('ep');
                    const elemento1 = document.getElementById('instru5');
                    const elemento2 = document.getElementById('imagen5');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
        
            }
            //Platillo 6: Sopa de tomate
            if(mtable[0].style.backgroundColor === 'gray' && mtable[5].style.backgroundColor === 'gray' && mtable[9].style.backgroundColor === 'gray' && mtable[34].style.backgroundColor === 'gray'){
                platillo6 = document.createElement('h1');
                platillo6.innerHTML = "SOPA DE TOMATE";
                platillo6.style.position = "absolute";
                platillo6.style.left = '900px';
                platillo6.style.top = '300px';
                platillo6.style.fontSize = '30px';
                platillo6.style.color = '#000';
                platillo6.style.visibility = 'visible';
                platillo6.id = 'st';
                instrucciones6 = document.createElement('p');
                instrucciones6.innerHTML = 'Intrucciones para su preparacion: <br> 1.Sofrie la cebolla y el ajo hasta que esten bien dorados. <br> 2. Añada los tomates picados y cocina por unos minutos. <br> 3. Agregue el caldo de pollo y cocine a fuego lento. <br> 4. Por último licue la mezcla hasta obtener una textura suave.';
                instrucciones6.style.position = "absolute";
                instrucciones6.style.left = '800px';
                instrucciones6.style.top = '350px';
                instrucciones6.style.fontSize = '15px';
                instrucciones6.style.color = '#000';
                instrucciones6.style.visibility = 'visible';
                instrucciones6.id = 'instru6';
                imagenST.src = "https://t1.uc.ltmcdn.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_orig.jpg";
                imagenST.style.position = "absolute";
                imagenST.style.top = '500px';
                imagenST.style.left = '950px';
                imagenST.style.width = '150px';
                imagenST.style.height = '150px';
                imagenST.style.visibility = 'visible';
                imagenST.id = 'imagen6';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo6);
                    document.body.appendChild(instrucciones6);
                    document.body.appendChild(imagenST);
                    const elemento = document.getElementById('st');
                    const elemento1 = document.getElementById('instru6');
                    const elemento2 = document.getElementById('imagen6');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
        
            }
            //Platillo 7: Bruschetta - Arreglar posicion
            if(mtable[0].style.backgroundColor === 'gray' && mtable[1].style.backgroundColor === 'gray' && mtable[29].style.backgroundColor === 'gray' && mtable[34].style.backgroundColor === 'gray'){
                platillo7 = document.createElement('h1');
                platillo7.innerHTML = "BRUSCHETTA";
                platillo7.style.position = "absolute";
                platillo7.style.left = '900px';
                platillo7.style.top = '300px';
                platillo7.style.fontSize = '30px';
                platillo7.style.color = '#000';
                platillo7.style.visibility = 'visible';
                platillo7.id = 'bc';
                instrucciones7 = document.createElement('p');
                instrucciones7.innerHTML = 'Intrucciones para su preparacion: <br> 1.Tueste las rebanadas de pan. <br> 2. Frote con ajo y cubra con una mezcla de tomates picados, albahaca y aceite de oliva.';
                instrucciones7.style.position = "absolute"
                instrucciones7.style.left = '800px';
                instrucciones7.style.top = '350px';
                instrucciones7.style.fontSize = '15px';
                instrucciones7.style.color = '#000';
                instrucciones7.style.visibility = 'visible';
                instrucciones7.id = 'instru7';
                imagenBC.src = "https://www.sanpellegrino.com/es/sites/g/files/xknfdk2326/files/styles/amp_1200x900_4_3/public/bruschetta_0.jpg.webp?itok=KrEQiHy2";
                imagenBC.style.position = "absolute";
                imagenBC.style.top = '450px';
                imagenBC.style.left = '950px';
                imagenBC.style.width = '150px';
                imagenBC.style.height = '150px';
                imagenBC.style.visibility = 'visible';
                imagenBC.id = 'imagen7';
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo7);
                    document.body.appendChild(instrucciones7);
                    document.body.appendChild(imagenBC);
                    const elemento = document.getElementById('bc');
                    const elemento1 = document.getElementById('instru7');
                    const elemento2 = document.getElementById('imagen7');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
        
            }
            //Platillo 8: Arroz con pollo - arreglar posicion
            if(mtable[2].style.backgroundColor === 'gray' && mtable[5].style.backgroundColor === 'gray' && mtable[9].style.backgroundColor === 'gray' && mtable[12].style.backgroundColor === 'gray' && mtable[31].style.backgroundColor === 'gray'){
                platillo8 = document.createElement('h1');
                platillo8.innerHTML = "ARROZ CON POLLO";
                platillo8.style.position = "absolute";
                platillo8.style.left = '900px';
                platillo8.style.top = '300px';
                platillo8.style.fontSize = '30px';
                platillo8.style.color = '#000';
                platillo8.style.visibility = 'visible';
                platillo8.id = 'ap';
                instrucciones8 = document.createElement('p');
                instrucciones8.innerHTML = 'Intrucciones para su preparacion: <br> 1. Sofria la cebolla y los pimientos. <br> 2. Añada el pollo y cocine hasta que esté dorado. <br> 3. Agregue el arroz y el caldo de pollo, y cocine hasta que el arroz esté tierno.';
                instrucciones8.style.position = "absolute";
                instrucciones8.style.left = '800px';
                instrucciones8.style.top = '350px';
                instrucciones8.style.fontSize = '15px';
                instrucciones8.style.color = '#000';
                instrucciones8.style.visibility = 'visible';
                instrucciones8.id = 'instru8';
                imagenAP.src = "https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg?quality=80";
                imagenAP.style.position = "absolute";
                imagenAP.style.top = '450px';
                imagenAP.style.left = '950px';
                imagenAP.style.width = '150px';
                imagenAP.style.height = '150px';
                imagenAP.style.visibility = 'visible';
                imagenAP.id = 'imagen8';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo8);
                    document.body.appendChild(instrucciones8);
                    document.body.appendChild(imagenAP);
                    const elemento = document.getElementById('ap');
                    const elemento1 = document.getElementById('instru8');
                    const elemento2 = document.getElementById('imagen8');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
        
            }
            //Platillo 9: Chilaquiles
            if(mtable[12].style.backgroundColor === 'gray' && mtable[15].style.backgroundColor === 'gray' && mtable[32].style.backgroundColor === 'gray' && mtable[33].style.backgroundColor === 'gray' && mtable[30].style.backgroundColor === 'gray'){
                platillo9 = document.createElement('h1');
                platillo9.innerHTML = "CHILAQUILES";
                platillo9.style.position = "absolute";
                platillo9.style.left = '825px';
                platillo9.style.top = '300px';
                platillo9.style.fontSize = '30px';
                platillo9.style.color = '#000';
                platillo9.style.visibility = 'visible';
                platillo9.id = 'ch';
                instrucciones9 = document.createElement('p');
                instrucciones9.innerHTML = 'Intrucciones para su preparacion: <br> 1. Fria las tortillas en trozos hasta que esten crujientes. <br> 2. Mezcle con salsa caliente y cubra con pollo desmenuzado. <br> 3. Añada crema y queso antes de servir. ';
                instrucciones9.style.position = "absolute";
                instrucciones9.style.left = '800px';
                instrucciones9.style.top = '350px';
                instrucciones9.style.fontSize = '15px';
                instrucciones9.style.color = '#000';
                instrucciones9.style.visibility = 'visible';
                instrucciones9.id = 'instru9';
                imagenCH.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11NsBbcfRMS968DO1qZ2ENnOZ2wyRVpHtrA&s";
                imagenCH.style.position = "absolute";
                imagenCH.style.top = '450px';
                imagenCH.style.left = '950px';
                imagenCH.style.width = '150px';
                imagenCH.style.height = '150px';
                imagenCH.style.visibility = 'visible';
                imagenCH.id = 'imagen9';
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo9);
                    document.body.appendChild(instrucciones9);
                    document.body.appendChild(imagenCH);
                    const elemento = document.getElementById('ch');
                    const elemento1 = document.getElementById('instru9');
                    const elemento2 = document.getElementById('imagen9');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //Platillo 10: Tostadas de aguacate
            if(mtable[4].style.backgroundColor === 'gray' && mtable[21].style.backgroundColor === 'gray' && mtable[29].style.backgroundColor === 'gray' && mtable[30].style.backgroundColor === 'gray'){
                platillo10 = document.createElement('h1');
                platillo10.innerHTML = "TOSTADAS DE AGUACATE";
                platillo10.style.position = "absolute";
                platillo10.style.left = '900px';
                platillo10.style.top = '175px';
                platillo10.style.fontSize = '30px';
                platillo10.style.color = '#000';
                platillo10.style.visibility = 'visible';
                platillo10.id = 'ta';
                instrucciones10 = document.createElement('p');
                instrucciones10.innerHTML = 'Intrucciones para su preparacion: <br> 1. Unte aguacate machacado en las tostadas de pan. <br> 2. Añada sal, pimienta y jugo de limon al gusto.';
                instrucciones10.style.position = "absolute";
                instrucciones10.style.left = '800px';
                instrucciones10.style.top = '225px';
                instrucciones10.style.fontSize = '15px';
                instrucciones10.style.color = '#000';
                instrucciones10.style.visibility = 'visible';
                instrucciones10.id = 'instru10';
                imagenTA.src = "https://veggiefestchicago.org/wp-content/uploads/2018/12/BreadAvocato2.jpg";
                imagenTA.style.position = "absolute";
                imagenTA.style.top = '450px';
                imagenTA.style.left = '950px';
                imagenTA.style.width = '150px';
                imagenTA.style.height = '150px';
                imagenTA.style.visibility = 'visible';
                imagenTA.id = 'imagen10';

                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo10);
                    document.body.appendChild(instrucciones10);
                    document.body.appendChild(imagenTA);
                    const elemento = document.getElementById('ta');
                    const elemento1 = document.getElementById('instru10');
                    const elemento2 = document.getElementById('imagen10');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //Platillo 11: Sopa de tortila
            if(mtable[0].style.backgroundColor === 'gray' && mtable[4].style.backgroundColor === 'gray' && mtable[7].style.backgroundColor === 'gray' && mtable[9].style.backgroundColor === 'gray' && mtable[15].style.backgroundColor === 'gray' && mtable[32].style.backgroundColor === 'gray' && mtable[33].style.backgroundColor === 'gray' && mtable[34].style.backgroundColor === 'gray'){
                platillo11 = document.createElement('h1');
                platillo11.innerHTML = "SOPA DE TORTILLA";
                platillo11.style.position = "absolute";
                platillo11.style.left = '900px';
                platillo11.style.top = '300px';
                platillo11.style.fontSize = '30px';
                platillo11.style.color = '#000';
                platillo11.style.visibility = 'visible';
                platillo11.id = 'sto';
                instrucciones11 = document.createElement('p');
                instrucciones11.innerHTML = 'Intrucciones para su preparacion: <br> 1. Salsa base: Asa los jitomates, ajo y chile pasilla. <br> 2. Licúa todo con caldo de pollo y sal. <br> 3. Freír las tortillas: Corta las tortillas en tiras y fríelas en aceite vegetal hasta que estén doradas. Escurre el exceso de aceite. <br> 4. Cocción de la sopa: Calienta la salsa base en una olla y agrega más caldo de pollo si es necesario. Cocina por unos 10 minutos. <br> 5. Servir: Coloca las tiras de tortilla frita en un plato hondo, vierte la sopa encima y decora con cubos de aguacate, queso fresco desmoronado y crema.';
                instrucciones11.style.position = "absolute";
                instrucciones11.style.left = '800px';
                instrucciones11.style.top = '350px';
                instrucciones11.style.fontSize = '15px';
                instrucciones11.style.color = '#000';
                instrucciones11.style.visibility = 'visible';
                instrucciones11.id = 'instru11';
                imagenSTO.src = "https://img-global.cpcdn.com/recipes/5f26b844e2aa608f/400x400cq70/photo.jpg";
                imagenSTO.style.position = "absolute";
                imagenSTO.style.top = '525px';
                imagenSTO.style.left = '950px';
                imagenSTO.style.width = '150px';
                imagenSTO.style.height = '150px';
                imagenSTO.style.visibility = 'visible';
                imagenSTO.id = 'imagen11';

                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo11);
                    document.body.appendChild(instrucciones11);
                    document.body.appendChild(imagenSTO);
                    const elemento = document.getElementById('sto');
                    const elemento1 = document.getElementById('instru11');
                    const elemento2 = document.getElementById('imagen11');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //Platillo 12: Enchiladas verdes de pollo
            if(mtable[5].style.backgroundColor === 'gray' && mtable[8].style.backgroundColor === 'gray' && mtable[9].style.backgroundColor === 'gray' && mtable[12].style.backgroundColor === 'gray' && mtable[14].style.backgroundColor === 'gray' && mtable[15].style.backgroundColor === 'gray' && mtable[32].style.backgroundColor === 'gray' && mtable[33].style.backgroundColor === 'gray'){
                platillo12 = document.createElement('h1');
                platillo12.innerHTML = "ENCHILADAS VERDES DE POLLO";
                platillo12.style.position = "absolute";
                platillo12.style.left = '800px';
                platillo12.style.top = '275px';
                platillo12.style.fontSize = '30px';
                platillo12.style.color = '#000';
                platillo12.style.visibility = 'visible';
                platillo12.id = 'ev';
                instrucciones12 = document.createElement('p');
                instrucciones12.innerHTML = 'Intrucciones para su preparacion: <br> 1. Asar los chiles poblanos: Asa los chiles sobre la llama directa o en un comal hasta que la piel esté negra. Colócalos en una bolsa de plástico para que suden y pélalos. Después, licúa los chiles con un poco de caldo de pollo para hacer la salsa. <br> 2. Cocinar el pollo: Hierve las piezas de pollo en agua con sal y un poco de cebolla. Desmenuza el pollo y reserva. <br> 3. Calentar las tortillas: Pasa las tortillas por aceite caliente brevemente para suavizarlas. <br> 4. Ensamble: Rellena cada tortilla con pollo desmenuzado, enrolla y coloca en un plato. <br> 5. Bañar las enchiladas: Vierte la salsa de chile poblano sobre las enchiladas. Decora con crema, queso fresco, cilantro y cebolla.';
                instrucciones12.style.position = "absolute";
                instrucciones12.style.left = '800px';
                instrucciones12.style.top = '350px';
                instrucciones12.style.fontSize = '15px';
                instrucciones12.style.color = '#000';
                instrucciones12.style.visibility = 'visible';
                instrucciones12.id = 'instru12';
                imagenEV.src = "https://peopleenespanol.com/thmb/jZqckY5Qzfmc1ibnxnr6pZpxCSY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/enchiladas-verdes-con-pollo-2000-cf4dccfe73014347be4826ffc9e3fdaa.jpg";
                imagenEV.style.position = "absolute";
                imagenEV.style.top = '550px';
                imagenEV.style.left = '950px';
                imagenEV.style.width = '150px';
                imagenEV.style.height = '150px';
                imagenEV.style.visibility = 'visible';
                imagenEV.id = 'imagen12';

                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo12);
                    document.body.appendChild(instrucciones12);
                    document.body.appendChild(imagenEV);
                    const elemento = document.getElementById('ev');
                    const elemento1 = document.getElementById('instru12');
                    const elemento2 = document.getElementById('imagen12');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            
        })
    })
} 

menu2.addEventListener('click', menu_2);
//Menu 2 postres
//Variables adjuntas a tarta de manzana
let platillo1P;
const imagenTM = document.createElement('img');
let instrucciones1P;
//Variables adjuntas a brownies
let platillo2P;
const imagenBR = document.createElement('img');
let instrucciones2P;

let platillo3P;
const imagenMC = document.createElement('img');
let instrucciones3P;

let platillo4P;
const imagenGA = document.createElement('img');
let instrucciones4P;

let platillo5P;
const imagenFL = document.createElement('img');
let instrucciones5P;

let platillo6P;
const imagenHV = document.createElement('img');
let instrucciones6P;

let platillo7P;
const imagenCC = document.createElement('img');
let instrucciones7P;

let platillo8P;
const imagenPC = document.createElement('img');
let instrucciones8P;

let platillo9P;
const imagenAL = document.createElement('img');
let instrucciones9P;

let platillo10P;
const imagenCR = document.createElement('img');
let instrucciones10P;

let platillo11P;
const imagenTQ = document.createElement('img');
let instrucciones11P;

let platillo12P;
const imagenMA = document.createElement('img');
let instrucciones12P;

function menu_2(){
    if(tabla2.style.visibility === 'hidden'){
        tabla2.style.visibility = 'visible';
    } else {
        tabla2.style.visibility = 'hidden';
    }
    mtable.forEach((data) => {
        data.addEventListener('click',function(){
            if(data.style.backgroundColor === 'gray'){
                data.style.backgroundColor = 'white';
            } else {
                data.style.backgroundColor = 'gray';
            }
            //platillo 1: tarta de manzana
            if(mtable[37].style.backgroundColor === 'gray' && mtable[38].style.backgroundColor === 'gray' && mtable[47].style.backgroundColor === 'gray' && mtable[48].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray'){
                platillo1P = document.createElement('h1');
                platillo1P.innerHTML = "TARTA DE MANZANA";
                platillo1P.style.position = "absolute";
                platillo1P.style.left = '900px';
                platillo1P.style.top = '300px';
                platillo1P.style.fontSize = '30px';
                platillo1P.style.color = '#000';
                platillo1P.style.visibility = 'visible';
                platillo1P.id = 'tm';
                instrucciones1P = document.createElement('p');
                instrucciones1P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Pele las manzanas y cortelas en cortes uniformes. <br> 2. Coloque las manzanas peladas y cortadas sobre la masa, espolvorea con azúcar y canela. <br> 3. Añada trozos de mantequilla y hornea hasta que las manzana estén tiernas y la masa dorada.';
                instrucciones1P.style.position = "absolute";
                instrucciones1P.style.left = '800px';
                instrucciones1P.style.top = '350px';
                instrucciones1P.style.fontSize = '15px';
                instrucciones1P.style.color = '#000';
                instrucciones1P.style.visibility = 'visible';
                instrucciones1P.id = 'instru1p';
                imagenTM.src = "https://imag.bonviveur.com/tarta-de-manzana.jpg";
                imagenTM.style.position = "absolute";
                imagenTM.style.top = '525px';
                imagenTM.style.left = '950px';
                imagenTM.style.width = '150px';
                imagenTM.style.height = '150px';
                imagenTM.style.visibility = 'visible';
                imagenTM.id = 'imagen1p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo1P);
                    document.body.appendChild(instrucciones1P);
                    document.body.appendChild(imagenTM);
                    const elemento = document.getElementById('tm');
                    const elemento1 = document.getElementById('instru1p');
                    const elemento2 = document.getElementById('imagen1p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);

            }
            //platillo 2: Brownies
            if(mtable[37].style.backgroundColor === 'gray' && mtable[40].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[44].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray' && mtable[51].style.backgroundColor === 'gray'){
                platillo2P = document.createElement('h1');
                platillo2P.innerHTML = "BROWNIES";
                platillo2P.style.position = "absolute";
                platillo2P.style.left = '900px';
                platillo2P.style.top = '300px';
                platillo2P.style.fontSize = '30px';
                platillo2P.style.color = '#000';
                platillo2P.style.visibility = 'visible';
                platillo2P.id = 'br';
                instrucciones2P = document.createElement('p');
                instrucciones2P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Derrite el chocolate con la mantequilla. <br> 2. Añada azúcar, huevos y harina. <br> 3. Mezcle bien y horne hasta que estén firmes al tacto. <br> 4. Añada nueces si lo desea.';
                instrucciones2P.style.position = "absolute";
                instrucciones2P.style.left = '800px';
                instrucciones2P.style.top = '350px';
                instrucciones2P.style.fontSize = '15px';
                instrucciones2P.style.color = '#000';
                instrucciones2P.style.visibility = 'visible';
                instrucciones2P.id = 'instru2p';
                imagenBR.src = "https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/brownie-de-chocolate.jpg";
                imagenBR.style.position = "absolute";
                imagenBR.style.top = '525px';
                imagenBR.style.left = '950px';
                imagenBR.style.width = '150px';
                imagenBR.style.height = '150px';
                imagenBR.style.visibility = 'visible';
                imagenBR.id = 'imagen2p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo2P);
                    document.body.appendChild(instrucciones2P);
                    document.body.appendChild(imagenBR);
                    const elemento = document.getElementById('br');
                    const elemento1 = document.getElementById('instru2p');
                    const elemento2 = document.getElementById('imagen2p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 3: Mousee de chocolate
            if(mtable[37].style.backgroundColor === 'gray' && mtable[40].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[52].style.backgroundColor === 'gray'){
                platillo3P = document.createElement('h1');
                platillo3P.innerHTML = "MOUSSE DE CHOCOLATE";
                platillo3P.style.position = "absolute";
                platillo3P.style.left = '825px';
                platillo3P.style.top = '300px';
                platillo3P.style.fontSize = '30px';
                platillo3P.style.color = '#000';
                platillo3P.style.visibility = 'visible';
                platillo3P.id = 'mc';
                instrucciones3P = document.createElement('p');
                instrucciones3P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Derrita el chocolate y deje enfriar. <br> 2. Bata la nata con azúcar hasta que esté firme. <br> 3. Mezcle el chocolate derretido con las yemas. <br> 4. Incorpore la nata montada';
                instrucciones3P.style.position = "absolute";
                instrucciones3P.style.left = '800px';
                instrucciones3P.style.top = '350px';
                instrucciones3P.style.fontSize = '15px';
                instrucciones3P.style.color = '#000';
                instrucciones3P.style.visibility = 'visible';
                instrucciones3P.id = 'instru3p';
                imagenMC.src = "https://www.elinasaiach.com/wp-content/uploads/2022/04/Mousse-Chocolate-3-500x375.jpg";
                imagenMC.style.position = "absolute";
                imagenMC.style.top = '525px';
                imagenMC.style.left = '950px';
                imagenMC.style.width = '150px';
                imagenMC.style.height = '150px';
                imagenMC.style.visibility = 'visible';
                imagenMC.id = 'imagen3p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo3P);
                    document.body.appendChild(instrucciones3P);
                    document.body.appendChild(imagenMC);
                    const elemento = document.getElementById('mc');
                    const elemento1 = document.getElementById('instru3p');
                    const elemento2 = document.getElementById('imagen3p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 4: Galletas de avena
            if(mtable[35].style.backgroundColor === 'gray' && mtable[37].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[44].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray'){
                platillo4P = document.createElement('h1');
                platillo4P.innerHTML = "GALLETAS DE AVENA";
                platillo4P.style.position = "absolute";
                platillo4P.style.left = '825px';
                platillo4P.style.top = '300px';
                platillo4P.style.fontSize = '30px';
                platillo4P.style.color = '#000';
                platillo4P.style.visibility = 'visible';
                platillo4P.id = 'ga';
                instrucciones4P = document.createElement('p');
                instrucciones4P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Mezcle todos los ingredientes y forme pequeñas bolitas. <br> 2. Coloquelas en una bandeja para hornear y aplane ligeramente. <br> 3. Horne hasta que estén doradas.';
                instrucciones4P.style.position = "absolute";
                instrucciones4P.style.left = '800px';
                instrucciones4P.style.top = '350px';
                instrucciones4P.style.fontSize = '15px';
                instrucciones4P.style.color = '#000';
                instrucciones4P.style.visibility = 'visible';
                instrucciones4P.id = 'instru4p';
                imagenGA.src = "https://cdn0.recetasgratis.net/es/posts/3/0/3/galletas_de_avena_faciles_y_rapidas_67303_600.jpg";
                imagenGA.style.position = "absolute";
                imagenGA.style.top = '525px';
                imagenGA.style.left = '950px';
                imagenGA.style.width = '150px';
                imagenGA.style.height = '150px';
                imagenGA.style.visibility = 'visible';
                imagenGA.id = 'imagen4p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo4P);
                    document.body.appendChild(instrucciones4P);
                    document.body.appendChild(imagenGA);
                    const elemento = document.getElementById('ga');
                    const elemento1 = document.getElementById('instru4p');
                    const elemento2 = document.getElementById('imagen4p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 5: Flan
            if(mtable[37].style.backgroundColor === 'gray' && mtable[39].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[45].style.backgroundColor === 'gray' && mtable[54].style.backgroundColor === 'gray'){
                platillo5P = document.createElement('h1');
                platillo5P.innerHTML = "FLAN";
                platillo5P.style.position = "absolute";
                platillo5P.style.left = '925px';
                platillo5P.style.top = '300px';
                platillo5P.style.fontSize = '30px';
                platillo5P.style.color = '#000';
                platillo5P.style.visibility = 'visible';
                platillo5P.id = 'fl';
                instrucciones5P = document.createElement('p');
                instrucciones5P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Bate los huevos con azúcar, añade leche y vainilla. <br> 2. Vierte en moldes con caramelo líquido y hornea al baño maría hasta que cuajen.';
                instrucciones5P.style.position = "absolute";
                instrucciones5P.style.left = '800px';
                instrucciones5P.style.top = '350px';
                instrucciones5P.style.fontSize = '15px';
                instrucciones5P.style.color = '#000';
                instrucciones5P.style.visibility = 'visible';
                instrucciones5P.id = 'instru5p';
                imagenFL.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyTTVQ11FrjPyKMYZ7HY1mQQShZdOXzoDfttyJOla1IUs2wAEGKpC1fwgYbdJZ0TyTQpnd1Z5EhrghK2qFYV5kMP8uAyMLlKH5scZ7hmLZdZTxs9zVZXGxmjHuwCLvVqKxRzohrMdtoQKB954uPS5cRHGn0YzivT-zVGgBd3Yb84ShWyf-kamr_6sb-Q/s1600/flan-queso-crema.JPG";
                imagenFL.style.position = "absolute";
                imagenFL.style.top = '525px';
                imagenFL.style.left = '950px';
                imagenFL.style.width = '150px';
                imagenFL.style.height = '150px';
                imagenFL.style.visibility = 'visible';
                imagenFL.id = 'imagen5p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo5P);
                    document.body.appendChild(instrucciones5P);
                    document.body.appendChild(imagenFL);
                    const elemento = document.getElementById('fl');
                    const elemento1 = document.getElementById('instru5p');
                    const elemento2 = document.getElementById('imagen5p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 6: Helado de vainilla
            if(mtable[37].style.backgroundColor === 'gray' && mtable[45].style.backgroundColor === 'gray' && mtable[52].style.backgroundColor === 'gray' && mtable[54].style.backgroundColor === 'gray'){
                platillo6P = document.createElement('h1');
                platillo6P.innerHTML = "HELADO DE VAINILLA";
                platillo6P.style.position = "absolute";
                platillo6P.style.left = '875px';
                platillo6P.style.top = '300px';
                platillo6P.style.fontSize = '30px';
                platillo6P.style.color = '#000';
                platillo6P.style.visibility = 'visible';
                platillo6P.id = 'hv';
                instrucciones6P = document.createElement('p');
                instrucciones6P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Mezcla todos los ingredientes y congela, removiendo cada media hora hasta que tenga la consistencia deseada.';
                instrucciones6P.style.position = "absolute";
                instrucciones6P.style.left = '800px';
                instrucciones6P.style.top = '350px';
                instrucciones6P.style.fontSize = '15px';
                instrucciones6P.style.color = '#000';
                instrucciones6P.style.visibility = 'visible';
                instrucciones6P.id = 'instru6p';
                imagenHV.src = "https://comedera.com/wp-content/uploads/sites/9/2022/05/Helado-de-vainilla-sin-azucar.jpg";
                imagenHV.style.position = "absolute";
                imagenHV.style.top = '525px';
                imagenHV.style.left = '950px';
                imagenHV.style.width = '150px';
                imagenHV.style.height = '150px';
                imagenHV.style.visibility = 'visible';
                imagenHV.id = 'imagen6p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo6P);
                    document.body.appendChild(instrucciones6P);
                    document.body.appendChild(imagenHV);
                    const elemento = document.getElementById('hv');
                    const elemento1 = document.getElementById('instru6p');
                    const elemento2 = document.getElementById('imagen6p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 7: Cheese cake
            if(mtable[37].style.backgroundColor === 'gray' && mtable[41].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray' && mtable[53].style.backgroundColor === 'gray' && mtable[54].style.backgroundColor === 'gray'){
                platillo7P = document.createElement('h1');
                platillo7P.innerHTML = "CHEESECAKE";
                platillo7P.style.position = "absolute";
                platillo7P.style.left = '825px';
                platillo7P.style.top = '300px';
                platillo7P.style.fontSize = '30px';
                platillo7P.style.color = '#000';
                platillo7P.style.visibility = 'visible';
                platillo7P.id = 'cc';
                instrucciones7P = document.createElement('p');
                instrucciones7P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Tritura las galletas y mezcla con mantequilla derretida. <br> 2. Presiona en el fondo de un molde. <br> 3. Mezcla el queso crema con azúcar, huevos y vainilla, vierte sobre la base de galletas y hornea.';
                instrucciones7P.style.position = "absolute";
                instrucciones7P.style.left = '800px';
                instrucciones7P.style.top = '350px';
                instrucciones7P.style.fontSize = '15px';
                instrucciones7P.style.color = '#000';
                instrucciones7P.style.visibility = 'visible';
                instrucciones7P.id = 'instru7p';
                imagenCC.src = "https://www.splenda.com/wp-content/uploads/2020/05/american-classic-cheesecake-2000x1000.jpg";
                imagenCC.style.position = "absolute";
                imagenCC.style.top = '525px';
                imagenCC.style.left = '950px';
                imagenCC.style.width = '150px';
                imagenCC.style.height = '150px';
                imagenCC.style.visibility = 'visible';
                imagenCC.id = 'imagen7p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo7P);
                    document.body.appendChild(instrucciones7P);
                    document.body.appendChild(imagenCC);
                    const elemento = document.getElementById('cc');
                    const elemento1 = document.getElementById('instru7p');
                    const elemento2 = document.getElementById('imagen7p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 8: Panna Cotta
            if(mtable[37].style.backgroundColor === 'gray' && mtable[42].style.backgroundColor === 'gray' && mtable[52].style.backgroundColor === 'gray' && mtable[54].style.backgroundColor === 'gray'){
                platillo8P = document.createElement('h1');
                platillo8P.innerHTML = "PANNA COTTA";
                platillo8P.style.position = "absolute";
                platillo8P.style.left = '900px';
                platillo8P.style.top = '300px';
                platillo8P.style.fontSize = '30px';
                platillo8P.style.color = '#000';
                platillo8P.style.visibility = 'visible';
                platillo8P.id = 'pc';
                instrucciones8P = document.createElement('p');
                instrucciones8P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Calienta la nata con azúcar y vainilla, añade la gelatina disuelta y vierte en moldes. <br> 2. Refrigera hasta que cuaje.';
                instrucciones8P.style.position = "absolute";
                instrucciones8P.style.left = '800px';
                instrucciones8P.style.top = '350px';
                instrucciones8P.style.fontSize = '15px';
                instrucciones8P.style.color = '#000';
                instrucciones8P.style.visibility = 'visible';
                instrucciones8P.id = 'instru8p';
                imagenPC.src = "https://imag.bonviveur.com/panna-cotta.jpg";
                imagenPC.style.position = "absolute";
                imagenPC.style.top = '525px';
                imagenPC.style.left = '950px';
                imagenPC.style.width = '150px';
                imagenPC.style.height = '150px';
                imagenPC.style.visibility = 'visible';
                imagenPC.id = 'imagen8p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo8P);
                    document.body.appendChild(instrucciones8P);
                    document.body.appendChild(imagenPC);
                    const elemento = document.getElementById('pc');
                    const elemento1 = document.getElementById('instru8p');
                    const elemento2 = document.getElementById('imagen8p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 9: Arroz con leche
            if(mtable[36].style.backgroundColor === 'gray' && mtable[37].style.backgroundColor === 'gray' && mtable[38].style.backgroundColor === 'gray' && mtable[45].style.backgroundColor === 'gray'){
                platillo9P = document.createElement('h1');
                platillo9P.innerHTML = "ARROZ CON LECHE";
                platillo9P.style.position = "absolute";
                platillo9P.style.left = '875px';
                platillo9P.style.top = '300px';
                platillo9P.style.fontSize = '30px';
                platillo9P.style.color = '#000';
                platillo9P.style.visibility = 'visible';
                platillo9P.id = 'al';
                instrucciones9P = document.createElement('p');
                instrucciones9P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Cocina el arroz en leche con azúcar y canela a fuego lento hasta que esté cremoso.';
                instrucciones9P.style.position = "absolute";
                instrucciones9P.style.left = '800px';
                instrucciones9P.style.top = '350px';
                instrucciones9P.style.fontSize = '15px';
                instrucciones9P.style.color = '#000';
                instrucciones9P.style.visibility = 'visible';
                instrucciones9P.id = 'instru9p';
                imagenAL.src = "https://peopleenespanol.com/thmb/O4bAeAl5OXtRrGPmtCsHh4UpzDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/recetas-1092-arroz-con-leche-2000-ac1485846508488e8da95f5f9c8de793.jpg";
                imagenAL.style.position = "absolute";
                imagenAL.style.top = '525px';
                imagenAL.style.left = '950px';
                imagenAL.style.width = '150px';
                imagenAL.style.height = '150px';
                imagenAL.style.visibility = 'visible';
                imagenAL.id = 'imagen9p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo9P);
                    document.body.appendChild(instrucciones9P);
                    document.body.appendChild(imagenAL);
                    const elemento = document.getElementById('al');
                    const elemento1 = document.getElementById('instru9p');
                    const elemento2 = document.getElementById('imagen9p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 10: Crepas
            if(mtable[37].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[44].style.backgroundColor === 'gray' && mtable[45].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray' && mtable[54].style.backgroundColor === 'gray'){
                platillo10P = document.createElement('h1');
                platillo10P.innerHTML = "CREPAS";
                platillo10P.style.position = "absolute";
                platillo10P.style.left = '900px';
                platillo10P.style.top = '300px';
                platillo10P.style.fontSize = '30px';
                platillo10P.style.color = '#000';
                platillo10P.style.visibility = 'visible';
                platillo10P.id = 'cr';
                instrucciones10P = document.createElement('p');
                instrucciones10P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Mezcla todos los ingredientes y cocina pequeñas porciones en una sartén antiadherente.';
                instrucciones10P.style.position = "absolute";
                instrucciones10P.style.left = '800px';
                instrucciones10P.style.top = '350px';
                instrucciones10P.style.fontSize = '15px';
                instrucciones10P.style.color = '#000';
                instrucciones10P.style.visibility = 'visible';
                instrucciones10P.id = 'instru10p';
                imagenCR.src = "https://peopleenespanol.com/thmb/a3G6sm7sKOWS83VeXoe8aRZzJg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/recetas-10075-masa-para-crepas-basica-2000-1ed1f706c7134ce1a04f2903bf13df84.jpg";
                imagenCR.style.position = "absolute";
                imagenCR.style.top = '525px';
                imagenCR.style.left = '950px';
                imagenCR.style.width = '150px';
                imagenCR.style.height = '150px';
                imagenCR.style.visibility = 'visible';
                imagenCR.id = 'imagen10p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo10P);
                    document.body.appendChild(instrucciones10P);
                    document.body.appendChild(imagenCR);
                    const elemento = document.getElementById('cr');
                    const elemento1 = document.getElementById('instru10p');
                    const elemento2 = document.getElementById('imagen10p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 11: Tarta de queso
            if(mtable[37].style.backgroundColor === 'gray' && mtable[41].style.backgroundColor === 'gray' && mtable[42].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray' && mtable[53].style.backgroundColor === 'gray'){
                platillo11P = document.createElement('h1');
                platillo11P.innerHTML = "TARTA DE QUESO SIN HORNO";
                platillo11P.style.position = "absolute";
                platillo11P.style.left = '825px';
                platillo11P.style.top = '300px';
                platillo11P.style.fontSize = '30px';
                platillo11P.style.color = '#000';
                platillo11P.style.visibility = 'visible';
                platillo11P.id = 'tq';
                instrucciones11P = document.createElement('p');
                instrucciones11P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Mezcla las galletas trituradas con mantequilla y presiona en el fondo de un molde. <br> Mezcla el queso crema con azúcar y gelatina disuelta y vierte sobre la base. <br> 3. Refrigera hasta que cuaje.';
                instrucciones11P.style.position = "absolute";
                instrucciones11P.style.left = '800px';
                instrucciones11P.style.top = '350px';
                instrucciones11P.style.fontSize = '15px';
                instrucciones11P.style.color = '#000';
                instrucciones11P.style.visibility = 'visible';
                instrucciones11P.id = 'instru11p';
                imagenTQ.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxV1vlpjldvJlV5UTzP3OW6cla_5oD7OHTSA&s";
                imagenTQ.style.position = "absolute";
                imagenTQ.style.top = '525px';
                imagenTQ.style.left = '950px';
                imagenTQ.style.width = '150px';
                imagenTQ.style.height = '150px';
                imagenTQ.style.visibility = 'visible';
                imagenTQ.id = 'imagen11p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo11P);
                    document.body.appendChild(instrucciones11P);
                    document.body.appendChild(imagenTQ);
                    const elemento = document.getElementById('tq');
                    const elemento1 = document.getElementById('instru11p');
                    const elemento2 = document.getElementById('imagen11p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            //platillo 12: Magdalenas
            if(mtable[37].style.backgroundColor === 'gray' && mtable[43].style.backgroundColor === 'gray' && mtable[44].style.backgroundColor === 'gray' && mtable[45].style.backgroundColor === 'gray' && mtable[46].style.backgroundColor === 'gray' && mtable[49].style.backgroundColor === 'gray'){
                platillo12P = document.createElement('h1');
                platillo12P.innerHTML = "MAGDALENAS";
                platillo12P.style.position = "absolute";
                platillo12P.style.left = '875px';
                platillo12P.style.top = '300px';
                platillo12P.style.fontSize = '30px';
                platillo12P.style.color = '#000';
                platillo12P.style.visibility = 'visible';
                platillo12P.id = 'ma';
                instrucciones12P = document.createElement('p');
                instrucciones12P.innerHTML = 'Intrucciones para su preparacion: <br> 1. Mezcla todos los ingredientes y vierte en moldes. <br> 2. Hornea hasta que estén doradas.';
                instrucciones12P.style.position = "absolute";
                instrucciones12P.style.left = '800px';
                instrucciones12P.style.top = '350px';
                instrucciones12P.style.fontSize = '15px';
                instrucciones12P.style.color = '#000';
                instrucciones12P.style.visibility = 'visible';
                instrucciones12P.id = 'instru12p';
                imagenMA.src = "https://img.bekiacocina.com/cocina/0000/322-h.jpg";
                imagenMA.style.position = "absolute";
                imagenMA.style.top = '525px';
                imagenMA.style.left = '950px';
                imagenMA.style.width = '150px';
                imagenMA.style.height = '150px';
                imagenMA.style.visibility = 'visible';
                imagenMA.id = 'imagen12p';
                
                fuego.style.visibility = 'visible';
                fuego2.style.visibility = 'visible';
                setTimeout(()=> {
                    fuego.style.visibility = 'hidden';
                    fuego2.style.visibility = 'hidden';
                    document.body.appendChild(platillo12P);
                    document.body.appendChild(instrucciones12P);
                    document.body.appendChild(imagenMA);
                    const elemento = document.getElementById('ma');
                    const elemento1 = document.getElementById('instru12p');
                    const elemento2 = document.getElementById('imagen12p');
                    function limpiador(){
                        mtable.forEach(data => {
                            data.style.backgroundColor = 'white';
                    })
                
                    elemento.remove();
                    elemento1.remove();        
                    elemento2.remove();   
                    }
                    botonlim.addEventListener('click', limpiador);
                }, 4000);
            }
            
            
        })
    })
}