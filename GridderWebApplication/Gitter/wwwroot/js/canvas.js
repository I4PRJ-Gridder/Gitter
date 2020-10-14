window.addEventListener('load', () => {
    console.log("hello");
});




window.addEventListener("load", () => {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext("2d");
    var canvasPos = canvas.getBoundingClientRect();


    // Resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    ctx.strokeStyle = "red";
    ctx.strokeRect(20, 20, 50, 80);

    ctx.strokeRect(20, 20, 100, 60);

    ctx.fillRect(6, 6, 1, 1);


    function placePixel(e) {
        ctx.fillStyle = "red";
        console.log(e.clientX);
        console.log("hej");
       
        ctx.fillRect(e.pageX - canvas.offsetLeft -3, e.pageY - canvas.offsetTop -3, 3, 3);

    }



    window.addEventListener("mousemove", function (e) {
        console.log("mouse x, y:")
        console.log(e.clientX);
        console.log(e.clientY);

        console.log("canvas x, y:")
        console.log(canvasPos.left);
        console.log(canvasPos.top);

        console.log("page x, y:")
        console.log(e.pageX);
        console.log(e.pageY);
    });


    canvas.addEventListener("mousedown", placePixel);
}
);
