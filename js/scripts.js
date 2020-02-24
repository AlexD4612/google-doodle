gsap.to("svg#stand",{x:310,y:40,duration:.0001,zIndex:20});
gsap.to("svg#lens",{x:-245,y:-70,duration:.0001})
gsap.to("svg#lensCap",{x:35,y:-70,duration:.0001})
gsap.to("svg#lowerG",{x:36,y:-55})
gsap.to("svg#e",{x:65,y:-75})
gsap.to("svg#G",{x:120,y:-70})
gsap.to("svg#back",{x:-10,y:-300})

var animate = gsap.to("svg#lens",{delay:.5,rotate:90,yoyo:true,repeat:-1,duration:1,ease:Power1,repeatDelay:1})


document.getElementById("button").addEventListener("click",flash); 


function flash(){
  gsap.timeline()
    .to("#three",{zIndex:200,opacity:1})
    .to("#three",{zIndex:-200,opacity:0,duration:1})
    .to("#two",{zIndex:200,opacity:1})
    .to("#two",{zIndex:-200,opacity:0,duration:1})
    .to("#one",{zIndex:200,opacity:1})
    .to("#one",{zIndex:-200,opacity:0,duration:1})
    .to("#flash",{opacity:1,zIndex:999999})
    .to("#flash",{opacity:0,zIndex:-99999,})

}
document.getElementById("button").addEventListener("click",setTimeout)
setTimeout(function(){
    player.play();
},5500)

document.getElementById("player").addEventListener("ended",function(){
    player.currentTime=1;
    player.pause();
});


gsap.to("svg#three",{x:50,duration:.00000000001})
gsap.to("svg#two",{x:50,duration:.00000000001})
gsap.to("svg#one",{x:50,duration:.00000000001})


gsap.to("svg#button",{x:487,y:395,duration:.00000000001})

