// Kiritish chiqarish va o`zlashtirish operatorlari

// begin1
var a = +prompt("a ni kriting ");
p=4*a;
console.log( "p=" , p);

// begin2
// var a = +prompt("a ni kriting ");
// s=a**2;
// console.log( "s=" , s);

// begin3
// var a = +prompt("a ni kriting ");
// // var b = +prompt("b ni kriting ");
// // p=2*(a+b);
// // s=a*b;
// // console.log( "p=" , p);
// // console.log( "s=" , s);

// begin4
// var d = +prompt("d ni kriting ");
// var p = 3.14;
// L= p*d;
// console.log( "L=" , L);

// begin5
// var a = +prompt("a ni kriting ");
// V=a**3;
// S=6*a**2;
// console.log( "V=" , V);
// console.log( "S=" , S);

// begin6
// var a = +prompt("a ni kriting ");
// var b = +prompt("b ni kriting ");
// var c = +prompt("c ni kriting ");
// V=a*b*c;
// S=2*(a*b+a*c+b*c);
// console.log( "V=" , V);
// console.log( "S=" , S);

// begin7
// var r = +prompt("r ni kriting ");
// var p = 3.14;
// L= p*r*2;
// S=p*(r**2);
// console.log( "L=" , L);
// console.log( "S=" , S);

//begin8
// var a = +prompt("a ni kriting ");
// var b = +prompt("b ni kriting ");
// S=(a+b)/2;
// console.log( "S=" , S);

//begin9
// var a = +prompt("a ni kriting ");
// var b = +prompt("b ni kriting ");
// S=(a*b)**(1/2);
// console.log( "S=" , S);

//begin10
// var a = +prompt("a ni kriting ");
// var b = +prompt("b ni kriting ");
// S=a*b;
// sum=a+b;
// a=a**2;
// b=b**2;
// console.log( "S=" , S);
// console.log( "sum=" , sum);
// console.log( "a ning kvadrati" , a);
// console.log( "b ning kvadrati" , b);

//begin11
// var a = +prompt("a ni kriting ");
// var b = +prompt("b ni kriting ");
// S=a*b;
// sum=a+b;
// a=(a**2)**(1/2);
// b=(b**2)**(1/2);
// console.log( "S=" , S);
// console.log( "sum=" , sum);
// console.log( "a ning moduli" , a);
// console.log( "b ning moduli" , b);

//begin12
// var a = +prompt("a ni kriting ");
// var b = +prompt("b ni kriting ");
// c=(a**2+b**2)**(1/2);
// p=a+b+c;
// console.log( "c=" , c);
// console.log( "p=" , p);



//butun sonlarga oid masalalar

//integer5
// var A = +prompt("A ni kriting ");
// var B = +prompt("B ni kriting ");
// D=A%B;
// C=(A-D)/B;
// console.log("mavjud kesmalar" , C);
// console.log("ortiq kesma uzunligi" , D);

// //integer6
// var a = +prompt("a ni kiriting");
// b=a%10;
// a=(a-b)/10;
// console.log("onlar xonasi" , a);
// console.log("birlar xonasi" , b);

//integer7
// var a = +prompt("a ni kiriting");
// b=a%10;
// a=(a-b)/10;
// c=a+b;
// console.log("raqamlar yig`indisi" , c);

//integer8
// var a = +prompt("a ni kiriting");
// b=a%10;
// a=(a-b)/10;
// c=b*10+a;
// console.log("Orinlari almash son" , c);

//integer9
// var a = +prompt("a ni kiriting");
// b=a%100;
// a=(a-b)/100;
// console.log("Yuzlar xonasida" , a);

//integer10
// var a = +prompt("a ni kiriting");
// b=a%10;
// a=(a%100-b)/10;
// console.log("birlar xonasida" , b);
// console.log("onlar xonasida" , a);

//integer11
// var a = +prompt("a ni kiriting");
// c=a%10;
// b=(a%100-c)/10;
// a=(a-a%100)/100;
// d=c+b+a;
// console.log("raqamlar yigindisi " , d);

//integer12
// var a = +prompt("a ni kiriting");
// c=a%10;
// b=(a%100-c)/10;
// a=(a-a%100)/100;
// d=c*100+b*10+a;
// console.log("almashgan son " , d);

//integer13
// var a = +prompt("a ni kiriting");
// c=a%10;
// b=(a%100-c)/10;
// a=(a-a%100)/100;
// d=b*100+c*10+a;
// console.log("almashgan son " , d);

//integer14
// var a = +prompt("a ni kiriting");
// c=a%10;
// b=(a%100-c)/10;
// a=(a-a%100)/100;
// d=c*100+a*10+b;
// console.log("almashgan son " , d);

//integer15
// var a = +prompt("a ni kiriting");
// c=a%10;
// b=(a%100-c)/10;
// a=(a-a%100)/100;
// d=b*100+a*10+c;
// console.log("almashgan son " , d);

//integer16
// var a = +prompt("a ni kiriting");
// c=a%10;
// b=(a%100-c)/10;
// a=(a-a%100)/100;
// d=a*100+c*10+b;
// console.log("almashgan son " , d);

//integer17
// var a = +prompt("a ni kiriting");
// d=(a-a%100)/100%10;
// console.log("yuzlar honasi " , d);

//integer18
// var a = +prompt("a ni kiriting");
// d=(a-a%1000)/1000;
// console.log("minglar honasi " , d);

//integer19
// var n = +prompt("n ni kiriting");
// d=(n-n%60)/60;
// console.log( d);

//integer20
// var n = +prompt("n ni kiriting");
// d=(n-n%3600)/3600;
// console.log( d);

//Mantiqiy amallarga oiid massalalar

//boolean5
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// c= A>=2 || B<-2;
// console.log(c);

//boolean6
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting");
// c= A<=B && B<=C;
// console.log(c);

//boolean7
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k = (( A<B && B<C) ||  ( B<A &&  C<B)) ;
// console.log(k);

//boolean8
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// k = A%2==1 && B%2==1 ;
// console.log(k);

//boolean9
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// k = A%2==1 || B%2==1 ;
// console.log(k);

//boolean10
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// k = (A%2==1 && B%2==0) || (A%2==0 && B%2==1);
// console.log(k);

//boolean11
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// k = (A%2==1 && B%2==1) || (A%2==0 && B%2==0);
// console.log(k);

//boolean12
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k= A>0 && B>0 && C>0
// console.log(k);

//boolean13
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k= A>0 || B>0 || C>0
// console.log(k);

//boolean14
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k= (A>0 && B<0 && C<0) || (A<0 && B>0 && C<0) || (A<0 && B<0 && C>0)
// console.log(k);

//boolean15
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k= (A>0 && B>0 && C<0) || (A<0 && B>0 && C>0) || (A>0 && B<0 && C>0)
// console.log(k);

//boolean16
// var a = +prompt("a ni kriting");
// k=a>9 && a<100 && a%2==0;
// console.log(k);

//boolean17
// var a = +prompt("a ni kriting");
// k=a>99 && a<1000 && a%2==1;
// console.log(k);

//boolean18
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k= (A==B && B!=C)|| (A!=B && A==C ) || (A!=B && A==C ) || (A==B && A==C )
// console.log(k);

//bolean19
// var A = +prompt("A ni kiriting");
// var B = +prompt("B ni kiriting");
// var C = +prompt("C ni kiriting"); 
// k= A==B*(-1)  || A==C*(-1);
// console.log(k);

//bolean20
// var A = +prompt("A ni kiriting");
// A1=(A-A%100)/100;
// A2=(A%100-A%10)/10;
// A3=(A-A%10);
// k= A1!=A2 && A1!=A3 && A2!=A3;
// console.log(k);


























