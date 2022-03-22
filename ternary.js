const [min, max] = [50, 30];

/*
if (min < max){
    console.log("Min lower than max");
}else{
    console.log("Min is not lower than max");
}
*/
//ha kérdőjel van, az a ternary operator kezdetét jelenti mindig

//min < max ? console.log("Min lower than max") : console.log("Min is not lower than max");

console.log(`Min ${min < max ? " " : "not"} lower than max`);