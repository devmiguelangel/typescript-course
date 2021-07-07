"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angle bracket
let username;
username = 'devmiguelangel';
let message = username.length > 5 ? `Welcome ${username}` : 'Username is too short';
console.log('Message', message);
let usernameWithId = 'devmiguelangel 1';
username = usernameWithId.substring(0, 14);
console.log('Username', username);
// as Sintaxis
message = username.length > 5 ? `Welcome ${username}` : 'Username is too short';
console.log('Message', message);
