// Principais variaveis utilizadas

var a = 0
var i= false
var jogadorx = [" "," "," "," "," "," "," "," "," "]
var continuar = true
let elemento = document.getElementById("principal")


// Pega o clique do usuario e define o jogador

elemento.addEventListener("click",(alvo) => 
{ 
    let local = alvo.target
    let idLocal  = alvo.target.id

    if(idLocal !== "principal" && continuar == true)
    {

        if(!i &&  " " == jogadorx[idLocal])  {
            
            local.innerHTML = "<img src='./images/pngegg.png' class='estiloX'></img>"
            i = true

            vitoria = "x"
        }
        else if(" " == jogadorx[idLocal]){
            
            local.innerHTML = "<img src='./images/pngegg (2).png' class='estiloX'></img>"
            
            i = false
            vitoria = "o"
        
        }

    }

    vencedor(vitoria, idLocal)
})  


//Verifique que foi o vencedor ou se deu velha

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
        if(jogadas != " " && continuar == true)
        {
            velha.push(jogadas)
            if(velha.length == 9 && continuar == true) 
            {
                setTimeout( ()=> {alert("O resultado foi velha")},100)
                continuar = false
            }
        }
    }


}

// Recarrga a pagina reniciando o jogo.

function resetaPg(){
    window.location.reload()
}