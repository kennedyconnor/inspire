export default class DateTime {
  constructor() {
    let today = new Date()
    this.day = today.getDate()
    this.month = today.getMonth() + 1
    this.hour = today.getHours()
    this.minutes = today.getMinutes()
  }

  get Template() {
    return `
      <span>${this.month}/${this.day}</span>
      <br>
      <span>${this.hour}:${this.minutes}</span>
    `
  }
}
