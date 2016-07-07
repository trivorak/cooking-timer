import Timer from "./Timer.js";

const TIMER_VIEW_HTML = `
  <div class="font-container">
    <div class="time minutes"></div>
    <div class="time">:</div>
    <div class="time seconds"></div>
    <div class="description"></div>
  </div>
`;

export default class TimerView {

  constructor(containerElement, dish) {
    this._containerElement = document.querySelector(containerElement);
    this.element = document.createElement("div");
    this.dish = dish;

    this.init();
  }

  init() {
    this.timer = new Timer();
    this.timer.setTimer(this.dish.time);
    this.timer.onChange(this.render.bind(this));

    this.element.innerHTML = TIMER_VIEW_HTML;
    this._containerElement.appendChild(this.element);

    this.render();
  }

  render() {
    const minutes = this.timer.getMinutes();
    const seconds = this.timer.getSeconds();

    this.element.querySelector(".minutes").innerHTML = minutes;
    this.element.querySelector(".seconds").innerHTML = seconds;
    this.element.querySelector(".description").innerHTML = this.dish.name;
  }

  startTimer() {
    this.timer.startTimer();
  }
}
