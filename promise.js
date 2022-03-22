/*
const showMessageLater = (msg) => {
    setTimeout( () => {
        return msg;
    }, 3000)
};
console.log(showMessageLater("Hello"));
*/

const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (msg === "Hello"){
                return reject("Something happened.");
            }
            return resolve(msg);
        }, 1000);
    });
};
showMessageLater("Hello2").then( (result) => {
    console.log(result);
    showMessageLater("Hello3").then( (result) => {
        console.log(result);
        showMessageLater("Hello4").then( (result) => {
            console.log(result);
        })
    })
}).catch( (error) => {
    console.log(error)
})

