

function num(numeros) {
     var dados = document.getElementById("dados")

    document.getElementById("dados").innerHTML = dados.innerHTML + numeros
   
}

function limpar() {
    document.getElementById("dados").innerHTML = ""
}



function somar() {
    var dados = document.getElementById("dados")

    document.getElementById("dados").innerHTML = dados.innerHTML + " + "
}

function subtrair() {
    var dados = document.getElementById("dados")

    document.getElementById("dados").innerHTML = dados.innerHTML + " - "
}

function multiplicar() {
    var dados = document.getElementById("dados")

    document.getElementById("dados").innerHTML = dados.innerHTML + " * "
}

function dividir() {
    var dados = document.getElementById("dados")

   document.getElementById("dados").innerHTML = dados.innerHTML + " / "
}




function res() {
    var dados = document.getElementById("dados").innerHTML
 
    if (dados) {
        var dados = document.getElementById("dados").innerHTML = eval(dados).toLocaleString('pt-BR')
    }
}



