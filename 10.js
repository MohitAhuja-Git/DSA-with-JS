// Stack Memory:-
// LIFO:-
// heaps:-
// Function call:-calling or reuse a function like a(n)
// Recursion:-its a function who call itself again and again!

// Notes:- har stack ma data store ho jaya h 
// Backtrack:-When Your Functions is return in stack at this time your query of this function is execute 
// example your function c :-firstly your function is added in stack then excecute and print

function a(n) {
    if (n==0 || n<0) return;
    console.log("Yo")
    a(--n)
}

function b(n) {
    if (n==0) return console.log("1 is Reached!")
    console.log(n);
    b(--n);
}

function c(n) {
    if (n==0) return console.log(n+ 'is Reached!')
    c(n-1);
    console.log(n) // This line is excecute at the time of back_tracking 
}   

// c(9070)// is is last limit of recalling

function sum(n) {
    if (n==1) return 1;
    return n+sum(n-1);
}
function fact(n) {
    if (n==1) return 1;
    return n*fact(n-1);
}    
console.log(sum(5));
console.log(fact(5));

let n=5;
for (let i = 0; i <=n; i++) {
}