// remove duplicates


// function remove(str){
//     var result=''
//     var seen={}
//     for(var i=0;i<str.length;i++){
//         var char=str[i]
//         if(!seen[char]){
//             result+=char
//             seen[char]=true
//         }
//     }return result
// }

// console.log(remove("hehhh"));



// find common in array

// function findDuplicates(array) {
//     const duplicates = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 let isAlreadyInDuplicates = false;
//                 for (let k = 0; k < duplicates.length; k++) {
//                     if (duplicates[k] === array[i]) {
//                         isAlreadyInDuplicates = true;
//                         break;
//                     }
//                 }
//                 if (!isAlreadyInDuplicates) {
//                     duplicates.push(array[i]);
//                 }
//                 break; 
//             }
//         }
//     }

//     return duplicates;
// }

// const array = [2, 3, 4, 3, 3, 4, 3, 3, 4, 6, 7];

// const duplicates = findDuplicates(array);
// console.log(duplicates); 




// find common in arrays

// function findCommonElements(arr1, arr2) {
//     const commonElements = [];

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 let isAlreadyInCommon = false;
//                 for (let k = 0; k < commonElements.length; k++) {
//                     if (commonElements[k] === arr1[i]) {
//                         isAlreadyInCommon = true;
//                         break;
//                     }
//                 }
//                 if (!isAlreadyInCommon) {
//                     commonElements.push(arr1[i]);
//                 }
//             }
//         }
//     }

//     return commonElements;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];

// const commonElements = findCommonElements(array1, array2);
// console.log(commonElements); 


// frequency of character in string

// function frequency(str){
//     var fre={}
//     for(var i=0;i<str.length;i++){
//         var char=str[i]
//         if(fre[char]){
//             fre[char]++
//         }else{
//             fre[char]=1
//         }
//     }return fre
// }

// console.log(frequency("hello"));


// reverse a string 

// function reverse(str){
//     var result=''
//     for(var i=str.length-1;i>=0;i--){
//         result+=str[i]

//     }return result
// }

// console.log(reverse("hello"));

// reverse a array

// function reversArray(arr){
//     var length=arr.length
//     for(var i=0;i<Math.floor(length/2);i++){
//         var temp=arr[i]
//         arr[i]=arr[length-1-i]
//         arr[length-1-i]=temp
//     }return arr
// }

// console.log(reversArray([1,2,3,4,5]));

// check a string is palindrome

// function palindrome(str){
//     var length=str.length
//     for(var i=0;i<Math.floor(length/2);i++){
//         if(str[i]!==str[length-1-i]){
//             return false
//         }
//     }return true
// }

// console.log(palindrome("malayalam"));

// sum of odd and even numbers

// function sum(arr){
//     let odd=0
//     let even=0
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             even+=arr[i]
//         }else{
//             odd+=arr[i]
//         }
//     }return {odd,even}
// }


// console.log(sum([2,3,4,5,6]));

// longest word in a string

// function longest(str){
//     let max=0
//     let curr=''
//     let longestw=''
//     for(var i=0;i<str.length;i++){
//         if(str[i]!==' '){
//             curr+=str[i]
//         }else{
//             if(curr.length>max){
//                 max=curr.length
//                 longestw=curr

//             }
//             curr=''
//         }
//     }if(curr.length>max){
//         longestw=curr
//     }return longestw
// }

// console.log(longest("hello hi this flowersa "));


/// count of substring

// function substringcount(str, substring) {
//     let count = 0
//     let strlength = str.length
//     let sublength = substring.length
//     for (var i = 0; i <= strlength - sublength; i++) {
//         let j
//         for (j = 0; j < sublength; j++) {
//             if (str[i + j] !== substring[j]) {
//                 break
//             }
//         } if (j === sublength) {
//             count++
//         }
//     } return count
// }

// var str = 'heyhelloheyhelloheyheloohey'
// var substring = 'hey'
// console.log(substringcount(str, substring));


// flatern 2D array

// function flat(arr){
//     let newarray=[]
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr[i].length;j++){
//             newarray.push(arr[i][j])
//         }
//     }return newarray
// }

// console.log(flat([[12,3],[4,5,6],[6,6,7]]));

// remove vowels from a string

// function remove(str){
//     let result=''
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//     for(var i=0;i<str.length;i++){
//         var isVowel=false
//         for(var j=0;j<vowels.length;j++){
//             if(str[i]===vowels[j]){
//                 isVowel=true
//                 break
//             }
//         }if(!isVowel){
//             result+=str[i]
//         }
//     }return result
// }

// console.log(remove("hello"));


// find second largest from an array

// function largest(arr){
//     let large=arr[0]
//     let secondLarge=null
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>large){
//             secondLarge=large
//             large=arr[i]

//         }if(arr[i]>secondLarge&&arr[i]<large){
//             secondLarge=arr[i]
//         }
//     }return secondLarge
// }

// console.log(largest([9,3,4,5,6,7,99]));


// remove all even numbers

// function extractOddNumbers(arr) {
//     let index = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }
// arr.length=index
//     return arr;
// }

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddArray = extractOddNumbers(originalArray);

// console.log(oddArray); // Output: [1, 3, 5, 7, 9]

/////sum of uniiqe elements


// function unique(arr){
//     var sum=0
//     for(var i=0;i<arr.length;i++ ){
//         var isUnique=true
//         for(var j=0;j<arr.length;j++){
// if(i !== j &&arr[i]===arr[j]){
//     isUnique=false
//     break
    
// }
//         }if(isUnique){
//             sum+=arr[i]
//         }
//     }return sum
// }

// console.log(unique([1,2,2,3]));
 

/////// find peak element in an array


// function peak(arr){
//     var n=arr.length
//     if(n===0)return null
//     if(n===1) return arr[0]

//     for(var i=0;i<n;i++){
//         if(i===0){
//             if(arr[i]>=arr[i+1]){
//                 return arr[i]
//             }
//         }else if(i==n-1){
//             if(arr[i]>=arr[i-1]){
//                 return arr[i]
//             }
//         }else{
//             if(arr[i]>=arr[i-1]&&arr[i]>=arr[i+1]){
//                 return arr[i]
//             }
//         }
//     }return null
    
// }

// const numbers = [1, 3, 20, 4, 1];
// console.log(findPeakElement(numbers)); // Output: 20

///merge 2 sorted arrays


// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0; 
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// const array1 = [1, 3, 5, 7,9,10];
// const array2 = [2, 4, 6, 8];
// console.log(mergeSortedArrays(array1, array2)); 

/// find kth largest element in an array

// function findKthLargest(nums, k) {
//     var unique = [];
//     for (var i = 0; i < nums.length; i++) {
//         var isUnique = true;
//         for (var j = 0; j < unique.length; j++) {
//             if (nums[i] === unique[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             unique.push(nums[i]);
//         }
//     }

//     unique.sort((a, b) => b - a);

//     console.log(unique);

//     return unique[k - 1];
// }

// const array = [3, 2, 1, 5, 6, 4, 5, 5,5,5,5];
// const k = 3;
// console.log(findKthLargest(array, k)); 



///////


//second smallest

// function secondSmallest(arr) {
//     var small=Infinity
//     var secondSmall=Infinity
//     for(var i=0;i<arr.length;i++){
//      if(arr[i]<small){
//          secondSmall=small
//          small=arr[i]
//      }if(arr[i]>small&&arr[i]<secondSmall){
//          secondSmall=arr[i]
//      }
//     } return secondSmall===Infinity?null:secondSmall
//  }
 
//  console.log(secondSmallest([10]));


///// get unique characters from string 


// function uniqye(str){
//     var   freq={}
//        var news=''
//        for(var i=0;i<str.length;i++){
//            if(!freq[str[i]]){
//                freq[str[i]]=1
//            }else{
//                freq[str[i]]++
//            }
//        }for(var j=0;j<str.length;j++){
//            if(freq[str[j]]===1){
//                news+=str[j]
//            }
//        }return news
//    }
   
//    console.log(uniqye("hello"));
   
// 10. get the pair element whose sum is 10 from array 

// function findPairsWithSum(arr, targetSum) {
//     const pairs = [];

//     // Loop through the array
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             // Check if the sum of arr[i] and arr[j] equals targetSum
//             if (arr[i] + arr[j] === targetSum) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }

//     return pairs;
// }

// // Example usage:
// const array = [1, 9, 2, 8, 3, 7, 4, 6];
// const targetSum = 10;
// const result = findPairsWithSum(array, targetSum);
// console.log(result);  // [[1, 9], [2, 8], [3, 7], [4, 6]]


// 11 missing element
 

// function missing(array){
//     let sum1=0
//     let n=array.length+1
//     let sum=n*(n+1)/2
//     for(var i=0;i<array.length;i++){
//         sum1+=array[i]
//     }
//     return sum-sum1
// }

// console.log(missing([1,2,3,4,6]));


// 12. 
