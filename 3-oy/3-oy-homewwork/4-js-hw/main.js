//FunSimple1

// function PowerA3(a) {
//    return a=Math.pow(a,3);
// }
// console.log( PowerA3(1.98));
// console.log( PowerA3(1.25));
// console.log( PowerA3(-2.5));
// console.log( PowerA3(1));
// console.log( PowerA3(11));

//FunSSimple2

//  function PowerA234(a) {
//     c=a;
//    for (let i = 0; i < 3; i++) {
//     c*=a;
//      console.log(c); 
//    }      
// }
// PowerA234(2)

//FunSSimple3
// function MEAN(A,B,C,D) {
//     console.log((A+B)/2);  
//     console.log((A+C)/2);  
//     console.log((A+D)/2);  
//     console.log(Math.sqrt(A*B));
//     console.log(Math.sqrt(A*C));
//     console.log(Math.sqrt(A*D));
// }

// MEAN(12,1,14,16)

//FunSSimple4
// function Triangle(a,b,c) {
//     console.log(3*a);console.log(Math.sqrt(3)*a*a/4);
//     console.log(3*b);console.log(Math.sqrt(3)*b*b/4); 
//     console.log(3*c);console.log(Math.sqrt(3)*c*c/4);
    
// }
// Triangle(10,12,13)

//FunSSimple5
// function RectPS(x1,y1,x2,y2) {
//     b=Math.abs(y2-y1);
//     a=Math.abs(x2-x1);
//     let p=(a+b)*2;
//     let s=a*b;
//     console.log(s , 'yuza');
//     console.log(p , 'perimetr'); 
// }
// RectPS(1,2,2,4)

//FunSSimple6
// function DigitCountSum(a) {
//    let b =String(a);
//    let k=b.length;
//    console.log(k , 'raqamlar soni');
//    let sum=0;
//    for (let i = 0; i < k; i++) {
//     let c=parseInt(b[i]);
//     sum+=c;
// }
// console.log(sum , 'raqamlar yig`indisi');

// }
// DigitCountSum(123 )

//FunSSimple7
// function DigitCountSum(a) {
//    let b =String(a);
//    let k=b.length;
//    let sum="";
//    for (let i = 0; i < k; i++) {
//     let c=parseInt(b[i]);
//     sum=c+sum;
// }
// console.log(sum);
// }
// DigitCountSum(123 )

//FunSSimple8
// function AddRightDigit(k,r) {
//     k=String(k);
//     k+=r;
//     console.log(k);  
// }
// AddRightDigit(123,4)


//FunSSimple24
// function Even(k) {
//     if(k%2===0){
//         return 'true'
//     }else{
//         return "false"
//     }
    
// }
// console.log(Even(123)); 
// console.log(Even(23)); 
// console.log(Even(642)); 

//FunSSimple25
// function IsSquare(k) {
//     if ( Number.isInteger(Math.sqrt(k))) {
//         return 'true'  
//     }else{
//         return 'false'
//     } 
// }

// console.log(IsSquare(36));

//FunSSimple26
// function IsPower(k) {
//    if(
//     for(i=0;i<k;i++){
//         Math.pow(5,i);
//     }
//    )
// }
// console.log(IsPower(24));

//FunSSimple28
// const tubmi = (a)=> {
//     for(let i =2; i < a; i++){
//         if(a%i ===0 ){
//             return false
//         }
//     }

//     return true
// }

// console.log(tubmi(9));
// console.log(tubmi(19));
// console.log(tubmi(92));
// console.log(tubmi(9));

//FunSSimple29
// function DigitCountSum(a) {
//    let b =String(a);
//    let k=b.length;
//    console.log(k , 'raqamlar soni');
// }
// DigitCountSum(123 )
// DigitCountSum(1234567 )
// DigitCountSum(9983223 )
// DigitCountSum(8273 )
// DigitCountSum(76533 )

//FunSSimple30
// function DigitN(k,n) {
//     let b=String(k);
//     let a=b.length;
//     if(a>=n){
//         console.log(b[n-1]);
//     }else{
//         console.log(-1);
//     }
// }
// DigitN(432,2)

//FunSSimple31
// function IsPalindrom(a) {
//    let b =String(a);
//    let k=b.length;
//    let sum="";
//    for (let i = 0; i < k; i++) {
//     let c=parseInt(b[i]);
//     sum=c+sum;
// }
// let m=parseInt(sum);
//    if(m===a){
//     return 'true'
//    }else{
//     return'false'
//    }
// }
// console.log(IsPalindrom(212));


//FunSSimple32
// function DegToRad(k) {
//     if(k>=0 && k<=360){
//         let c =k*Math.PI/180;
//         console.log(c);
//     }else{
//         console.log('bunday gradus mavjud emas');
//     }
// }
// DegToRad(180);
// DegToRad(360);
// DegToRad(90);

//FunSSimple33
// function DegToRad(k) {
//         let c =k*180/Math.PI;
//         console.log(c);
// }
// DegToRad(1);
// DegToRad(2);
// DegToRad(3);

//FunSSimple34
// function Fact(a) {
//     let res =1;
//     for(i=2;i<=a;i++){
//          res*=i;
//         }
//     console.log(res);
// }
// Fact(5)

//FunSSimple50
// function TimeToHMS(T) {
//     let H =Math.floor(T/3600);
//     let S=T%3600%60;
//     let M= (T%3600-S)/60;
//     console.log(H,":",M,":",S);
// }

// TimeToHMS(3678)

//FunSSimple51
// function TimeToHMS(T,L) {
//     let H =Math.floor((T+L)/3600);
//     let S=(T+L)%3600%60;
//     let M=((T+L)%3600-S)/60;
//     console.log(H,":",M,":",S);
// }
// TimeToHMS(3653,42)


//FunSSimple52
// function IsLeapYear(Y) {
//     if(Y<100){
//       if(Y%4==0){
//         return 'true';
//       }else{
//         return "false";
//       }
//     }else{
//         if(Y%400==0){
//             return "true";
//         }else {
//             return'false';
//         }
//     }
// }
// console.log(IsLeapYear(25) );


//FunSSimple53
// function MonthDay(Y,M) {
//     if(Y<100){
//       if(Y%4==0){
//         switch(M){
//             case (1):console.log(31);break;
//             case (2):console.log(29);break;
//             case (3):console.log(31);break;
//             case (4):console.log(30);break;
//             case (5):console.log(31);break;
//             case (6):console.log(30);break;
//             case (7):console.log(31);break;
//             case (8):console.log(31);break;
//             case (9):console.log(30);break;
//             case (10):console.log(31);break;
//             case (11):console.log(30);break;
//             case (12):console.log(31);break;
//             default:console.log('bunday oy mavjud emas');
//         }
//       }else{
//         switch(M){
//             case (1):console.log(31);break;
//             case (2):console.log(28);break;
//             case (3):console.log(31);break;
//             case (4):console.log(30);break;
//             case (5):console.log(31);break;
//             case (6):console.log(30);break;
//             case (7):console.log(31);break;
//             case (8):console.log(31);break;
//             case (9):console.log(30);break;
//             case (10):console.log(31);break;
//             case (11):console.log(30);break;
//             case (12):console.log(31);break;
//             default:console.log('bunday oy mavjud emas');
//         }
//       }
//     }else{
//         if(Y%400==0){
//             switch(M){
//                 case (1):console.log(31);break;
//                 case (2):console.log(29);break;
//                 case (3):console.log(31);break;
//                 case (4):console.log(30);break;
//                 case (5):console.log(31);break;
//                 case (6):console.log(30);break;
//                 case (7):console.log(31);break;
//                 case (8):console.log(31);break;
//                 case (9):console.log(30);break;
//                 case (10):console.log(31);break;
//                 case (11):console.log(30);break;
//                 case (12):console.log(31);break;
//                 default:console.log('bunday oy mavjud emas');
//             }
//         }else {
//             switch(M){
//                 case (1):console.log(31);break;
//                 case (2):console.log(28);break;
//                 case (3):console.log(31);break;
//                 case (4):console.log(30);break;
//                 case (5):console.log(31);break;
//                 case (6):console.log(30);break;
//                 case (7):console.log(31);break;
//                 case (8):console.log(31);break;
//                 case (9):console.log(30);break;
//                 case (10):console.log(31);break;
//                 case (11):console.log(30);break;
//                 case (12):console.log(31);break;
//                 default:console.log('bunday oy mavjud emas');
//             }
//         }
//     }
// }
// MonthDay(36,2)


//FunSSimple54  CHIQMAGAN MISOLLL
// function MonthDay(Y,M,D) {
//         if(M==1 && M==3 && M==5 && M==7 && M==8 && M==10 && M==12){
//             if(D==1){
//                 D1=31;
//             }else{
//                 D1=D-1;
//             }
//             console.log(D1);
//         }else if(M==2){
//         if((Y%4==0 && Y<100) || (Y>100 && Y%400==0)){
//             if(D<=29){
//                     if(D==1){
//                         D1=28
//                     }else{
//                         D1=D-1;
//                     }
//                 }else if{
//                     if( D==1 ){
//                         D1=29;
//                     }else{
//                         D1=D-1;
//                     }
//                 }else{
//                     console.log('Fevral kunlari 29 dan oshmaydi siz katta kiritdingiz');
//                 }
//         }else{
//             if(D==1){
//                 D1=30;
//             }else{
//                 D1=D-1;
//             }
//             console.log(D1);
//       }
//     switch(M){
//         case (1):console.log('YANVAR');break;
//         case (2):console.log('FEVRAL');break;
//         case (3):console.log('MART');break;
//         case (4):console.log('APREL');break;
//         case (5):console.log('MAY');break;
//         case (6):console.log('IYUN');break;
//         case (7):console.log('IYUL');break;
//         case (8):console.log('AVGUST');break;
//         case (9):console.log('SENTABR');break;
//         case (10):console.log('OKTYABR');break;
//         case (11):console.log('NOYABR');break;
//         case (12):console.log('DEKABR');break;
//         default:console.log('bunday oy mavjud emas');
//     }
   
// }
// MonthDay(3,2,12)