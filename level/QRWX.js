﻿oS.Init({
    PName: [oPotatoMine, oSquash, oFumeShroom, oCoffeeBean, oGloomShroom, oSunShroom, oPuffShroom, oScaredyShroom, oHypnoShroom, oIceShroom, oMagneticmuShroom, oFlamesMushroom], 
    ZName: [oZombie, oZombie2, oZombie3, oFootballZombie, oImp],
    PicArr: ["images/interface/background1.jpg"], 
    LF: [0, 1, 1, 1, 1, 1, 0], 
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 1, 
    LevelName: "全日无休",  
    LvlEName: 9,  
    SunNum: 1000, 
    LargeWaveFlag: {
        10 : $("imgFlag1")
     }
},
{
    AZ: [[oImp, 1, 5, [5]], [oZombie, 4, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oFootballZombie, 1, 10, [10]]], 
    FlagNum: 10,
    FlagToSumNum: {
        a1: [3, 5],
        a2: [1, 2, 3]
    },
    FlagToMonitor: {
        9 : [ShowLargeWave, 0],
        19 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(0)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});