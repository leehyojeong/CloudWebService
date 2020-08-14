ac = false;
temp = 17;
ws=0;

function ac_Turn_On() {
        if(ac==true){
                console.log("이미 에어컨이 켜져있습니다.");
        }
        else{
                ac = true;
                ws=1;
                console.log('에어컨이 켜졌습니다!');
        }
        ac_Status();
}

function ac_Turn_Off() {
        if(ac==false){
                console.log("이미 에어컨이 꺼져있습니다.");
        }
        else{
                ac = false;
                ws=0;
                console.log('에어컨이 꺼졌습니다!');
        }
        ac_Status();
}

function ac_Status() {
        console.log("***** 에어컨 상태 정보 *****");
        console.log('전원:',ac,'\n온도: ', temp,'\n바람 세기:',ws);
        console.log('에어컨이 꺼져있습니다.');
        console.log();
}

function ac_Up_Temperature() {
        if(ac==true){
                temp = temp+1;
                console.log('온도를 높였습니다.\n 현재 온도: ',temp);
        }
        else{
                console.log("에어컨이 꺼져있습니다.");
        }
        ac_Status();
}

function ac_Down_Temperature() {
        if(ac==true){
                temp = temp-1;
                console.log('온도를 낮췄습니다.\n 현재 온도: ', temp);
        }
        else{
                console.log("에어컨이 꺼져있습니다.");
        }
        ac_Status();
}

function ac_Wind_Strength() {
        if(ac==true) {
                if(ws==3) {
                        ws=1;
                }
                else {
                        ws = ws+1;
                }
                console.log('바람 세기를 변경했습니다.\n 바람 세기: ', ws);
        }
        else {
                console.log('에어컨이 꺼져있습니다.');
        }
        ac_Status();
}

module.exports = {
        ac_on : ac_Turn_On,
        ac_off : ac_Turn_Off,
        ac_show : ac_Status,
        ac_temup : ac_Up_Temperature,
        ac_temdn : ac_Down_Temperature,
        ac_wind : ac_Wind_Strength
}

