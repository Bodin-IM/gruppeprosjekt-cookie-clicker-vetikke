var score = 0
 
var uranium = document.getElementById('click_image')
var EL_score = document.getElementById('score')
 
function click_main() {
    score = score + 1
    EL_score.innerHTML = "Mined / Score: " + score
}
 
uranium.addEventListener('click', click_main)