var lamp = require("./lamp.js");
var sa = require("./security.js");
var tv = require("./Tv.js");
function wake_Up(callback) {
        tv.tv_on();
        lamp.lamp_on();
        sa.sa_off();
        //callback("wakeup");
        setTimeout(callback, 1000,"wakeUp");
}

function wake_Up2() {
                tv.tv_on();
                lamp.lamp_on();
                sa.sa_off();
}
module.exports={
        wakeUp:wake_Up,
        wakeup2:wake_Up2
}
