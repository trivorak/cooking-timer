import Timer from "./Timer.js";

const TIMER_VIEW_HTML =
  `<div class="font-container">
    <div class="time minutes"></div>
    <div class="time">:</div>
    <div class="time seconds"></div>
    <div class="description"></div>
  </div>`;

export default class TimerView {

  constructor(containerElement, dish) {
    this._containerElement = document.querySelector(containerElement);
    this.element = document.createElement("div");
    this.dish = dish;

    this.timer = new Timer();
    this.timer.setTimer(dish.time);
    this.timer.onChange(this.render.bind(this));

    this.init();
  }

  init() {
    this.element.innerHTML = TIMER_VIEW_HTML;
    this._containerElement.appendChild(this.element);

    this.render();
  }

  render() {
    var minutes = this.timer.getMinutes();
    var seconds = this.timer.getSeconds();

    this.element.querySelector(".minutes").innerHTML = minutes;
    this.element.querySelector(".seconds").innerHTML = seconds;

    this.element.querySelector(".description").innerHTML = this.dish.name;
  }
}
