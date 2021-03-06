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

### Assert
```ts
// Angle bracket
let username: any;
username = 'devmiguelangel';

let message: string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short';

// as Sintaxis
message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short';
console.log('Message', message);
```

## Funciones
```ts
type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size?: SquareSize) {
  console.log('Create picture:', title, date, size);
}

let createPic = (title: string, date: string, size?: SquareSize): object => {
  return {
    title,
    date,
    size,
  };
}
```

## Interfaces
```ts
interface Picture {
  title: string;
  date: string;
  orientation?: PhotoOrientation; // Opcional
  readonly isPro: boolean;
}

function showPicture(picture: Picture) {
  console.log(`
    [title: ${picture.title},
    date: ${picture.date}],
    orientation: ${picture.orientation},
    isPro: ${picture.isPro}`);
}

// Herencia
interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
};

interface Picture2 extends Entity {
  orientation: PhotoOrientation;
}
```

## Clases
```ts
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
};

abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

class Picture extends Item {
  static photoOrientation = PhotoOrientation;
  // private _id: number;
  orientation : PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title)
    // this._id = id;
    this.orientation = orientation;
  }

  toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album extends Item {
  // #id: number;
  pictures: Picture[];

  constructor(id: number, title: string) {
    super(id, title);
    // this.#id = id;
    this.pictures = [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal pictures');
const picture: Picture = new Picture(1, 'My picture', PhotoOrientation.Square);
album.addPicture(picture);

console.log(album);

// picture.id = 2;
picture.title = 'Another title';

console.log(album);
console.log(Picture.photoOrientation.Portrait);
```

## Webpack
```bash
npm install webpack webpack-cli --save-dev

npm install ts-loader source-map-loader --save-dev
```

- webpack.config.js
```js
module.exports = {
  mode: 'production',
  entry: './src/clases.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
}
```

- package.json
```json
{
  "scripts": {
    "build": "npx webpack",
  }
}
```

```bash
npm run build
```
