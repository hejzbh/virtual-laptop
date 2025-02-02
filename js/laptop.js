"use strict";
// Classes
import { Keyboard } from "./keyboard";
import { Screen } from "./screen";

export class Laptop {
  constructor() {
    this.screen = new Screen();
    this.keyboard = new Keyboard();

    this.isTurnOn = false;
  }

  turnOn() {
    // 1) If wideo already starting
    if (this.screen.startingWindows) return;

    this.screen.displayStartupVideo({
      videoPath: "/startup.5527b196.mp4",
      onVideoEnd: () => {
        this.isTurnOn = true;
        this.screen.displayDesktop();
      },
    });
  }

  turnOff() {
    if (this.screen.startingWindows) return;

    this.isTurnOn = false;
    console.log("Iskljuceno");
    // Implementacija isključivanja laptopa
  }
}

export const myLaptop = new Laptop();
