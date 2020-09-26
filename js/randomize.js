var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";

var x = 22;
for (i = 0; i < 15; i++) {
    var random = Math.floor(Math.random() * (400 - 10) + 10);
    bar = ctx.fillRect(x, 4, 50, random);
    ctx.fillText(random, x + 8, random + 25)
    list.push(random);
    x += 51;
}

function randomize() {
    ctx.clearRect(0, 0, c.width, c.height);
    list = [];
    var x = 22;
    for (i = 0; i < 15; i++) {
        var random = Math.floor(Math.random() * (400 - 10) + 10);
        bar = ctx.fillRect(x, 4, 50, random);
        ctx.fillText(random, x + 8, random + 25)
        list.push(random);
        x += 51;
    }
}


