//----------------------------------Sorting Algorithms---------------------------------------|
// . What Is Sorting?

// Sorting is the process of arranging data in a specific order:

// Ascending (small → large)

// Descending (large → small)

// Why Sorting Is Important

// Enables binary search

// Improves efficiency of algorithms

// Used in databases, ranking systems, scheduling

// Many DSA problems depend on sorted data




// 1:- Bubble sort :-Side-by-side elements ko compare karo, agar left bada ho to swap karo.
let arr=[10,5,12,1,3];
let n = arr.length;
for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-1-i; j++) {
       if (arr[j]>arr[j+1]) {
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
       } 
  }
}
console.log(arr)
   