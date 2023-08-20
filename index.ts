
// question2 
let name1='Hamza'
let message='would you like to learn some javascript today?'
console.log(name1+ " " + message);

// question3

// uppercase name
let name2='Hamza'
let uppercasename2=name2.toUpperCase()
console.log(uppercasename2);
// lowercase name
let name3='Hamza'
let lowercasename3=name3.toLowerCase()
console.log(lowercasename3);

// titlecase name
function toTitleCase(inputString: string): string {
    return inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
  
  let name4: string = 'hamza qureshii';
  name4 = toTitleCase(name4);
  
  console.log(name4);

  // question4

const author='Ernest Hemingway'
const quote='As a writer, you should not judge, you should understand'

console.log(`"${quote}" ${author}`);


//question5


const famous_person='Ernet Hemingway'
const quote1='As a writer, you should not judge, you should understand'

const message1=`${famous_person}, ${quote1}`
console.log(message1);


//question6

const namewithWhitespace="\t    Hamza    \n";
console.log(namewithWhitespace);
const nameWithoutWhitespace="Hamza"
console.log(nameWithoutWhitespace);

//question7

let sum1=(4+4);
console.log(sum1);
let subtraction=(12-4);
console.log(subtraction);
let  multiplication=(2*4);
console.log(multiplication);
let division=(16/2);
console.log(division)

//question8

console.log("------------------------");
console.log(5+3)

console.log("------------------------");

console.log(5+3)

console.log("------------------------");

console.log(5+3)


console.log("------------------------");

//qustion9

let favouritenumber=25;
let messagee=`My favourite number is ${favouritenumber}`
console.log(messagee);

//question10

let myName='Hamza Qureshi'
//My name is Hamza Qureshi
let Age='19'
// My age is 19

//question 11

let names=['Mark', 'Gavin', 'Denis'];
console.log(names[0])
//prints Mark
console.log(names[1])
//prints Gavin
console.log(names[2])
//prints Denis

//question12
let names1=['Mark', 'Gavin', 'Denis'];
console.log(`Hi ${names1[0]}, Welcome here `)
console.log(`Hi ${names1[1]}, Welcome here `)
console.log(`Hi ${names1[2]}, Welcome here `)

//question13
// List of car brands

const carBrands=['Honda', 'Ford','Audi'];
function printCarstatement(carBrands: string[]) {

  carBrands.forEach((brand) => {
    console.log(`I would like to own a ${brand} car`)


  }
  );
}
printCarstatement(carBrands);

//question14

const guests=['Mark','Elon','Jeff'];

function inviteguests(guests: string[]){
  guests.forEach((person) => {
    console.log(`Dear ${person} you are invited to dinner`)

  })
}
inviteguests(guests);

//question 15

const guests1=['Mark','Elon','Jeff'];

const unavailableIndexx: number=1;

const newguest="Nelson"
guests[unavailableIndexx]=newguest;


function inviteguests1(guests: string[]){
  guests.forEach((person) => {
    console.log(`Dear ${person} you are invited to dinner`)

  })
}

inviteguests(guests);

//qustion16

const guests2=['Mark','Elon','Jeff'];

const unavailableIndex: number=1;

const newguest1="Nelson"
guests[unavailableIndex]=newguest;
 

function inviteguests2(guests: string[]){
  guests.forEach((person) => {
    console.log(`Dear ${person} you are invited to dinner`)

  })
}

inviteguests(guests);

console.log(`Guest Elon cant make it`);

//question17

const guests3=['Mark','Elon','Jeff'];

console.log("Great News, We found a biggerr dinner table")

const newguestbeginning="Hamza"
const newguestmiddle="Sohaib"
const newguestend="Subhan"

guests3.unshift(newguestbeginning);
guests3.splice(2,0,newguestmiddle);
guests3.push(newguestend);

function inviteguests3(guests3: string[]){
  guests.forEach((person) => {
    console.log(`Dear ${person} you are invited to dinner`)

  })
}
inviteguests(guests3);

//question18

let invitees: string[] = [
  "Isaac Newton",
  "Albert Einstein",
  "Maya Angelou",
  "Marie Curie",
  "Leonardo da Vinci",
  "Stephen Hawking",
];
console.log("Unfortunately, the new dinner table won't arrive in time, so we can invite only two people for dinner.");

while (invitees.length > 2) {
  const removedGuest = invitees.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
invitees.forEach((person) => {
  console.log(`Dear ${person},\nYou're still invited to the dinner. Looking forward to having you!\nBest regards,\n[Your Name]`);
  
});

invitees = [];
console.log("After the dinner, the invitees list is now empty:", invitees);

//question19
let placestovisit=['Canada','Australia','Bali']

console.log("OriginalOrder:",placestovisit);

console.log("AlphabeticalOrder:", [...placestovisit].sort())

console.log("OriginalOrder:",placestovisit);


console.log("ReverseAlphabeticorder",[...placestovisit].sort().reverse())

console.log("OriginalOrder:",placestovisit);

console.log("ReverseOrder",[...placestovisit].reverse())

console.log("ReverseOrder")

placestovisit=placestovisit.sort()

console.log("Alphabeticorder", placestovisit);

//question20

const guestss=['Mark','Elon','Jeff'];

function inviteguestss(guests: string[]){
  guests.forEach((person) => {
    console.log(`Dear ${person} you are invited to dinner`)

  })
}
inviteguestss(guestss);

console.log(`You are inviting ${guestss.length} guests to dinner` )

//question 21

let mountains=['Mount Everest', " ", 'K2', " ", 'Nanga Parbat']
mountains.forEach((mountain) =>{
  console.log(mountain)
});


//question 22

let mountains1=['Mount Everest', " ", 'K2', " ", 'Nanga Parbat']
const mountainslist=mountains1
mountains.forEach((mountains1) =>{
  console.log( mountains1)
});

//question23

let car='Audi';
console.log("Is car == 'Audi'? I predict True")
console.log(car=='Audi')


console.log("Is car == 'Honda'? I predict False")
console.log(car=='Honda')

console.log("Is car != 'Ford'? I predict True")
console.log(car!='Ford')

console.log("Is car != 'Audi'? I predict false")
console.log(car!='Audi');

console.log("Is car.length<5 '? I predict True")
console.log(car.length<5);


console.log("Is car.length<3 '? I predict false")
console.log(car.length<3);

console.log("Is car !== 'Audi'? I predict False")
console.log(car !== 'Audi');

console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru')

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda')

//question 24

let carr = 'Audi';
let temperature = 25;
let fruits = ['apple', 'banana', 'orange'];

//equality and inequality 
console.log("Is car == 'Audi'?", car=='Audi' )
console.log("Is car == 'audi'?", car=='audi' )
console.log("Is car == 'TOYOTA'?", car=='TOYOTA' )
console.log("Is car != 'Ford'?", car!='Ford' )
//Numerical tests

console.log("Is temperature>20?", temperature>20)
console.log("Is temperature<25?", temperature<25)
console.log("Is temperature==25?", temperature==25)
// And Or
console.log("Is car ='Audi' and temperature = 25?", car=='Audi' && temperature==25)
console.log("Is car == 'Audi' or temperature > 30? ", car == 'Audi' || temperature > 30);
console.log("Is car == 'audi' or temperature > 30? ", car == 'audi' || temperature > 30);
// Array

console.log("Is 'banana' included in array?", fruits.includes("banana"))
console.log("Is 'Strawberry' not in array?", !fruits.includes("strawberry"))

//question25

let alien_color="Green";

if(alien_color==='Green'){

  console.log("You earned 5 points")

}

alien_color="Red"
if(alien_color==="Green")
{console.log("You earned 5 points")}

//question26

alien_color="Green"
if(alien_color==="Green")
{console.log("You earned 5 points")}
else{"You earned 10 points"}


let alien_color1 = 'red';

if (alien_color1 === 'green') {
  console.log("You just earned 5 points !");
} else {
  console.log("You just earned 10 points!");
}

//question27

let alien_color2 = 'green';

if (alien_color2 === 'green') {
  console.log("You have earned 5 points !");
} else if (alien_color2==='yellow'){
  console.log("You have earned 10 points")

} else if(alien_color2==='red'){
  console.log("You have earned 15 points");
}

//question 28

let age=19;

if(age<2){
  console.log("The person is a baby");
}
else if(age<4){
  console.log("The person is a toddler")
}
else if(age<13){
  console.log("The person is a kid")
}
else if(age<20){
  console.log("The person is a teenager")
}
else if(age<65){
  console.log("The person is an adult")
}
else{
  console.log("The person is an elder")
}
//question29

const favouriteFruits=['banana', 'apple', 'mango']

if(favouriteFruits.includes('banana')){
  console.log("You really like bananas")

}
if(favouriteFruits.includes('peach')){
  console.log("You really like peach")

}
if(favouriteFruits.includes('apple')){
  console.log("You really like apple")

}
if(favouriteFruits.includes('Strawberry')){
  console.log("You really like Strawberry")

}
if(favouriteFruits.includes('mango')){
  console.log("You really like mango")

}

//question 30
const usernames=['admin', 'jack', 'mark', 'chandler', 'Robert'];

usernames.forEach((username) => {
if (username=='admin'){
  console.log("Hi admin, would you like to see a status report")
}
else {console.log(`Hello ${username} Thank you for logging in again`)}
});

//question31
let usernames1=['admin', 'jack', 'mark', 'chandler', 'Robert'];
if(usernames1.length===0){
  console.log("We need more users")
} else{
usernames1.forEach((username) => {
if (username ==='admin'){
  console.log("Hi admin, would you like to see a status report")
}
else {console.log(`Hello ${username} Thank you for logging in again`)}
});
}

usernames1=[];
if(usernames1.length===0){
  console.log("We need to find some users");
}

//question32

// List of current usernames
const current_users: string[] = ['admin', 'eric', 'julia', 'john', 'susan'];

// List of new usernames
const new_users: string[] = ['John', 'susan', 'mike', 'alice', 'Julia'];

// Convert current usernames to lowercase for case-insensitive comparison
const lowercase_current_users: string[] = current_users.map(username => username.toLowerCase());

new_users.forEach((new_username) => {
  const lowercase_new_username = new_username.toLowerCase();

  if (lowercase_current_users.includes(lowercase_new_username)) {
    console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_username}' is available.`);
  }
});

//question33

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print ordinal numbers
numbers.forEach((number) => {
  let ordinal;

  if (number === 1) {
    ordinal = 'st';
  } else if (number === 2) {
    ordinal = 'nd';
  } else if (number === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  console.log(`${number}${ordinal}`);
});
//question34
// Array of favorite pizza names
const favorite_pizzas: string[] = ['Pepperoni', 'Margherita', 'Fajitaa'];

// Loop through the array and print statements about each pizza
for (let i = 0; i < favorite_pizzas.length; i++) {
  console.log(` ${favorite_pizzas[i]}`);
}


console.log(`I really love ${favorite_pizzas[2]}pizza!`);


//question 35
let animals=['Lion','Tiger','Leopard']

for(let i=0; i< animals.length; i++){
  console.log(animals[i]);
  
}
console.log("A lion is a scary animal");
console.log("A Tiger is a beautiful but dangerous animal")
console.log("Leopard loves to live in jungle");

console.log("All these aimals belongs to big cat family");

//question36
function make_shirt(size:string , message:string){
console.log(`You have ordered a ${size} shirt with message ${message}`);
}

make_shirt('large','Be cool')

//question37

function make_shirt1(size:string ='large', message:string ='I love Typescript'){
console.log(`I will like to order a ${size} shirt with message: ${message}`);

}
make_shirt1();


make_shirt1('medium','coding is fun')
//question38

function describe_city(city:string, country:string="Pakistan"){
  console.log(`${city} is in ${country}`);
  
}

describe_city("Karachi")
describe_city("Multan")
describe_city("Islamabad")
describe_city('Lahore','Pakistan')
//question 39

function city_country(city:String="Lahore", country:string="Pakistan"){
console.log(`"${city},${country}"`);

}
city_country()

//question41

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

const magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];


show_magicians(magician_names);

//question 42

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}


const magician_names1: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];


make_great(magician_names1);


show_magicians(magician_names1);

// question43
function order_sandwich(items:string[]){
  console.log("You ordered a sandwich with:");
  for (const item of items){
    console.log(`-${item}`);
  }
}

order_sandwich(["cheese", "chicken","onion"])
order_sandwich(["cheese", "onion","jalapeno"])
order_sandwich(["mayo", "lettuce","bacon"])

//question 44

type CarInfo = {
  manufacturer: string;
  model: string;
  [key: string]: string | number | string[]; // Define an index signature
};

function create_car(manufacturer: string, model: string, ...options: [string, string | number | string[]][]) {
  const carInfo: CarInfo = {
    manufacturer: manufacturer,
    model: model
  };

  options.forEach(([key, value]) => {
    carInfo[key] = value;
  });

  return carInfo;
}

// Call the function with required information and additional key-value pairs
const car1 = create_car('Toyota', 'Camry', ['color', 'silver'], ['year', 2022], ['features', ['GPS', 'Bluetooth']]);

// Print the returned object
console.log(car1);









































































































































  

