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


//efficient algorithim for left rotation by k----------------| I . M . P 
//step 1:- make a temprary array in with same size of given array
//tem= new.Array(arr.length)
//step 2:- Take input of number of rotation in k [By Prompt]
//k = k % arr.length
//step 3:- in for loop {tem[i] = arr[(i+k)% arr.lenght]}--------------Main Formula---
// This is not Good because its created extra space


// so,do this
// let arr=[1,2,3,4,5];
// let k=2;
// k=k % arr.length
// reverce(0,k-1)
// reverce(k,arr.length-1)
// reverce(0,arr.length-1)


// function reverce(i,j) {
//     while (i<j) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++;
//         j--;
//     };
// };
// console.log(arr)
// we use Many Methods due to time complexcity 
// Nested loops is heavy [Loops Multiply hote h]
// Second Method ma Extra space banana padta h
// Third algorithm is one of the best ?

// //----------------------remove dublicatess----
// num=[1,2,2,2,2,2,3,3,3,4,4];
// let j=1;
// for (let i = 0; i < num.length-1; i++) {
//     if (num[i] !== num[i+1]) {
//         num[j] = num[i+1]
//         j++
//     }
// }
// console.log(j)    

// ----------------Merging Array----------------------|
// let arr1 = [1, 3, 4, 6];
// let arr2 = [2, 5, 7];

// let tem =new Array(arr1.length+arr2.length)
// let i = 0, j = 0;

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         tem.push(arr1[i]);
//         i++;
//     } else {
//         tem.push(arr2[j]);
//         j++;
//     }
// }

// while (i < arr1.length) {
//     tem.push(arr1[i]);
//     i++;
// }

// while (j < arr2.length) {
//     tem.push(arr2[j]);
//     j++;
// }

// console.log(tem);

//--------------------------------stocks Price calculator--------------------|

// let arr=[7,1,5,3,6,4]
// let min =arr[0];
// let maxprofit=0;
// for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<min) {
//         min=arr[i]; 
//         }
//     else{
//         let profit =arr[i] - min;
//         maxprofit=Math.max(maxprofit,profit);
//     }
// }
// console.log(maxprofit)


// --------------------------sort the colour------------------------------------|
// let arr=[2,0,2,1,1,0];
// let j=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//         let k=arr[i]
//         arr[i]=arr[j]
//         arr[j] = k
//     }
//     j++


// }


// correct!!!!!!!!!!!!!
// let arr=[2,0,2,1,1,0];
// let i=j=0;
// let k=arr.length-1;

// while (i<=k) {
//     if (arr[i]==0) {
//         let swap =arr[i];
//         arr[i]=arr[j]
//         arr[j]=swap
//         i++,j++;
//     }
//     else if(arr[i]==2){
//         let swap =arr[i];
//         arr[i]=arr[k]
//         arr[k]=swap
//         k--;
//     }
//     else{i++}
// }
// console.log(arr)

// -------------------Kadane's Algorithim--------------------------|
// let arr=[-2,1,-3,4,-1,2,1,-5,4];
// let sum=0;  // subarray
// let max=-Infinity;
// for (let i = 0; i < arr.length; i++) {
//      sum+=arr[i];
//       if (sum>max) {
//          max=sum;
//         }
//     else if (sum<0) {
//             sum=0;
//         } 

// }
// console.log(max)
// console.log(sum)
// Our work in Kadane's algorithm::::::::::::::::::::::
// ----------------------------------------------------------
// 1:-add every Number of array!!                             |
// 2:-if our addition is in -ve so make it zero!!             |
// 3:-place the max sum in max variable!!                     |
// 4:-subarray is started when one a sum is zero!!!           |
// ----------------------------------------------------------

// Moore's Voting Algorithm:::::::::::
// let arr=[2,2,1,1,1,2,2];
// let ans=arr[0];
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==ans) {
//         count+=1;
//     }
//     else if (arr[i]!=ans) {
//         count-=1
//         if (count==0) {
//             ans=arr[i];
//             count=1;
//         }
//     }
// }
// console.log(ans)
// console.log(count)

// Trapping Rain water::::::::::::::::::::::::::::::::::::::::::::::::::::::
let arr = [4, 2, 0, 3, 2, 5]
let left = new Array(arr.length)
let right = new Array(arr.length)
let maxright = arr[arr.length - 1]
left[0] = maxleft // first element of left array is 
right[right.length - 1] = maxright // last elemnt of right array is 
for (let i = 1; i < arr.length; i++) {
    maxleft = Math.max(arr[i], maxleft)
    left[i] = maxleft;
}
for (let i = arr.length - 2; i >= 0; i--) {
    maxright = Math.max(arr[i], maxright)
    left[i] = maxright;
}
let ans = 0;
for (let i = 0; i < arrlength; i++) {
    ans += Math.min(left[i], right[i] - arr[i])
}
console.log(ans)