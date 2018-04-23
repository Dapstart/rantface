var song;
var amp;
var vol;
function preload(){
 song = loadSound("sourceaudio/rant.mp3");   
amp = new p5.Amplitude()

}

function setup() {
  createCanvas(500,500); 
    
song.play();

}
   function draw() {
  // put drawing code here 
    background ("#E5E5E5")
    
    vol = amp.getLevel();
    

    
    fill("#F5E95F");
    stroke("#D9C634");
    strokeWeight(5);
    
    ellipse (255,255,400,400)
 
    fill("#FFFFFF");
    stroke("#CCCCCC");
    strokeWeight(5);
           
           
     ellipse (157,170,120,120)      
     ellipse (352,170,120,120) 
 
        fill("#000000");
    stroke("#58B1B2");
    strokeWeight(10);
           
  ellipse (157,170,70,70)      
  ellipse (352,170,70,70) 
       

       
 fill("#000000");
    stroke("#C195BD");
    strokeWeight(10);
        ellipse (255,300,200,vol * 1000);

}





