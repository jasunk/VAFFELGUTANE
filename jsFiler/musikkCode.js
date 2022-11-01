
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