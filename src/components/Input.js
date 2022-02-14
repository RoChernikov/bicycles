export default class Input {
  constructor(inputElement, placeholderText) {
    this._inputElement = inputElement;
    this._placeholderText = placeholderText;
    this._clear = this._clear.bind(this);
    this._setPlaceholder = this._setPlaceholder.bind(this);
  }

  _clear() {
    this._inputElement.setAttribute('placeholder', '');
    console.log('Test');
  }

  _setPlaceholder() {
    this._inputElement.setAttribute('placeholder', `${this._placeholderText}`);
  }

  _setEventListeners() {
    this._inputElement.addEventListener('focus', this._clear);
    this._inputElement.addEventListener('blur', this._setPlaceholder);
  }

  activate() {
    this._setEventListeners();
  }
}
