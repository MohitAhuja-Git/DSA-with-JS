//----------------------------------Sorting Algorithms---------------------------------------|
// . What Is Sorting?

// Sorting is the process of aanging data in a specific order:

// Ascending (small → large)

// Descending (large → small)

// Why Sorting Is Important

// Enables binary search

// Improves efficiency of algorithms

// Used in databases, ranking systems, scheduling

// Many DSA problems depend on sorted data




// 1:- Bubble sort :-Side-by-side elements ko compare karo, agar left bada ho to swap karo.
// let a=[10,5,12,1,3];
// let n = a.length;
// for (let i = 0; i < n-1; i++) {
//     for (let j = 0; j < n-1-i; j++) {
//        if (a[j]>a[j+1]) {
//         let temp=a[j];
//         a[j]=a[j+1];
//         a[j+1]=temp;
//        } 
//   }
// }
// console.log(a)

// 2:- Selection Sort :-aay ke unsorted part se smallest element dhoondo aur usko front par le aao.
// Selection Sort = select smallest + one swap per round
// let a=[10,5,1,12,9];
// let n=a.length;
// for (let i = 0; i <n-1; i++) {
//     let min=i
//     for (let j = i+1; j <n; j++) {
//         if (a[j]<a[min]) {
//             min=j;
//         }
        
//     }
//     let temp=a[i];
//     a[i]=a[min];
//     a[min]=temp;
// }
// console.log(a)


// -------------------------------------------------------------------
// Bubble vs Selection (ONE LINE)                                     |
//                                                                    |
// Bubble → baar-baar swap                                            |
//                                                                    |
// Selection → smallest dhundho, ek swap                              |
// -------------------------------------------------------------------

// insertion sort:-