var a = 0
var i= false
var jogadorx = [" "," "," "," "," "," "," "," "," "]
var continuar = true
let elemento = document.getElementById("principal")



elemento.addEventListener("click",(m) => 
{ 
    let local = m.target
    let idLocal  = m.target.id

    //console.log(idLocal)
    console.log(continuar)

    if(idLocal !== "principal" && continuar == true)
    {

        if(!i)
        {
            if("<main id='principal'>" == local)
            {
                alert("Aperte no local correto")
            }
            else{
            
                local.innerHTML = "<img src='./images/pngegg.png' class='estiloX'></img>"

                i = true

                vitoria = "x"
            }

        }
        else{
            
            local.innerHTML = "<img src='./images/pngegg (2).png' class='estiloX'></img>"
            
            i = false

            vitoria = "o"
        
        }

    }

    vencedor(vitoria, idLocal)
})  


function vencedor(vitorioso, idLocal){

    jogadorx[idLocal] = vitorioso

    let vitoria = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let velha = []

    for (a=0; a<vitoria.length; a++)
    {
        let sequencia = vitoria[a] 
        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]    

        if(jogadorx[pos1] == jogadorx[pos2] && jogadorx[pos1] == jogadorx[pos3] && continuar == true)
        {
            let vencedorFinal = jogadorx[pos1]

            if(vencedorFinal == "x")
            {
                setTimeout( ()=> {alert("O jogador 1 foi o vencedor")},100)
                continuar = false
            }        
            else if(vencedorFinal === "o")
            {
                setTimeout( ()=> {alert("O jogador 2 foi o vencedor")},100)
                continuar = false
            }
            
            
        }
    }

    for(jogadas of jogadorx)
    {
        if(jogadas != " " )
        {
            velha.push(jogadas)
            console.log(velha)

            if(velha.length == 9 && continuar == true) 
            {
                setTimeout( ()=> {alert("O resultado foi velha")},100)
            }
        }
    }


}

function resetaPg(){
    window.location.reload()
}