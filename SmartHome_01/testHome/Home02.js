var lamp = require("./lamp.js");
var audio = require("./Audio.js");
var tv = require("./Tv.js");
var ac = require("./conditioner.js");
var sa = require("./security.js");

//smart serice
var goWork = require("./goWork.js");
var comeHome = require("./comehome.js");
var goSleep = require("./gosleep.js");
var showAll = require("./showall.js");
var wakeUp = require("./wakeup.js");

function callback(str) {
        console.log(str,"의 스마트 서비스 수행이 완료되었습니다.");
}

function goWork_test(){
        console.log("사용자가 부재중입니다. 스마트 서비스를 시작합니다.");
        goWork.go_work(callback);
        console.log("스마트 서비스 사용중입니다.");
}

function comeHome_test(){
        console.log("사용자가 귀가하였습니다. 스마트 서비스를 시작합니다.");
        comeHome.comehome(callback);
        console.log("스마트 서비스 사용중입니다.");
}

function goSleep_test(){
                console.log("사용자가 취침합니다. 스마트 서비스를 시작합니다.");
                goSleep.gosleep(callback);
                console.log("스마트 서비스 사용중입니다.");
}

function showAll_test(){
                console.log("사용중인 가구를 보여주는 스마트 서비스입니다.");
                showAll.show(callback);
                console.log("스마트 서비스 사용중입니다.");
}

function wakeUp_test(){
                console.log("사용자가 기상하였습니다. 스마트 서비스를 시작합니다.");
                wakeUp.wakeUp(callback);
                console.log("스마트 서비스 사용중입니다.");
}

goWork_test();
comeHome_test();
goSleep_test();
showAll_test();
wakeUp_test();
