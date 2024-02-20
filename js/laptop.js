"use strict";
// Classes
import { Keyboard } from "./keyboard";
import { Screen } from "./screen";

export class Laptop {
  constructor() {
    this.screen = new Screen();
    this.keyboard = new Keyboard();
    // Dodajte ostale atribute po potrebi
  }

  turnOn() {
    // Implementacija uključivanja laptopa
    this.screen.displayImage();
  }

  turnOff() {
    // Implementacija isključivanja laptopa
  }
}
