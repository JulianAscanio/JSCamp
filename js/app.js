
//const boton = document.querySelector('.apply-button');
//console.log(boton); //null si no existe

// Si el botón existe, agregar el event listener
//if(boton) {
//    boton.addEventListener('click', () => {
//        boton.textContent = '¡Completado!';
//        boton.classList.add('is-applied');
//    });
//}

// Seleccionar todos los botones con la clase 'apply-button'
//const botones = document.querySelectorAll('.apply-button');
//botones.forEach(boton => { // Iterar sobre cada botón
//    boton.addEventListener('click', function() { 
//        boton.textContent = '¡Completado!';
//        boton.classList.add('is-applied');
//    });
//});

const jobsGridSection = document.querySelector('.jobs-grid');

jobsGridSection?.addEventListener('click', function(event) {
    const element = event.target

    if(element.classList.contains('apply-button')) {
        element.textContent = '¡Completado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});