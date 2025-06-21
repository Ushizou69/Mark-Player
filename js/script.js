const botao = document.getElementById("botao1");
const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const navlink = document.getElementsByClassName("nav-link");
console.log(navlink[0]);
const Mark = document.getElementById("Mark");
const symbol = document.getElementById("symbol");
const section = document.querySelector(".fundo-recortado");
const tituloP = document.getElementById("titulo-personagem");
const Mark1 = document.getElementById("Mark-bio");


const ad = document.querySelector(".song");
const playing = document.querySelector(".fa-play");
const pauses = document.querySelector(".fa-pause");
const ttl = document.querySelector(".tittle");
const playSong = document.querySelector("#playsong");
const ctrl = document.querySelectorAll(".ctrl");

ad.volume = 0.2;

botao.addEventListener("click", function(){
    document.body.style.transition = 'background-color 0.3s, color 0.3s';
    
    botao.classList.toggle("modo-escuro");
    navbar.classList.toggle("modo-escuro");
    Mark.classList.toggle("modo-escuro");
    symbol.classList.toggle("modo-escuro");
    section.classList.toggle("modo-escuro");
    lines.classList.toggle("modo-escuro");
    ctrl.forEach(ctrl => {
    ctrl.classList.toggle("modo-escuro");
});

    if(Mark.classList.contains("modo-escuro")){
        Mark.src = "../img/MarkBlue.png";
    } else{
        Mark.src = "../img/Mark.png";
    }

    if(symbol.classList.contains("modo-escuro")){
        symbol.src = "../img/bluesymbol.png";
    } else{
        symbol.src = "../img/symbol.png";
    }

    if(botao.classList.contains("modo-escuro")){
        botao.textContent = "Alternar Modo Escuro ☾";
        body.style.backgroundImage = "url(../img/night.gif)";
    } else {
        botao.textContent = "Alternar Modo Claro ☀";
        body.style.backgroundImage = "url(../img/ceu.gif)";
    }

    if(lines.classList.contains("modo-escuro")){
        lines.style.backgroundColor = "#fbeb00";
    } else{
        lines.style.backgroundColor = "#009ffb";
    }

    ctrl.forEach(ctrl => {
    if(ctrl.classList.contains("modo-escuro")){
        ctrl.style.backgroundColor = "#009ffb";
    } else {
        ctrl.style.backgroundColor = "#fbeb00";
    }
});

    if(navbar.classList.contains("modo-escuro")){
        navbar.style.backgroundColor = "#5193c7";
        for(let i = 0; i < navlink.length; i++){
            navlink[i].style.color = "#000000";
        }
    } else {
        navbar.style.backgroundColor = "#129cf6";
        for(let i = 0; i < navlink.length; i++){
            navlink[i].style.color = "#fbeb00";
        }
    }

    if (section.classList.contains("modo-escuro")) {
        section.style.setProperty("background", "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 800 600\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><defs><linearGradient id=\"grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:%235193c7; stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:%2381c1e7; stop-opacity:1\" /></linearGradient></defs><path d=\"M0,50 Q30,80 60,50 Q90,20 120,50 Q150,80 180,50 Q210,20 240,50 Q270,80 300,50 Q330,20 360,50 Q390,80 420,50 Q450,20 480,50 Q510,80 540,50 Q570,20 600,50 Q630,80 660,50 Q690,20 720,50 Q750,80 780,50 L800,50 L800,550 Q770,520 740,550 Q710,580 680,550 Q650,520 620,550 Q590,580 560,550 Q530,520 500,550 Q470,580 440,550 Q410,520 380,550 Q350,580 320,550 Q290,520 260,550 Q230,580 200,550 Q170,520 140,550 Q110,580 80,550 Q50,520 0,550 Z\" fill=\"url(%23grad)\" /></svg>')");
        tituloP.style.webkitTextStrokeWidth = "0px";
        tituloP.style.color = "#000000";
        Mark1.src = "../img/Mark-GraysonBlue.png";
        Mark1.style.right = "55px";
    } else {
        section.style.setProperty("background", "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 800 600\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><defs><linearGradient id=\"gradYellow\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:%23fff9c4; stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:%23ffeb3b; stop-opacity:1\" /></linearGradient></defs><path d=\\'M0,50 Q30,80 60,50 Q90,20 120,50 Q150,80 180,50 Q210,20 240,50 Q270,80 300,50 Q330,20 360,50 Q390,80 420,50 Q450,20 480,50 Q510,80 540,50 Q570,20 600,50 Q630,80 660,50 Q690,20 720,50 Q750,80 780,50 L800,50 L800,550 Q770,520 740,550 Q710,580 680,550 Q650,520 620,550 Q590,580 560,550 Q530,520 500,550 Q470,580 440,550 Q410,520 380,550 Q350,580 320,550 Q290,520 260,550 Q230,580 200,550 Q170,520 140,550 Q110,580 80,550 Q50,520 0,550 Z\\' fill=\\'url(%23gradYellow)\\' /></svg>')");
        tituloP.style.webkitTextStrokeWidth = "5px";
        tituloP.style.webkitTextStrokeColor = "black";
        tituloP.style.color = "#fbeb00";
        Mark1.src = "../img/Mark-Grayson.png";
        Mark1.style.right = "0px";
    }

})

playSong.addEventListener("click", effect)

function effect(){

    if(ad.duration == ad.currentTime){
        x += 1;
        console.log(x);
    }

    if((!playing.classList.contains("none"))){
        ad.play();
        setInterval(prog,1000);
        setInterval(line,1000);
        progress.addEventListener("click",(e)=>{
            let widthbar2 = (e.offsetX / e.target.clientWidth) * ad.duration;
            ad.currentTime = widthbar2;
        })
    }
    else{
        ad.pause();
    }

    ttl.classList.toggle("run");
    playing.classList.toggle("none");
    pauses.classList.toggle("none");
    dur();
}

function removeEffect(){
    ad.pause();
    ad.currentTime = 0.01;
    ttl.classList.remove("run");
    playing.classList.remove("none");
    pauses.classList.add("none");
}

let x = 0;

const lines = document.querySelector(".LineChild");
const progress = document.querySelector(".line");
const strt = document.querySelector("#start");
const end = document.querySelector("#end");

function dur(){
    let dura = ad.duration;
    let secdu = Math.floor(dura % 60);
    let mindu = Math.floor(dura / 60);
    if(secdu < 10){
        secdu = `0${secdu}`;
    }
    end.innerHTML = `${mindu}:${secdu}`;
    
}

function prog(){
    let curtime = ad.currentTime;
    let mincur = Math.floor(curtime / 60);
    let seccur = Math.floor(curtime % 60);

    if(seccur < 10){
        seccur = `0${seccur}`;
    }

    strt.innerHTML = `${mincur}:${seccur}`;
}

function line(){
    let widthbar = (ad.currentTime / ad.duration) * 100;
    lines.style.width = `${widthbar}%`;
}

const EE = document.getElementById("EE");
const audios = ["../audio/EE/CECIL.mp3"];

Mark.addEventListener("click", function(){
    EE.src = audios[0];
    EE.play();
})