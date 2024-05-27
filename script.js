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

var hire_worker_tier2 = document.getElementById('hire_worker_tier2')
var hire_worker_tier2_text = document.getElementById('hire_worker_tier2_text')
var hire_worker_tier2_cost = Math.round(85)
var score_persec_tier2 = Math.round(0)

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
function makeitrain() {
    partmoney_timer = partmoney_timer - 5
    MoneyTime = setInterval(createParticleMoney, partmoney_timer)
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
        upgrade_tier_cost = upgrade_tier_cost * Math.round(3.75)
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
        upgrade_tool_cost = upgrade_tool_cost + 10.75

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
        hire_worker_cost = hire_worker_cost + 12
        var img = new Image();
        img.src = 'img/miner.png';
        document.getElementById("cdiv_tile1").appendChild(img);
        makeitrain();

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
        upgrade_tool_tier2_cost = upgrade_tool_tier2_cost + 14
    }
    EL_score.innerHTML = "Mined / Score: " + score

}

function purchase_hire_worker_tier2() {
    if (score >= hire_worker_tier3_cost) {
        score = score - hire_worker_tier2_cost
        score_persec_tier2 = score_persec_tier2 + 2.5
        console.log("Score persec.: " + score_persec_tier2)
        hire_worker_tier2_cost = hire_worker_tier2_cost + 16
        var img = new Image();
        img.src = 'img/demo.png';
        document.getElementById("cdiv_tile2").appendChild(img);

        makeitrain();
    }
    EL_score.innerHTML = "Mined / Score: " + score
    hire_worker_tier2_text.innerHTML = "Hire Demolition Specialist (" + score_persec_tier2 + " / Second)" + "<br>Cost: " + hire_worker_tier2_cost
}

hire_worker_tier2.addEventListener('click', purchase_hire_worker_tier2)
upgrade_tool_tier2.addEventListener('click', purchase_upgrade_tool_tier2)

/////////////////////////////// Tier III ///////////////////////////////
function purchase_hire_worker_tier3() {
    if (score >= hire_worker_tier3_cost) {
        score = score - hire_worker_tier3_cost
        score_persec_tier3 = score_persec_tier3 + 4
        console.log("Score persec.: " + score_persec_tier3)
        hire_worker_tier3_cost = hire_worker_tier3_cost + 18
        var img = new Image();
        img.src = 'img/miner.png';
        document.getElementById("cdiv_tile1").appendChild(img);
        makeitrain();
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
        document.getElementById('hire_worker_tier2').style.visibility = 'visible';
        document.getElementById('invest_tier2').style.visibility = 'hidden';
    }

    if(tier == 2) {
        document.body.style.backgroundImage = "url('img/background_iron.png')"
        uranium.src = "img/iron_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier III: Iron"
        upgrade_tier_text.innerHTML = "Upgrade to Tier IV: Titanium<br>Cost: " + upgrade_tier_cost
        document.getElementById('upgrade_tool_tier3').style.visibility = 'visible';
        document.getElementById('hire_worker_tier3').style.visibility = 'visible';
        document.getElementById('invest_tier3').style.visibility = 'hidden';
    }


    if (tier == 3) {
        document.body.style.backgroundImage = "url('img/background_platium.png')"
        uranium.src = "img/platium_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier IV: Platium"
        upgrade_tier_text.innerHTML = "Upgrade to Tier V: Titanium<br>Cost: " + upgrade_tier_cost
        document.getElementById('invest_tier4').style.visibility = 'hidden';
    }

    if (tier == 4) {
        document.body.style.backgroundImage = "url('img/background_titanium.jpg')"
        uranium.src = "img/titanium_512.png"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier V: Titanium"
        upgrade_tier_text.innerHTML = "Upgrade to Tier VI: Nuclear<br>Cost: " + upgrade_tier_cost
        document.getElementById('invest_tier5').style.visibility = 'hidden';
    }

    if (tier == 5) {
        document.body.style.backgroundImage = "url('img/background_nuclear.jpg')"
        uranium.src = "img/nuclear_512.webp"
        div_store_text.innerHTML = "Store / Upgrades <br>Tier VI: Nuclear"
        upgrade_tier_text.innerHTML = "???"
        document.getElementById('nuclear_destruction').style.visibility = 'visible';
    }

}



const createParticleMoney = (x, y) => {
    const imageClicks = document.querySelector(".click_container");
    const money_particle = document.createElement("img");
    money_particle.setAttribute("src", "img/silkicon_money.png")
    money_particle.setAttribute("class", "money_particle")
    money_particle.style.left = Math.floor(Math.random() * 520) + 20 + "px";
    money_particle.style.top = Math.floor(Math.random() * 800) + 800 + "px";
    money_particle.style.width ="50px";
    money_particle.style.height = "50px";
    money_particle.style.position = "absolute";
    imageClicks.appendChild(money_particle);

    setTimeout(() => {
        imageClicks.removeChild(money_particle);
    }, 10000);
}

var partmoney_timer = 10000

var MoneyTime = setInterval(createParticleMoney, partmoney_timer)

// Investment System

function infoinv() {
    document.getElementById("invmenu_info").innerHTML = "----------- Investment Stock -----------<br /> [Version: 2.3.20 - ZZLora (c) 2009]<br /><BR />Balance: " + score + "$";
}

setInterval(infoinv, 1000)

var investment_sell_text = document.getElementById('investment_sell')

var buystock_1 = document.getElementById('buystock_1')
var buystock_2 = document.getElementById('buystock_2')
var buystock_3 = document.getElementById('buystock_3')
var buystock_4 = document.getElementById('buystock_4')
var buystock_5 = document.getElementById('buystock_5')

// buystock_X_amount = Y, hvis Y er 2: 200 = 400

var buystock_1_value = 0
var buystock_1_amount = 0

var buystock_2_value = 0
var buystock_2_amount = 0

var buystock_3_value = 0
var buystock_3_amount = 0

var buystock_4_value = 0
var buystock_4_amount = 0

var buystock_5_value = 0
var buystock_5_amount = 0

var investment_sell_amount = 0

// Coooooool
function RandomPrice() { 
 
    buystock_1_value = Math.floor(Math.random() * 18000) + 7300
    buystock_2_value = Math.floor(Math.random() * 2400) + 400
    buystock_3_value = Math.floor(Math.random() * 1700) + 350
    buystock_4_value = Math.floor(Math.random() * 800) + 230 
    buystock_5_value = Math.floor(Math.random() * 208366) + 122300
    investment_sell_amount = buystock_1_value * buystock_1_amount + buystock_2_value * buystock_2_amount + buystock_3_value * buystock_3_amount + buystock_4_value * buystock_4_amount + buystock_5_value * buystock_5_amount
    //investment_sell_amount = buystock_2_value * buystock_2_amount
    //investment_sell_amount = buystock_3_value * buystock_3_amount
    //investment_sell_amount = buystock_4_value * buystock_4_amount

    InvestStock_Prices()
}
 
function investment_sell_sold() {
    score = score + investment_sell_amount
    document.getElementById("investment_sell").innerHTML = "> Sell! Profit: " + investment_sell_amount + "$"
    buystock_1_amount = 0
    buystock_2_amount = 0
    buystock_3_amount = 0
    buystock_4_amount = 0
    buystock_5_amount = 0
 
}

investment_sell_text.addEventListener('click', investment_sell_sold)


function InvestStock_Prices() {
    document.getElementById("buystock_1").innerHTML = "Click to purchase one stock!<br />Stock value: " + buystock_1_value + "$";
    document.getElementById("buystock_2").innerHTML = "Click to purchase one stock!<br />Stock value: " + buystock_2_value + "$";
    document.getElementById("buystock_3").innerHTML = "Click to purchase one stock!<br />Stock value: " + buystock_3_value + "$";
    document.getElementById("buystock_4").innerHTML = "Click to purchase one stock!<br />Stock value: " + buystock_1_value + "$";
    document.getElementById("buystock_5").innerHTML = "Click to purchase one stock!<br />Stock value: " + buystock_5_value + "$";
    investment_sell_text.innerHTML = "Sell! Profit: " + investment_sell_amount + "$"

}
setInterval(RandomPrice, 0)

// Kjøp stocks
function stock1() { 

    if (score > buystock_1_value) {
        console.log("Stock 4: Purchased New Stock")
        buystock_1_amount = buystock_1_amount + 1
        score = score - buystock_1_value
        EL_score.innerHTML = "Mined / Score: " + score
    }
}

function stock2() { 

    if (score > buystock_2_value) {
        console.log("Stock 4: Purchased New Stock")
        buystock_2_amount = buystock_2_amount + 1
        score = score - buystock_2_value
        EL_score.innerHTML = "Mined / Score: " + score
    }
}

function stock3() { 

    if (score > buystock_3_value) {
        console.log("Stock 4: Purchased New Stock")
        buystock_3_amount = buystock_3_amount + 1
        score = score - buystock_3_value
        EL_score.innerHTML = "Mined / Score: " + score
    }
}

function stock4() { 

    if (score > buystock_4_value) {
        console.log("Stock 4: Purchased New Stock")
        buystock_4_amount = buystock_4_amount + 1
        score = score - buystock_4_value
        EL_score.innerHTML = "Mined / Score: " + score
    }
}
function stock5() { 

    if (score > buystock_5_value) {
        console.log("Stock 4: Purchased New Stock")
        buystock_5_amount = buystock_5_amount + 1
        score = score - buystock_5_value
        EL_score.innerHTML = "Mined / Score: " + score
    }
}

buystock_1.addEventListener('click', stock1)
buystock_2.addEventListener('click', stock2)
buystock_3.addEventListener('click', stock3)
buystock_4.addEventListener('click', stock4)
buystock_5.addEventListener('click', stock5)

var stock_fallrisenum = Math.round(15)
var stock1_value = Math.round(300)

 


function closethemenu() {
    // All it needed was A DAMN [0] IT IN TO WORK? WHY
    document.getElementsByClassName("investment_menu")[0].style.opacity = '0';
    setTimeout(() => {
        document.getElementsByClassName("investment_menu")[0].style.visibility = 'hidden';
    }, 200);
    
}
function openthemenu() {
    document.getElementsByClassName("investment_menu")[0].style.visibility = 'visible';
    document.getElementsByClassName("investment_menu")[0].style.opacity = '1';

}

document.getElementById("open_invmenu").addEventListener('click', openthemenu)
document.getElementById("investment_close").addEventListener('click', closethemenu)





function mad() {
    if (score > 10000000) {
        score == 0
        location.reload();
    }
    
}

document.getElementById("nuclear_destruction").addEventListener('click', mad)
