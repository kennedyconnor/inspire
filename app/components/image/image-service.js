// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	//baseURL: "http://www.splashbase.co/api/v1/images/random",
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
			console.log('Image retrieved')
			console.log(image)
			let imageData = image.data
			_setState('image', imageData)
		})
	}


}
