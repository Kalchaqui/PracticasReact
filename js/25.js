//Fetch API con Promises
const url = "https://jsonplaceholder.typicode.com/comments"

fetch(url)//sirve para buscar y obtener los datos

.then((respuesta)=> { //Promises
    if(respuesta.ok) {
        return respuesta.json()
    }
    throw new Error("Error en la petición")
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error.message)
}) 