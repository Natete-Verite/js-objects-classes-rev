// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     console.log(reverseStr === lowRegStr); 
//   }
//   palindrome("eye");



// function palindrome(str) {
//  var re = /[^A-Za-z0-9]/g;
//  str = str.toLowerCase().replace(re, '');
//  var len = str.length;
//  for (var i = 0; i < len; i++) {
//    if (str[i] !== str[len - 1 - i]) {
//        console.log(false); 
//    }
//  }
//  console.log(true);;
// }
// palindrome("A man, a plan, a canal. Panama");


// let b = ["Mango","Apple"];                            //Arrays
// b.push("Orange")
// b.unshift("Pomme")
// b.pop()
// b.shift()
// let c = new Array("Banana","Orange");
// console.log(b);

// let d = c.map(item => `I love ${item}`)
// let e = c.map(function(item){
//   return `I love ${item}`
// })
// console.log(d);
// console.log(e);

// function people(){
//   console.log("You guys");
// }
// function students(a,callback){
//   console.log(a);
//   console.log(callback);
// }
// students(26,people())

// var people ={                                   // objects
//   name: "Verite",
//   country: "Rwanda"
// };
// console.log(people['country']);
// console.log(people.country);

// var person = new Object(people);
// console.log(person.name);
// person['age'] =24;
// console.log(person);

// for (value of Object.values(person)){
//   console.log(value);
// }
// for (key of Object.keys(person)){
//   console.log(key);
// }
// for ([key,value] of Object.entries(person)){
//   console.log(`${key}: ${value}`);
// }
// Object.freeze(person)
// person['school']= "Akirachix"
// Object.assign(person,{school:"Akirachix"})
// console.log(person);

var people ={
    name: "Verite",     //value of name is a string
    country: "Rwanda",
    hobby:function(){
      console.log(`My name is ${this.name} and my hobby is cooking`);
      return "My fav hobby is baking"; //value of hobby is a function. This is a method
    },
    friend:{
      name: "Benadate",
      age:20,
      hobby:{
        first:"Cooking",
        play:function(){
          return `I love playing`
        }
      }
    }
  }
  console.log(people.hobby());
  console.log(people.friend.name);
  console.log(people.friend.hobby());
  console.log(people.friend.hobby.play());

// class Student{                                         // classes 
//   constructor(name, age, school){
//     this.name = name
//     this.age = age
//     this.school = school
//     this.hobby = function(){
//       return `I love playing`
//     }
//   }
// }   
// Student.prototype.country = "Kenya"  
// var firstStudent = new Student("Judy", 19, "Akirachix")
// console.log(firstStudent.country);          

// function Students(name, age, school){
//     this.name = name
//     this.age = age
//     this.school = school
//     this.hobby = function(){
//       return `I love playing`
//     }
// }
// var secondStudent = new Students("Pascaline", 12, "Akirachix");
// console.log(secondStudent);

// var names = ["Chiri","Judy","Salma","Zipporah"];  //Array destructuring
// var [others, ...conslate] = names
// console.log(conslate);
// console.log(others);
// console.log(names);