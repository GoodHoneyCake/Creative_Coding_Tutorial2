export class Text {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvs.style.position = "absolute";
    this.canvs.style.left = "0";
    this.canvs.style.top = "0";
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
  }
  setText(str, density, stageWidth, stageHeight) {
    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    const myText = str;
    const fontWidth = 700;
    const fontSize = 800;
    const fontName = "Hind";

    this.ctx.clearRect(0, 0, stageWidth, stageHeight);
    this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
  }
}
