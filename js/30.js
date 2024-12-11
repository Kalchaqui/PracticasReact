//Eventos del DOM -Click
const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll(".navegacion a")
//heading.textContent = "Curso de Kalcha"

enlaces.forEach( enlace => { 
    enlace.addEventListener("click", (e)=> {
        e.preventDefault()
        e.target.textContent = "Diste click kalcha"
 })
})