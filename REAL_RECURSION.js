
//1 reverse a string

// function reverse(str){
//     if(str.length===0) return ""
//     return reverse(str.slice(1))+str[0]
// }

// console.log(reverse("str"));


//2 sum of Odd and Even numbers

// function sum(array){
//     if(array.length===0) return 0
//     const first=array[0]%2!==0?array[0]:0
//     return first+sum(array.slice(1))
// }


// console.log(sum([2,3,4,5,6,9,4]));
// function sum(array){
//     if(array.length===0) return 0
//     const first=array[0]%2===0?array[0]:0
//     return first+sum(array.slice(1))
// }


// console.log(sum([2,3,4,5,6,9,4]));


//without built in

// function sum(array,index=0){
//     if(index===array.length) return 0
//     const first=array[index]%2!==0?array[index]:0
//     return first+sum(array,index+1)
// }


// console.log(sum([2,3,4,5,6,9,4]));


//3 remove all even numbers from an array

// function remove(arr){
//     if (arr.length===0) return []
//     const first=arr[0]%2===0?[arr[0]]:[]
//     return first.concat(remove(arr.slice(1)))
// }

// console.log(remove([2,3,4,5,6,7]));

//4 palindrome check

// function check(str){
//     if(str.length<=1)return true
//     if(str[0]!==str[str.length-1]) return false
//     return check(str.slice(1,str.length-1)) 
// }

// console.log(check("hellolleh"));


// function checking(str,start=0,end=str.length-1){
//     if(start>=end) return true
//     if(str[start]!==str[end]) return false
//     return checking(str,start+1,end-1)
// }

// console.log(checking("hellolleh"));

//5 calculate factorial of a number 

// function factorial(n){
//     if(n===0) return 1
//     return n*factorial(n-1)
//  }

//  console.log(factorial(5));
 
// find nth fibonacci number recursively

// function fibonacci(n){
//     if(n<=1) return n
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(8));



///****                           *////

//// MERGE TWO SORTED LINKED LIST /////

///****                           *////


// 6. Find the nth Fibonacci number recursively
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5)); // Output: 5

// 7 count number of vowels in a string

// function count(str){
//     if(str.length===0) return 0
//     const first='aeiouAEIOU'.includes(str[0])?1:0
//     return first+count(str.slice(1))
// }

// console.log(count("hiaei"));

// 8 remove vowels from a string

// function remove(str){
//     if(str.length===0) return ""
//     const first='aeiouAEIOU'.includes(str[0])?'':str[0]
//     return first+remove(str.slice(1))
// }

// console.log(remove("helloji"));




// 8.5 without built in functions


// function remove(str){
//     const vowel='aeiouAEIOU'
//     function isVowel(char){
//         for(var i=0;i<vowel.length;i++){
//             if(char===vowel[i]) return true

//         }return false
//     }
//     if(str.length===0) return ""
//     const first=isVowel(str[0])?"":str[0]
//     return first+remove(str.slice(1))
// }

// console.log(remove("hello"));


// 9 find the GCD of two numbers


// function GCD(a,b){
//     if(b===0) return a
//     return GCD(b,a%b)

// }

// console.log(GCD(48,18));


// 10 Remove duplicates from a string recursively

// function remove(str,seen={}){
//     if(str.length===0) return ""
//     const first=seen[str[0]]?"":str[0]
//     seen[str[0]]=true
//     return first+remove(str.slice(1),seen)
// }
// console.log(remove("hiihhkokkk"));

// 13. Remove duplicates from a array

// function remove(arr,seen={}){
//     if(arr.length===0) return []
//     const first=seen[arr[0]]?[]:[arr[0]]
//     seen[arr[0]]=true
//     return first.concat(remove(arr.slice(1),seen))
// }
// console.log(remove([2,3,4,3,4]));


// 14. sum of unique elements

// function sum(arr,seen={}){
//     if(arr.length==0) return 0
//     const first=seen[arr[0]]?0:arr[0]
//     seen[arr[0]]=true
//     return first+sum(arr.slice(1),seen)
// }

// console.log(sum([1,2,2,5,2,5,8]));

// 15. check if an array is sorted

// function sorted(arr){
//     if(arr.length<=1) return true
//     if(arr[0]>arr[1]) return false
//     return sorted(arr.slice(1))
// }

// console.log(sorted([2,8,4]));


// 16 find the max. element in an array


// function findMax(arr) {
//     if (arr.length === 1) return arr[0];
    
//     const restMax = findMax(arr.slice(1));
    
//     return arr[0] > restMax ? arr[0] : restMax;
// }

// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9


// 17 Reverse the string to their own place 

// function reverseWords(str) {
//     function reverseWord(word) {
//         if (word === '') return '';
//         return reverseWord(word.slice(1)) + word[0];
//     }

//     let words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         words[i] = reverseWord(words[i]);
//     }

//     return words.join(' ');
// }

// console.log(reverseWords("jothish jo"));

// 18  check if an array is sorted

// function isArraySorted(arr, index = 0) {
//     if (index === arr.length - 1 || arr.length === 0) {
//         return true;
//     }

//     if (arr[index] > arr[index + 1]) {
//         return false;
//     }

//     return isArraySorted(arr, index + 1);
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 3, 2, 4, 5];

// console.log(isArraySorted(array1));
// console.log(isArraySorted(array2)); 


// 19  find the length of a linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// function findLength(head) {
//     if (head === null) {
//         return 0;
//     }

//     return 1 + findLength(head.next);
// }

// const head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);

// console.log(findLength(head)); 


// 20 Anagram 

// function isAnagram(str1, str2) {
//     if (str1.length === 0 && str2.length === 0) {
//         return true;
//     }

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let foundIndex = -1;
//     for (let i = 0; i < str2.length; i++) {
//         if (str1[0] === str2[i]) {
//             foundIndex = i;
//             break;
//         }
//     }

//     if (foundIndex === -1) {
//         return false;
//     }

//     let newStr2 = "";
//     for (let i = 0; i < str2.length; i++) {
//         if (i !== foundIndex) {
//             newStr2 += str2[i];
//         }
//     }

//     return isAnagram(str1.slice(1), newStr2);
// }

// console.log(isAnagram("abc", "cab"));  
// console.log(isAnagram("abc", "def"));  

// 21 flatern a nested array

// function flatternMain(arr){
//     let result=[]
//     function flattern(arr){
//         for(let element of arr){
//             if(Array.isArray(element)){
//                 flattern(element)
//             }else{
//                 result.push(element)
//             }
//         }

//     }
//     flattern(arr)
//     return result
// }

// console.log(flatternMain([1,2,[3,4,5],[5,6,7,8]]));

// second largest

// function largest(array,i=0,largests=array[0],second=-Infinity){

//     if(i===array.length) return second
//     if(array[i]>largests){
//         second=largests
//         largests=array[i]
//     }
//     return largest(array,i+1,largests,second)
// }

// console.log(largest([1,2,3,5,3,6]));


// sum of unique original

// function sum(arr,seen={},duplicates={}){
//     if(arr.length===0) return 0
//     if(seen[arr[0]]){
//         duplicates[arr[0]]=true
//     }else{
//         seen[arr[0]]=true
//     }

//     const first=sum(arr.slice(1),seen,duplicates)

//     return duplicates[arr[0]]?first:first+arr[0]
// }

// console.log(sum([1,2,3,3,4])); // out put 7
