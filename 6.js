// // --------------------Advance Array-------------------------------|

// // ------------------Left rotation by 1 step--------|
// let arr=[1,2,3,4,5,]
// let copy=arr[0];
// for (let i = 0; i < arr.length-1; i++) {
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log(arr);

// // ------------------Right Rotation by 1 step--------|
// let ar=[1,2,3,4,5] //[5,1,2,3,4]
// let right = ar[ar.length-1]
// for (let i = ar.length-1; i>0; i--) {
//     ar[i] = ar[i-1]   
// }
// ar[0]=right
// console.log(ar)

// // Nested Loops----------------------------------|
// for (let j = 1; j <= 3; j++) {   //Ek Bar ya Chala ga fir 2 bar Nicha waala chala ga
//     console.log(j+'Times')
//     for (let i = 0; i < 2; i++) {
//     console.log("Nested Loops");
// }   
// }

// //----------------------------Many Times Left Rotations 
// // let arr=[1,2,3,4,5];
// // for (let j = 0; j < 5; j++) { //[2,3,4,5,1]
// //      let c=arr[0];
// //      for (let i = 0; i < arr.length-1; i++) {
// //         arr[i]=arr[i+1];
// //      }
// //     arr[arr.length-1] = c
// // }
// // console.log(arr)


// //----------------------------Many Times Right Rotations 
// let ar=[1,2,3,4,5];
// for (let j = 0; j < 2; j++) { //
//      let c=ar[ar.length-1];
//      for (let i = ar.length-1; i > 0; i--) {
//         ar[i]=ar[i-1];
//      }
//     ar[0] = c
// }
// console.log(ar)
// // k=k%arr.length      ------------->|Most Important!!!
// // k= Number of rotaion------------->|k = Given By User


