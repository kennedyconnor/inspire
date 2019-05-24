import DateTimeService from "./DateTimeService.js";

let _dateTimeService = new DateTimeService()

function drawDateTime() {
  let template = _dateTimeService.DateTime.Template
  document.getElementById('date-time').innerHTML = template;
}


export default class DateTimeController {
  constructor() {
    _dateTimeService.addSubscriber('time', drawDateTime)
    _dateTimeService.getDateTime()
  }
}
