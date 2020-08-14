var lamp = require("./lamp.js");
var sa = require("./security.js");
var ac = require("./conditioner.js");
var tv = require("./Tv.js");
var audio = require("./Audio.js");
function show(callback) {
                ac.ac_show();
                tv.tv_show();
                audio.audio_show();
                lamp.lamp_show();
                sa.sa_show();

                //callback("showAll");
                setTimeout(callback, 1000,"showAll");
}
function show2() {
                        ac.ac_show();
                        tv.tv_show();
                        audio.audio_show();
                        lamp.lamp_show();
                        sa.sa_show();
}

module.exports={
        show:show,
        show2:show2
}
