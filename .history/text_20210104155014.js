export class Text {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvs.style.position = "absolute";
    this.canvs.style.left = "0";
    this.canvs.style.top = "0";
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
  }
  setText() {}
}
