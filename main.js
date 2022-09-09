Status = "";

function setup(){
     canvas = createCanvas(360,360);
     canvas.center();

     video = createCapture();
     video.hide;
}


function start(){
    object = ml5.objectDetector("cocossd", modelLoded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
    document.getElementById("Object_name").value;
}

function draw(){
    image(video, 0, 0, 360, 360);
}