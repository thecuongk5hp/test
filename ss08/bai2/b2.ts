let validatePerson = function(person:{
    name: string;
    age: number;
    address: object 
})  :boolean {
    if (
        typeof person.name === "string" &&
        typeof person.age === "number" &&
         typeof person.address === "object"
    ){
        return true;
    } else {
        return false;
    }
};