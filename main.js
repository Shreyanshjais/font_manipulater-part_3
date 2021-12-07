


leftWrist=0;
rightWrist=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(560,500);

    canvas=createCanvas(400,400);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    textSize(difference);
    document.getElementById("font").innerHTML="Width and height of the font is" + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    text('Shreyansh',40,200);
}
function modelLoaded()
{
    console.log('Posenet is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
    
        console.log("leftWristX = " + leftWristX +"rightWristX = " + rightWristX + "Difference = " + difference );
    }
}



