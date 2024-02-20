export const keyboardKeysFunctions = {
  f: function (keyValue) {
    console.log(keyValue);
    switch (keyValue) {
      case "F1":
        break;
      case "F2":
        break;
      case "F3":
        break;
      case "F4":
        break;
      case "F5":
        window.location.reload();
        break;
      case "F6":
        break;
      case "F7":
        break;
      case "F8":
        break;
      case "F9":
        break;
      case "F10":
        break;
      case "F11":
        break;
      case "F12":
        break;
      default:
        return null;
    }
  },
  esc: null,
  char: null,
  power: function () {
    this.onPowerButtonPress();
  },
};
