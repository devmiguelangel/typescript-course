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
;
