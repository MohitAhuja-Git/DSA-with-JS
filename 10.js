// Stack Memory:-
// LIFO:-
// heaps:-
// Function call:-calling or reuse a function like a(n)
// Recursion:-its a function who call itself again and again!

// Notes:- har stack ma data store ho jaya h 


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
    console.log(n)
}   

c(9070)// is is last limit of recalling
    
    
    
    
    
    
    