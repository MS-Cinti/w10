//ha van egy obj, amiben vannak kulcsértékpárok, akkor ezeket feltudjuk bontani, kihámozni és változóként létrehozni ezeket
//nem tudjuk a változót átnevezni, undefined lesz

const userProfile = {
    name: "Cintia",
    age: "27",
    country: "Hungary"
};

//const name = userProfile.name;
//const age = userProfile.age; 

const {name, country} = userProfile;   //11,12-es sorok shorthandje a destructuring verziója
//console.log("name: ", name);
//console.log("country: ", country);

//régebbi verzió
/* 
const logNameAndAge = (incomingUser) => {

    console.log(incomingUser.name)
    console.log(incomingUser.age)

}

logNameAndAge(userProfile);
*/

//újabb verzió
const logNameAndAge = ({name, age}) => {

    console.log("name: ", name);
    console.log("age: ", age);

}

logNameAndAge(userProfile);


//tömbök esetében:

/*
const arr1 = [1,2,3,4];
const first = arr1[0];
const second = arr1[1];
console.log("first: ", first);
console.log("second: ", second)
*/

//az obj-nél azt a nevet kell használni ami a kulcs neve, az arraynél a sorrend a lényeg
const arr1 = [1,2,3,4];
const [c, d] = arr1;  
console.log("c: ", c);
console.log("d: ", d);

//x-be kerül az első, y-ba a többi elem
const [x, ...y] = arr1;
console.log("x: ", x);
console.log("y: ", y);



//saját gyakorlás:
const fruits = ["alma", "körte", "citrom", "narancs"]
const [first, second] = fruits
console.log("first :", first)
console.log("second :", second)

const [firstFruit, ...otherFruits] = fruits
console.log("firstFruit :", firstFruit)
console.log("otherFruits :", otherFruits)


const myHusband = {
    name: "Gábor",
    age: 29, 
    profession: "QA"
}

const {age, profession} = myHusband
//console.log("age :", age)
//console.log("profession :", profession)

const nameOfMyHusband = myHusband.name
const ageOfMyHusband = myHusband.age
const professionOfMyHusband = myHusband.profession
//console.log(ageOfMyHusband)
//console.log(nameOfMyHusband)
//console.log(professionOfMyHusband)

const nameAndAgeOfMyHusband = ({name, age}) => {

    console.log("name :", name)
    console.log("age :", age)

}
nameAndAgeOfMyHusband(myHusband)
