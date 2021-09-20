let cookies = 0;
let autoClicks = 0;
let counter = document.getElementById("counter");
let cookie = document.getElementById("cookie");
let power = 1;
let clickerCost = 10;
let powerCost = 5;
let width = 132;
let height = 182
var px = "px";
let widthAdded = "132px";
let heightAdded = "182px";
let dropdowns = document.getElementById("dropdown");
let autoValue = 1;
let autoValueCost = 100;


function addCookie() {
    cookies += power;
    counter.innerHTML = cookies;
    width++;
    height++;
    widthAdded = width.toString();
    heightAdded = height.toString();
    cookie.style.height = heightAdded.concat(px);
    cookie.style.width = widthAdded.concat(px);
}

function Dropdown() {
    dropdowns.style.display = "block";
}

document.addEventListener("mouseup", function(e){
    if (!dropdowns.contains(e.target)) {
        dropdowns.style.display = "none";
    }
})

function addAuto() {
    if (cookies >= clickerCost) {
        cookies -= clickerCost;
        autoClicks++;
        clickerCost = Math.round(clickerCost * 1.25);
        counter.innerHTML = cookies;
        document.getElementById("clickersCost").innerHTML = clickerCost;
        document.getElementById("autoClickers").innerHTML = autoClicks;
    }
}

function addPower() {
    if (cookies >= powerCost) {
        cookies -= powerCost;
        power++;
        powerCost = Math.round(powerCost * 1.25);

        counter.innerHTML = cookies;
        document.getElementById("powerCost").innerHTML = powerCost;
        document.getElementById("powers").innerHTML = power;
    }
}

function IncAutoValue() {
    if (cookies >= autoValueCost){
        cookies -= autoValueCost;
        autoValue++;
        autoValueCost = Math.round(autoValueCost * 8.25);
        counter.innerHTML = cookies;
        document.getElementById("incAutoCost").innerHTML = autoValueCost;
        document.getElementById("autoValue").innerHTML = autoValue -1;
    }
}

function timer() {
    cookies += autoClicks * autoValue;
    counter.innerHTML = cookies;
}

setInterval(timer, 1000)



