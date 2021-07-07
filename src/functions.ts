export {};

type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size?: SquareSize) {
  console.log('Create picture:', title, date, size);
}

createPicture('My birthday', '2021-10-21', '100x100');
createPicture('Colombia trip', '2020-08-01');

let createPic = (title: string, date: string, size?: SquareSize): object => {
  return {
    title,
    date,
    size,
  };
}

console.log(createPic('Colombia trip', '2020-08-01', '1000x1000'));

function handleError(code: number, message: string): never | string {
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has occurred';
  }
}

