let person = prompt("Enter Your Name :")
let g = prompt("Enter your gender :")

while(g !="male" &&  g !="female"){

g = prompt("Please enter a correct gender")

}
if(g == "male" ){
    alert("Welcome Mr. "+person )

}
else if(g == "female" ){
alert("Welcome Ms. "+ person)
}
else{
    alert("Welcome "+person)
}

let drink = prompt("What drink do you want ?", "Hot or Cold ?")

let namedrink = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+person +"  Drink name : "+namedrink)

let arr=[person,g,drink,namedrink];
for(let i=0;i<arr.length;i++){
console.log(arr[i])

}

































// let male ="male";
// let female ="female";










































// if(gender ===male ){
//     alert(`hi mr ${gender}`);
    
// }else if( gender ===female){
//     alert(`hi mss ${gender}`);
// }else
// if(gender != "male" || gender != "female"){
//     alert("wrong gender");
//     gender = prompt("Enter your gender :");
// }





// if(gender != "male" || gender != "female"){
//     alert("wrong gender");
//     gender = prompt("Enter your gender :");
// }

