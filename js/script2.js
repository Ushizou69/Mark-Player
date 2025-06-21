const ad = document.querySelector(".song");
const playing = document.querySelector(".fa-play");
const pauses = document.querySelector(".fa-pause");
const forw = document.querySelector(".fa-forward-step");
const ttl = document.querySelector(".tittle");
const art_name = document.querySelector("#name");
const playSong = document.querySelector("#playsong");

const artist_name = ["Tom Tom", "Snail's House"];
const artist_tittle = ["Holy F_ck", "Hot Milk"];
const audioFiles = ["../audio/audio_pag2/HOLY_F_CK.mp3","../audio/audio_pag2/Snail_House.mp3"];

ad.volume = 0.2;

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

function backward(){
    dur();
    x -= 1;
    removeEffect();
    songs(x);
    if(x <= 0){
        x = artist_name.length;
    }
}

function forward(){
    dur();
    x += 1;
    removeEffect();
    songs(x);
    if(x >= artist_name.length-1){
        x =- 1;
    }
}

function songs(x){

    art_name.innerHTML = artist_name[x];
    ttl.innerHTML = artist_tittle[x];
    ad.src = audioFiles[x];

}

songs(0);

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
const Nolan = document.getElementById("Nolan");
const Nolan2 = document.getElementById("Nolan-bio");
const audios = ["../audio/EE/AYS.mp3", "../audio/EE/WIOM.mp3"];

Nolan.addEventListener("click", function(){
    EE.src = audios[0];
    EE.play();
})

Nolan2.addEventListener("click", function(){
    EE.src = audios[1];
    EE.play();
})