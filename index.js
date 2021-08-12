class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      days: document.querySelector('.days[data-value="days"]'),
      hours: document.querySelector('.hours[data-value="hours"]'),
      mins: document.querySelector('.minutes[data-value="mins"]'),
      secs: document.querySelector('.seconds[data-value="secs"]'),
    };
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    this.updateClock(time);
  }, 500);

  updateClock = (time) => {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  };

  pad = (value) => {
    return String(value).padStart(2, "0");
  };
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("August 28, 2021"),
});
