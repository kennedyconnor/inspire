export default class DateTime {
  constructor() {
    let today = new Date()
    this.day = today.getDay()
    this.month = today.getMonth()
    this.hour = today.getHours()
    this.minutes = today.getMinutes()
  }

  get Template() {
    return `
      <span>${this.month}/${this.day}</span>
      <span>${this.hour}:${this.minutes}</span>
    `
  }
}
