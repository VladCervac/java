"use strict";

if(4==9) {
    console.log('ok!');
} else {
    console.log('Error');
}



// if(num < 49) {

//     console.log('Eror');
// } else if (num > 100) {
//     console.log('Mult');
// } else {
//     console.log('ok')
// }
const num = 50;
switch ( num ) {

    case 101:
        console.log('nui drept');
        break;
    case 49: 
        console.log('aproape');
        break;
    
        default:
            console.log('nu de aceasta data');
            break;

}

let numar = 30;

    while(numar < 35) {
        console.log(numar);
        numar++;
    }

let num2 = 66;

do{

    console.log(num2);
    num2++;
}
while(num2 < 70);

for (let i = 1; i < 10; i++){

    if (i === 6){

        continue;
    }
     console.log(i);
}
