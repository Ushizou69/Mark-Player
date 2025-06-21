const ad = document.querySelector(".song");
const playing = document.querySelector(".fa-play");
const pauses = document.querySelector(".fa-pause");
const ttl = document.querySelector(".tittle");
const playSong = document.querySelector("#playsong");

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