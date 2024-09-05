//10.1. Paranoia
var arr = [
    {
        "userName": "Test",
        "lastName": "Test",
        "email": "test.test@gmail.com"
    },
    {
        "userName": "Dmitro",
        "lastName": "Porohov",
        "email": "dmitro.porohov@yahoo.com"
    },
    {
        "userName": "Andrii",
        "lastName": "",
        "email": "andrii@mail.ru"
    },
    {
        "userName": "Andrii",
        "lastName": "",
        "email": "an89dr.ii@yahoo.com"
    }
];

let emailReg = /^[A-Za-z0-9.]+@(gmail\.com|yahoo\.com)$/; 
let result = [];

for (let i = 0; i < arr.length; i++) {
    let email = arr[i].email; 
    if (emailReg.test(email)) {
        result.push(email);
    }
}
console.log(result)


//10.2. No A
let str = 'Wonderful, Joyful, Happiness, Time, Task, Apple'
let reg = /\b[^Aa\s,]{6,}\b/g;
let matches = str.match(reg);
console.log(matches)