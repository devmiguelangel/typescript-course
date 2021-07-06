"use strict";
// Void
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username);
}
showInfo({ id: 1, username: 'devmiguelangel' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n    id: " + user.id + "\n    username: " + user.username + "\n  ");
}
showFormattedInfo({ id: 1, username: 'devmiguelangel' });
// Void como tipo de dato en una variable
var unusable;
// unusable = null;
// unusable = undefined;
// Never
// Tipo explicito
function handleError(code, message) {
    // Process your code
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not found');
}
catch (error) {
    // console.log(error);
}
// Tipo inferido
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(3);
