//Performance y Multiple Async Await

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/albums"
const url3 =  "https://jsonplaceholder.typicode.com/todos"

const consultarAPI = async() => {
    try {
        const inicio = performance.now()//comienza a medir en tiempo
        const respuesta = await fetch(url)//el await espera que haga el llamado para ejecutar la tercer linea
        const data = await respuesta.json()
        console.log(data)

        
        const respuesta2 = await fetch(url2)
        const data2 = await respuesta2.json()
        console.log(data2)

        const respuesta3 = await fetch(url3)
        const data3 = await respuesta3.json()
        console.log(data3)

        const fin = performance.now()

        console.log(`Primera función: " ${fin - inicio}ms`)
    } catch(error) {
        console.log(error.message)
    }

    }
consultarAPI()

//MEJORA DEL CODIGO ANTERIOR, el codigo anterior se ejecutaba una esperando la anterior, en este no.
//porque en el siguiente codigo ejecuta los fetch al mismo tiempo y mejora la performance
//Al usar Promise.all las consultas se hacen en paralelo
const consultarAPI2 = async() => {
    try {
        const inicio = performance.now()

        const [respuesta, respuesta2, respuesta3] = await Promise.all
        ([fetch(url), fetch(url2), fetch(url3)])//comienza los fetch al mismo tiempo
                                                                            // a diferencia del anterior
        
        const [data, data2, data3] = await Promise.all
        ([respuesta.json(), respuesta2.json(), respuesta3.json()])
        
        console.log(data)
        console.log(data2)
        console.log(data3)

        const fin = performance.now()

        console.log(`Segunda Función: " ${fin - inicio}ms`)
    } catch(error) {
        console.log(error.message)
    }

    }
consultarAPI2()