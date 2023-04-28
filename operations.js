const ANSWER_OK = "OK";
const ANSWER_ERROR = "ERROR";
const CLEAN_ANSWER = "CLEAN";


window.onload = function () {
    let nodes;
    nodes = document.querySelectorAll(".actions div");
    newOperation()
    nodes[0].onclick = newOperation;
    nodes[1].onclick = test;
    nodes[2].onclick = configure;
    
    configure();
}
function newOperation() {
    const numMin = 1;
    const numMax = 10;
    let nodesNumbers, nodesCheck, nodeInput;
    let arOperations = [];

    let operador = document.querySelector(".operator");
    nodesNumbers = document.querySelectorAll(".number");
    nodeInput = document.querySelector("input");

    nodeInput.value = "";
    setResult(CLEAN_ANSWER);

    nodesCheck = document.querySelectorAll("input[name='operations']");
    nodesCheck.forEach(nodeCheck => {
        if (nodeCheck.checked) {
            arOperations.push(nodeCheck.value)
            console.log(nodeCheck.value);
            console.log(arOperations);
        }
        
         nodesNumbers[0].innerText = getRandomNumberBetweenTwoNumbers(numMin, numMax);
        nodesNumbers[1].innerText = getRandomNumberBetweenTwoNumbers(numMin, numMax);
        operador.innerText = arOperations[Math.floor(Math.random() * arOperations.length)];}
    );
    
    
    

    return (arOperations)

}



function setResult(value) {

    const nodeResultok = document.querySelector(".variable");
    if (value === CLEAN_ANSWER) {
        nodeResultok.innerText = "";
        nodeResultok.classList.remove("ok");
        nodeResultok.classList.remove("error");
    } else if (value === ANSWER_OK) {
        nodeResultok.innerText = `SELECCIONE OPERADOR ⚙ `;
        nodeResultok.classList.add("ok");
        nodeResultok.classList.remove("error");
    } else if (value === ANSWER_ERROR) {
        nodeResultok.innerText = `SELECCIONE OPERADOR "⚙" `;
        nodeResultok.classList.add("error");
        nodeResultok.classList.remove("ok");
    } else {
        console.log("Valor no valido");
    }

}

score = 0;
lifes = 3;
function test() {
    let nodesNumbers, nodeInput
    let operador = document.querySelector(".operator");
    nodesNumbers = document.querySelectorAll(".number");
    variable = document.querySelector(".variable")
    nodeInput = document.querySelector("input");
    
    
    console.log(operador.innerText)
    if (operador.innerText === "+") {
        if (parseInt(nodesNumbers[0].innerText) + parseInt(nodesNumbers[1].innerText) === parseInt(nodeInput.value)) {
            document.body.classList.add("green-flash")
            setResult(ANSWER_OK);
            score++;
            updateScore()
            newOperation()
            setTimeout(function () {
                document.body.classList.remove("green-flash");
            }, 1000);
        }

        else {
            document.body.classList.add("red-flash")
            setResult(ANSWER_ERROR);
            lifes--
            updatelife()
            newOperation()
            setTimeout(function () {
                document.body.classList.remove("red-flash");
            }, 1000);

        }
        }else if (operador.innerText==="-"){
            if (parseInt(nodesNumbers[0].innerText) - parseInt(nodesNumbers[1].innerText) === parseInt(nodeInput.value)) {
                document.body.classList.add("green-flash")
                setResult(ANSWER_OK);
                score++;
                updateScore()
                newOperation()
                setTimeout(function () {
                    document.body.classList.remove("green-flash");
                }, 1000);
            }
    
            else {
                document.body.classList.add("red-flash")
                setResult(ANSWER_ERROR);
                lifes--
                updatelife()
                newOperation()
                setTimeout(function () {
                    document.body.classList.remove("red-flash");
                }, 1000);}




     } else if (operador.innerText==="*") {
        if (parseInt(nodesNumbers[0].innerText) * parseInt(nodesNumbers[1].innerText) === parseInt(nodeInput.value)) {
            document.body.classList.add("green-flash")
            setResult(ANSWER_OK);
            score++;
            updateScore()
            newOperation()
            setTimeout(function () {
                document.body.classList.remove("green-flash");
            }, 1000);
        } else {
            setResult(ANSWER_ERROR);
            document.body.classList.add("red-flash")
            lifes--
            updatelife()
            newOperation()
            setTimeout(function () {
                document.body.classList.remove("red-flash");
            }, 1000);
        }
    }else {
        setResult(ANSWER_ERROR)
        operador.innerText = "No operador "
    }
    if (score=== 10)
    {winner ()}else if (lifes===0){
        looser()
    }

    

}

function configure() {
    let nodeOverlay;

    nodeOverlay = document.querySelector(".overlay");
    nodeOverlay.classList.remove("hidden");
    nodeOverlay.onclick = exitOverlay;



}                                     

function exitOverlay(event) {
    if (event.target === this) {
        this.classList.add("hidden");
    }console.log(event.target)
    console.log(this)
}

function getRandomNumberBetweenTwoNumbers(numMin, numMax) {
    let iRandomNumber;
    iRandomNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

    return iRandomNumber;
}

function updateScore() {
    const scoreNode = document.querySelector(".score");
    scoreNode.innerText = score;
}

function winner() {
    let ganador = document.querySelector(".winner");
    console.log(ganador.className);
    ganador.classList.remove("escondido");
    console.log(ganador.className);
    let play = document.querySelector(".play");
play.onclick= hiddenWinner}
  
function hiddenWinner(){
    let ganador = document.querySelector(".winner");
    ganador.classList.add("escondido");
    newOperation()
    score =0;
    updateScore()

}

function updatelife() {
    const life = document.querySelector(".life")
    if (lifes === 2 ){
        life.innerText="❤️ ❤️"
    }else if (lifes=== 1){
        life.innerText="❤️"
    }else {
        life.innerText="❤️ ❤️ ❤️"
    }
}

 function looser(){
    let perdedor = document.querySelector(".looser");
    perdedor.classList.remove("hiden");
    let empezar = document.querySelector(".empezar");
    empezar.onclick= looserHidden}

 

 function looserHidden(){
    let perdedor = document.querySelector(".looser");
    perdedor.classList.add("hiden");
    lifes = 3;
    score= 0;
    updateScore()
    updatelife()

 }
  

