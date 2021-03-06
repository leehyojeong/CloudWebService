exports.handler = (event, context, callback) => {
        var val_on = event.on;
        var val_off = event.off;
        
        if(val_on) Turn_On();
        if(val_off) Turn_Off();
        
        var result = Lamp_Status();
        
        callback(null,result);
}

var lamp = false;

function Turn_On() {
        if(lamp==true){
                console.log("이미 램프가 켜져있습니다.");
        }
        else{
                lamp = true;
                console.log('램프가 켜졌습니다!');
        }
        Lamp_Status();
}

function Turn_Off() {
        if(lamp==false){
                console.log("이미 램프가 꺼져있습니다.");
        }
        else{
                lamp = false;
                console.log('램프가 꺼졌습니다!');
        }
        Lamp_Status();
}

function Lamp_Status() {
        var status = {
                info : "***** 램프 상태 정보 *****",
                "전원": lamp
        };
        return status;
}
