/**
 * art-mondrian
 *
 * Procedurally generated rectangular art.
 * Created by Jake Billings on 10/8/17.
 *
 * Very simple Javascript application that creates art by drawing random rectangles on a Canvas.
 */
(function (document) {
    //Acquire the canvas element and from that acquire its 2D context object that will allow us to draw using javascript
    var canvas = document.getElementById('piet');
    var ctx = canvas.getContext('2d');

    //Find the width of the window and make the canvas that big
    // Store it for later use generating rectangles
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    //backgroundColorScheme Stores all hex colors that the background could ever be
    var backgroundColorScheme = ['#FFF', '#000'];

    //colorSchemes Stores all of the sets of colors that could be randomly picked to draw a piece of art.
    // Only one element of colorSchemes is chosen. Colors are then picked from that sub-array.
    var colorSchemes = [
        ['#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96'],
        ['#f6546a', '#f70449', '#ef4437', '#f0592b', '#f8971c'],
        ['#4deeea', '#74ee15', '#ffe700', '#f000ff', '#001eff']
    ];

    //Draws a rectangle of a given fill color and a given border color at a position x, y with dimensions width, height
    function drawRectWithBorder(xPos, yPos, width, height, thickness, fillColor, borderColor) {
        ctx.fillStyle = borderColor;
        ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
        ctx.fillStyle = fillColor;
        ctx.fillRect(
            xPos, yPos, width, height
        );
    }

    //Clears the canvas by randomly choosing a background color and drawing it over the entire canvas.
    function clear() {
        ctx.fillStyle = backgroundColorScheme[Math.floor(Math.random() * backgroundColorScheme.length)];
        ctx.fillRect(0, 0, width, height);
    }

    //Clears the canvas using clear() then draws rectangles randomly to create the art.
    function drawArt() {
        //Clear the canvas
        clear();

        //Pick a random color scheme
        var colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
        //Pick a random border color from the set of background colors. This creates some interesting scenes.
        var border = backgroundColorScheme[Math.floor(Math.random() * backgroundColorScheme.length)];

        //Pick a random number of rectangles to draw and draw them
        var count = Math.random() * 20 + 10;
        for (var i = 0; i < count; i++) {

            drawRectWithBorder(
                Math.random() * width * 2 - width,
                Math.random() * height * 2 - height,
                Math.random() * width / 2,
                Math.random() * height / 2,
                5,
                colorScheme[i % colorScheme.length],
                border
            );
        }
    }

    //Draw a new piece of art every second
    function loop(duration) {
        drawArt();

        setTimeout(function () {
            loop(duration);
        }, duration);
    }

    loop(1000);
})(document);