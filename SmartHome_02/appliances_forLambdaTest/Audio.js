exports.handler = (event, context, callback) => {
        var val_on = event.on;
        var val_off = event.off;
        var val_vup = event.v_up;
        var val_vdn = event.v_dn;
        
        if(val_on) on();
        if(val_off) off();
        if(val_vup) v_up();
        if(val_vdn) v_dn();
        
        var result = show_audio();
        
        callback(null,result);
}

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
        //show_audio();
}

function off(){
        if(onoff==false){
                console.log("Audio가 이미 꺼져있습니다.");
        }
        else{
                console.log("Audio를 껐습니다.");
                onoff=false;
        }
        //show_audio();
}

function v_up(){
        if(onoff==false){
                console.log("Audio가 꺼져있습니다.");
        }
        else{
                console.log("볼륨을 키웠습니다.");
                vol++;
                //show_audio();
        }
}

function v_dn(){
        if(onoff==false){
                console.log("Audio가 꺼져있습니다.");
        }
        else{
                console.log("볼륨을 줄였습니다.");
                vol--;
                //show_audio();
        }
}

function show_audio(){
        var status = {
                info : "***** 오디오 상태 정보 *****",
                "전원": onoff,
                "볼륨": vol
        };
        return status;
}
