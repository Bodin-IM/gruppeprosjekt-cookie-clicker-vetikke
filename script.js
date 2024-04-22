var score = Math.round(0)


var uranium = document.getElementById('click_image')
var EL_score = document.getElementById('score')

// Purchase Items
// Upgrade Tool
var upgrade_tool = document.getElementById('upgrade_tool')
var upgrade_tool_text = document.getElementById('upgrade_tool_text')
var upgrade_tool_cost = Math.round(15)
var tool_eff = 1
// Hire Workers
var hire_worker = document.getElementById('hire_worker')
var hire_worker_text = document.getElementById('hire_worker_text')
var hire_worker_cost = Math.round(25)
var score_persec = Math.round(0)

// Purchase Items Tier II


function click_main() {
    score = score + Math.round(1 * tool_eff)
    EL_score.innerHTML = "Mined / Score: " + score
}
 
uranium.addEventListener('click', click_main)

// Store [TIER I]
// Upgrade Tool
function purchase_upgrade_tool() {
    if (score >= upgrade_tool_cost) {
        score = score - upgrade_tool_cost
        tool_eff = tool_eff + 0.25
        console.log("Tool Eff.: " + tool_eff)
        upgrade_tool_cost = upgrade_tool_cost + 8
    }
    EL_score.innerHTML = "Mined / Score: " + score
    upgrade_tool_text.innerHTML = "Upgrade Tool Efficiency (" + tool_eff + ")" + "<br>Cost: " + upgrade_tool_cost

}

// Hire Worker
function purchase_hire_worker() {
    if (score >= hire_worker_cost) {
        score = score - hire_worker_cost
        score_persec = score_persec + 0.5
        console.log("Score persec.: " + score_persec)
        hire_worker_cost = hire_worker_cost + 8
    }
    EL_score.innerHTML = "Mined / Score: " + score
    hire_worker_text.innerHTML = "Hire Worker (" + score_persec + " / Second)" + "<br>Cost: " + hire_worker_cost

}
function hire_worker_auto() {
    score += score_persec
    EL_score.innerHTML = "Mined / Score: " + score
}

setInterval(hire_worker_auto, 1000)

upgrade_tool.addEventListener('click', purchase_upgrade_tool)
hire_worker.addEventListener('click', purchase_hire_worker)