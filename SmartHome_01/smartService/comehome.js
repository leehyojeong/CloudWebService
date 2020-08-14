var lamp = require("./lamp.js");
var sa = require("./security.js");
var ac = require("./conditioner.js");
var tv = require("./Tv.js");
var audio = require("./Audio.js");
function Come_Home(callback){
        ac.ac_on();
        lamp.lamp_on();
        sa.sa_off();
        //callback("comehome");
        setTimeout(callback,1000,"comeHome");
}

function Come_Home2(){
        ac.ac_on();
        lamp.lamp_on();
        sa.sa_off();
}

module.exports = {
        comehome:Come_Home,
        comehome2:Come_Home2
}
