//constructor
var ColorPicker = function ColorPicker(currentColor = "black") {
    // set member variables:
    this.currentColor = currentColor; // current color member
    this.currentObj = undefined; // current color object
    this.colorIndicator = document.getElementById("currentColor"); // color indicator object
    this.colors = document.querySelector(".color-wrap").children; // list of color objects

    //update color:
    this.updateColor(currentColor);
        
    // set color button evenlisteners:
    for (var i = 0; i < this.colors.length; i++) {
        this.colors[i].addEventListener('click', this.click.bind(this), false);
    }
}

// color click event
ColorPicker.prototype.click = function (e) {
    // update current color indicator
    this.updateCurrentObj(e.target);

    // set color of test square:
    this.updateColor(e.target.style.backgroundColor);
};

// set color and update
ColorPicker.prototype.updateColor = function (color) {
    this.currentColor = color;
    this.colorIndicator.style.background = this.currentColor;
};

ColorPicker.prototype.updateCurrentObj = function (obj) {
    // previous current color style if defined
    if (this.currentObj !== undefined) {
        this.currentObj.className = "";
    }

    // update current color style
    this.currentObj = obj;
    obj.className = "color-selected";
};

var colorPicker = new ColorPicker("green");
