
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
    delay:.01,
    y:1500,
    opacity:0,
    // duration:1
    ease:Power4
})
t1.to("loader",{
    display:none
})