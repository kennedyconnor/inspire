import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  document.getElementById('quote').innerText = _qs.Quote.body

}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', _drawQuote)
    _qs.getQuote()

  }

}
