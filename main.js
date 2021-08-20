function preload()
{

}

function setup()
{
   Canvas = createCanvas(300,300);
   Canvas.center();
    video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 400, 400);
}

function takeSnapshot()
{
    save("My_image.png");
}