"use strict";
// Type: object
var user;
user = {};
user = {
    id: 1,
    username: 'devmiguelangel',
    isPro: true,
};
console.log('User', user);
// Object vs object (Class JS vs TS type)
var myObj = {
    id: 1,
    username: 'devmiguelangel',
    isPro: true,
};
var isInstance = myObj instanceof Object;
console.log('Instance', isInstance);
console.log('username', myObj.username);
