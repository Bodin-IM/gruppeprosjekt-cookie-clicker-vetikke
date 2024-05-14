// Spagh    etti code is real
console.log("The Spaghetti Code is real!!!")
var score = Math.round(0)



var uranium = document.getElementById('click_image');
var EL_score = document.getElementById('score');

///////////////////////////////////////////////////////////////////// Purchase Items
// Upgrade Tier
var upgrade_tier = document.getElementById('upgrade_tier')
var upgrade_tier_text = document.getElementById('upgrade_tier_text')
var upgrade_tier_cost = 5000
var div_store_text = document.getElementById('div_store_text')
var tier = 0 // 0 = Dirt, 1 = Stone, etc...

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

/////////////////////////   Purchase Items Tier II    //////////////////// 
// Upgrade Tool
var upgrade_tool_tier2 = document.getElementById('upgrade_tool_tier2')
var upgrade_tool_tier2_text = document.getElementById('upgrade_tool_tier2_text')
var upgrade_tool_tier2_cost = Math.round(50)
var tool_eff_tier2 = 1


/////////////////////////   Purchase Items Tier III    //////////////////// 
// Hire Workers
var hire_worker_tier3 = document.getElementById('hire_worker_tier3')
var hire_worker_tier3_text = document.getElementById('hire_worker_tier3_text')
var hire_worker_tier3_cost = Math.round(85)
var score_persec_tier3 = Math.round(0)

const createParticle = (x, y) => {
    const imageClicks = document.querySelector(".click_container");
    const particle = document.createElement("img");
    particle.setAttribute("src", "img/particle.png")
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
    createParticle(200,500);
    score = score + Math.round(1 * tool_eff)
    EL_score.innerHTML = "Mined / Score: " + score
 
}

uranium.addEventListener('click', click_main)

///////////////////////////////      Store        /////////////////////////////////// 
function purchase_upgrade_tier() {
    if (score >= upgrade_tier_cost) {
        score = score - upgrade_tier_cost
        tier = tier + 1
        tiers()
    }

}

/////////////////////////////// Store [TIER I: DIRT] ///////////////////////////////
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
        score_persec = score_persec + 1
        console.log("Score persec.: " + score_persec)
        hire_worker_cost = hire_worker_cost + 8
    }
    EL_score.innerHTML = "Mined / Score: " + score
    hire_worker_text.innerHTML = "Hire Worker (" + score_persec + " / Second)" + "<br>Cost: " + hire_worker_cost
}

function hire_worker_auto() {
    score += score_persec
    score += score_persec_tier3
    EL_score.innerHTML = "Mined / Score: " + score

}
setInterval(hire_worker_auto, 1000)

upgrade_tier.addEventListener('click', purchase_upgrade_tier)
upgrade_tool.addEventListener('click', purchase_upgrade_tool)
hire_worker.addEventListener('click', purchase_hire_worker)
// hire_volunteer.addEventListener('click', purchase_hire_volunteer)
/////////////////////////////// Tier II ///////////////////////////////
function purchase_upgrade_tool_tier2() {
    if (score >= upgrade_tool_tier2_cost) {
        score = score - upgrade_tool_tier2_cost
        tool_eff_tier2 = tool_eff_tier2 + 0.78
        console.log("Tool Eff.: " + tool_eff_tier2)
        upgrade_tool_tier2_cost = upgrade_tool_tier2_cost + 8
    }
    EL_score.innerHTML = "Mined / Score: " + score

}
upgrade_tool_tier2.addEventListener('click', purchase_upgrade_tool_tier2)

/////////////////////////////// Tier III ///////////////////////////////
function purchase_hire_worker_tier3() {
    if (score >= hire_worker_tier3_cost) {
        score = score - hire_worker_tier3_cost
        score_persec_tier3 = score_persec_tier3 + 4
        console.log("Score persec.: " + score_persec_tier3)
        hire_worker_tier3_cost = hire_worker_tier3_cost + 13
    }
    EL_score.innerHTML = "Mined / Score: " + score
    hire_worker_tier3_text.innerHTML = "Hire Worker Tier III (" + score_persec_tier3 + " / Second)" + "<br>Cost: " + hire_worker_tier3_cost
}


function purchase_upgrade_tool_tier3() {
    if (score >= upgrade_tool_tier3_cost) {
        score = score - upgrade_tool_tier3_cost
        tool_eff_tier = tool_eff_tier + 0.78
        console.log("Tool Eff.: " + tool_eff_tier)
        upgrade_tool_tier3_cost = upgrade_tool_tier3_cost + 8
    }
    EL_score.innerHTML = "Mined / Score: " + score

}

hire_worker_tier3.addEventListener('click', purchase_hire_worker_tier3)
upgrade_tool_tier3.addEventListener('click', purchase_upgrade_tool_tier3)




function tiers() {
    EL_score.innerHTML = "Mined / Score: " + score

    if (tier == 1) {
        document.body.style.backgroundImage = "url('img/background_stone.png')"
        uranium.src = "img/stone_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier II: Stone"
        upgrade_tier_text.innerHTML = "Upgrade to Tier III: Iron<br>Cost: " + upgrade_tier_cost
        document.getElementById('upgrade_tool_tier2').style.visibility = 'visible';
    }

    if(tier == 2) {
        document.body.style.backgroundImage = "url('img/background_iron.png')"
        uranium.src = "img/iron_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier III: Iron"
        upgrade_tier_text.innerHTML = "Upgrade to Tier IV: Titanium<br>Cost: " + upgrade_tier_cost
        document.getElementById('upgrade_tool_tier3').style.visibility = 'visible';
        document.getElementById('hire_worker_tier3').style.visibility = 'visible';
    }


    if (tier == 3) {
        document.body.style.backgroundImage = "url('img/background_platium.png')"
        uranium.src = "img/platium_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier IV: Platium"
        upgrade_tier_text.innerHTML = "Upgrade to Tier V: Titanium<br>Cost: " + upgrade_tier_cost
    }

    if (tier == 4) {
        document.body.style.backgroundImage = "url('img/background_titanium.jpg')"
        uranium.src = "img/titanium_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier V: Titanium"
        upgrade_tier_text.innerHTML = "Upgrade to Tier VI: Placeholder<br>Cost: " + upgrade_tier_cost
    }
}


// Whats happens when you snap spaghetti in half? You get messsy spaghetti, and the code is a messy spaghetti
 