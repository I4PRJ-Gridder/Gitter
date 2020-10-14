var Gitter = function Gitter(color = "green") {
    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.canvasPos = canvas.getBoundingClientRect();
    this.color = color;
    this.pixelSize = 5;


    this.resize(window.innerWidth, window.innerHeight);

    window.addEventListener('mousedown', this.placePixel.bind(this), false);
}

Gitter.prototype.placePixel = function (e) {
    this.setColor(this.color);
    var p = this.pixelSize;
    this.ctx.fillRect(e.pageX - canvas.offsetLeft - p, e.pageY - canvas.offsetTop - p, p, p);
    console.log(this.color);
};

Gitter.prototype.resize = function(x, y) {
    this.canvas.height = y;
    this.canvas.width = x;
};

Gitter.prototype.test = function() {
    this.ctx.strokeStyle = "green";
    this.ctx.strokeRect(20, 20, 50, 80);

    this.ctx.strokeRect(20, 20, 100, 60);

    this.ctx.fillRect(6, 6, 1, 1);
};

Gitter.prototype.setColor = function (color) {
    this.color = color;
    this.ctx.fillStyle = color;
};

var gitter = new Gitter();

gitter.test();



