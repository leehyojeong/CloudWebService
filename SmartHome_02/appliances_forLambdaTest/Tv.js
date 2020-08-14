exports.handler = (event, context, callback) => {
        var val_on = event.on;
        var val_off = event.off;
        var val_vup = event.v_up;
        var val_vdn = event.v_dn;
        
        if(val_on) on();
        if(val_off) off();
        if(val_vup) v_up();
        if(val_vdn) v_dn();
        
        var result = show_tv();
        
        callback(null,result);
}

var onoff = false;
var vol = 7;

function on(){
        if(onoff==false){
                console.log("TV를 켰습니다.");
                onoff=true;
        }
        else{
                console.log("TV가 이미 켜져있습니다.");
        }
        show_tv();
}

function off(){
        if(onoff==false){
                console.log("TV가 이미 꺼져있습니다.");
        }
        else{
                console.log("TV를 껐습니다.");
                onoff=false;
        }
        show_tv();
}

function v_up(){
        if(onoff==false){
                console.log("TV가 꺼져있습니다.");
        }
        else{
                console.log("볼륨을 올렸습니다.");
                vol++;
                show_tv();
        }
}

function v_dn(){
        if(onoff==false){
                console.log("TV가 꺼져있습니다.");
        }
        else{
                console.log("볼륨을 줄였습니다.");
                vol--;
                show_tv();
        }
}

function show_tv(){
        var status = {
                info : "***** 램프 상태 정보 *****",
                "전원": onoff,
                "볼륨": vol
        };
        return status;

}

