const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "PHP", "Java"]

//for   (let i = 0;      i < tecnologias.length;       i++     ){ 
    //valor inicial - condición - incremento

//    console.log(tecnologias[i])
//}

//forEach  ejecuta una función indicada por cada elemento del arreglo, 
//Va a ver cuantos elementos hay en mi arreglo y se va a ejecutar esa cantidad de veces que sea necesario.

tecnologias.forEach(function(tech){
    console.log(tech)
})


//map esta funcion sirva para iterar, pero su caracteristica principal crea un nuevo arreglo
//en base a las condiciones de una funcion
//la diferencia es con forEach es que map genera un nuevo arreglo, se itera pero su caracteristica
//principal es que genera un nuevo arreglo