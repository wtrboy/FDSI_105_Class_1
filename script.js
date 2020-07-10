// create object literal for the pet salon (one)
// include name, phone, address(street,number)

const salon={
    name:"The Fashion Pet",
    phone:"555-555-5555",
    address:{
        street:"Ave. Univerity",
        number:"528-K"
    },
    counter:function(){
        alert("A pet was registered!");
    },
    pets:[]
}

// use object destructuring
let {name,phone,address:{street,number},counter,pets}=salon;
document.getElementById("footer-info").innerHTML=`
    <p class="text-center">${name} ${phone} <br> ${street}, ${number} </p> 
    `;

console.log(pets);

// object constructor for the pets (multiple)
// name, age, breed, gender, service, ownersName, contactPhone
class Pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }
}

// create pets

const scooby = new Pet("Scooby",60,"Dane","Male","Full Service","Shaggy","556-666-4444"); register(scooby);

const frankie = new Pet("Frankie",4,"French Bulldog","Male","Fancy Service","Lane","556-666-4445"); register(frankie);

const gracie = new Pet("Gracie",12,"Basset Hound","Female","Primping&Clipping Service","Suzanne","556-666-4446"); register (gracie);

//register function
function register(aPet){

    //push the pet to the array
    pets.push(aPet);

    //call the counter function
    counter();
    //display on the console the pets array
    console.log(aPet);
}

function status (){
    alert("Registered pets:" + pets.length);
    console.log("Registered pets:" + pets.length);

    //travel the array to display pets' name
    for(i=0;i<3;i++){
        console.log(pets[i].name);
    }
}

status ();