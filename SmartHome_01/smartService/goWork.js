var lamp = require("./lamp.js");
var sa = require("./security.js");
var ac = require("./conditioner.js");
var tv = require("./Tv.js");
var audio = require("./Audio.js");

function Go_work(callback){
        ac.ac_off();
        tv.tv_off();
        audio.audio_off();
        lamp.lamp_off();
        sa.sa_on();

        //callback("gowork");
        setTimeout(callback,1000,"goWork");
}

function Go_work2(){
                ac.ac_off();
                tv.tv_off();
                audio.audio_off();
                lamp.lamp_off();
                sa.sa_on();
}

module.exports = {
        go_work : Go_work,
        gowork2 : Go_work2
}
