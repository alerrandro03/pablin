let hora=0
let minuto=0
let segundo=0
let milisegundo=0

let vronometro = {setInterval(timer),10}

function timer(){

    milisegundo = milisegundo + 10

    if(milisegundo == 1000)
    {
        milisegundo=0
        segundo++
    }

    if (segundo==60)
    {
        segundo=0
        minuto++
    }

    if (minuto==60)
    {
        minuto=0
        hora++
    }

    document.getElementById('hora').innerText = hora
    document.getElementById('minutos').innerText = minuto
    document.getElementById('segundos').innerText = segundo
    document.getElementById('milisegundos').innerText = milisegundo
}

setInterval(timer,10);
