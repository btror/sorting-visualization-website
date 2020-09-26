var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";



async function shellSort() {
    //disable randomize button
    disableButtons();
    //start sort
    let increment = list.length / 2;
    while (increment > 0) {
        repaint(list, -1);
        for (i = increment; i < list.length; i++) {
            let j = i;
            let temp = list[i];
            // const result1 = await resolve(globalVariable.speed);
            // repaint(list, i);
    
            while (j >= increment && list[j-increment] > temp) {
                repaint(list, i);
                list[j] = list[j-increment];
                j = j - increment;
                repaint(list, i);
                //const result1 = await resolve(globalVariable.speed);
                //repaint(list, i);
            }
    
            list[j] = temp;
            repaint(list, i);
            //const result1 = await resolve(globalVariable.speed);
            const result1 = await resolve(globalVariable.speed);
            repaint(list, i);
            
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
        repaint(list, -1);
    }
    //end sort
    repaint(list, -1);
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

function repaint(list, index) {
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