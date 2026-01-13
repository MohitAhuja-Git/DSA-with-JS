// let a = 1;
// let b = "3";
// console.log(typeof(a+b));     This is Not Addition, Its concatination

// let a=1;
// let b=1;
// let c=a+b;
// console.log("sum"+a+b);   Output is "sum11" Because its concatination like 1+2+3 format
// console.log("sum"+(a+b));   Output is sum2 due to boadmass 
// console.log("2" -/*/% 1);  Output is 1 , Because js engien inter change string  of two in Integer of two is called "Type Coercion"

// let age = Number(prompt("Tell me anything")); Prompt always convert input into string that's why we add Number Function As Prefix [Type casting]
// console.log(age)


// let a=10;//---------------------------------------------
// let b=20;//                                            !
// let c; //                                              !
// c=a; // c=10 ,a=10                                     Swaping The Variable Values 
// a=b; // a=20 ,b=20                                     !
// b=c; // b=10 ,c=10                                     !
// console.log(a)//                                       !                                    
// console.log(b)//---------------------------------------

// let a=10;-------------------------------------------------
// let b=20;                                                 |
// a=a+b; //a=30                                             Swaping The Variables with Maths 
// b=a-b; //b=10                                             |
// a=a-b; //a=20                                             |
// console.log(a,b);------------------------------------------

// let a=10;--------------
// let b=20;              |Swaping The Variables with Di-structure
// [a,b]=[b,a]            |
// console.log(a,b)-------

// Logical Operators = " +,-,*,%,/,= "---------------------------------------                         
// 6/2 = 3 Divide                                                            |                     
// 6%2 = 0 is Reminder [% = MOD]                                             |
// If (a%b) and a>b so Remainder is a ------IMP                              |                       
// Math.Floor() For Give Answer Only in Intergers Not desimal                |                      
//                                                                           |
// let a=12345;                                                              Logical Operators
// console.log(a%10); // Its Gives 5                                         |
// console.log(a%100); // Its Gives 45                                       |
// console.log(a%1000); // Its Gives 345                                     | 
//                                                                           |
// console.log(Math.floor(a/100)); // Its Gives 123                          |              
// console.log(1234%10); // Its Gives a Certain Number of Any Variable-------

// Relational Operators--------------------------------------------------
// " < , > , <= , >= , != ,!== , = , == , ===                            Relational Operators
// 13=="13" Gives True Becuse js Only Checks Value Not Type --IMP        |
// 13==="13" Gives False  --IMP------------------------------------------

// Logical Operators----------------------------------------------------
// " && , || "                                                          Logical Operators
// && :-And [Both Conditions are true]                                  |
// || :-Or [If Any Conditions is true]---------------------------------- 

// Unary operator------------------------------------------
// " ++ , -- "                                             |
// ++:- Increment | Post , Pre |                           |
// --:- Decrement | Post , Pre |                           Unary operator
// post :- a++ [add 1 in a]                                |  
// pre :- ++a  [1 add in a]--------------------------------

//
// let i=10;
// a= i++ + ++i; //11+11------Again Revise
// console.log(a);

// let a=11,b=22;
// let c=a+b+ a++ + b++ + ++a + ++b;//33+12+23+12+23
// console.log(a)//13
// console.log(b)//24
// console.log(c)//103

// let b = true
// b++;
// console.log(b)   //Output is 2 because True=1
//Maths Functions-------------------------------------------------------------------
// a=1.2343;
// console.log(Math.round(10.5)) // Output 11
// console.log(Math.ceil(10.1)) // Output 11
// console.log(Math.floor(10.9)) // Output 10
// console.log(Math.floor(10.9)) // Output 10
// console.log(Math.trunc(10.98)) // Output 10
// console.log(Math.pow(2,5)) // Output 32
// console.log(Math.sqrt(16)) // Output 4
// console.log(Math.cbrt(2)) // Output 1.25
// console.log(Math.abs(-10)) // Output 10  
// console.log(Math.max(1,2)) // Output 2  
// console.log(Math.min(1,2)) // Output 1 
// console.log(a.toFixed(2)) // Output  1.23
// console.log(Math.random()) // Output Random b/w 0 to 1 in Floats Values 
// console.log(Math.trunc((Math.random()*9000)+1000)) // This Is OTP System 
// Step 1 :- Math.random gives 0 to 1 , Multiply by 9000 So, 0 to 9000 hogi limt
// Step 2 :- (0 to 9000) + 1000 , because we need 4 digit code not 1000 and 10,000
// Step 3 :- now we have like 8434.23879568343 So, Remove this points by Floor or trunc--