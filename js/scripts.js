/*-----------------------------------------------
function: positioning
purpose: positions all objects, sets initial opacity, z-index
------------------------------------------------*/

gsap.to("svg#stand",{x:260,y:55,duration:.0001,zIndex:20});
gsap.to("svg#lens",{x:-324,y:-70,duration:.0001})
gsap.to("svg#lensCap",{x:-17,y:-70,duration:.0001})
gsap.to("svg#lowerG",{x:-20,y:-42})
gsap.to("svg#e",{x:0,y:-60})
gsap.to("svg#G",{x:80,y:-70})
gsap.to("svg#back",{x:-10,y:-300})
gsap.to("svg#three",{x:50,duration:.00000000001})
gsap.to("svg#two",{x:50,duration:.00000000001})
gsap.to("svg#one",{x:50,duration:.00000000001})
gsap.to("svg#button",{x:487,y:395,duration:.00000000001})
gsap.to("svg#prompt",{x:490,y:400,duration:.00000000001,opacity:0})  
gsap.to("svg#prompt",{opacity:1,delay:5})  //end positioning

/*---------------------------------------
function: rotate
purpose: rotate lens svg
---------------------------------------*/
var animate = gsap.to("svg#lens",{delay:.5,rotate:90,yoyo:true,repeat:-1,duration:1,ease:Power0,repeatDelay:1}) 
// end rotate


/*-----------------------------------------------------
function:flash
purpose: simulate camera flash when button is pressed
-------------------------------------------------------*/
document.getElementById("button").addEventListener("click",flash); 


function flash(){
    
 cam();
 player.play();
 gsap.timeline()
    .to("#flash",{opacity:1,zIndex:999999})
    .to("#flash",{opacity:0,zIndex:-99999,})
} // end flash

/*-------------------------------------------------------------------
function: sound
purpose: add sound to camera shutter when button clicked
****still not finished, commented out for testing****
-------------------------------------------------------------------*/

function cam(){
    gsap.timeline()
    .to("svg#prompt",{opacity:0})
    .to("#three",{zIndex:200,opacity:1})
    .to("#three",{opacity:0,zIndex:-200,duration:1})
    .to("#two",{zIndex:200,opacity:1})
    .to("#two",{opacity:0,zIndex:-200,duration:1})
    .to("#one",{zIndex:200,opacity:1})
    .to("#one",{opacity:0,zIndex:-200,duration:1})
gsap.to("svg#G",{rotate:10, yoyo:true,repeat:7,duration:.5,ease:Elastic})
gsap.to("svg#lensCap",{delay:.5,rotate:-10, yoyo:true,repeat:7,duration:.5,ease:Elastic})
gsap.to("svg#lowerG",{delay:.5,rotate:10, yoyo:true,repeat:7,duration:.5,ease:Elastic})
gsap.to("svg#e",{delay:.5,rotate:-10, yoyo:true,repeat:7,duration:.5,ease:Elastic})
}



/*--------NOTES------------
- In v2, animate letters to move during countdown and freeze before camera flash


---------------------------*/
