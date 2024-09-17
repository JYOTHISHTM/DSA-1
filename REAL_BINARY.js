
// Finding an Element in a Sorted Array

// function binary(arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if (arr[mid] === target) {
//             return mid
//         }
//         if (target < arr[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// }

// console.log(binary([2, 3, 4, 99, 6, 7], 9));


//  Implement binary search and replace with 0


// function binary(arr,value){

//     let left=0
//     let right=arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)

//         if(value===arr[mid]){
//             arr[mid]=0
//             return mid
//         }

//         if(value<arr[mid]){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }return -1

// }
// let arr=[2,3,4,5,6,7]
// let value=6


// let call=binary(arr,value)

// console.log(arr);

