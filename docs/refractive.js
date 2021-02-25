var AoI = document.myForm.AoI.value;
var AoR = document.myForm.AoR.value;
var rioI = document.myForm.rioI.value;
var rioR = document.myForm.rioR.value;
var calculator = document.getElementById('calculator');

calculator.addEventListener("click", Calculation())
function Calculation(AoI, AoR, rioI, rioR){
    var AoI = document.getElementById('AoI')
    var AoR = document.getElementById('AoR')
    var rioI = document.getElementById('rioI')
    var rioR = document.getElementById('rioR')
    console.log(AoI)
    console.log(AoR)
    console.log(rioI)
    console.log(rioR)
    if (AoI= '<empty string>'){
        AoI = Math.asin(Math.sin(AoR)*rioR / rioI)
        alert(AoI)
    }
    if (AoR = '<empty string>'){
        AoR = Math.asin(Math.sin(AoI)*rioI / rioR)
        alert(AoR)
    }
    if (rioI = '<empty string>'){
        rioI = rioR*Math.sin(AoR)/Math.sin(AoI)
        alert(rioI)
    }
    if (rioR = '<empty string>'){
        rioR = rioI*Math.sin(AoI)/Math.sin(AoR)
        alert(rioR)
    }
}
