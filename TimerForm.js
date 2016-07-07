import TimerView from "./TimerView.js";

const TIMER_FORM_HTML = `
  <form class="timer-form"><br>
    <select class="select" id="selectDish">
      <option value="">Choose a Dish</option><br><br>
    </select>
    <button class="add-timer-btn">Add</button>
    <button class="start-timers-btn">Start</button>
  </form>
`;

export default class TimerForm {

  constructor(containerElement, dishes) {
    this._containerElement = document.querySelector(containerElement);
    this.element = document.createElement("div");
    this.dishes = dishes;
    this._timerViews = [];
  }

  init() {
    this.element.innerHTML = TIMER_FORM_HTML;
    this._containerElement.appendChild(this.element);

    this._addDishOptions();
    this._setUpEventHandlers();
  }

  addTimer(dish) {
    let timerView = new TimerView(".timers-container", dish);
    this._timerViews.push(timerView);
  }

  startAllTimers() {
    this._timerViews.forEach(timerView => {
      timerView.startTimer();
    });
  }

  _setUpEventHandlers() {
    const select = this.element.querySelector("select");

    this.element.querySelector(".add-timer-btn")
      .addEventListener("click", event => {
        event.preventDefault();
        if (!select.value) return;

        const dish = this._getDishById(select.value);
        this.addTimer(dish);
      });

    this.element.querySelector(".start-timers-btn")
      .addEventListener("click", event => {
        event.preventDefault();
        this.startAllTimers();
    });
  }

  _getDishById(id) {
    return this.dishes.find(d => d.id === id);
  }

  _addDishOptions() {
    const { dishes } = this;

    for(var i = 0; i < dishes.length; i++) {
      var opt = dishes[i];
      var el = document.createElement("option");
      el.textContent = opt.name + " (" + opt.method + ")";
      el.value = opt.id;
      this.element.querySelector("select").appendChild(el);
    };
  }
}
