// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}
let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Image() {
		return _state.image
	}
	getImage() {
		imgApi.get().then(image => {
			console.log(image)
			let imageData = image.data
			_setState('image', imageData)
		})
	}


}
