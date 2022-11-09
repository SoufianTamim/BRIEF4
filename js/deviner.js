let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
const number = Math.floor(Math.random() * 50) +1;
console.log(number );
let i = 10 ;
btn.addEventListener('click', function(){
    i--;
    tries.innerHTML = i;
console.log(i);
    while ( i > 0 ){  
    let inputnum = inputnumber.value;
    console.log(inputnum , number );
if(number == inputnum ) {
    textoutput.innerHTML = "good you win";
break;
} else {
    textoutput.innerHTML = "";
    setTimeout(() => {
        textoutput.innerHTML = "Try again";
    }, 200);
    break;
}} 
 if(i <= 0) {
    textoutput.innerHTML = "you lose forever";
    btn.outerHTML = "";
}
});


















































// let i = 10 ;

// btn.addEventListener('click', function(){

// let inputnum = inputnumber.value;
// console.log(inputnum , number );



// i--;

// if( i > 0){

//     console.log(i);





// if(number == inputnum ) {
//     textoutput.innerHTML = "good you win";



// } else {
//     textoutput.innerHTML = "";

//     setTimeout(() => {
//         textoutput.innerHTML = "very bad you lose";
//     }, 200);
    
 
// }

// } else {

//     textoutput.innerHTML = "you lose no more tries";
//     btn.outerHTML = "";

// }
















// });


