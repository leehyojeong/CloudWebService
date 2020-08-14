var onoff = false;
var vol = 7;

function on(){
        if(onoff==false){
                console.log("Audio를 켰습니다.");
                onoff=true;
        }
        else{
                console.log("Audio가 이미 켜져있습니다.");
        }
        show_audio();
}

function off(){
        if(onoff==false){
                console.log("Audio가 이미 꺼져있습니다.");
        }
        else{
                console.log("Audio를 껐습니다.");
                onoff=false;
        }
        show_audio();
}

function v_up(){
        if(onoff==false){
                console.log("Audio가 꺼져있습니다.");
        }
        else{
                console.log("볼륨을 키웠습니다.");
                vol++;
                show_audio();
        }
}

function v_dn(){
        if(onoff==false){
                console.log("Audio가 꺼져있습니다.");
        }
        else{
                console.log("볼륨을 줄였습니다.");
                vol--;
                show_audio();
        }
}

function show_audio(){
        console.log("***** Audio 상태 정보*****");
        console.log("전원:",onoff);
        console.log("볼륨:",vol);
        console.log();
}

module.exports = {
        audio_on : on,
        audio_off : off,
        audio_volup : v_up,
        audio_voldn : v_dn,
        audio_show : show_audio
}

