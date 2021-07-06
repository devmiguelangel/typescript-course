// Void
// Tipo explicito
function showInfo(user: any): any {
  console.log('User Info', user.id, user.username);
}

showInfo({id: 1, username: 'devmiguelangel'});

// Tipo inferido
function showFormattedInfo(user: any) {
  console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
  `);
}

showFormattedInfo({id: 1, username: 'devmiguelangel'});

// Void como tipo de dato en una variable
let unusable: void;
// unusable = null;
// unusable = undefined;

// Never
// Tipo explicito
function handleError(code: number, message: string): never {
  // Process your code
  // Generate a message
  throw new Error(`${message}. Code: ${code}`)
}

try {
  handleError(404, 'Not found');
} catch (error) {
  // console.log(error);
}

// Tipo inferido
function sumNumbers(limit: number): never {
  let sum: number = 0;

  while (true) {
    sum ++;
  }
}

sumNumbers(3);

