var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";

function showCode2() {
    var code1 = "\n" 
    + " 1  // insertion sort\n" 
    + " 2  for (var i = 1; i < list.length; i++) {\n"
    + " 3     var key = list[i];\n"
    + " 4     var j = i - 1;\n"
    + " 5     while (j >= 0 && list[j] > key) {\n"
    + " 6        list[j + 1] = list[j];\n"
    + " 7        j = j - 1;\n"
    + " 8     }\n"
    + " 9     list[j + 1] = key;\n"
    + "10  }\n";

    document.getElementById("code-javascript").innerHTML = code1;

    code1 = "\n" 
    + " 1  // insertion sort\n" 
    + " 2  for (int i = 1; i < list.length; i++) {\n"
    + " 3     int key = list[i];\n"
    + " 4     int j = i - 1;\n"
    + " 5     while (j >= 0 && list[j] > key) {\n"
    + " 6        list[j + 1] = list[j];\n"
    + " 7        j = j - 1;\n"
    + " 8     }\n"
    + " 9     list[j + 1] = key;\n"
    + "10  }\n";

    document.getElementById("code-java").innerHTML = code1;

    code1 = "\n" 
    + " 1  # insertion sort\n" 
    + " 2  for i in range(1, len(list)):\n"
    + " 3     key = list[i]\n"
    + " 4     j = i - 1\n"
    + " 5     while j >= 0 and key < list[j]:\n"
    + " 6        list[j + 1] = list[j]\n"
    + " 7        j -= 1\n"
    + " 8     list[j + 1] = key\n";
    document.getElementById("code-python").innerHTML = code1;

}


async function insertionSort() {
    showCode2();
    //disable randomize button
    disableButtons();
    //sort
    for (let i = 1; i < list.length; i++) {
        let key = list[i];
        let j = i - 1;
        const result1 = await resolve(globalVariable.speed);
        repaint(list, i);
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j];
            repaint(list, -1);
            j = j - 1;
        }
        list[j+1] = key;
        repaint(list, i);
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

