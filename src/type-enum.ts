enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1,
  Square = 2,
  Panorama = 3,
};

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('Landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama,
};

console.log('Portrait', PictureOrientation.Portrait);

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp',
};

const country: Country = Country.Colombia;
console.log('Country', country);


