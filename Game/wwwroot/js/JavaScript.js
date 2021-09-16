let cookies = 0;
let autoClicks = 0;
let counter = document.getElementById("counter");
let cookie = document.getElementById("cookie");
let power = 1;
let clickerCost = 15;
let powerCost = 5;
let width = 132;
let height = 182
var px = "px";
let widthAdded = "132px";
let heightAdded = "182px";

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

function timer() {
    cookies += autoClicks;
    counter.innerHTML = cookies;
}

setInterval(timer, 10000)



