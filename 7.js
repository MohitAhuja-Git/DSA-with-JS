// :::::::::::::::::::::::::::::::::::::::::::strings::::::::::::::::::::::::::::::::::::::::::
// string is similar than array but array is mutable and string is unmutable
// let s="mohit ahuja"
// console.log(s.length)
// console.log(s.slice(-5,s.length))
// console.log(s.substring(6)) //Not accept -ve indexing
// console.log(s.substr(6,))
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())
// console.log(s.concat(" Pro"))
// console.log(s.trim("a"))
// console.log(s.charAt(2))
// console.log(s.charCodeAt(2))
// console.log(s[0])
// console.log(indexOf(s))
// console.log(LastIndexOf(s))


// Ques 1:-
// let a="ABCDEFGHIJKLMNOPQRSTWXYZ"
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }



// Ques 2:-
// let a="ABC"
// for (let i = a.length-1; i>=0; i--) {
//     console.log(a[i])
// }


// Ques 3:-
// let s="masdam";
// let rev="";
// for (let i =s.length; i>=0; i--) {
    //     rev+=s.charAt(i);
    // }
    // if (s===rev) {
        //     console.log("This is Pllindrome")
        // } else {
            //     console.log("!!!!!!!")
            
            // }
    // console.log(rev)
            
// Best way with two pointers for pallindrome:::::::::::::::
let s = "mqw";
let j = s.length - 1;
let i = 0;
let isp = true;

while (i < j) {
    if (s[i] !== s[j]) {
        isp = false;
        break;                               
    }
    i++;
    j--;   // ✅ FIX HERE
}

if (isp) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
