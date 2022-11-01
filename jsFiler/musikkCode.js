
const song1 = ["Bro bro brille", "bilder/musikk/broAlbum.jpg", "133","lydfiler/beat.wav" ]
const song2 = ["Heisann", "bilder/musikk/iverAlbum.jpg", "193", "lydfiler/lemonTree.mp3"]
const song3 = ["Du er kul", "bilder/musikk/eirikAlbum.jpg", "621", "lydfiler/rus.mp3"]

let currentSong = song2

var audio = new Audio(currentSong[3]); 

let durationNR = parseInt(currentSong[2]) 
let durationMinus = 100/(durationNR-1)
let durationWidth = 0

let playing=true

setInterval(musikk,10)
function musikk(){
    audio.play();
}

setInterval(duration, 1000)

document.getElementById("albumBilde").src = currentSong[1]
document.getElementById("albumBilde").style.borderRadius="50px"
document.getElementById("songName").innerHTML = currentSong[0] + " - VAFFELGUTANE"

function duration(){
    if (playing){
    durationNR -= 1
    durationWidth+=durationMinus
    console.log(durationNR + durationMinus, durationWidth)
    

    
    
    if (durationWidth<100+durationMinus){
        document.getElementById("duration").style.width = durationWidth + "%"
    }
}
    
    
}

function skip(){
    audio.pause()
    if (currentSong==song1){
        currentSong = song2
    }else if(currentSong==song2){
        currentSong=song3
    }else if(currentSong==song3){
        currentSong=song1
    }
    
    infoReset()
}
function back(){
    audio.pause()
    if (currentSong==song3){
        currentSong = song2
    }else if(currentSong==song2){
        currentSong=song1
    }else if(currentSong==song1){
        currentSong=song3
    }
    infoReset()
}


function infoReset(){

    audio = new Audio(currentSong[3]); audio.play();

    durationNR = parseInt(currentSong[2]) 
    durationMinus = 100/(durationNR-1)
    durationWidth = 0
    durationWidth = 0
    document.getElementById("albumBilde").src = currentSong[1]
    document.getElementById("songName").innerHTML = currentSong[0] + " - VAFFELGUTANE"
   
}

function hoho(){
    if (playing){
        
        playing=false
        audio.pause();
    }else{
        
        playing=true
        audio.play();
    }
}






var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".blob").style.width = "33vw";
        document.querySelector(".blob").style.height = "33vw";
        document.querySelector(".blob").style.top = "-15vw";
        document.querySelector(".blob").style.left = "-15vw";
        document.querySelector("#blob2").style.width = "43vw";
        document.querySelector("#blob2").style.height = "43vw";
        document.querySelector("#blob2").style.top = "-15vw";
        document.querySelector("#blob2").style.left = "-15vw";
        document.querySelector("#dining-icon").style.top="2.66vw";
        document.querySelector("#dining-icon").style.left="2.66vw";
        document.querySelector("#dining-icon").style.fontSize="12vw";
        document.querySelector(".top-bar").style.height="7vw";
    } 
    else {
        document.querySelector(".blob").style.height = "26vw";
        document.querySelector(".blob").style.height = "26vw";
        document.querySelector(".blob").style.top = "-7vw";
        document.querySelector("#blob2").style.height = "31vw";
        document.querySelector("#blob2").style.width = "31vw";
        document.querySelector("#blob2").style.top = "-7vw";
        document.querySelector("#blob2").style.left = "-7vw";
        document.querySelector("#dining-icon").style.top="3vw"
        document.querySelector("#dining-icon").style.left="3vw";
        document.querySelector("#dining-icon").style.fontSize="5vw";
        document.querySelector(".top-bar").style.height="4vw";
    }
  prevScrollpos = currentScrollPos;
}