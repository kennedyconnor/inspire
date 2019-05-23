// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});
let _state = {
	quote: {}
}
let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class QuoteService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Quote() {
		return _state.quote
	}
	getQuote() {
		_quoteApi.get().then(quote => {
			console.log("Quote retrieved:")
			console.log(quote)
			let quoteData = quote.data.quote
			_setState('quote', quoteData)
		})
	}
}





