let name = "Александр";
let age = null;
let height = undefined;
let studies = true;
let crypto = 32523126342n;
let mood = "happy";
let userId = Symbol("Alex");
let user = {
    name: "Alexandr",
    age: 15
};

console.log(Number(name), String(name), Boolean(name));
console.log(Number(age), String(age), Boolean(age));
console.log(Number(height), String(height), Boolean(height));
console.log(Number(studies), String(studies), Boolean(studies));
console.log(Number(crypto), String(crypto), Boolean(crypto));
console.log(Number(mood), String(mood), Boolean(mood));
console.log(Number(user), String(user), Boolean(user));
console.log(Number(userId), String(userId), Boolean(userId));