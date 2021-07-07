export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
};

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

let myPic = {
  title: 'My Picture',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait,
  isPro: true,
};

showPicture(myPic);

// Herencia de Interfaces
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
