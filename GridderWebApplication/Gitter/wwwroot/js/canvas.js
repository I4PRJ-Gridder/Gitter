var Gitter = function Gitter(color = "lime") {
    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.canvasPos = canvas.getBoundingClientRect();
    this.color = color;
    this.canvasElement = document.getElementById("canvas");
    this.canvasHolder = document.getElementById("canvasholder");
    this.scrollY = 0;
    this.scrollX = 0;
    
    this.ctx.imageSmoothingEnabled = false;

    // Set canvas holder size equal to window size.
    this.canvasHolder.style.height = (window.innerHeight - 150) + "px";
    this.canvasHolder.style.width = (window.innerWidth - 150) + "px";

    this.canvasStyleSize = this.canvasElement.width;

    this.resize(200, 200);

    window.addEventListener("click", this.placePixel.bind(this), false);
    window.addEventListener("mousewheel", this.zoom, false);
    window.addEventListener("DOMMouseScroll", this.zoom, false);
    window.addEventListener("keydown", this.dispatchKeydown.bind(this), false);

    this.canvasHolder.addEventListener("scroll", e =>
        this.logScroll(e));

    const intervalID = window.setInterval(myCallback, 1);

    function myCallback() {

        for (let i = 0; i < 1; i++) {
            gitter.setPixel(
                Math.floor(Math.random() * gitter.canvas.width),
                Math.floor(Math.random() * gitter.canvas.height),
                getRandomColor());
        }
    }
}

Gitter.prototype.logScroll = function (e) {
    // Save scroll
    console.log(e.target.scrollTop);
    this.scrollY = e.target.scrollTop;
    this.scrollX = e.target.scrollLeft;
}

Gitter.prototype.dispatchKeydown = function(e) {

    switch (e.keyCode) {
        case 107:
            // + button
            this.canvasStyleSize += 50;
            this.canvasElement.style.width = this.canvasStyleSize + "px";
            this.canvasElement.style.height = this.canvasStyleSize + "px";
            break;

        case 109:
            // - button
            this.canvasStyleSize -= 50;
            this.canvasElement.style.width = this.canvasStyleSize + "px";
            this.canvasElement.style.height = this.canvasStyleSize + "px";
            break;
    }
}

Gitter.prototype.placePixel = function (e) {
    const styleDiff = this.canvas.width / this.canvasStyleSize;

    console.log("style size:" + this.canvasStyleSize);
    console.log("canvas size:" + this.canvas.width);

    //original
    this.setPixel(
        (Math.floor((e.pageX - canvas.offsetLeft + this.scrollX)*styleDiff)),
        (Math.floor((e.pageY - canvas.offsetTop + this.scrollY)*styleDiff)),
        this.color);
};

Gitter.prototype.setPixel = function (x, y, color) {

    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 1, 1);
};

Gitter.prototype.resize = function(x, y) {
    this.canvas.height = y;
    this.canvas.width = x;
};

Gitter.prototype.setColor = function (color) {
    this.color = color;
    this.ctx.fillStyle = color;
};

Gitter.prototype.addImage = function (image) {
    
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(image, 0, 0);
    console.log("addImage called!");
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var gitter = new Gitter();