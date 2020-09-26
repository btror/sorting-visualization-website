var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";

function getNextGap(gap) {
    gap = Math.floor((gap * 10) / 13);
    if (gap < 1) {
        return 1;
    }
    return gap;
}

async function combSort() {
    //disable randomize button
    disableButtons();
    //start sort
    let n = list.length;
    let gap = n;
    let swapped = true;
    while (gap != 1 || swapped === true) {
        gap = getNextGap(gap); 
        swapped = false;
        for (let i = 0; i < n - gap; i++) {
            //const result1 = await resolve(globalVariable.speed);
            repaint(list, i, i + gap);
            if (list[i] > list[i + gap]) {
                let temp = list[i];
                list[i] = list[i + gap];
                list[i + gap] = temp;
                const result1 = await resolve(globalVariable.speed);
                swapped = true;
            }
            
        }

    }
    //stop sort
    repaint(list, -1, -1);
    //re-enable the button
    enableButtons();
}

function resolve(delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, delay);
    });
  }

function repaint(list, index, indexPgap) {
    ctx.clearRect(0, 0, c.width, c.height);
    //ctx.fillStyle = "#FF0000";
    let k = 22;
    if (index != -1) {
        for (let i = 0; i < list.length; i++) {
            if (i == index) {
                ctx.fillStyle="red";
                ctx.fillRect(k, 4, 50, list[i]);
                ctx.fillText(list[i], k + 8, list[i] + 25);

            } else {
                ctx.fillStyle="black";
                ctx.fillRect(k, 4, 50, list[i]);
                ctx.fillText(list[i], k + 8, list[i] + 25);
            }
            
            k += 51;
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            
            ctx.fillStyle="black";
            ctx.fillRect(k, 4, 50, list[i]);
            ctx.fillText(list[i], k + 8, list[i] + 25);
              
            k += 51;
        }
    }
    
}

function disableButtons() {
    document.getElementById("sort-bubble").disabled = true;
    document.getElementById("sort-selection").disabled = true;
    document.getElementById("sort-insertion").disabled = true;
    document.getElementById("sort-comb").disabled = true;
    document.getElementById("sort-shell").disabled = true;
    // document.getElementById("sort-quick").disabled = true;
    // document.getElementById("sort-merge").disabled = true;
    document.getElementById("randomize").disabled = true;
    // document.getElementById("sort-heap").disabled = true;
}

function enableButtons() {
    document.getElementById("sort-bubble").disabled = false;
    document.getElementById("sort-selection").disabled = false;
    document.getElementById("sort-insertion").disabled = false;
    document.getElementById("sort-comb").disabled = false;
    document.getElementById("sort-shell").disabled = false;
    // document.getElementById("sort-quick").disabled = false;
    // document.getElementById("sort-merge").disabled = false;
    // document.getElementById("sort-heap").disabled = false;
    document.getElementById("randomize").disabled = false;
}