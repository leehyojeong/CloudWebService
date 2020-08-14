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
        console.log("***** Tv 상태 정보 *****");
        console.log("전원:",onoff);
        console.log("볼륨:",vol);
        console.log();
}

module.exports = {
        tv_on : on,
        tv_off : off,
        tv_volup : v_up,
        tv_voldn : v_dn,
        tv_show : show_tv
}

