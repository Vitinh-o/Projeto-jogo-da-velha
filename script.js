var a = 0

var i= false
 
var jogadorx = [" "," "," "," "," "," "," "," "," "]

let elemento = document.getElementById("principal")


console.log(elemento)

elemento.addEventListener("click",(m) => 
{ 
    let local = m.target

    let idLocal  = m.target.id
    
    console.log(idLocal)
     

    if(!i)
    {
    
        local.innerHTML = "<img src='./images/pngegg.png' class='estiloX'></img>"

        i = true

        vitoria = true

    }
    else{
        
        local.innerHTML = "<img src='./images/pngegg (2).png' class='estiloX'></img>"
        
        i = false

        vitoria = false
    
    }

    vencedor(vitoria, idLocal)
})


function vencedor(vitorioso, idLocal){

jogadorx[idLocal] = vitorioso

let vitoria = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]



for (a=0; a<vitoria.length; a++)
{
     let sequencia = vitoria[a] 


     let pos1 = sequencia[0]
     let pos2 = sequencia[1]
     let pos3 = sequencia[2]    

     console.log(jogadorx)
    //  console.log(sequencia)

    if(jogadorx[pos1] == jogadorx[pos2] && jogadorx[pos1] == jogadorx[pos3])
    {
        let vencedorFinal = jogadorx[pos1]
        console.log(vencedorFinal)

        if(vencedorFinal == true)
        {
            alert("O jogador 1 foi o vencedor")
        }        
        else if (vencedor == false)
        {
            alert("O jogador 2 foi o vencedor")
        }

    }
}

//console.log(vitoria1)
//console.log(jogadorx)


}