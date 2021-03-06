var sa = false;

function sa_Turn_On() {
        if(sa==true){
                console.log("이미 Security 알림이 켜져있습니다.");
        }
        else{
                sa = true;
                console.log('Security Alarm이 켜졌습니다!');
        }
        sa_Status();
}

function sa_Turn_Off() {
        if(sa==false){
                console.log("이미 Security 알람이 꺼져있습니다.");
        }
        else{
                sa = false;
                console.log('Security Alarm이 꺼졌습니다.!');
        }
        sa_Status();
}

function sa_Status() {
        var status = {
                info : "***** 보안알람 상태 정보 *****",
                "전원": sa
        };
        return status;
}

function Ringing_Alarm() {
        if(sa==true) {
                console.log('침입이 감지되었습니다!');
        }
        else {
                console.log('Security Alarm이 꺼져있습니다.');
        }
        sa_Status();
}

module.exports = {
        sa_on : sa_Turn_On,
        sa_off : sa_Turn_Off,
        sa_show : sa_Status,
        sa_ring : Ringing_Alarm
}
