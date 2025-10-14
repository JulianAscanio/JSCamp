
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

//fuhcionalidad del filtro de trabajos
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar');
    const filterSelects = document.querySelectorAll('.search-filters');
    
    function applyAllFilters() {
        const searchTerm = searchInput?.value.toLowerCase().trim() || '';
        
        // Obtener valores de los selects por su name
        const technology = document.querySelector('#technology')?.value || '';
        const location = document.querySelector('#location')?.value || '';
        const contract = document.querySelector('#contract')?.value || '';
        const experience = document.querySelector('#experience')?.value || '';
        
        const jobListings = document.querySelectorAll('.job-card');
        
        jobListings.forEach(listing => {
            // Búsqueda por texto
            const title = listing.querySelector('h3').textContent.toLowerCase();
            const company = listing.querySelector('small').textContent.toLowerCase();
            const description = listing.querySelector('.job-description').textContent.toLowerCase();
            
            const textMatch = !searchTerm || 
                             title.includes(searchTerm) || 
                             company.includes(searchTerm) || 
                             description.includes(searchTerm);
            
            // Filtros por selects
            const techMatch = !technology || listing.dataset.technology === technology;
            const locationMatch = !location || listing.dataset.location === location;
            const contractMatch = !contract || listing.dataset.contract === contract;
            const experienceMatch = !experience || listing.dataset.experience === experience;
            
            if (textMatch && techMatch && locationMatch && contractMatch && experienceMatch) {
                listing.style.display = 'flex';
            } else {
                listing.style.display = 'none';
            }
        });
    }
    
    // Event listeners
    searchInput?.addEventListener('input', applyAllFilters);
    filterSelects.forEach(select => select.addEventListener('change', applyAllFilters));
});


//const filterInput = document.querySelector('.search-bar');
//filterInput?.addEventListener('input', function(event) {

//    const searchTerm = event.target.value.toLowerCase().trim();
//    const jobListings = document.querySelectorAll('.job-card');

//   jobListings.forEach(listing => {

//        const title = listing.querySelector('h3').textContent.toLowerCase();
//        const company = listing.querySelector('small').textContent.toLowerCase();
//        const description = listing.querySelector('.job-description').textContent.toLowerCase();


//        const matches = title.includes(searchTerm);
//        const matchesCompany = company.includes(searchTerm);
//        const matchesDescription = description.includes(searchTerm);

//        if (searchTerm === '' || matches || matchesCompany || matchesDescription) {
//            listing.style.display = 'block';
   //     }else{
    //        listing.style.display = 'none';
    //    }

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