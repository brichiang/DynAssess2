document.getElementById("color").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = document.getElementById("color").value;
})

document.getElementById("NumB").addEventListener("click", function(){
    changeType("number");
})
document.getElementById("rangeB").addEventListener("click", function(){
    changeType("range");
})

document.getElementById("slider1").addEventListener("change", function(){
    document.getElementById("hair").style.width = document.getElementById("slider1").value + "%";
})
document.getElementById("slider2").addEventListener("change", function(){
    document.getElementById("eyes").style.width = document.getElementById("slider2").value + "%";
})
document.getElementById("slider3").addEventListener("change", function(){
    document.getElementById("nose").style.width = document.getElementById("slider3").value + "%";
})
document.getElementById("slider4").addEventListener("change", function(){
    document.getElementById("mouth").style.width = document.getElementById("slider4").value + "%";
})

var dispDiv = document.getElementById("display");
document.getElementById("AddB").addEventListener("click", function(){
    createFace();
})

document.getElementById("RanB").addEventListener("click", function(){
    randomFace();
})

var numname = 0;
function createFace() {
    var newDiv = document.createElement("div");
    var hairImg = document.createElement("img");
    var eyesImg = document.createElement("img");
    var noseImg = document.createElement("img");
    var mouthImg = document.createElement("img");
    dispDiv.appendChild(newDiv);
    numname++;
    newDiv.id = "newface" + numname;
    newDiv.appendChild(hairImg);
    newDiv.appendChild(eyesImg);
    newDiv.appendChild(noseImg);
    newDiv.appendChild(mouthImg);
    
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.display = "inline-block";
    newDiv.style.position = "relative";
    newDiv.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    
    hairImg.src = document.getElementById("hair").src;
    hairImg.style.width = document.getElementById("slider1").value + "%";
    hairImg.style.top = "0%";
    hairImg.style.left = "0";
    hairImg.style.right = "0";
    hairImg.style.margin = "auto";
    hairImg.style.position = "absolute";
    
    eyesImg.src = document.getElementById("eyes").src;
    eyesImg.style.width = document.getElementById("slider2").value + "%";
    eyesImg.style.top = "40%";
    eyesImg.style.left = "0";
    eyesImg.style.right = "0";
    eyesImg.style.margin = "auto";
    eyesImg.style.position = "absolute";
    
    noseImg.src = document.getElementById("nose").src;
    noseImg.style.width = document.getElementById("slider3").value + "%";
    noseImg.style.top = "55%";
    noseImg.style.left = "0";
    noseImg.style.right = "0";
    noseImg.style.margin = "auto";
    noseImg.style.position = "absolute";
    
    mouthImg.src = document.getElementById("mouth").src;
    mouthImg.style.width = document.getElementById("slider4").value + "%";
    mouthImg.style.top = "75%";
    mouthImg.style.left = "0";
    mouthImg.style.right = "0";
    mouthImg.style.margin = "auto";
    mouthImg.style.position = "absolute";
    
    newDiv.addEventListener("click", function(){
    removeDiv(newDiv.id);
})
}

var avaH = 3;
var avaE = 3;
var avaN = 3;
var avaM = 3;
var r = 255;
var g = 255;
var b = 255;
var SH = 70;
var SE = 40;
var SN = 30;
var SM = 35;
function randomFace() {
    document.getElementById("hair").src = "img/hair" + avaH + ".png";
    document.getElementById("eyes").src = "img/eyes" + avaE + ".png";
    document.getElementById("nose").src = "img/nose" + avaN + ".png";
    document.getElementById("mouth").src = "img/mouth" + avaM + ".png";
    document.getElementById("preview").style.backgroundColor = "rgb("+ r +","+ g + ","+ b +")";
    document.getElementById("hair").style.width = SH + "%";
    document.getElementById("eyes").style.width = SE + "%";
    document.getElementById("nose").style.width = SN + "%";
    document.getElementById("mouth").style.width = SM + "%";
    avaH = Math.round (Math.random()*2)+1;
    avaE = Math.round (Math.random()*2)+1;
    avaN = Math.round (Math.random()*2)+1;
    avaM = Math.round (Math.random()*2)+1;
    r = Math.round (Math.random()*255);
    g = Math.round (Math.random()*255);
    b = Math.round (Math.random()*255);
    SH = Math.round (Math.random()*70);
    SE = Math.round (Math.random()*40);
    SN = Math.round (Math.random()*30);
    SM = Math.round (Math.random()*35);
    document.getElementById("slider1").value = SH;
    document.getElementById("slider2").value = SE;
    document.getElementById("slider3").value = SN;
    document.getElementById("slider4").value = SM;
}
// var x = ""
function changeType(x) {
    document.getElementById("slider1").type = x;
    document.getElementById("slider2").type = x;
    document.getElementById("slider3").type = x;
    document.getElementById("slider4").type = x;
}

var timer = null;
var timer2 = null;
document.getElementById("AutoRC").addEventListener("click", function(){
    timer = setInterval(randomFace, 500);
    timer2 = setInterval(createFace, 500);
})
document.getElementById("StopRC").addEventListener("click",function(){
    clearInterval(timer);
    clearInterval(timer2);
})

function removeDiv(id){
    document.getElementById(id).remove();
}
