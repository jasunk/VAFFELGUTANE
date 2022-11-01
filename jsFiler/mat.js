var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".blob").style.width = "43vw";
        document.querySelector(".blob").style.height = "43vw";
        document.querySelector(".blob").style.top = "-15vw";
        document.querySelector(".blob").style.left = "-15vw";
        document.querySelector("#blob2").style.width = "43vw";
        document.querySelector("#blob2").style.height = "43vw";
        document.querySelector("#blob2").style.top = "-15vw";
        document.querySelector("#blob2").style.left = "-15vw";
        document.querySelector("#dining-icon").style.top="2.66vw";
        document.querySelector("#dining-icon").style.left="2.66vw";
        document.querySelector("#dining-icon").style.fontSize="150px";
        document.querySelector(".top-bar").style.height="7vw";
    } 
    else {
        document.querySelector(".blob").style.height = "29vw";
        document.querySelector(".blob").style.height = "29vw";
        document.querySelector(".blob").style.top = "-7vw";
        document.querySelector("#blob2").style.height = "31vw";
        document.querySelector("#blob2").style.width = "31vw";
        document.querySelector("#blob2").style.top = "-7vw";
        document.querySelector("#blob2").style.left = "-7vw";
        document.querySelector("#dining-icon").style.top="3vw"
        document.querySelector("#dining-icon").style.left="3vw";
        document.querySelector("#dining-icon").style.fontSize="7vw";
        document.querySelector(".top-bar").style.height="4vw";
    }
  prevScrollpos = currentScrollPos;
}