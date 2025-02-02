export class Screen {
  startingWindows = false;
  desktopBackground = "/win-bg-1.344b7dc3.png";
  desktopIcons = [
    {
      type: "folder",
      name: "Hazim Tulumovic",
      img: "",
    },
  ];
  draggingIcon;
  desktop;
  offsetX;
  offsetY;

  constructor() {
    this.screen = document.querySelector(".screen");
  }

  displayStartupVideo({ videoPath, onVideoEnd }) {
    this.startingWindows = true;

    // 1) Create video and source
    const video = document.createElement("video");
    const videoSource = document.createElement("source");
    // 2) Add values to video
    videoSource.type = "video/mp4";
    videoSource.src = videoPath;
    video.controls = false;
    video.muted = false;
    video.volume = 1;

    // 3) Add class
    video.classList.add("startup-video");

    // 4) Insert <source /> in <video>
    video.appendChild(videoSource);

    // 5) Display video on screen
    this.screen.appendChild(video);

    // 6) Play video
    video.play();

    // 7) When video ends
    video.addEventListener("ended", () => {
      onVideoEnd();
      this.startingWindows = false;
    });
  }

  displayDesktop() {
    // 1) Generate desktop
    const generatedDesktop = this.generateDesktop();
    // 2) Show desktop
    this.screen.innerHTML = generatedDesktop;
    // 3) Disable right click google menu inside desktop
    this.screen.addEventListener(
      "contextmenu",
      (e) => e.preventDefault(),
      true
    );
    // 4)
    this.desktop = document.querySelector(".desktop");
    // 4) Show icons
    this.generateDesktopIcons();
    // Moving
    document.addEventListener("mousemove", (event) => {
      console.log(this.draggingIcon);
      if (!this.draggingIcon) return;

      let iconWidth = this.draggingIcon.offsetWidth;
      let iconHeight = this.draggingIcon.offsetHeight;
      let desktopRect = this.desktop.getBoundingClientRect();

      let x = event.clientX - desktopRect.left - this.offsetX;
      let y = event.clientY - desktopRect.top - this.offsetY;

      x = Math.min(Math.max(x, 0), desktopRect.width - iconWidth);
      y = Math.min(Math.max(y, 0), desktopRect.height - iconHeight);

      this.draggingIcon.style.left = `${x}px`;
      this.draggingIcon.style.top = `${y}px`;
    });
    document.addEventListener("mouseup", () => {
      this.draggingIcon = false;
    });
  }

  generateDesktop() {
    return `<div class="desktop">
               <img src="${this.desktopBackground}" class="desktop-bg" />
          </div>
  `;
  }

  generateDesktopIcons() {
    this.desktopIcons.forEach((icon, idx) => {
      const iconDIV = document.createElement("div");
      iconDIV.classList.add("icon");

      const iconImg = document.createElement("img");
      iconImg.src = icon.img;

      const iconName = document.createElement("span");
      iconName.textContent = icon.name;

      iconDIV.append(iconImg);
      iconDIV.append(iconName);

      iconDIV.addEventListener("mousedown", (e) => {
        this.draggingIcon = iconDIV;
        this.offsetX = e.clientX - iconDIV.getBoundingClientRect().left;
        this.offsetY = e.clientY - iconDIV.getBoundingClientRect().top;
      });

      this.desktop.append(iconDIV);
    });
  }
}
