var antall_Mineraler = 0

var Mineraler = document.getElementById("Mineralene")
var EL_antallMineraler = document.getElementById("antall_Mineraler")
var score = 0
 





var uranium = document.getElementById('click_image')
var EL_score = document.getElementById('score')
 
function click_main() {
    score = score + 1
    EL_score.innerHTML = score
}
 
uranium.addEventListener('click', click_main)
