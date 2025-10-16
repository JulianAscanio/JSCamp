
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
const filterInput = document.querySelector('.search-bar');
filterInput?.addEventListener('input', function(event) {

    const searchTerm = event.target.value.toLowerCase().trim();
    const jobListings = document.querySelectorAll('.job-card');

   jobListings.forEach(listing => {

        const title = listing.querySelector('h3').textContent.toLowerCase();
        const company = listing.querySelector('small').textContent.toLowerCase();
        const description = listing.querySelector('.job-description').textContent.toLowerCase();


        const matches = title.includes(searchTerm);
        const matchesCompany = company.includes(searchTerm);
        const matchesDescription = description.includes(searchTerm);

        if (searchTerm === '' || matches || matchesCompany || matchesDescription) {
            listing.style.display = 'block';
        }else{
            listing.style.display = 'none';
        }

    });
});


//const locationFilter = document.querySelector('#location-filter');
//locationFilter?.addEventListener('change', function(event) {

//    const selectedLocation = event.target.value;
//    const jobListings = document.querySelectorAll('.job-card');

//    jobListings.forEach(listing => {
//        const jobLocation = listing.getAttribute('data-location');

//        if (selectedLocation === '' || jobLocation === selectedLocation) {
//            listing.style.display = 'block';
//        } else {
//            listing.style.display = 'none';
//        }
//    });
//})

document.addEventListener('DOMContentLoaded', function() {
    const selects = document.querySelectorAll('select');

    function handleFilterChange() {
        const selectsArray = Array.from(selects);
        const technologyFilter = selectsArray[0]?.value || '';
        const locationFilter = selectsArray[1]?.value || '';
        const contractFilter = selectsArray[2]?.value || '';
        const experienceFilter = selectsArray[3]?.value || '';

        const jobListings = document.querySelectorAll('.job-card');

        jobListings.forEach(listing => {
            const jobLocation = listing.getAttribute('data-location');
            const jobTechnology = listing.getAttribute('data-tecnology').split(' ');
            const jobContract = listing.getAttribute('data-contract');
            const jobExperience = listing.getAttribute('data-experience');

            const technologyMatch = !technologyFilter || jobTechnology.includes(technologyFilter);
            const locationMatch = !locationFilter || jobLocation === locationFilter;
            const contractMatch = !contractFilter || jobContract === contractFilter;
            const experienceMatch = !experienceFilter || jobExperience === experienceFilter;



            if (technologyMatch && locationMatch && contractMatch && experienceMatch) {
                listing.style.display = 'block';
            } else {
                listing.style.display = 'none';
            }
        });
    }

    selects.forEach(select => {
        select.addEventListener('change', handleFilterChange);
    });
    // Inicializar el filtro al cargar la página
        handleFilterChange();
});

const jobsGridSection = document.querySelector('.jobs-grid');

jobsGridSection?.addEventListener('click', function(event) {
    const element = event.target

    if(element.classList.contains('apply-button')) {
        element.textContent = '¡Completado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});