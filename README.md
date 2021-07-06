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


