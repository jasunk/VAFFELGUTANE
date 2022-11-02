
const song1 = ["Bro bro brille", "bilder/musikk/broAlbum.jpg", "133","lydfiler/beat.wav" ]
const song2 = ["Heisann", "bilder/musikk/iverAlbum.jpg", "193", "lydfiler/lemonTree.mp3"]
const song3 = ["Du er kul", "bilder/musikk/eirikAlbum.jpg", "621", "lydfiler/rus.mp3"]
const song4 = ["VAFFEL", "bilder/musikk/vaffel.jpeg", "15","lydfiler/beat.wav" ]
const song5 = ["rødt", "bilder/musikk/Red_Color.jpg", "400","lydfiler/beat.wav" ]
let currentSong = song2

var audio = new Audio(currentSong[3]); 

let durationNR = parseInt(currentSong[2]) 
let durationMinus = 100/(durationNR-1)
let durationWidth = 0
var rgb = getAverageRGB(document.getElementById('albumBilde'));


let playing=true

setTimeout(musikk,10)

function musikk(){
    audio.play();
    nextSong()
    
    

}

setInterval(duration, 1000)


document.getElementById("albumBilde").src = currentSong[1]
document.getElementById("albumBilde").style.borderRadius="50px"
document.getElementById("songName").innerHTML = currentSong[0] + " - VAFFELGUTANE"

function duration(){
    rgb = getAverageRGB(document.getElementById('albumBilde'));
    document.getElementById("musicPlayerBase").style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
    document.getElementById("musicPlayerBase").style.border =" 0.7vw solid "+ 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';

    if (playing){
    durationNR -= 1
    durationWidth+=durationMinus
    console.log(durationNR + durationMinus, durationWidth)
    

    if (durationWidth<100+durationMinus){
        document.getElementById("duration").style.width = durationWidth + "%"
    }else{skip()}
}
    
    
}

function skip(){
    audio.pause()
    if (currentSong==song1){
        currentSong = song2
    }else if(currentSong==song2){
        currentSong=song3
    }else if(currentSong==song3){
        currentSong=song4
    }else if(currentSong==song4){
        currentSong=song5
    }else if(currentSong==song5){
        currentSong=song1
    }
    
    infoReset()
}
function back(){
    audio.pause()
    if (currentSong==song5){
        currentSong = song4
    }else if(currentSong==song4){
        currentSong=song3
    }else if(currentSong==song3){
        currentSong=song2
    }else if(currentSong==song2){
        currentSong=song1
    }else if(currentSong==song1){
        currentSong=song5
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
        audio.pause();
        playing=false
        
    }else{
        audio.play();
        playing=true
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



function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}