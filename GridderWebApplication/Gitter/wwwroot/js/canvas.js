var Gitter = function Gitter(color = "green") {
    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.canvasPos = canvas.getBoundingClientRect();
    this.color = color;


    this.resize(500, 500);

    this.pixelData = this.createMatrix(canvas.width, canvas.height);
    this.pixelData[20][80] = "red";



    console.log("Constructor");
    this.redraw();



    window.addEventListener("click", this.placePixel.bind(this), false);
    window.addEventListener("mousewheel", this.zoom, false);
    window.addEventListener("DOMMouseScroll", this.zoom, false);

    /*
    
    var intervalID = window.setInterval(myCallback, 10000);

    function myCallback() {
        gitter.setPixel(
             Math.floor(Math.random() * gitter.canvas.width),
             Math.floor(Math.random() * gitter.canvas.height),
             getRandomColor());
    }*/
}

Gitter.prototype.placePixel = function (e) {
    this.setColor(this.color);
    //this.ctx.fillRect(e.pageX - canvas.offsetLeft - 3, e.pageY - canvas.offsetTop - 3, 3, 3);
    this.setPixel(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, this.color);
};

Gitter.prototype.setPixel = function (x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, 3, 3);
};


// Create 2D matrix.
Gitter.prototype.createMatrix = function(columns, rows, valueDefault = null) {
    var a = [];

    for (var x = 0; x < columns; x++) {
        a[x] = [];
        for (var y = 0; y < rows; y++) {
            a[x][y] = valueDefault;
        }
    }

    return a;
}


// HANDLE SCROLL
Gitter.prototype.zoom = function(e) {

    var delta = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail : 0;
    if (delta) {
        var scaleFactor = 1.1;
        var factor = Math.pow(scaleFactor, delta);
        this.ctx.scale(factor, factor);
        console.log("handleScroll");

        this.redraw();
    }

    return e.preventDefault() && false;
}



Gitter.prototype.resize = function(x, y) {
    this.canvas.height = y;
    this.canvas.width = x;
};

Gitter.prototype.test = function() {
    this.ctx.strokeStyle = "green";
    this.ctx.strokeRect(20, 20, 50, 80);

    this.ctx.strokeRect(20, 20, 100, 60);


    

    //this.addImage(image);
};

Gitter.prototype.setColor = function (color) {
    this.color = color;
    this.ctx.fillStyle = color;
};

Gitter.prototype.addImage = function (image) {
    
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(image, 0, 0);
    console.log("hej");
}


var pixelData = twoD(200, 200, null);

function twoD(cols, rows, def = 0) { // create 2d matrix using a 1d array inside a 1d array. def=default values
    var a = [];

    for (var x = 0; x < cols; x++) {
        a[x] = [];
        for (var y = 0; y < rows; y++) {
            a[x][y] = def;
        }
    }

    return a;
}

Gitter.prototype.redraw = function () { // run this everytime a change occurs(zoom, pan, click), as elements has to be redrawn/rendered
    // Clear the entire canvas:

    console.log("Redraw called!")


    this.ctx.imageSmoothingEnabled = false;
    //this.ctx.drawImage(image, 0, 0);

    
    // zoom scope:
    // console.log(lastX, lastY);
    // console.log(p1.x, p1.y, " to ", p2.x, p2.y);

    // fill pixels by looping through 2d matrix
    for (var x = 0; x < this.canvas.height; x++) {
        for (var y = 0; y < this.canvas.width; y++) {
            if (this.pixelData[x][y] != null) { // if pixel is empty. skip

                this.setPixel(x, y, pixelData[x][y]);
                console.log(this.pixelData[x][y]);
            }
        }
    }
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var image = new Image();

image.src = 'https://mdn.mozillademos.org/files/12640/cat.png';


var gitter = new Gitter();



//gitter.test();

