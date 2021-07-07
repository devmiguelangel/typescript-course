"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    console.log('Create picture:', title, date, size);
}
createPicture('My birthday', '2021-10-21', '100x100');
createPicture('Colombia trip', '2020-08-01');
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size,
    };
};
console.log(createPic('Colombia trip', '2020-08-01', '1000x1000'));
function handleError(code, message) {
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
