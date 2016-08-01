/**
 * Created by USER on 23.07.2016.
 */

var Tamagotchi = {
//todo:5 методов установки времени достижения нового уровня и4 метода установки скорости уменьшения игровых характеристик
//todo:увеличение характеристик
    createTamagotchi: function (name, gender) {
        this.lvl = 0;
        this.name = name || "myTamagotchi";
        this.gender = gender || "Femail";
        /*this.image = image;*/
        this.birthdate = new Date;
        this.isSleeping = false;
        this.food = 50;
        this.happiness = 50;
        this.rest = 50;
        this.health = 50;
        this.happinessWarning = false;
        this.foodWarning = false;
        this.healthWarning = false;
        this.restWarning = false;
        this.counterWarnings = 0;
        this.timeToReachLvl1 = 5;//hour
        this.timeToReachLvl2 = 5;//hour
        this.timeToReachLvl3 = 5;//hour
        this.timeToReachLvl4 = 5;//hour
        this.timeToReachLvl5 = 5;//hour
        this.timeToReduceFood = 0.05;//hour
        this.timeToReduceHappiness = 0.04;//hour
        this.timeToReduceRest = 0.03;//hour
        this.timeToReduceHealth = 0.06;//hour
        this.countTimetoFood = this.birthdate;
        this.countTimetoRest = this.birthdate;
        this.countTimetoHealth = this.birthdate;
        this.countTimetoHappiness = this.birthdate;

    },
    feed: function () {
        if (this.food < 100) {
            this.food += 10;
        } else if (this.food >= 100) {
            console.log('im not hungry');
        }
    },
    play: function () {
        if (this.happiness < 100) {
            this.happiness += 10;
        } else if (this.food >= 100) {
            console.log('im happy!');
        }
    },
    sleep: function () {
        if (this.rest < 100) {
            this.rest += 10;
        } else if (this.rest >= 100) {
            console.log('idont want sleep!');
        }
    },
    nurse: function () {
        if (this.health < 100) {
            this.health += 10;
        } else if (this.food >= 100) {
            console.log('im not ill');
        }
    },
    /*
     putToBed: function () {
     if (!this.isSleeping) {
     this.isSleeping = true;
     }
     },
     setLvl: function () {
     if (this.lvl < 4) {
     this.lvl += 1;
     }
     },
     */
//todo:живой ли тамагочи
    isAlive: function () {
        return this.health !== 0
    },
//todo:предупреждение
    restWarnings: function () {
        if (this.rest < 40) {
            this.restWarning = true;
        } else {
            return this.restWarning = false;
        }
    },
    foodWarnings: function () {
        if (this.food < 40) {
            this.foodWarning = true;
        } else {
            return this.foodWarning = false;
        }
    },
    happinessWarnings: function () {
        if (this.happiness < 40) {
            this.happinessWarning = true;
        } else {
            return this.happinessWarning = false;
        }
    },
    healthWarnings: function () {
        if (this.health < 40) {
            this.healthWarning = true;
        } else {
            return this.healthWarning = false;
        }
    }
};
//functions
/*function howOldMyTamagotchi() {
 var years = new Date;
 return (years - Tamagotchi.birthdate) / (1000 * 60 * 60)
 }
 //todo;загнать візові возвраста в переменную
 function whichLvl() {
 var now = new Date();
 var episode = now - Tamagotchi.birthdate;
 var timeToReachLvl1=Tamagotchi.timeToReachLvl1;
 var timeToReachLvl2=Tamagotchi.timeToReachLvl2+timeToReachLvl1;
 var timeToReachLvl3=Tamagotchi.timeToReachLvl3+timeToReachLvl2;
 var timeToReachLvl4=Tamagotchi.timeToReachLvl4+timeToReachLvl3;

 if (episode < timeToReachLvl1 ) {
 return 0;
 }else if (episode >= timeToReachLvl1 && episode < timeToReachLvl2){
 return 1;
 }else if (episode >= timeToReachLvl2 && episode < timeToReachLvl3) {
 return 2;
 }else if (episode >= timeToReachLvl3 && episode < timeToReachLvl4){
 return 3;
 }else if (episode >= timeToReachLvl4)
 return 4;
 }
 function isLvlUp() {
 var lvlUp=whichLvl();
 if (Tamagotchi.lvl<lvlUp){
 Tamagotchi.lvl=lvlUp;
 //todo:animation with new growth persona
 growthTamagotchi( );
 }
 }
 function growthTamagotchi() {

 }

 function isMyTamagotchiFemale() {
 return (Tamagotchi.gender == "Femail") ? "true" : "false"
 }
 //todo:повесить обработчик собітий на кнопку создания тамагочи для создания обьекта тамагочи
 */
function getWarning() {
    var warningHealth = document.getElementById("warningHealth");
    var warningRest = document.getElementById("warningRest");
    var warningHappiness = document.getElementById("warningHappiness");
    var warningFood = document.getElementById("warningFood");

    if (Tamagotchi.foodWarning === true && warningFood.style.display === "") {
        console.log("attention Im hungry");//todo:доработать ворнинг анимацию
        warningFood.style.display = "block";
        Tamagotchi.counterWarnings++;
    } else if (Tamagotchi.foodWarning == false && warningFood.style.display == "block") {
        warningFood.style.display = "";
    }
    console.log(Tamagotchi.counterWarnings)

    if (Tamagotchi.healthWarning === true && warningHealth.style.display === "") {
        console.log("attention Im ill");//todo:доработать ворнинг анимацию
        warningHealth.style.display = "block";
        Tamagotchi.counterWarnings++;
    } else if (Tamagotchi.healthWarning == false && warningHealth.style.display == "block") {
        warningHealth.style.display = "";
    }
    console.log(Tamagotchi.counterWarnings)

    if (Tamagotchi.happinessWarning === true && warningHappiness.style.display === "") {
        console.log("attention Im ugly");//todo:доработать ворнинг анимацию
        warningHappiness.style.display = "block";
        Tamagotchi.counterWarnings++;
    } else if (Tamagotchi.happinessWarning == false && warningHappiness.style.display == "block") {
        warningHappiness.style.display = "";
    }
    console.log(Tamagotchi.counterWarnings)

    if (Tamagotchi.restWarning === true && warningRest.style.display === "") {
        console.log("attention Im tierd");//todo:доработать ворнинг анимацию
        warningRest.style.display = "block";
        Tamagotchi.counterWarnings++;
    } else if (Tamagotchi.restWarning == false && warningRest.style.display == "block") {
        warningRest.style.display = "";
    }
    console.log(Tamagotchi.counterWarnings)

}
/*
 function WhatIsTheAgeMyTamagotchi(){
 var time=new Date;
 var whatTimeIsFromBirthday=time-Tamagotchi.birthdate;
 if(Tamagotchi.lvl==0){
 if(whatTimeIsFromBirthday>Tamagotchi.timeToReachLvl1){

 }
 }
 }*/

/*
 function reduceFood() {
 var newTime = new Date;
 var whatTimeIsFromBirthday = newTime - Tamagotchi.countTimetoFood;
 if (whatTimeIsFromBirthday >= Tamagotchi.timeToReduceFood && Tamagotchi.food > 0) {
 Tamagotchi.food -= 1;
 Tamagotchi.countTimetoFood += whatTimeIsFromBirthday;
 }
 }
 function reduceHealth() {
 var newTime = new Date;
 var whatTimeIsFromBirthday = newTime - Tamagotchi.countTimetoHealth;
 if (whatTimeIsFromBirthday >= Tamagotchi.timeToReduceHealth && Tamagotchi.health > 0) {
 Tamagotchi.health -= 1;
 Tamagotchi.countTimetoHealth += whatTimeIsFromBirthday;
 }
 }
 function reduceHappiness() {
 var newTime = new Date;
 var whatTimeIsFromBirthday = newTime - Tamagotchi.countTimetoHappiness;
 if (whatTimeIsFromBirthday >= Tamagotchi.timeToReduceHappiness && Tamagotchi.happiness > 0) {
 Tamagotchi.happiness -= 1;
 Tamagotchi.countTimetoHappiness += whatTimeIsFromBirthday;
 }
 }
 function reduceRest() {
 var newTime = new Date;
 var whatTimeIsFromBirthday = newTime - Tamagotchi.countTimetoRest;
 if (whatTimeIsFromBirthday >= Tamagotchi.timeToReduceRest && Tamagotchi.rest > 0) {
 Tamagotchi.rest -= 1;
 Tamagotchi.countTimetoRest += whatTimeIsFromBirthday;
 }
 }
 function reduceCharacters() {
 reduceFood();
 reduceHappiness();
 reduceHealth();
 reduceRest();
 }
 */

/*
 function game() {
 while (1) {
 if (Tamagotchi.isAlive()) {
 if (isLvlUp()) {

 //todo:повышение уровня тамагочи:анимация изменение картинки персонажа изменение уровня в обьекте тамагочи проверка               каким следующий будет тамагочи взависимости от ворнингов
 } else {
 getWarning();
 //todo:кинуть ли ворнинг какой из и записать во включенные ворнинги
 //todo:функция проверки времени
 }

 } else {
 alert("GAME OVER");
 return true;//todo:расширить возможности завершения игрі віодом статистики игрока
 }
 }
 }*/
//----------------------------------------------------------------------//START THE GAME//--------------------------------------//
var createMyT = document.getElementById("createMyT");

createMyT.addEventListener("click", function () {
    var Name = document.getElementById("name").value;
    Tamagotchi.createTamagotchi(Name);
    console.log(Tamagotchi);
    createMyT.style.display = "none";
    potrebnosti();
});
var nurse = document.getElementById("nurse");
nurse.addEventListener("click", function () {
    Tamagotchi.nurse();
    console.log(Tamagotchi.health);
    var n = document.getElementById("n");
    n.innerHTML = "" + Tamagotchi.health;
});
var feed = document.getElementById("feed");
feed.addEventListener("click", function () {
    Tamagotchi.feed();
    console.log(Tamagotchi.food);
    var f = document.getElementById("f");
    f.innerHTML = "" + Tamagotchi.food;
});
var play = document.getElementById("play");
play.addEventListener("click", function () {
    Tamagotchi.play();
    console.log(Tamagotchi.happiness);
    var p = document.getElementById("p");
    p.innerHTML = "" + Tamagotchi.happiness;
});
var sleep = document.getElementById("sleep");
sleep.addEventListener("click", function () {
    Tamagotchi.sleep();
    console.log(Tamagotchi.rest);
    var s = document.getElementById("s");
    s.innerHTML = "" + Tamagotchi.rest;
});


function potrebnosti() {
    setInterval(function () {
        if (Tamagotchi.food > 0) {
            Tamagotchi.food -= 1;
            f.innerHTML = Tamagotchi.food;
        }
        Tamagotchi.foodWarnings();
        console.log(Tamagotchi.foodWarning);
        getWarning();
        Tamagotchi.foodWarnings();
        console.log(document.getElementById("warningFood").style.display);
    }, 2000);
    setInterval(function () {
        if (Tamagotchi.health > 0) {
            Tamagotchi.health -= 1;
            n.innerHTML = Tamagotchi.health;
        }
        Tamagotchi.healthWarnings();
        console.log(Tamagotchi.healthWarning);
        getWarning();
        Tamagotchi.healthWarnings();
        console.log(document.getElementById("warningHealth").style.display);
    }, 2000);

    setInterval(function () {
        if (Tamagotchi.rest > 0) {
            Tamagotchi.rest -= 1;
            s.innerHTML = Tamagotchi.rest;
        }
        Tamagotchi.restWarnings();
        console.log(Tamagotchi.restWarning);
        getWarning();
        Tamagotchi.restWarnings();
        console.log(document.getElementById("warningRest").style.display);
    }, 2000);

    setInterval(function () {
        if (Tamagotchi.happiness > 0) {
            Tamagotchi.happiness -= 1;
            p.innerHTML = Tamagotchi.happiness;
        }
        Tamagotchi.happinessWarnings();
        console.log(Tamagotchi.happinessWarning);
        getWarning();
        Tamagotchi.happinessWarnings();
        console.log(document.getElementById("warningHappiness").style.display);
    }, 2000);
}

function randomArrElem(array) {
    var max = array.length - 1;
    var rand = Math.random() * (max);
    rand = Math.round(rand);
    return rand;
}

///////////Tamagotchis object

var Yurapatchi={
    name:"Yurapatchi",
    src:"",
    lvl:0,
    gender:"mail"
};
var Nittobotchi={
    name:"Nittobotchi",
    src:"",
    lvl:0,
    gender:"mail"
};
var Nannokitchi={
    name:"Nannokitchi",
    src:"",
    lvl:1,
    gender:"mail"
};
var Kaubotchi={
    name:"Kaubotchi",
    src:"",
    lvl:1,
    gender:"mail"
};
var Furutsupantchi={
    name:"Furutsupantchi",
    src:"",
    lvl:1,
    gender:"mail"
};
var Hanikamitchi={
    name:"Hanikamitchi",
    src:"",
    lvl:2,
    gender:"mail"
};
var Bokuhoshitchi={
    name:"Bokuhoshitchi",
    src:"",
    lvl:2,
    gender:"mail"
};
var Happabouyatachi={
    name:"Happabouyatachi",
    src:"",
    lvl:2,
    gender:"mail"
};
var Mametchi={
    name:"Mametchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Shinshitchi={
    name:"Shinshitchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Kikitchi={
    name:"Kikitchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Spacytchi={
    name:"Spacytchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Kuchipatchi={
    name:"Kuchipatchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Sunopotchi={
    name:"Sunopotchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Guruguritchi={
    name:"Guruguritchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Pipospetchi={
    name:"Pipospetchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Akaspetchi={
    name:"Akaspetchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Peintotchi={
    name:"Peintotchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Gozarutchi={
    name:"Gozarutchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Kuishinbotchi={
    name:"Kuishinbotchi",
    src:"",
    lvl:3,
    gender:"mail"
};
var Kuromametchi={
    name:"Kuromametchi",
    src:"",
    lvl:3,
    gender:"mail"
};

///////////////////LVL1//LVL1//LVL1//LVL1//LVL1//LVL1//LVL1//LVL1//LVL1//LVL1//LVL1//////////////////////////////



/*
function getNextCharachter(lvl){
    var backgroundImage=document.getElementById("Tamagotchi");
    if (lvl==0){
        backgroundImage.style.backgroundImage="url('font/characters/nittobotchi.png')";
    }else if (lvl==1){
        backgroundImage.style.backgroundImage="url('font/characters/nittobotchi.png')";
    }else if (lvl==2){
        backgroundImage.style.backgroundImage="url('font/characters/nittobotchi.png')";
    }else if (lvl==3){
        backgroundImage.style.backgroundImage="url('font/characters/nittobotchi.png')";
    }else if (lvl==4){
        backgroundImage.style.backgroundImage="url('font/characters/nittobotchi.png')";
    }
}*/
