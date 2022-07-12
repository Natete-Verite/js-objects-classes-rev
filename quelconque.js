let num=[1,2,3,4];
let sum = 0;
for(n=0;n<num.length;n++){
    sum+=num[n]
}
// console.log(sum);

let nume = [45,70,13,19,200,5];
let largest = 0;
for(n=0;n<nume.length;n++){
    if(nume[n]>largest){
        largest=nume[n]
    }
}
// console.log(largest);

function checker(a,b){
    let sum = a+b;
    let prod = a*b;
    if (a===10|| b===10) {
        console.log(sum);
    }
    else{
        console.log(prod);
    }
}
// checker(20,20)

function checker(a,b){
    let sum = a+b;
    if (a===10|| b===10|| sum===10) {
        return true;
    }
    else{
        return false;
    }
}
// checker(10,10)

