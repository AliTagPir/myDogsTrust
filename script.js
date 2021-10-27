"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",Age:2,picture:"/img/"})
dogs.push({name:"Otto",Breed:"Chiwowa",Age:1,picture:"/img/"})
dogs.push({name:"Alfie",Breed:"French Bulldog",Age:8,picture:"/img/"})
dogs.push({name:"Roger",Breed:"pug",Age:5,picture:"/img/" })
dogs.push({name:"Steven",Breed:"Alsation",Age:1,picture:"/img/"})
dogs.push({name:"Francis",Breed:"Shibu",Age:4,picture:"/img/"})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){
   
    let card = document.createElement("div")//.style.padding= 50 +"px"
    document.getElementById("cardHolder").appendChild(card)
    card.classList.add("card")
    
    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name
    
    let dogBreed=document.createElement("h2")
    card.appendChild(dogBreed)
    dogBreed.innerHTML=dogs[i].Breed
    
    let dogAge=document.createElement("h3")
    card.appendChild(dogAge)
    dogAge.innerHTML=dogs[i].Age

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
