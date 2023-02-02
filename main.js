nosex=0;
nosey=0;
function preload (){ 

 mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png'); 
}


function setup (){
  canvas=createCanvas(300,300);
  canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}
function modelLoaded(){

    console.log('posenet has started');
}


function draw (){   
image(video,0,0,300,300);  
image(mustache,nosex-40,nosey,80,35);
}


function take_your_picture (){
save('pic.png');




}


function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
}

}