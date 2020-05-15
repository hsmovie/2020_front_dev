export default class Button {
  constructor({ $target, className, text }) {
    this.button = document.createElement('button');
    this.button.className = className;
    this.button.textContent = text;
    $target.appendChild(this.button);
  }
}
