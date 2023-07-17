function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
    fill(0, 128, 0)
    circle(40, 50, 170)
    circle(600, 50, 170)
    circle(600, 450, 170)
    circle(40, 50, 170)

}

function takeSnapshot() {
    save('studentName.png');
}

function filter_tint()
{
    tintColor = document.getElementById('colorName')
}