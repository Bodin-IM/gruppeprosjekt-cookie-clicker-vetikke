console.log
var score = Math.round(0)

var uranium = document.getElementById('click_image');
var EL_score = document.getElementById('score');

var upgrade_tool = document.getElementById('upgrade_tool')
var upgrade_tool_text = document.getElementById('upgrade_tool_text')
var upgrade_tool_cost = Math.round(45)
var tool_eff = 1

var buy_slave = document.getElementById('buy_slave')
var buy_slave_text = document.getElementById('buy_slave_text')
var buy_slave_cost = Math.round(25)
var score_persec = Math.round(0)


    const imageClicks = document.querySelector(".click_container");
    const particle = document.createElement("img")

    const createParticle = (x, y) => {
    
    particle.setAttribute("src", "img/mining mineral dirt clump.png")
    particle.setAttribute("class", "particle")
    particle.style.left = Math.floor(Math.random() * 190) + 140 + "px";
    particle.style.top = Math.floor(Math.random() * 400) + 400 + "px";

    particle.style.width ="100px";
    particle.style.height = "100px";
    particle.style.position = "absolute";
    imageClicks.appendChild(particle);

    setTimeout(() => {
        imageClicks.removeChild(particle);
    }, 3000);
}

function click_main() {
    createParticle(1);
    score = score + Math.round(1 * tool_eff)
    EL_score.innerHTML = "Mined / Score: " + score
 
}

uranium.addEventListener('click', click_main)

function purchase_upgrade_tier() {
    if (score >= upgrade_tier_cost) {
        score = score - upgrade_tier_cost
        tier = tier + 1
        tiers()
    }

}

function purchase_upgrade_tool() {
    if (score >= upgrade_tool_cost) {
        score = score - upgrade_tool_cost
        tool_eff = tool_eff + 1
        console.log("Tool Eff.: " + tool_eff)
        upgrade_tool_cost = upgrade_tool_cost + 15
    }
    EL_score.innerHTML = "Mined / Score: " + score
    upgrade_tool_text.innerHTML = "Upgrade Tool Efficiency (" + tool_eff + ")" + "<br>Cost: " + upgrade_tool_cost

}

function purchase_buy_slave() {
    if (score >= buy_slave_cost) {
        score = score - buy_slave_cost
        score_persec = score_persec + 1
        console.log("Score persec.: " + score_persec)
        buy_slave_cost = buy_slave_cost + 8
    }
    EL_score.innerHTML = "Mined / Score: " + score
    buy_slave_text.innerHTML = "Buy Slave (" + score_persec + " / Second)" + "<br>Cost: " + buy_slave_cost
}

function buy_slave_auto() {
    score += score_persec
    EL_score.innerHTML = "Mined / Score: " + score

}
setInterval(buy_slave_auto, 1000)

upgrade_tier.addEventListener('click', purchase_upgrade_tier)
upgrade_tool.addEventListener('click', purchase_upgrade_tool)
buy_slave.addEventListener('click', purchase_buy_slave)


{    EL_score.innerHTML = "Mined / Score: " + score}