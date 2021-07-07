export {};

// Union
let idUser: number | string;
idUser = 10;
idUser = '10';

function getUsernameById(id: number | string) {
  return 'devmiguelangel';
}

getUsernameById(10);

// Alias
type IdUser = number | string;
type Username = string;

let idUserVar: IdUser;
idUser = 10;
idUser = '10';

function getUsernameByIdFn(id: IdUser): Username {
  return 'devmiguelangel';
}

// Tipos Literales
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';