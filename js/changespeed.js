var globalVariable={
    speed: 550
}

function setSpeed1() {
    document.getElementById("speed-dial").innerHTML = "<h3>speed: 1x</h3>";
    globalVariable.speed = 550;
}

function setSpeed2() {
    document.getElementById("speed-dial").innerHTML = "<h3>speed: 2x</h3>";
    globalVariable.speed = 325;
}

function setSpeed4() {
    document.getElementById("speed-dial").innerHTML = "<h3>speed: 4x</h3>";
    globalVariable.speed = 200;
}

function setSpeed8() {
    document.getElementById("speed-dial").innerHTML = "<h3>speed: 8x</h3>";
    globalVariable.speed = 75;
}