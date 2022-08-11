
var i= false

let elemento = document.getElementById("principal")


console.log(elemento)

elemento.addEventListener("click",(m) => 
{ 
    let local = m.target

    console.log(local)

    if(!i)
    {
    
    local.innerHTML = '<img src="./images/download (1).png>"'

    i = true

    }
    else{
        console.log("teste1")
        i = false

    }


})


function colocarDesenho(){

    console.log("asasasas")
}