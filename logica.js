
(function () {
    const contenedor = document.getElementById('contenedor_de_ventana');
    const botoncito = document.querySelectorAll("#contenedor_de_respuestas button");
    botoncito.forEach(botoncito => {
        botoncito.addEventListener("click",()=>{
            contenedor.classList.add('active');})
    });

})();
        
    
