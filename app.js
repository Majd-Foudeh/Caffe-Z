let person = prompt("Enter Your Name :")
let age = prompt("Enter Your age :")
let g = prompt("Enter your gender :")

const gender = (gender)=>{
    while(g !="male" &&  g !="female"){

        g = prompt("Please enter a correct gender")
        
        }
}
gender(g);
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
let main_div = document.getElementById("div");
let div =document.createElement("div");

const par =document.createElement("p");
par.textContent = `${person}`;

let ul = document.createElement("ul");
 let li1 =document.createElement("li");
 li1.textContent = `Gender : ${g}`;
 let li2 =document.createElement("li");
 li2.textContent= `Age : ${age}`;
 let li3 =document.createElement("li");
li3.textContent = `Drink : ${drink} ${namedrink}` ;

main_div.appendChild(div);
div.appendChild(par);
div.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);



























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

