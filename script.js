
var a = document.getElementById("input")
var all = document.querySelectorAll(".item")
var allama = document.querySelectorAll(".allama")
var george = document.querySelectorAll(".george")
var james = document.querySelectorAll(".james")
var robert = document.querySelectorAll(".robert")
var skotts = document.querySelectorAll(".skotts")
var chaudhary = document.querySelectorAll(".chaudhary")
function c() {
    if (a.value.toUpperCase() == "ATOMIC HABITS") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("atomicHabits").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "RICH DAD POOR DAD") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("RichDadPoorDad").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "THE GREAT GATSBY") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("TheGreatGastby").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "BAGH O BAHAR") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("BaghOBahar").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "1984" || a.value.toUpperCase() == "NINETEEN EIGHTY FOUR") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("nineteen84").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "ALLAMA IQBAL") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("AllamaIqbal").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "KULYAT E IQBAL") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("kulyatEIqbal").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "TRANSFORM YOUR HABITS") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("transformYourHabits").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "TENDER IS THE NIGHT") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("tenderIsNight").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "VISIONS OF DYSTOPIA") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("visionOfDystopia").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else if (a.value.toUpperCase() == "NOW OR NEVER") {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("NowOrNever").style.display = "flex";
        document.getElementById("nonMsg").style.display = "none"
    }
    else {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("nonMsg").style.display = "block"
    }
}
function r(){
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'flex';
    }
}
function writer(){
    var writer = prompt("Search By Writer Name").toUpperCase()
    if(writer == "ALLAMA IQBAL"){
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        for (var i = 0; i < allama.length; i++) {
            allama[i].style.display = 'flex';
        }
    }
    else if(writer == "GEORGE ORWELL"){
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        for (var i = 0; i < george.length; i++) {
            george[i].style.display = 'flex';
        }
    }
    else if(writer == "JAMES CLEAR"){
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        for (var i = 0; i < james.length; i++) {
            james[i].style.display = 'flex';
        }
    }
    else if(writer == "CHAUDHARY REHMAT ALI"){
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        for (var i = 0; i < chaudhary.length; i++) {
            chaudhary[i].style.display = 'flex';
        }
    }
    else if(writer == "ROBERT T KIOSAKI"){
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        for (var i = 0; i < robert.length; i++) {
            robert[i].style.display = 'flex';
        }
    }
    else if(writer == "T SKOTTS FITSGAZER"){
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        for (var i = 0; i < skotts.length; i++) {
            skotts[i].style.display = 'flex';
        }
    }
    else {
        for (var i = 0; i < all.length; i++) {
            all[i].style.display = 'none';
        }
        document.getElementById("nonMsg").style.display = "block"
    }
}
