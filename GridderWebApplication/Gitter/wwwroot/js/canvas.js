class Gitter {
    //constructor
    constructor(currentColor = "black") {
        this.canvas = document.querySelector("#canvas");
        this.ctx = canvas.getContext("2d");
        this.canvasPos = canvas.getBoundingClientRect();

        this.resize(window.innerWidth, window.innerHeight)

        window.addEventListener('click', this.placePixel.bind(this), false);
    }

    placePixel(e) {
        this.ctx.fillStyle = "red";

        this.ctx.fillRect(e.pageX - canvas.offsetLeft - 3, e.pageY - canvas.offsetTop - 3, 3, 3);
    }

    resize(x, y) {
        this.canvas.height = y;
        this.canvas.width = x;
    }

    test() {
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(20, 20, 50, 80);

        this.ctx.strokeRect(20, 20, 100, 60);

        this.ctx.fillRect(6, 6, 1, 1);
    }

    setColor(color) {
    }
}


window.addEventListener("load", () => {
    var gitter = new Gitter();

    gitter.test();
});
