"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        // this._id = id;
        this.orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        // this.#id = id;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Personal pictures');
const picture = new Picture(1, 'My picture', PhotoOrientation.Square);
album.addPicture(picture);
console.log(album);
// picture.id = 2;
picture.title = 'Another title';
console.log(album);
console.log(Picture.photoOrientation.Portrait);
