import DateTime from "../../models/DateTime.js"

//Private
let _state = {
  time: {}
}
let _subscribers = {
  time: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//Public
export default class DateTimeService {
  get DateTime() {
    return _state.time
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getDateTime() {
    console.log('getting the time')
    _setState('time', new DateTime())
  }


}