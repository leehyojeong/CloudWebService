exports.handler = (event, context, callback) => {
        if(event.on) ac_Turn_On();
        if(event.off) ac_Turn_Off();
        if(event.up) ac_Up_Temperature();
        if(event.dn) ac_Down_Temperature();
        
        var s = ac_Status();
        
        callback(null, s);
        
};

var ac = false;
var temp = 17;
var ws=0;

function ac_Turn_On() {
        if(ac==true){
                console.log("이미 에어컨이 켜져있습니다.");
        }
        else{
                ac = true;
                ws=1;
                console.log('에어컨이 켜졌습니다!');
        }
//        ac_Status();
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
//        ac_Status();
}

function ac_Status() {
        var status = {
                info : "***** 에어컨 상태 정보 *****",
                "전원": ac,
                "온도": temp,
                "바람 세기": ws
        };
        return status;        
}

function ac_Up_Temperature() {
        if(ac==true){
                temp = temp+1;
                console.log('온도를 높였습니다.\n 현재 온도: ',temp);
        }
        else{
                console.log("에어컨이 꺼져있습니다.");
        }
//        ac_Status();
}

function ac_Down_Temperature() {
        if(ac==true){
                temp = temp-1;
                console.log('온도를 낮췄습니다.\n 현재 온도: ', temp);
        }
        else{
                console.log("에어컨이 꺼져있습니다.");
        }
//        ac_Status();
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
//        ac_Status();
}