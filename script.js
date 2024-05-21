var antall_Mineraler = 0
var mineraler_per_sekund = 0

var antall_gruver = 0
var antall_arbeidere = 0
var antall_pickaxer = 0

var gruve_kostnad = 10
var arbiedere_kostnad = 100
var pickaxer_kostnad = 1000

var Mineraler = document.getElementById("Mineralene")
var EL_antall_Mineraler = document.getElementById("Mineral_tall")
var EL_upgrade_gruver_knapp = document.getElementById("gruve_img")
var EL_antall_gruver = document.getElementById("antall_gruver")

 
function få_mineraler(){

    antall_Mineraler +=mineraler_per_sekund


    EL_antall_Mineraler.innerHTML = antall_Mineraler
}
    function oppgrader_gruver(){

        if (antall_Mineraler >=gruve_kostnad){
            antall_Mineraler -= gruve_kostnad
            

            antall_gruver += 1
            oppdater_mineraler_per_sekund()
            EL_antall_gruver.innerHTML = antall_gruver

        }
    }


    function oppdater_mineraler_per_sekund(){
        mineraler_per_sekund = 0
        mineraler_per_sekund += antall_gruver* 3
        mineraler_per_sekund += antall_arbeidere* 100
        mineraler_per_sekund += antall_pickaxer* 1000
    }
    setInterval(få_mineraler, 1000)




var uranium = document.getElementById('Cookie_img')
var EL_score = document.getElementById('score')
 
function click_main() {
    antall_Mineraler = antall_Mineraler + 1
    EL_antall_Mineraler.innerHTML = antall_Mineraler
}
 
uranium.addEventListener('click', click_main)
EL_upgrade_gruver_knapp.addEventListener("click", oppgrader_gruver)
