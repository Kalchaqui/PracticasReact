const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "PHP", "Java"]
//const tecnologias2 = tecnologias.filter(function(tech) {
  //if(tech !== "HTML") {
    //return tech
  //}  
//})
//En este ejemplo HTML lo busca y si esta que lo asigne a tecnologias2 y no este en tecnologias
//(.FILTER) ACCEDE A CADA UNO DE LOS ELEMENTOS, Y SACA ELEMENTOS DE UN ARREGLO
//console.log(tecnologias2)
const tecnologias2 = tecnologias.map(function (tech) {
    if(tech === "Node.js") {
        return "Next.js"
    } else{
        return tech
    }
})

console.log(tecnologias2)
//(.MAP) ACCEDE A CADA UNO DE LOS ELEMENTOS, Y MODIFICARLOS, NO MUTA LOS ELEMENTOS DE UN ARREGLO