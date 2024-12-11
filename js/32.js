const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", e => {
e.preventDefault()

const nombre = document.querySelector("#nombre").value
const password = document.querySelector("#password").value

const alerta = document.createElement("DIV")
alerta.classList.add('alerta', 'text-white', 'uppercase', 
    'text-sm', 'text-center','p-2', 'font-black')

if(nombre === "" || password === ""){
    alerta.textContent= "Todos los campos son obligatorios"
    alerta.classList.add('bg-red-300')
}else {
    alerta.textContent="todo bien!!! iniciar sesion"
    alerta.classList.add('bg-black-300')
}
formulario.appendChild(alerta)
//formulario appendChild es un hijo de
setTimeout(()=> {

}, 3000);


})