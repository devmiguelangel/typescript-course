# TypeScript
## Que es Type Script

TypeScript es un lenguaje de código abierto que se basa en JavaScript, una de las herramientas más utilizadas del mundo, al agregar definiciones de tipos estáticos.

Los tipos proporcionan una forma de describir la forma de un objeto, proporcionando una mejor documentación y permitiendo que TypeScript valide que su código está funcionando correctamente.

Los tipos de escritura pueden ser opcionales en TypeScript, porque la inferencia de tipos le permite obtener mucha potencia sin escribir código adicional.

El código TypeScript se transforma en código JavaScript mediante el compilador TypeScript o Babel. Este JavaScript es un código limpio y simple que se ejecuta en cualquier lugar donde se ejecute JavaScript: en un navegador, en Node.JS o en sus aplicaciones.

## Instalación

```bash
npm install typescript --save-dev

npx tsc --version
```

## Compilador

```bash
npx tsc

npx tsc file.ts
npx tsc --watch file.ts

node file.js
```

## Configuración

Visit https://aka.ms/tsconfig.json to read more about this file

```bash
npx tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
  }
}
```

## Tipado en TypeScript

### Number
```ts
let phone: number;
phone = 10;

let phoneNumber = 56565656;

let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;
```

### Boolean
```ts
let isPro: boolean;
```

### String
```ts
let username: string = 'devmiguelangel';

let userInfo: string;
userInfo = `
  User Info: 
  username: ${username}
`;
```

### Any
```ts
let idUser: any;
idUser = 1;
idUser = '123';

let otherId;
otherId = 1;
otherId = '1';
```

### Void
```ts
function showInfo(user: any): any {
  console.log('User Info', user.id, user.username);
}

showInfo({id: 1, username: 'devmiguelangel'});

function showFormattedInfo(user: any) {
  console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
  `);
}

showFormattedInfo({id: 1, username: 'devmiguelangel'});

let unusable: void;
unusable = null;
unusable = undefined;
```

### Never
```ts
function handleError(code: number, message: string): never {
  throw new Error(`${message}. Code: ${code}`)
}

try {
  handleError(404, 'Not found');
} catch (error) {
  // console.log(error);
}

function sumNumbers(limit: number): never {
  let sum: number = 0;

  while (true) {
    sum ++;
  }
}

sumNumbers(3);
```

### Null - Undefined
```ts
let nullVariable: null;
// nullVariable = 1;

let otherVariable = null;
otherVariable = 1;

let undefinedVar: undefined;
// undefined = 1;
let otherUndefined = undefined;
otherUndefined = 1;

// Sub tipos
let albumName: string;
albumName = null;
albumName = undefined;
```

### object
```ts
// Type: object
let user: object;
user = {};

user = {
  id: 1,
  username: 'devmiguelangel',
  isPro: true,
};

// Object vs object
const myObj = {
  id: 1,
  username: 'devmiguelangel',
  isPro: true,
};

const isInstance = myObj instanceof Object;
```

### Array
```ts
let users: string[];
users = ['miguel', 'angel', 'dev'];
users.push('user');
users.sort();

let otherUsers = ['miguel', 'angel', 'dev'];

let pictureTitles: Array<string>;
pictureTitles = ['Sunset', 'Time', 'Landscape'];
```

### Tuple
```ts
let user: [number, string];
user = [1, 'devmiguelangel'];

let userInfo: [number, string, boolean];
userInfo = [2, 'dev', true];

let arrayVar: [number, string][] = [];
arrayVar.push([1, 'luis']);
arrayVar.push([2, 'juan']);
arrayVar.push([3, 'perez']);
```

### Enum
```ts
enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1,
  Square = 2,
  Panorama = 3,
};

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama,
};

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp',
};

const country: Country = Country.Colombia;
```

### Union de tipos
```ts
let idUser: number | string;

function getUsernameById(id: number | string) {
  return 'devmiguelangel';
}
```

### Alias de tipos
```ts
type IdUser = number | string;
type Username = string;

let idUserVar: IdUser;

function getUsernameByIdFn(id: IdUser): Username {
  return 'devmiguelangel';
}
```

### Tipos literales
```ts
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
```
