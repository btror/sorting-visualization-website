var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";

function showCode1() {
    var code1 = "\n" 
    + " 1  // selection sort\n" 
    + " 2  for (var i = 0; i < list.length; i++) {\n"
    + " 3     var min = i;\n"
    + " 4     for (var j = i + 1; j < list.length; j++) {\n"
    + " 5        if (list[min] > list[j]) {\n"
    + " 6           min = j;\n"
    + " 7        }\n"
    + " 8     }\n"
    + " 9     if (min !== i) {\n"
    + "10        var temp = list[i];\n"
    + "11        list[i] = list[min];\n"
    + "12        list[min] = temp;\n"
    + "13     }\n"
    + "14  }";
    document.getElementById("code-javascript").innerHTML = code1;

    code1 = "\n" 
    + " 1  // selection sort\n" 
    + " 2  for (int i = 0; i < list.length; i++) {\n"
    + " 3     int min = i;\n"
    + " 4     for (int j = i + 1; j < list.length; j++) {\n"
    + " 5        if (list[min] > list[j]) {\n"
    + " 6           min = j;\n"
    + " 7        }\n"
    + " 8     }\n"
    + " 9     if (min != i) {\n"
    + "10        int temp = list[i];\n"
    + "11        list[i] = list[min];\n"
    + "12        list[min] = temp;\n"
    + "13     }\n"
    + "14  }";
    document.getElementById("code-java").innerHTML = code1;

    code1 = "\n" 
    + " 1  # selection sort\n" 
    + " 2  for i in range(len(list)):\n"
    + " 3     min_index = i\n"
    + " 4     for j in range(i + 1, len(list)):\n"
    + " 5        if list[min_index] > list[j]:\n"
    + " 6           min_index = j\n"
    + " 7     list[i], list[min_index] = list[min_index], list[i]\n";
    document.getElementById("code-python").innerHTML = code1;

}



async function selectionSort() {
    showCode1();
    //disable randomize button
    disableButtons();
    //sort
    let len = list.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (list[min] > list[j]) {
                min = j;
            }
        }
        const result1 = await resolve(globalVariable.speed);
        repaint(list, i);
        if (min !== i) {
            let temp = list[i];
            list[i] = list[min];
            list[min] = temp;
            repaint(list, i);
        }
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
                ctx.fillText(list[i], k + 8, list[i] + 25)
            } else {
                ctx.fillStyle="black";
                ctx.fillRect(k, 4, 50, list[i]);
                ctx.fillText(list[i], k + 8, list[i] + 25)
            }
            
            k += 51;
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            
            ctx.fillStyle="black";
            ctx.fillRect(k, 4, 50, list[i]);
            ctx.fillText(list[i], k + 8, list[i] + 25)
              
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
