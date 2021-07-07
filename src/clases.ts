export {};

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


