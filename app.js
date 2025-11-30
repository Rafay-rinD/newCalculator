var inputData = document.getElementById("input");
console.log(inputData)

function setNumber(num){
    // inputData.value += num;
    var lastValue = inputData.value.toString().slice(inputData.value.length - 1);

    if(lastValue == "+" || lastValue == "-" || lastValue == "*" || lastValue == "/"){
        if(num == "+" || num == "-" || num == "*" || num == "/"){
            Toastify({
    text: "cannot insert more than 1 operator",
    gravity: "top",
    position: "left",
    duration: 3000
    }).showToast();
        }else{
            inputData.value +=num;
        }
    }else{
        inputData.value +=num;
    }
}

function equal(){
    inputData.value = eval(inputData.value);
}

function newSet(){
    inputData.value = `(-${inputData.value})`;
}

function backSpace(){
    inputData.value = inputData.value.toString().slice(0,inputData.value.length-1);
}


function cleared(){
    inputData.value = "";
}

function square(){
    inputData.value *= inputData.value;
}

function cube(){
    inputData.value = inputData.value ** 3;
}

function sqrt(){
    inputData.value = Math.sqrt(inputData.value);
}

function percentage(){
    var value = inputData.value+ "%";
    var result = 0;
    if(value.endsWith("%")){
        var x = parseFloat(value);
        result = x/100;
    }
    if(value.endsWith("%") && value.includes("+")){
        var [a,b] = value.split("+");
        var c = b/100;
        result = a + c;
    }
    inputData.value = result;
}