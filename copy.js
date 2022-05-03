const arr1 = [8, 13, 25];
const arr2 = [3, 22, 70];

const arr3 = [...arr1];  //mindig olyan jelek közé, amilyet éppen másolni szeretnénk (tömb, obj stb.)
arr3.push(6);
//console.log("arr3: ", arr3);
//console.log("arr1: ", arr1);

const arr4 = [...arr1, ...arr2]; //tömbök mergelése
//console.log("arr4: ", arr4);

const userProfile = {
    name: "Cintia",
    age: "27",
    country: "Hungary"
}

//hozzáad egy új párt valamint átírja a nevet
const userProfile2 = {...userProfile, gender: "female", name: "Bianka"}; 
//console.log("userProfile: ", userProfile)
//console.log("userProfile2: ", userProfile2);




// saját gyakorlás:

const fruits = ["alma", "körte", "citrom", "narancs"]
const vegetables = ["paprika", "paradicsom", "hagyma", "retek"]

//lemásoljuk csak az egyik tömböt: 
fruits.push("eper")
const copyArray = [...fruits]
console.log(copyArray)

//lemásoljuk mindegyiket: 
const mergedArrays = [...vegetables, ...fruits]
//console.log(mergedArrays)

const myHusband = {
    name: "Gábor",
    age: 29, 
    profession: "QA"
}

//lemásoljuk az objektumot
const myHusbandCopy = {...myHusband}
//console.log(myHusbandCopy)

//lemásoljuk és adunk hozzá új kulcsot:
const myHusbandCopyAndAddNewKey = {...myHusband, gender: "male"}
//console.log(myHusbandCopyAndAddNewKey)

//lemásoljuk és átírunk egy értéket:
const myHusbandCopyAndChangeValue = {...myHusband, age: 30}
//console.log(myHusbandCopyAndChangeValue)

//lemásoljuk, átírunk és hozzáadunk új kulcsot/értéket:
const myHusbandCopyAndAddNewKeyAndChangeValue = {...myHusband, age: 31, hobby: "reading"}
console.log(myHusbandCopyAndAddNewKeyAndChangeValue)