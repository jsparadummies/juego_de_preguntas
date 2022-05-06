//logica de botones contenedores de respuestas//
(function () {
    const contenedor = document.getElementById('contenedor_de_ventana');
    const botoncito = document.querySelectorAll("#contenedor_de_respuestas button");
    botoncito.forEach(botoncito => {
        botoncito.addEventListener("click",()=>{
            contenedor.classList.add('active');})
    });

})();

// logica de boton de si//
 var contenedor_modal = document.getElementById('padre-de-modal');
 var btnsi = document.getElementById('btnsi');
 btnsi.addEventListener('click',()=>{
    contenedor_modal.classList.add('active');
 });

 //logica de boton de no//
var modal_perdedor = document.getElementById('padre-de-modal-no');
 var btnno = document.getElementById('btn_no');
 btnno.addEventListener('click',()=>{
    modal_perdedor.classList.add('active');
 });
    
