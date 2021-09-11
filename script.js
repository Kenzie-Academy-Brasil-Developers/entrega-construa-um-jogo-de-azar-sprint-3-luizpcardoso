

let isSelected = false;
let selectedPlayer = "";

    const pedraButton = document.getElementById("pedra")
    const papelButton = document.getElementById("papel")
    const tesouraButton = document.getElementById("tesoura")
    const playButton = document.getElementById("buttonPlay");
    const spanErro = document.getElementById("spanErro");
    const divMachine = document.getElementById("machine");
    const divComunication = document.getElementById("result");

    pedraButton.addEventListener("click", () => SelectChange(pedra))
    papelButton.addEventListener("click", () => SelectChange(papel))
    tesouraButton.addEventListener("click", () => SelectChange(tesoura))

    playButton.addEventListener("click", () => play ())


function play () {

   

    
    if (isSelected === true){

        compare ()

        pedraButton.classList.remove("clicado");
        papelButton.classList.remove("clicado");
        tesouraButton.classList.remove("clicado");

        selectedPlayer="";
        isSelected=""

    }

    else {
        spanErro.classList.add("spanOn")
        divComunication.textContent = "";
    }

}

function compare () {

    const machinePlay = playReturn()

    console.log(selectedPlayer,machinePlay)  

    divMachine.lastChild.textContent = machinePlay


    if ( selectedPlayer === machinePlay) {

        console.log("empate")
        divComunication.textContent = "Empate :/";
    }

    if (selectedPlayer === "pedra" && machinePlay === "tesoura" || selectedPlayer === "papel" && machinePlay === "pedra" || selectedPlayer === "tesoura" && machinePlay === "papel" ){

        console.log("voce ganhou")
        divComunication.textContent = "Você Ganhou! :D";

    }
    if (selectedPlayer === "pedra" && machinePlay === "papel" || selectedPlayer === "papel" && machinePlay === "tesoura" || selectedPlayer === "tesoura" && machinePlay === "pedra" ){

        console.log("voce perdeu")
        divComunication.textContent = "voce perdeu :(";

    }   
}

function SelectChange(type) {


    if(type===pedra) {

        
        
        isSelected = true;
        selectedPlayer = "pedra"

        
        pedraButton.classList.add("clicado");
        papelButton.classList.remove("clicado");
        tesouraButton.classList.remove("clicado");
        spanErro.classList.remove("spanOn");
        divComunication.textContent = "";
        divMachine.lastChild.textContent = "";
        
        

        
    }

    if(type===papel) {

        
        isSelected = true;
        selectedPlayer = "papel"

        pedraButton.classList.remove("clicado");
        papelButton.classList.add("clicado");
        tesouraButton.classList.remove("clicado");
        spanErro.classList.remove("spanOn");
        divComunication.textContent = "";
        divMachine.lastChild.textContent = "";

        
    }

    if(type=== tesoura) {

        
        isSelected = true;
        selectedPlayer = "tesoura"

        pedraButton.classList.remove("clicado");
        papelButton.classList.remove("clicado");
        tesouraButton.classList.add("clicado");
        spanErro.classList.remove("spanOn");
        divComunication.textContent = "";
        divMachine.lastChild.textContent = "";
    }

}

function playReturn() {

    let number = playRandom()


    
    if(number===1){
        return "pedra"

    }
    if(number===2){
        return "papel"

    }
    if(number===3){
        return "tesoura"

    }


}

function playRandom() {

    let number = 0

    while (number<1 || number>3){

    number = Math.floor( Math.random() * 10);

    }

    return number;   

}


    
