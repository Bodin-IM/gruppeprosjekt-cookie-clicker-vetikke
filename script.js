var score = 0
var tool_eff = 1

var uranium = document.getElementById('click_image')
var EL_score = document.getElementById('score')
// Purchase Items
var upgrade_tool = document.getElementById('upgrade_tool')
var upgrade_tool_text = document.getElementById('upgrade_tool_text')

function click_main() {
    score = score + Math.round(1 * tool_eff)
    EL_score.innerHTML = "Mined / Score: " + score
}
 
uranium.addEventListener('click', click_main)

function purchase_upgrade_tool() {
    if (score >= 15) {
        score = score - 15
        tool_eff = tool_eff + 0.25
        console.log("Tool Eff.: " + tool_eff)
    }
    EL_score.innerHTML = "Mined / Score: " + score
    upgrade_tool_text.innerHTML = "Upgrade Tool Efficiency (" + tool_eff + ")" + "<br>Cost: 15"
}

upgrade_tool.addEventListener('click', purchase_upgrade_tool)