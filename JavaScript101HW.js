
// Madlib

// function madlib(name, subject) {
//     console.log(name + "'s favorite subject in school is " + subject)
// }

// madlib("Anushka", "art");




// Tip Calculator 1

// function tipAmount(bill, service){
//     if(service == 'good'){
//         tip = bill * .2
//         console.log(tip);
//     }
//     else if(service == 'fair'){
//         tip = bill * .15
//         console.log(tip);
//     }
//     else if(service == 'bad'){
//         tip = bill * .10
//         console.log(tip);
//     }
// }

// tipAmount(100, 'fair')




// Tip Calculator 2

// function totalAmount(bill, service){
//     if(service == 'good'){
//         tip = bill * .2
//         billAmount = bill + tip
//         console.log('Thank you for your business! Your total is $' + billAmount + '.');
//     }
//     else if(service == 'fair'){
//         tip = bill * .15
//         billAmount = bill + tip
//         console.log('Thank you for your business! Your total is $' + billAmount + '.');
//     }
//     else if(service == 'bad'){
//     tip = bill * .10
//     billAmount = bill + tip
//     console.log('Thank you for your business! Your total is $' + billAmount + '.');
//     }
// }

// totalAmount(100, 'fair')








// Print numbers regular


// Solution using a for loop
// function printNumbers(start, end){
//     for(let i= start; i<=end; i++){
//         console.log(i)
//     }
// }
// printNumbers(1,10)


// function printNumbers(start, end){
//     while (start<= end) {
//         console.log(start)
//         start++
//     }
//     }
// printNumbers(1,10)







// print numbers in reverse 

// Solution using a while loop

// let count = 10; 

// while (count <= 10 && count > 0){
//     console.log(count)
//     count--;  

// }





// Solution using a for loop 

// for(let count = 10; count <= 10 && count > 0; count--){

//     console.log(count)

// }






// print square 

// function printSquare(count){

//     let string = "";
//         for(let i=0; i < count; i++){
//             for(let innerCount = 0; innerCount < count; innerCount++){
//                 string += '*';
//             }
//             string += '\n';    
//         }
// console.log(string);
// }

// console.log(printSquare(5))





// Print box - unsolved



function printBox(width, height){
    let count = 0;{
    console.log("*" + (" ".repeat(height - 2)) + "*")
    count++
        }
        console.log("*".repeat(width))
    }
printBox(6,4)
