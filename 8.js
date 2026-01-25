// ---------------------Time & Space Complexity----------------------------|
// Complexity :- its is the level of complexness of any code or system.



// time complexity:- Amount of Time Taken[Operations] as the function of input size.
// NOTE:- Time Complexity is not depends and its mostly for large inputs.

// NOTE:- To Show Time complexity:-
// ---> Big O  :- Upper bond/worst.
// ---> Thetha :- Average.
// ---> Omega  :- Lower bond/best case.

// Types of Time Complexity:-
// # constant time Complexity or O(1)
// # Linear time complexity or O(n)
// # Quadratic time complexity or O(n^2) and O(n^3)
// # when operations[n] are drastikly lower as same in binarry serach its time complexity 1(log n)
// # Exponential time complexity :- 2^n , 3^n
// #Factorial time complexity :- n!
// # n log n time complexity 

// -----------------------------------------------------------------------------------------
// Genrating complexity equation:-                                                         | 
// the operations are multiply in nested loops and add in parallel                         |
// ex:- two loops are in code                                                              | 
// so, n+n=2n [2 is a constant so , not consider, because constant have very little value] |
// ex- one nested loop and one normal loop                                                 |
// so, n*n + n =n^2 + n [n is not consider because smaller value is not counted]           |
// -----------------------------------------------------------------------------------------

// TLE :- Time Limit error [Learn more on this topic on chat gpt]


// ---------------------------space complexity-------------------------------------------
// space complexity:- How much extra memory your algorithm uses to run!

// the space complexity of a loop go to n times in which a variable i so,
// space complexity is O(1)
// example-
let arr=[1,2,3,4,5,6,]; // space is not counted!
let newarr=[];
for (let i = 0; i < arr.length; i++) {
    newarr.push(i)
}
// time complexity is O(n) [n=arr.length]
// space complexity is O(n) [n=arr.length]



// time complexity:- kitni bar operations chale
// space complexity:- Litni extra memory lagi