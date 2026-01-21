// ----------------------------------------------ARRAY------------------------------------
// Methods-->
// arr.push(Jo bhi array ma add karna h)
// console.log(arr[1]) - Get any element in array with indexing!
// arr.pop() - Last Element of an Array is Removed!
// 
// 










let a =[];
for (let i = 1; i <=5; i++) {
    let b=Number(prompt("Enter What you add in Your array"))
    a.push(b)   
}
alert(a+" Is Added Sucessfully!")
let sum = 0;
for (let index = 0; index < a.length; index++) {
    sum=sum+a[index]
}
alert(sum+" Is Total!")
console.log(sum)
