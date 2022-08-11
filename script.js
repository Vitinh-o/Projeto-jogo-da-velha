var a = 0

var i= false

var jogadorx = []

let elemento = document.getElementById("principal")


console.log(elemento)

elemento.addEventListener("click",(m) => 
{ 
    let local = m.target

    let idLocal  = parseInt(m.target.id)
    
     

    if(!i)
    {
    
    local.innerHTML = "<img src='./images/pngegg.png' class='estiloX'></img>"

    i = true

    vencedor(idLocal)

    }
    else{
        local.innerHTML = "<img src='./images/pngegg (2).png' class='estiloX'></img>"
        i = false


    }


})


function vencedor(idLocal){

jogadorx.push(idLocal)

let vitoria1 = [1,5,9]



if(jogadorx === vitoria1)
{


alert("Vencedor e o x")

}

console.log(vitoria1)
console.log(jogadorx)


}