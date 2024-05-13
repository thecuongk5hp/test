"use strict";
let validatePerson = function (person) {
    if (typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "object") {
        return true;
    }
    else {
        return false;
    }
};
