leftWristx = 0
leftWristy = 0
rightWristx = 0
rightWristy = 0
song=""
function setup(){
canvas = createCanvas(400, 500)
canvas.center(475, 125)
video = createCapture(VIDEO)
video.size(400,500)
video.hide()
 posenet=ml5.poseNet(video,modelloaded)
 posenet.on("pose",gotposes)
}
function preload(){
song = loadSound("music.mp3")
}
function draw(){
image(video,0,0,400,500)
fill("red")
circle(leftWristx, leftWristy, 20);
leftWristy=Number(leftWristy)
NewLeftWristy=(leftWristy/500)
document.getElementById("volume-value").innerHTML = NewLeftWristy
song.setVolume(NewLeftWristy)
fill("red")
circle(rightWristx, rightWristy, 20);
if(rightWristy>0 && rightWristy<100){
    document.getElementById("speed-value").innerHTML = "0.5x"
    song.rate(0.5)
}
if(rightWristy>100 && rightWristy<200){
    document.getElementById("speed-value").innerHTML = "1x"
    song.rate(1)
}
if(rightWristy>200 && rightWristy<300){
    document.getElementById("speed-value").innerHTML = "1.5x"
    song.rate(1.5)
}
if(rightWristy>300 && rightWristy<400){
    document.getElementById("speed-value").innerHTML = "2x"
    song.rate(2)
}
if(rightWristy>400 && rightWristy<500){
    document.getElementById("speed-value").innerHTML = "2.5x"
    song.rate(2.5)
}
}
function PLAY(){
    song.setVolume(1)
    song.rate(2)
    song.play()
}
function STOP(){
    song.stop()
}
function modelloaded(){
    console.log("modelloaded")

}
function gotposes(result){
console.log(result)
leftWristx = result[0].pose.leftWrist.x
leftWristy = result[0].pose.leftWrist.y
rightWristx = result[0].pose.rightWrist.x
rightWristy = result[0].pose.leftWrist.y
}