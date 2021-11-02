"use strict"


let dogs=[]
function setUpDogs(){
    dogs.push(new Dog("Fluffy","Poodle",10,"/img/"))
    dogs.push(new Dog("Otto","Chiwowa",13,"/img/"))
    dogs.push(new Dog("Alfie","French Bulldog",38,"/img/"))
    dogs.push(new Dog("Roger","pug",3,"/img/"))
    dogs.push(new Dog("Steven","Alsation",8,"/img/"))
    dogs.push(new Dog("Francis","Shibu",24,"/img/"))
}

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

function showDogs(){
    for(let i=0;i<dogs.length;i++){
    
        let card = document.createElement("div")//.style.padding= 50 +"px"
        document.getElementById("cardHolder").appendChild(card)
        card.classList.add("card")
        
        let dogName=document.createElement("h1")
        card.appendChild(dogName)
        dogName.innerHTML=dogs[i].name
        
        let dogBreed=document.createElement("h2")
        card.appendChild(dogBreed)
        dogBreed.innerHTML=dogs[i].breed
        
        let dogAge=document.createElement("h3")
        card.appendChild(dogAge)
        dogAge.innerHTML=dogs[i].dogAge()

        let dogPic=document.createElement("img")
        card.appendChild(dogPic)
        dogPic.innerHTML=dogs[i].picture
        dogPic.src=dogs[i].picture+dogs[i].name +".jpg"
        dogPic.classList.add("dogPic")

        let adopt=document.createElement("button")
        adopt.innerHTML = "adopt now"
        card.appendChild(adopt)
        adopt.classList.add("adoptButton")

    }
}

class Dog{
    constructor(name,breed,age,picture){
    this.name=name
    this.breed=breed
    this.age=age
    this.picture=picture
    }
    dogAge(){
        return Math.floor(this.age/12 )+" Years "+this.age%12+" months"
    }
    

}

setUpDogs()
showDogs()