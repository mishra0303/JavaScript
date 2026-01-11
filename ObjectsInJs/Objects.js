const mySyb=Symbol("key1");
let User1={
    name:"vaibhav",
    Address:"Adarsh Nagar",
    [mySyb]:"myKey1",
    age:18
}
console.log(User1);
console.log( typeof User1[mySyb]);
