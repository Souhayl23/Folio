
<script lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroView from '@/components/general/HeroView.vue';

export default{
  mounted: function(){
    this.startAnimations();
  },
  
  methods: {
    startAnimations: function(){
    gsap.registerPlugin(ScrollTrigger);
   
    gsap.to(".upper-container", {
      translateY:0,
      duration:13,
      opacity: 1,
      scrollTrigger: {
        trigger: ".upper-container",
        start: "top 60%",
        end: "80% 20%",
        scrub:0.5,
        toggleActions: "restart none none none",
       
      }
    })
    gsap.to(".slides2", {
      x:"10%",
      duration:13,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slides2",
        start: "top 80%",
        end: "80% 0%",
        scrub:0.5,
        toggleActions: "restart none none none",
       
      }
    })
    gsap.to(".slides", {
      x:"10%",
      duration:40,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slides",
        start: "top 80%",
        end: "top 0%",
        scrub:0.5,
        toggleActions: "restart none none none",
      }
    })
    gsap.to(".slides0", {
      x:"-70%",
      duration:13,
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".slides0",
        start: "top 100%",
        end: "top 0%",
        scrub:1,
        toggleActions: "restart none none none",
      }
    })
    gsap.to(".slides3", {
      x:"-50%",
      duration:13,
      opacity: 0.5,
      scrollTrigger: {
        trigger: ".slides3",
        start: "top 100%",
        end: "80% 0%",
        scrub:1,
        toggleActions: "restart none none none",
        markers:true,
      }
    })
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".imageBoard",
      pin: true,
      start: "top top",
      end: "+=300%",
      scrub: 1,
      markers:true,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    ".upper-container",
    {
      opacity:1
    }
  )
  .to(
    document.body,
    {
      delay: 0.3,
      backgroundColor: "#f0f0f0",
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      opacity: 0,
    },
    "start"
  )
  .to(
    "#scaleableImg1",
    {
      scale: 10,
      x: -850,
    },
    "start"
  )
  .to(
    "#scaleableImg2",
    {
      scale: 10,
      x: -2500,
    },
    "start"
  )
  .to(
    "#scaleableImg3",
    {
      scale: 10,
      x: -3000,
      y: 1000,
    },
    "start"
  )
  .to(
    "#scaleableImg4",
    {
      scale: 10,
      x: 3000,
    },
    "start"
  )
  .to(
    "#scaleableImg5",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.1,
      scale: 5,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.4,
      opacity: 1,
    },
    "start"
  )
  .to(".scaleableImg", {
    opacity: 0,
  });



      
      gsap.to('#title', {duration: 10, color: "red"});
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    }
  }
}

</script>



<template> 

<div  class="intro z-30">
      <div id="intro-text" class="intro-text">
        <h1 id="hide" class="hide">
          <span id="text" class="text py-3">Welcome</span>
        </h1>
        <h2 id="hide" class="hide">
          <span id="text" class="text py-3">to my creative</span>
        </h2>
        <h1 id="hide" class="hide">
          <span id="text" class="text py-3">Portfolio.</span>
        </h1>
      </div>
    </div>
    <div id="slider" class="slider"></div>

 <!--Contenu de la page accueil-->
 
  <section class="flex md:mt-20 flex-col mb-[-900px] gap-20">
    <!--Hero page accueil-->
    <div class="md:-m-8 p-2  md:p-6" >
     <!--HERO-->
  <section
    class="m-auto mt-3 mb-96 sm:flex hidden max-w-6xl flex-col-reverse justify-center gap-10 md:flex-row"
  >
  <transition appear name="toast">  <div  class="w-[499px] h-[285px] mt-[118px] mr-[300px] relative z-10">
  <h1 class="absolute hidden md:flex left-0 top-0 text-[100px] vw text-center text-[#2300FB]">SOUHAYL</h1>
  <h1 class="absolute hidden sm:flex md:hidden left-[54px] top-0 text-[80px] vw text-center text-[#2300FB]">SOUHAYL</h1>
  <div>

  </div>
  <h1 class="absolute hidden md:flex left-[34px] top-[180px]  text-[80px] vw  text-center text-[#2300FB]">
    DESIGNER
  </h1>
  <h1 class="absolute hidden sm:flex md:hidden left-[34px] top-[145px]  text-[64px] vw  text-center text-[#2300FB]">
    DESIGNER
  </h1>
  <h2 class="absolute hidden md:flex left-[231px] top-[90px] text-[100px] vw  text-center text-[#2300FB]">
    UX/UI
  </h2>
  <h2 class="absolute hidden sm:flex md:hidden left-[231px] top-[70px] text-[80px] vw  text-center text-[#2300FB]">
    UX/UI
  </h2>
  <p class="absolute hidden md:flex left-[42px] top-[136px] text-[15px] text-left text-[#faebd7]">
    Creative Portfolio
  </p>
  <p class="absolute hidden sm:flex md:hidden left-[42px] top-[110px] text-[12px] text-left text-[#faebd7]">
    Creative Portfolio
  </p>
  <h3 class="text-[15px] hidden lg:flex absolute -rotate-90 mr-3 top-[100px] right-[-550px] text-left text-[#faebd7]">souhayl.sedira23@gmail.com</h3>
 
</div></transition>


    <img 
      src="../../public/images/Homme.svg"
      alt="Exemples de montres"
      class="m-auto hidden md:flex absolute "
    />    
    <img
      src="../../public/images/Homme.svg"
      alt="Exemples de montres"
      class="m-auto h-fit w-[650px] left-8 hidden sm:flex md:hidden absolute "
    /> 


  </section>
  <section
    class=" mt-5  mb-[844px] flex  justify-center gap-10 flex-row"
  >

  <h1 class="absolute flex sm:hidden z-10 top-[121px]   text-[60px] vw text-center text-[#2300FB]">SOUHAYL</h1>
  <h1 class="absolute flex sm:hidden z-10 top-[230px]  text-[48px] vw  text-center text-[#2300FB]">
    DESIGNER
  </h1>
  <h2 class="absolute flex sm:hidden z-10 top-[175px]  text-[60px] vw  text-center text-[#2300FB]">
    UX/UI
  </h2>
  <p class="absolute sm:hidden z-10 top-[205px] mr-[165px] text-[9px] text-[#faebd7]">
    Creative Portfolio
  </p>

  <h3 class="text-[15px] sm:hidden ml-[12vw] mt-[600px] z-10 text-center text-[#faebd7]">souhayl.sedira23@gmail.com</h3>
  <h3 class="text-[15px] hidden sm:flex md:hidden  z-10 mt-[-350px] text-center  text-[#faebd7]">souhayl.sedira23@gmail.com</h3>

  <img
  
      src="/images/HommeMini.svg"
      alt="Illustration Cyborg Noir"
      class="m-auto h-fit  w-[1500px] scale-150 left-3 sm:hidden top-44 absolute "
    />
    <div>
</div>
  </section>
 

     
    </div>
   
    
   </section> 
   <a href="#sec-2" class="scroll  sm:hidden   ">
      <div class="scroll-down  "></div>
    </a>
    <a href="#sec-2" class="scroll hidden sm:flex sm:bottom-[20%] md:bottom-[10%] lg:bottom-[-1%] ">
      <div class="scroll-down  "></div>
    </a>

   <div class="w-[1750px] " >
     <h2 class="slides md:flex -mb-24 w-[5000px] hidden text-gray-400 p-10 text-[40px] ">GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME </h2>
    </div>
    <div class="md:hidden slides2 mt-28 -mb-10  w-[5000px] " >
     <h2 class=" md:hidden text-[40px] text-gray-400">GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME<span class="text-[#2300FB]">✦</span>GET TO KNOW ME </h2>
    </div>
    <div class="upper-container flex mt-32 sm:mt-0 ">
      <img src="../../public/images/Trois.svg" class="sm:flex  hidden md:ml-20 lg:ml-48 lg:-mr-44"/>
      <div>
      <span class="text-[#2300FB] px-7 lg:px-[200px]" >(ABOUT ME)</span>
      <h1 class="text-[#faebd7] px-7 lg:px-[200px]">
        My name is Souhayl Sedira.<br>
        I like to work on projects in the field of graphic design and front integration.<br>
        Contact me for more information.
</h1><img src="../../public/images/Trois.svg" class="sm:hidden w-[70vw] mt-[10vw] ml-[15vw] flex justify-center items-center "/></div>
    </div>    
    <div class="md:hidden slides3 mt-28 -mb-10  w-[2500px] " >
     <h2 class=" md:hidden text-[40px] text-gray-400">DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK </h2>
    </div>
    <div class=" slides0 md:flex w-[2500px] -mb-10 hidden text-gray-400 p-10 text-[40px] " >
     <h2 class=" md:flex text-[40px] text-gray-400">DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK<span class="text-[#2300FB]">✦</span>DISCOVER MY WORK </h2>
    </div>
    <div class="imageBoard">
      <img src="../../public/images/Form1.svg"  id="scaleableImg1" class="scaleableImg " />
      
             

      <h2
        
        id="scaleableImg3"
        class="scaleableImg  text-[#3b3b3b] text-[50px] sm:text-[200px] md:text-[150px] lg:text-[200px] "
      >New Design.</h2>
 <div class="cardImage text-[1.5vh] sm:text-[2vh] md:text-[3vh] lg:text-[4vh]">MY PROJECTS</div>
    </div>
    
</template>


<style scoped>

html {
  overflow-x:hidden;
  max-width: 1280px;
}
.slides {
  transform: translate(-100%, -100%)
}

.slides2 {
  transform: translate(-100%, -50%)
}
.slides3 {
  transform: translate(50%, 50%)
}

.scroll {
  position: absolute;
  
  width: 100%;
  
}
.scroll-down {

  border: 0px solid #2300FB;
  position: absolute;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
  height: 100px;
  bottom: 100%;
  align-items: center;
  justify-content: center;
}
.scroll-down::before,
.scroll-down::after {
  content: "";
  position: absolute;
  top: 20%;
  left: 50%;
  height: 20px;
  width: 20px;
  transform: translate(-10%) rotate(45deg);
  border: 3px solid #2300FB;
  border-top: transparent;
  border-left: transparent;
  animation: scroll-down 1s ease-in-out infinite;
}
.scroll-down::before {
  top: 30%;
  animation-delay: 0.3s;
  /* animation: scroll-down 1s ease-in-out infinite; */
}

@keyframes scroll-down {
  0% {
    /* top:20%; */
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    top: 90%;
    opacity: 0;
  }
}
#rotated {
  color: #faebd7;
  font-weight: 100;
  font-size: 12px;
}
.rotate {
  position: absolute;
  top: 110px;
  right: 195px;
  transform: translate(-50%, -50%);
  animation: rotating 20s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


.upper-container {
  opacity: 0;
  transform: translateY(-30%);
}


.upper-container span {
  font-size: 20px;
  font-family: 'ClashMed'

}

.upper-container h1 {
  font-size: 30px;
  line-height: 1;
}

.imageBoard {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.imageBoard .cardImage {
  opacity: 0;
  height: 50vh;
}

.scaleableImg {
  position: absolute;
  width: 100%;
  
}

#scaleableImg1 {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#scaleableImg2 {
  top: 35%;
  left: 30%;
}
#scaleableImg3 {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  

}

.cardImage {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#2300FB,#1D05AE);
background-clip: border-box;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  font-weight: bold;
  
  font-family: 'ArsenicaDemi'
  
}


html {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}


p { font-family: 'ClashRegu';
    

  }
h1 { font-family: 'ArsenicaDemi';


}
h2 { font-family: 'ArsenicaLI';

}
h3 { font-family: 'ClashMed';
    

  }

  .toast-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.toast-enter-active {
  transition: all 8s ease;
}
.toastup-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}
.toastup-enter-to {
  opacity: 1;
  transform: translateY(-100px);
}
.toastup-enter-active {
  transition: all 4s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 4s ease;;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 4s ease;;
}

.slide-enter-from {
  
  transform: translateY(100%);
}
.slide-enter-to {
  
  transform: translateY(-100);
}
.slide-enter-active {
  transition: all 4s steps(10s);
}

.intro {
  background: #2300FB ;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.slider {
  background: #2C4055;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  z-index: 20;
}

.intro-text {
  color: #faebd7;
  gap: 20px;
  font-size: 3rem;
  z-index: 20;
}

.hide {
  background: #2300FB;
  overflow: hidden;
  z-index: 20;
}

.hide span {
  transform: translateY(100%);
  display: inline-block;
  z-index: 20;
}

</style>