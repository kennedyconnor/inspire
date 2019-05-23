import ImageService from "./image-service.js";

const _is = new ImageService()

function _drawImage() {
  document.getElementById('bg-image').setAttribute('background', _is.Image.url)

}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)
    _is.getImage()

  }



}

