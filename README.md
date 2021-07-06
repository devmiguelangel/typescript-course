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
// Number
let phone: number;
phone = 10;

// Inferido
let phoneNumber = 56565656;

let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;
```

### Boolean

```ts
// Boolean
let isPro: boolean;
```

### String

```ts
// String
let username: string = 'devmiguelangel';

// Template string
let userInfo: string;

userInfo = `
  User Info: 
  username: ${username}
`;
```

### Any
```ts
// Tipo explicito
let idUser: any;

idUser = 1;
idUser = '123';

console.log('idUser', idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';

console.log('otherId', otherId);
```

### Void
```ts
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
unusable = null;
unusable = undefined;
```

### Never
```ts
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
```


