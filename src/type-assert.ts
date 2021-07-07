export {}
// Angle bracket
let username: any;
username = 'devmiguelangel';

let message: string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short';
console.log('Message', message);

let usernameWithId: any = 'devmiguelangel 1';
username = (<string>usernameWithId).substring(0, 14);
console.log('Username', username);

// as Sintaxis
message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short';
console.log('Message', message);

