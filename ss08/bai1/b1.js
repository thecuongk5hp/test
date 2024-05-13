"use strict";
let parseInput = function (input) {
    if (input === "number") {
        return 18;
    }
    else if (input === "boolean") {
        return true;
    }
    else if (input === "string") {
        return "Thế Cường";
    }
    else if (input === "null") {
        return null;
    }
    else if (input === "undefined") {
        return undefined;
    }
    else {
        return undefined;
    }
};
