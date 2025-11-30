var inputData = document.getElementById("input");
console.log(inputData)

function setNumber(num){
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

function percentage() {
  var value = inputData.value+"%"
  if (value.toString().includes("%")) {
    var numb = parseFloat(value);

    var result = numb / 100;

    inputData.value = result;
  }
  if (value.toString().includes("%") && value.toString().includes("+")) {
    var numb = value.toString().split("+"); 
    

    var numb1 = Number(numb[0]);
    var numb2 = numb[1]; 

    var num3 = parseFloat(numb2) / 100;
    var numb4 = parseFloat(num3) * Number(numb1); 
    

    var result = numb4 + numb1; 
    inputData.value = result;
  }
}

document.addEventListener("keydown", function (e){
    // e.preventDefault();

    if(e.key == "Enter"){
        equal();
    }else if(Number(e.key) >=0 && Number(e.key) <=9){
        setNumber(e.key);
    }else if(e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*"){
        setNumber(e.key);
    }else if(e.key == "Backspace"){
        inputData.value = inputData.value.toString().slice(0,inputData.value.length-1);
    }
})