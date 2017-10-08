/**
 * Created by jakebillings on 10/8/17.
 */

var canvas = document.getElementById('piet');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var backgroundColorScheme = ['#FFF', '#000'];

var colorSchemes = [
    ['#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96'],
    ['#f6546a', '#f70449', '#ef4437', '#f0592b', '#f8971c'],
    ['#4deeea', '#74ee15', '#ffe700', '#f000ff', '#001eff']
];

function drawRectWithBorder(xPos, yPos, width, height, thickness, fillColor, borderColor) {
    ctx.fillStyle = borderColor;
    ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
    ctx.fillStyle = fillColor;
    ctx.fillRect(
        xPos, yPos, width, height
    );
}

function clear() {
    ctx.fillStyle = backgroundColorScheme[Math.floor(Math.random()*backgroundColorScheme.length)];
    ctx.fillRect(0, 0, width, height);
}

function drawArt() {
    clear();

    var colorScheme = colorSchemes[Math.floor(Math.random()*colorSchemes.length)];
    var border = backgroundColorScheme[Math.floor(Math.random()*backgroundColorScheme.length)]

    for (var i = 0; i < (Math.random() * 1000); i++) {

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

function loop(duration) {
    drawArt();

    setTimeout(function () {
        loop(duration);
    }, duration);
}
loop(1000);