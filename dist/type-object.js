"use strict";
// Type: object
let user;
user = {};
user = {
    id: 1,
    username: 'devmiguelangel',
    isPro: true,
};
console.log('User', user);
// Object vs object (Class JS vs TS type)
const myObj = {
    id: 1,
    username: 'devmiguelangel',
    isPro: true,
};
const isInstance = myObj instanceof Object;
console.log('Instance', isInstance);
console.log('username', myObj.username);
