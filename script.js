
//global variable
let operator;


function clearInput() {
    form.input.value = "";
}


function getValueBtn(val) {
    //got a number
    if (!isNaN(val) || val === '.') {
        form.input.value += val;
    }
    else {
        switch (val) {
            case '-':
                operator = "-";
                form.input.value += val;
                break;
            case '+':
                operator = "+";
                form.input.value += val;
                break;
            case '/':
                operator = "/";
                form.input.value += val;
                break;
            case '*':
                operator = "*";
                form.input.value += val;
                break;
        }
    }
}



function getTotal() {
    let splited = form.input.value.split(operator);
    switch (operator) {
        case '-':
            form.input.value = parseFloat(splited[0]) - parseFloat(splited[1]);
            break;
        case '+':
            form.input.value = parseFloat(splited[0]) + parseFloat(splited[1]);
            break;
        case '/':
            form.input.value = parseFloat(splited[0]) / parseFloat(splited[1]);
            break;
        case '*':
            form.input.value = parseFloat(splited[0]) * parseFloat(splited[1]);
            break;
    }
}



/*

function getTotal(){
    let total;
    let input = form.input.value; //get input from the screen
    let regExSigns = /[^\d.]/g; 
    let arr = input.split(''); //split by an empty string
    let operators = input.match(regExSigns); 
    let numbers = input.split(operators);

    for(i=0; i< arr.length;i++){
        
    }
}
  */

