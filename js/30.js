// Eventos del DOM - clicks
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('click', () => {
//     heading.textContent = 'Se ha dado click'
// })
// heading.addEventListener('mouseenter', () => {
//     heading.textContent = 'Efecto con hover del mouse'
// })
// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'Saliendo...'
// })

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.textContent = 'Diste click ...'
    })
})