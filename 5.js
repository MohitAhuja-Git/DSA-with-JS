// ----------------------------------------------ARRAY------------------------------------
// Methods-->
// arr.push(Jo bhi array ma add karna h)
// console.log(arr[1]) - Get any element in array with indexing!
// arr.pop() - Last Element of an Array is Removed!
// 
// 










let a =[];
let n=Number(prompt("How many Numbers You Push in Array?"))
for (let i = 0; i <n; i++) {
    let b=Number(prompt("What you add in Your array?"))
    a.push(b)   
}
alert(a+" Is Added Sucessfully!")
let sum = 0;
for (let index = 0; index < a.length; index++) {
    sum=sum+a[index]
}
alert(sum+" Is Total!")
console.log(sum)
let c=a[0];
for (let i = 0; i<a.length; i++) {
    if (c<a[i]) {
        c=a[i]
    };
}
alert(c+" Is Biggest!")

// let w=[];
// for (let i = 0; i < a.length; i++) {
//     w.push(a[a.length-i])
// }