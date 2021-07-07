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
function showPicture(picture) {
    console.log("\n    [title: " + picture.title + ",\n    date: " + picture.date + "],\n    orientation: " + picture.orientation + ",\n    isPro: " + picture.isPro);
}
var myPic = {
    title: 'My Picture',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    isPro: true,
};
showPicture(myPic);
;
