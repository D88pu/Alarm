let [seconds, minutes,hours] = [0,0,0]
let displayTime = document.getElementById("displayTime")
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes =0;
          hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
     if(timer !==null){
        clearInterval(timer)
     }
    timer = setInterval(stopwatch,1000);
}

/*function  watchStart(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause")
        ctrlicon.classList.add("fa-play")
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause")
        ctrlicon.classList.remove("fa-play")
    }
}*/


function watchStop(){
    clearInterval(timer);

}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes,hours] = [0,0,0]
    displayTime.innerHTML = "00:00:00";
}