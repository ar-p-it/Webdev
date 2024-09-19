
function loadingfirst(){

var t1=gsap.timeline()
t1.from(".line h1",{
    y:-150,
    stagger:.4,
    duration:1.8,
    delay:.5 
})


t1.from("#line1-part1,.line h2",{
    opacity:0,
    onStart:function(){

// delay:1

var h5timer = document.querySelector("#line1-part1 h5")
var grow = 0
setInterval(function(){
  if(grow<100) {
    h5timer.innerHTML = grow++
  }else{
    h5timer.innerHTML = grow
  }
},35)


    }
    })



    
t1.to("#loader",{
    opacity:0,
    duration:.2,
    delay:4
})


t1.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})
t1.to("#loader",{
    display:"none"
})

t1.from("#navbar",{
    opacity:0,
    y:-100,
    stagger:.4
})




t1.from(".hero1 h1,.hero2 h1,.hero3 h2,.hero4 h1",{
    y:120,
    stagger:0.2
})






}



function cursoranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
        })
        
        Shery.makeMagnet("#nav-part2 h4",{});
        //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        //     duration: 1,
        //   });
        
}
loadingfirst();
// cursoranimation();
function animation1(){
    Shery.imageEffect(".img-div", {
        style: 1 /*OR 5 for different variant */,
        debug: true,
        gooey:true,
      });
}
animation1();
