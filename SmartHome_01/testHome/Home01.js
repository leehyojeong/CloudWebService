var lamp = require("./lamp.js");
var audio = require("./Audio.js");
var tv = require("./Tv.js");
var ac = require("./conditioner.js");
var sa = require("./security.js");

var gosleep = require("./gosleep.js");
var gowork = require("./goWork.js");
var wakeup = require("./wakeup.js");
var showall = require("./showall.js");
var comehome = require("./comehome.js");

lamp.lamp_on();
lamp.lamp_off();

audio.audio_on();
audio.audio_off();
audio.audio_volup();
audio.audio_on();
audio.audio_voldn();

tv.tv_on();
tv.tv_voldn();
tv.tv_off();

ac.ac_off();
ac.ac_on();
ac.ac_wind();
ac.ac_temdn();

sa.sa_on();
sa.sa_ring();
sa.sa_off();

//스마트 서비스 확인
gosleep.gosleep2();
gowork.gowork2();
comehome.comehome2();
wakeup.wakeup2();
showall.show2();
