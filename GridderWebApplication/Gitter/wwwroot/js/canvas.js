var Grid = function Grid(cp) {
    //CANVAS MEMBERS:
    this.canvas = document.getElementById("canvas");
    this.wrap = document.getElementById("wrap");
    this.ctx = canvas.getContext("2d");
    this.canvasPos = canvas.getBoundingClientRect();
    this.colorPicker = cp;
    this.color = cp.currentColor;

    // TIL GRUPPEN: apiCaller.getGitter() will be called here 

    // TIL GRUPPEN: apiCaller.keepMeUpdated() will be called here

    //SCROLL MEMBERS:
    this.scrollY = 0; this.scrollX = 0;
    this.canvasStyleSize = this.canvas.width;

    //PAN MEMBERS:
    this.dragStart = false;
    this.dragX; this.dragY;
    this.marginX = 0; this.marginY = 0;

    //MOUSE MOVE MEMBERS
    this.worldX;
    this.worldY;

    //RANDOM MEMBERS:
    this.ranFlag = true;
    this.ranInterval;

    //SETUP:
    this.ctx.imageSmoothingEnabled = false;
    this.sizeCanvas(300, 300);
    this.sizeCanvasEle(window.innerHeight - 150, window.innerWidth - 150);

    //EVENTS:
    window.addEventListener("click", this.clickHandle.bind(this), false);
    window.addEventListener("keydown", this.keydownHandle.bind(this), false);
    window.addEventListener("mousemove", this.mousemoveHandle.bind(this), false);
    this.wrap.addEventListener("DOMMouseScroll", this.mouseScrollHandle.bind(this), false);
    this.wrap.addEventListener("scroll", this.scrollHandle.bind(this), false);
    this.wrap.addEventListener("mousedown", this.mousedownHandle.bind(this), false);
    this.wrap.addEventListener("mouseup", this.mouseupHandle.bind(this), false);
}

// #region event handlers
Grid.prototype.scrollHandle = function (e) {
    this.setScroll(e.target.scrollLeft, e.target.scrollTop);
}

Grid.prototype.mouseScrollHandle = function (e) {
    this.zoom(e.detail * 10);

    return e.preventDefault() && false;
}

Grid.prototype.keydownHandle = function (e) {
    switch (e.keyCode) {
        case 82: // r button
            this.toggleRandom();
            break;

        case 107: // + button
            this.zoom(50);
            break;

        case 109: // - button
            this.zoom(-50);
            break;

        default:
            // do nothing
    }
}

Grid.prototype.clickHandle = function (e) {
    this.color = this.colorPicker.currentColor;
    let tempX = Math.floor(this.worldX);
    let tempY = Math.floor(this.worldY);

    // TIL GRUPPEN: apiCaller.PixelPlaceRequest(x, y, color) called here
    this.setPixel(tempX, tempY, this.color);
};

Grid.prototype.mousedownHandle = function (e) {
    if (e.which == 3) this.dragStart = true;
    this.dragX = e.pageX; // log start pos
    this.dragY = e.pageY;
}

Grid.prototype.mouseupHandle = function (e) {
    if (e.which == 3) this.dragStart = false;
}

Grid.prototype.mousemoveHandle = function (e) {
    this.calcWorldPos(e);

    if (!this.dragStart) return; // if mousedown event detected

    // change since start position?
    var deltaX = e.pageX - this.dragX;
    var deltaY = e.pageY - this.dragY;

    // add that change to margin
    this.marginX += deltaX;
    this.marginY += deltaY;

    // update margin
    this.pan(this.marginX, this.marginY);

    // refresh dragstart (or else change will be exponential)
    this.dragX = e.pageX;
    this.dragY = e.pageY;
}
// #endregion

// #region core methods
Grid.prototype.setScroll = function (x, y) {
    this.scrollX = x;
    this.scrollY = y;
}

Grid.prototype.zoom = function (scale) {
    this.canvasStyleSize += scale;
    this.sizeCanvasEle(this.canvasStyleSize, this.canvasStyleSize);
}

Grid.prototype.toggleRandom = function () {
    if (this.ranFlag) {
        this.ranInterval = setInterval(this.randomPlace.bind(this), 1);
        this.ranFlag = false;
        return this.ranFlag;
    }
    clearInterval(this.ranInterval);
    this.ranFlag = true;
    return this.ranFlag;
}

Grid.prototype.calcWorldPos = function (e) {
    // recalculate mouse cursors position in grid world:
    const styleDiff = this.canvas.width / this.canvasStyleSize;

    this.worldX = (e.pageX - canvas.offsetLeft + this.scrollX) * styleDiff;
    this.worldY = (e.pageY - canvas.offsetTop + this.scrollY) * styleDiff;
}

Grid.prototype.pan = function (x, y) {
    this.canvas.style.marginLeft = x + "px";
    this.canvas.style.marginTop = y + "px";
}

Grid.prototype.setPixel = function (x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 1, 1);
};

Grid.prototype.sizeCanvas = function (x, y) {
    this.canvas.height = y;
    this.canvas.width = x;
};

Grid.prototype.sizeCanvasEle = function (x, y) {
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

Grid.prototype.renderImage = function () {
    console.log("renderimage!");

    var img = new Image();   // Create new img element
    img.src = "https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8";

    img.onload = function() {
        console.log(img);
        console.log("hej");
        this.ctx.drawImage(img, 0, 0);
    }

  this.ctx.drawImage(img, 0, 0);
};



/////////////////////////////////////main//////////////////////////////////////////

var testtest = new ColorPicker("purple");

var gitter = new Grid(testtest);