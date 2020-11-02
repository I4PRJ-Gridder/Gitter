var Grid = function Grid(color = "lime") {
    //MEMBERS:
    this.canvas = document.getElementById("canvas");
    this.wrap = document.getElementById("canvasholder");
    this.ctx = canvas.getContext("2d");
    this.canvasPos = canvas.getBoundingClientRect();
    this.color = color;
    this.scrollY = 0;
    this.scrollX = 0;
    this.ranFlag = 1;
    this.ranInterval;
    this.ctx.imageSmoothingEnabled = false;

    //SETUP:
    this.canvasStyleSize = this.canvas.width;

    this.sizeCanvas(300, 300);
    this.sizeWrap(window.innerHeight - 150, window.innerWidth - 150);

    //EVENTS:
    window.addEventListener("click", this.clickHandle.bind(this), false);
    this.wrap.addEventListener("DOMMouseScroll", this.mouseScrollHandle.bind(this), false);
    window.addEventListener("keydown", this.keydownHandle.bind(this), false);
    this.wrap.addEventListener("scroll", this.scrollHandle.bind(this), false);
}

// #region event handlers
Grid.prototype.scrollHandle = function (e) {
    console.log(e.target.scrollTop);
    this.scrollY = e.target.scrollTop;
    this.scrollX = e.target.scrollLeft;
}

Grid.prototype.mouseScrollHandle = function (e) {
    this.canvasStyleSize += e.detail * 10;
    this.sizeWrap(this.canvasStyleSize, this.canvasStyleSize);
}

Grid.prototype.keydownHandle = function (e) {
    switch (e.keyCode) {
        case 82:
            // r button
            if (this.ranFlag) {
                this.ranInterval = setInterval(this.randomPlace.bind(this), 1);
                this.ranFlag = false;
                break;
            }

            clearInterval(this.ranInterval);
            this.ranFlag = true;
        default:
    }
}

Grid.prototype.clickHandle = function (e) {
    const styleDiff = this.canvas.width / this.canvasStyleSize;

    console.log("style size:" + this.canvasStyleSize);
    console.log("canvas size:" + this.canvas.width);

    //original
    this.setPixel(
        (Math.floor((e.pageX - canvas.offsetLeft + this.scrollX) * styleDiff)),
        (Math.floor((e.pageY - canvas.offsetTop + this.scrollY) * styleDiff)),
        this.color
    );
};
// #endregion

// #region core methods

Grid.prototype.setPixel = function (x, y, color) {

    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 1, 1);
};

Grid.prototype.sizeCanvas = function (x, y) {
    this.canvas.height = y;
    this.canvas.width = x;
};

Grid.prototype.sizeWrap = function (x, y) {
    this.canvas.style.width = x + "px";
    this.canvas.style.height = y + "px";
};

Grid.prototype.addImage = function (image) {

    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(image, 0, 0);
    console.log("addImage called!");
}
// #endregion

// #region test methods

Grid.prototype.randomPlace = function () {
    for (let i = 0; i < 1; i++) {
        this.setPixel(
            Math.floor(Math.random() * this.canvas.width),
            Math.floor(Math.random() * this.canvas.height),
            this.getRandomColor()
        );
    }
}

Grid.prototype.getRandomColor = function () {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// #endregion


/////////////////////////////////////main//////////////////////////////////////////

var gitter = new Grid();