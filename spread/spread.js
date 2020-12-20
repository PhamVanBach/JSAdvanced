var arr = [1,2,3,4,5];

function sum(...numbers){
    return numbers.reduce((a, b) => a+b, 0);
}

sum(...arr);