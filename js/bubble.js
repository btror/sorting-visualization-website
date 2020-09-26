var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";

function showCode() {
    var code = "\n" 
    + " 1  // bubble sort\n" 
    + " 2  for (var i = 0; i < list.length - 1; i++) {\n"
    + " 3     for (var j = 0; j < list.length - i - 1; j++) {\n"
    + " 4        if (list[j] > list[j + 1]) {\n"
    + " 5           var temp = list[j];\n"
    + " 6           list[j] = list[j + 1];\n"
    + " 7           list[j + 1] = temp;\n"
    + " 8        }\n"
    + " 9     }\n"
    + "10  }";
    document.getElementById("code-javascript").innerHTML = code;

    code = "\n" 
    + " 1  // bubble sort\n" 
    + " 2  for (int i = 0; i < list.length - 1; i++) {\n"
    + " 3     for (int j = 0; j < list.length - i - 1; j++) {\n"
    + " 4        if (list[j] > list[j + 1]) {\n"
    + " 5           int temp = list[j];\n"
    + " 6           list[j] = list[j + 1];\n"
    + " 7           list[j + 1] = temp;\n"
    + " 8        }\n"
    + " 9     }\n"
    + "10  }";
    document.getElementById("code-java").innerHTML = code;

    code = "\n" 
    + " 1  # bubble sort\n" 
    + " 2  for i in range(len(list) - 1):\n"
    + " 3     for j in range(0, n - i - 1):\n"
    + " 4        if list[j] > list[j + 1]:\n"
    + " 5           list[j], list[j + 1] = list[j + 1], list[j]\n";
    document.getElementById("code-python").innerHTML = code;

}



async function bubbleSort() {
    showCode();
    //disable randomize button
    disableButtons();
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            const result1 = await resolve(globalVariable.speed);
            repaint(list, j + 1);
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                repaint(list, j + 1);
                //const result2 = await resolve(550);
            } 
        }
    }
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


