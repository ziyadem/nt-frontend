//array7
// function teskari(arr) {
//     let n=arr.length;
//     let t=[]
//     for (i=0;i<n;i++){
//         t[i]=arr[n-i-1]    
//     }
//     return t;
// }
// let arr= [12,56,74,2,33];
// console.log(teskari(arr));

//array8
// function toqSon(arr) {
//     let t=0;
//     let a=[];
//     let j=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==1){
//             t+=1;
//             a[j]=arr[i];
//             j++;
//         } 
//     }
//     for (let m = 0; m < arr.length; m++) { 
//         let k=0;
//         for ( j = 0; j < a.length; j++) {
//             if(a[j]>a[j+1]){
//                 k=a[j];
//                 a[j]=a[j+1];
//                 a[j+1]=k;
//             }    
//         }    
//     }
//     console.log(a);
//     console.log(t , 'ta toq son');
// }
// let arr=[4,7,5,8,6,9,1,17,3];
// toqSon(arr);

//array9
// function juftSon(arr) {
//     let t=0;
//     let a=[];
//     let j=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             t+=1;
//             a[j]=arr[i];
//             j++;
//         } 
//     }
//     for (let m = 0; m < arr.length; m++) { 
//         let k=0;
//         for ( j = 0; j < a.length; j++) {
//             if(a[j]<a[j+1]){
//                 k=a[j];
//                 a[j]=a[j+1];
//                 a[j+1]=k;
//             }    
//         }    
//     }
//     console.log(a);
//     console.log(t , 'ta juft son');
// }
// let arr=[4,7,5,8,6,9,1,17,3,2,24,10];
// juftSon(arr);


//array10
// function juftSon(arr) {
//     let t=0;
//     let a=[];
//     let j=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             t+=1;
//             a[j]=arr[i];
//             j++;
//         }
//     }
//     for (let m = 0; m < arr.length; m++) { 
//         let k=0;
//         for ( j = 0; j < a.length; j++) {
//             if(a[j]>a[j+1]){
//                 k=a[j];
//                 a[j]=a[j+1];
//                 a[j+1]=k;
//             }    
//         }    
//     }

//     let b=[];
//     let l=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==1){
//             b[l]=arr[i];
//             l++;
//         } 
//     }
//     for (let m = 0; m < arr.length; m++) { 
//         let k=0;
//         for ( j = 0; j < b.length; j++) {
//             if(b[j]<b[j+1]){
//                 k=b[j];
//                 b[j]=b[j+1];
//                 b[j+1]=k;
//             }    
//         }    
//     }

//   console.log(a.concat(b)); 
// }
// let arr=[4,7,5,8,6,9,1,17,3,2,24,10];
// juftSon(arr);

// array22
// function yigindi(arr,n,k) {
//     let a =Math.abs(k-n);
//     arr.splice(n,a);
//     console.log(arr);
//     let t=0;
//     for(i=0;i<arr.length;i++){
//        t+=arr[i];
//     }
//     console.log(t);
// }
// let arr=[1,2,3,4,5,6,7,8,9];
// let n=2;
// let k=5;
// yigindi(arr,n,k);

// array23
// function yigindi(arr,n,k) {
//     let a =Math.abs(k-n);
//     arr.splice(n,a);
//     console.log(arr);
//     let t=0;
//     for(i=0;i<arr.length;i++){
//        t+=arr[i];
//     }
//     t=t/arr.length;
//     console.log(t);
// }
// let arr=[1,2,3,4,5,6,7,8,9];
// let n=2;
// let k=5;
// yigindi(arr,n,k);


//array24 
// function progressiya(arr) {
//     let t=0;
//     let k=arr[1]-arr[0];
//         for(i=0;i<arr.length-1;i++){
//           if(arr[i+1]-arr[i]==k){
//             }else{
//                 return t;
//             }
//         }
//         return k;
// }
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(progressiya(arr));


//array25 
// function progressiya(arr) {
//     let t=0;
//     let k=arr[1]/arr[0];
//         for(i=0;i<arr.length-1;i++){
//           if(arr[i+1]/arr[i]==k){
//             }else{
//                 return t;
//             }
//         }
//         return k;
// }
// let arr=[2,4,8,16,39,64];
// console.log(progressiya(arr));

//array47
// function massivBir(arr) {
//     j=1;
//     for(i=0;i<arr.length;i++){
//         for(;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1);
//             }
//         } j=i+2;
//     }
//     console.log(arr);
// }
// let arr=[2,4,8,2,8,4,7,7,12];
// massivBir(arr);

//array48
// function massivBir(arr) {
//     n=0;
//     m=0;
//     j=1;
//     for(i=0;i<arr.length;i++){
//         let z=0;
//         for(;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 z+=1;
//             }
//         } j=i+2;
//         if(z>m){
//             m=z;  
//         }
       
//     }
//     console.log(m+1);
// }
// let arr=[2,4,8,10,8,7,8,2,8,4,7,7,12,8,8,8];
// massivBir(arr);

//array49
// function kamayishTartibi(arr) {
//     for(i==0;i<arr.length;i++){
//        if(arr[i]==arr.length)
//     }
    
// }
// let arr=[10,9,8,7,6,5,4,3,2,1]




