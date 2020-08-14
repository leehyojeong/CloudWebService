var lamp = require("./lamp.js");
var sa = require("./security.js");
var ac = require("./conditioner.js");
var tv = require("./Tv.js");
var audio = require("./Audio.js");
function Go_Sleep(callback) {
        lamp.lamp_off();
        sa.sa_on();
        tv.tv_off();
        audio.audio_off();
        //callback("gosleep");
        setTimeout(callback,1000,"gosleep");
}
function Go_Sleep2() {
                lamp.lamp_off();
                sa.sa_on();
                tv.tv_off();
                audio.audio_off();
}

module.exports={
        gosleep :Go_Sleep,
        gosleep2 : Go_Sleep2
}
