1;

let me = {
  firstName: "Ziyoda",
  lastName: "Maxkamova",
  age: 19,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Xojar", "Humoyun", "Zulfizar", "Sayyora"],
  func: function () {
    console.log("Ismi:"+" "+ this.firstName);
    console.log("Familyasi:"+" "+ this.lastName);
    return ("Yoshi:"+" "+ this.age);
  }

}
console.log(me.func());
let arr=(Object.values(me.languages));
console.log('tillari:');
for (let i = 0; i < arr.length; i++) {
  console.log(i+1,".",arr[i]);
}
let array=(Object.values(me.friends));
console.log("Do'\stlari");
for (let i = 0; i < array.length; i++) {
  console.log(i+1,".",array[i]);
}

2

let books = [
    {
      title: "Halqa",
      author: "Akrom Malik",
      alreadyRead: false,
    },
    {
      title: "Dunyo ishlari",
      author: "O'tkir Hoshimov",
      alreadyRead: true,
    },
    {
      title: "Vaqtning qadri",
      author: "Abdulfattoh Abu G'udda",
      alreadyRead: false,
    },
  ];
  let j=1;
  for (i of books) {  
      if (i.alreadyRead) {
        console.log( (j+"."+ i.author+" tomonidan yozilgan " +i.title+ " kitobi o'\qilgan"));
        j++;
      }else{
        console.log( (j+"."+i.author+" tomonidan yozilgan " +i.title+ " kitobi o'\qilmagan"));
        j++;
      } 
  }