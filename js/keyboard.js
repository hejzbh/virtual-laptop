import { myLaptop } from "./laptop";
import { keyboardKeysFunctions } from "./functions";

export class Keyboard {
  name = "Tastatura";
  constructor() {
    // 1
    this.keys = document.querySelectorAll(".key");
    // 2)
    this.addListenersToKeys();
  }

  pressKey(key) {
    // 1)
    if (!myLaptop.isTurnOn && !key.dataset.power) {
      alert("Please turn on laptop");
      return;
    }

    // Implementacija pritiskanja tastere
    this.triggerKeyFunction(key);
  }

  onPowerButtonPress() {
    myLaptop.isTurnOn ? myLaptop.turnOff() : myLaptop.turnOn();
  }

  addListenersToKeys() {
    document.querySelector(".keyboard").addEventListener("click", (e) => {
      // 1) Get key
      const key = e.target.closest(".key");
      // 2) If there is no key return;
      if (!key) return;
      // 3) Press key
      this.pressKey(key);
    });
  }

  triggerKeyFunction(key) {
    const { type, value } = key.dataset;

    const keyFunction = keyboardKeysFunctions[type];

    if (!keyFunction) {
      console.error(`Missing function for type :${type}`);
      return;
    }

    keyFunction.call(this, value);
  }
}
