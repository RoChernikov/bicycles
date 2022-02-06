export default class ThemeSwitch {
  constructor(switchersArr) {
    this._switchersArr = switchersArr;
    this._handleSwitch = this._handleSwitch.bind(this);
    this._setThemeSwitchers = this._setThemeSwitchers.bind(this);
  }

  _setThemeSwitchers(isDark) {
    if (isDark) {
      this._switchersArr.forEach(switcher => (switcher.checked = true));
    } else {
      this._switchersArr.forEach(switcher => (switcher.checked = false));
    }
  }

  _handleSwitch() {
    if (!document.body.hasAttribute('dark', '')) {
      document.body.setAttribute('dark', '');
      this._setThemeSwitchers(true);
    } else {
      document.body.removeAttribute('dark', '');
      this._setThemeSwitchers(false);
    }
  }

  _setEventListeners() {
    this._switchersArr.forEach(switcher => {
      switcher.addEventListener('click', this._handleSwitch);
    });
  }

  activate() {
    this._setEventListeners();
  }
}
