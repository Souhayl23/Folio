
<script lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroView from '@/components/general/HeroView.vue';


export default{

  mounted: function(){
    this.startAnimations();
    window.scrollTo(0,0);
  },
  
  methods: {
    startAnimations: function(){
    gsap.registerPlugin(ScrollTrigger);
    
    

    gsap.to(".upper-container", {
      translateY:0,
      skewY: 0,
      duration:13,
      opacity: 1,
      scrollTrigger: {
        trigger: ".upper-container",
        start: "60% 100%",
        end: "100% 10%",
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
        start: "top 90%",
        end: "top 0%",
        scrub:0.5,
        toggleActions: "restart none none none",
        markers: true,
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
    ".cardImage",
    {
      delay: 0.1,
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
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".big-text2", { opacity: 0 }, { opacity: 1, duration: 1 });

    }
  }
}

</script>



<template> 

<div  class="intro z-100">
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
    <div id="slider" class="slider">
      
    </div>

 <!--Contenu de la page accueil-->
 
  <section class=" flex md:mt-20 flex-col mb-[-900px] gap-20">
    <!--Hero page accueil-->
    <div class="md:-m-8 p-2  md:p-6" >
     <!--HERO-->
  <section id="section1"
    class="m-auto mt-3 mb-96 sm:flex hidden max-w-6xl flex-col-reverse justify-center gap-10 md:flex-row"
  >
  <div  class="w-[499px] big-text2 clickable h-[285px] mt-[118px] mr-[300px] relative z-10">

    <img src="../../public/images/Round.svg" class="w-[10%] rotate z-10 ">
 
  <img src="../../public/images/Etoile.svg" class="rotate2">
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
  <p class="absolute hidden md:flex left-[42px] top-[136px] text-[15px] text-left text-[#FFF8EF]">
    Creative Portfolio
  </p>
  <p class="absolute hidden sm:flex md:hidden left-[42px] top-[110px] text-[12px] text-left text-[#FFF8EF]">
    Creative Portfolio
  </p>
  <h3 class="text-[15px] hidden lg:flex absolute -rotate-90 mr-3 top-[100px] right-[-550px] text-left text-[#FFF8EF]">souhayl.sedira23@gmail.com</h3>
 
</div>


    <img 
      src="../../public/images/Homme.svg"
      alt="Exemples de montres"
      class="m-auto big-text hidden md:flex absolute "
    />    
    <img
      src="../../public/images/Homme.svg"
      alt="Exemples de montres"
      class="m-auto h-fit  w-[650px] big-text left-8 hidden sm:flex md:hidden absolute "
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
  <p class="absolute sm:hidden z-10 top-[205px] mr-[165px] text-[9px] text-[#FFF8EF]">
    Creative Portfolio
  </p>

  <h3 class="text-[15px] sm:hidden ml-[12vw] mt-[600px] z-10 text-center text-[#FFF8EF]">souhayl.sedira23@gmail.com</h3>
  <h3 class="text-[15px] hidden sm:flex md:hidden  z-10 mt-[-350px] text-center  text-[#FFF8EF]">souhayl.sedira23@gmail.com</h3>

  <img
  
      src="/images/HommeMiniM.svg"
      alt="Illustration Cyborg Noir"
      class="m-auto h-fit    left-3 sm:hidden top-24 absolute "
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
  <section id="about" >
  

    <div class="marquee">
										<div class="marquee__inner2" >
											<span>National Geographic.</span>
											<span>National Geographic.</span>
											<span>National Geographic.</span>
											<span>National Geographic.</span>
										</div>
									</div>
								    
    <div class="upper-container  flex mt-28 sm:mt-0 ">
      <img src="../../public/images/Trois.svg" class="sm:flex  hidden md:ml-20 lg:ml-48 lg:-mr-44"/>
      <div>
      <span class="text-[#2300FB] px-7 lg:px-[200px]" >(ABOUT ME)</span>
      <h1 class="text-[#FFF8EF]  px-7 lg:px-[200px]">
        My name is Souhayl Sedira.<br>
        I like to work on projects in the field of graphic design and front integration.<br>
        <RouterLink to="/contact" class="clickable underline  hover:text-[#2300FB]">Contact me</RouterLink> for more information.
</h1><img src="../../public/images/Trois.svg" class="sm:hidden w-[70vw] mt-[10vw] ml-[15vw] flex justify-center items-center "/></div>
    </div>    
  </section>
  <section>
 <div class="cardImage mt-96 text-[11vw]">MY PROJECTS</div>

 <div>

				<section class="project">
					<div class="project-container">
						<div><RouterLink to="/projects">
							<nav class="menu">
								<div class="menu__item">
									<a class="menu__item-link clickable">/ TikTak</a>
									<img class="menu__item-img" src="../../public/images/projet/TIKTAKMINISVG.svg" />
									<div class="marquee">
										<div class="marquee__inner ">
											<span>TikTak</span>
											<span>TikTak</span>
											<span>TikTak</span>
											<span>TikTak</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>
                <div class="menu__item">
									<a class="menu__item-link clickable">/ National Geographic.</a>
									<img class="menu__item-img" src="../../public/images/projet/Nationmini.svg" />
									<div class="marquee">
										<div class="marquee__inner" aria-hidden="true">
											<span>National Geographic.</span>
											<span>National Geographic.</span>
											<span>National Geographic.</span>
											<span>National Geographic.</span>
										</div>
									</div>
								</div>
                <div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link clickable">/ Streamer Goal</a>
									<img class="menu__item-img" src="../../public/images/projet/STREAMERMINISVG.svg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Streamer Goal</span>
											<span>Streamer Goal</span>
											<span>Streamer Goal</span>
											<span>Streamer Goal</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link clickable">/ Parole d'une femme</a>
									<img class="menu__item-img" src="../../public/images/projet/PAROLEMINI.png" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Parole d'une femme</span>
											<span>Parole d'une femme</span>
											<span>Parole d'une femme</span>
											<span>Parole d'une femme</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link clickable">/ Sportgether</a>
									<img class="menu__item-img" src="../../public/images/projet/SPORTSMINI.png" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Sportgether</span>
											<span>Sportgether</span>
											<span>Sportgether</span>
											<span>Sportgether</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>


							</nav></RouterLink>
						</div>
					</div>
				</section>


            
        </div>
</section> 


    
</template>


<style scoped>
.marquee2 {
  width:100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  padding-top: 2em;
  padding-bottom: 2em;
}
.marquee2 span {
  font-family: 'ArsenicaDemi';;
  
  color: #2300FB;
  font-size: 6em;
  text-transform: uppercase;
  display: inline-block;
  padding: 55px;
  padding-left: -10%;
  animation: marquee2-animation 80s linear infinite;
}

@keyframes marquee2-animation {
  0% {
    transform:translate(0, 0);
  
  }
  100% {
    transform: translate(-100%, 0);
  }
}
.divider {
	width: 100%;
	height: 2px;
	background: #0F0F0F;
}



/* projects */

.menu__item {
	position: relative;
	padding: 1.6vw 0 0 0;
	margin: 4px;
}

.menu__item-link {
	display: inline-block;
	cursor: pointer;
	position: relative;
	color: #0F0F0F;
	-webkit-transition: opacity 0.4s;
	transition: opacity 0.4s;
	font-family: "ArsenicaDemi";
	text-transform: uppercase;
}

.menu__item-link::before {
	all: initial;
	text-transform: uppercase;
	counter-increment: menu;
	position: absolute;
	bottom: 60%;
	left: 0;
	pointer-events: none;
}

.menu__item-link:hover {
	-webkit-transition-duration: 0.1s;
	transition-duration: 0.1s;
	opacity: 0;
}

.menu__item-img {
	pointer-events: none;
	position: absolute;
	height: 30vw;
	max-height: 400px;
	opacity: 0;
	left: 140%;
	top: 50%;
 
	-webkit-transform: translate3d(calc(-100% - 6vw), -30%, 0)
		translate3d(0, 20px, 0);
	transform: translate3d(calc(-100% - 6vw), -30%, 0) translate3d(0, 20px, 0);
}

.menu__item-link:hover + .menu__item-img {
	opacity: 1;
	-webkit-transform: translate3d(calc(-100% - 6vw), -30%, 0)
		rotate3d(0, 0, 1, 4deg);
	transform: translate3d(calc(-100% - 6vw), -30%, 0) rotate3d(0, 0, 1, 4deg);
	-webkit-transition: all 0.4s;
	transition: all 0.4s;
}

.menu {
	padding: 0vh 0 0 0vh;
	--offset: 20vw;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
	font-size: 8vw;
}

.marquee {
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;

	pointer-events: none;
	mix-blend-mode: difference;
  
}

.marquee__inner {

	width: fit-content;
  height: 300px;

	display: flex;
	position: relative;
	-webkit-animation: marquee 5s linear infinite;
	animation: marquee 5s linear infinite;
	-webkit-animation-play-state: paused;
	animation-play-state: paused;
	opacity: 0;
	-webkit-transition: opacity 0.1s;
	transition: opacity 0.1s;
	padding: 1vw 0;
}
.marquee__inner2 {

width: fit-content;
height: 300px;

display: flex;
position: relative;
-webkit-animation: marquee 5s linear infinite;
animation: marquee 5s linear infinite;
-webkit-animation-play-state: paused;
animation-play-state: paused;

padding: 1vw 0;
}
 .marquee .marquee__inner2 {
	-webkit-animation-play-state: running;
	animation-play-state: running;
	opacity: 1;
	-webkit-transition-duration: 0.4s;
	transition-duration: 0.4s;
}
.menu__item-link:hover ~ .marquee .marquee__inner {
	-webkit-animation-play-state: running;
	animation-play-state: running;
	opacity: 1;
	-webkit-transition-duration: 0.4s;
	transition-duration: 0.4s;
}

.menu__item-link,
.marquee span {
	white-space: nowrap;
	font-size: 5vw;
	padding: 1.6vw 1vw;
	font-weight: 900;
}

.marquee span {
	font-family: "ArsenicaDemi" !important;
	text-transform: uppercase;
  
}

@-webkit-keyframes marquee {
	0% {
		-webkit-transform: translate3d(var(--move-initial), 0, 0);
		transform: translate3d(var(--move-initial), 0, 0);
	}
	100% {
		-webkit-transform: translate3d(var(--move-final), 0, 0);
		transform: translate3d(var(--move-final), 0, 0);
	}
}

@keyframes marquee {
	0% {
		-webkit-transform: translate3d(var(--move-initial), 0, 0);
		transform: translate3d(var(--move-initial), 0, 0);
	}
	100% {
		-webkit-transform: translate3d(var(--move-final), 0, 0);
		transform: translate3d(var(--move-final), 0, 0);
	}
}


.project-title h1 {
  font-weight: 300;
}

.project-categ {
  font-weight: lighter;
}



.wrapper {
  width: 80%;
  margin: 180px auto;
  height: 100%;
}

.project {

  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 1;
  position: relative;
  z-index: 2;
  color: #2300FB;
  
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}






.slides2 {
  transform: translate(-100%, -50%)
}


.scroll {
  position: absolute;
  color: #2300FB;
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
  border: 3px solid 
  
  ;
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
  color: #FFF8EF;
  font-weight: 100;
  font-size: 12px;
}
.rotate2 {
  position: absolute;
  width: 35%;
  top: 10%;
  left: -215px;
  
  
}
.rotate {
  position: absolute;
  width: 25%;
  top: 18%;
  left: -190px;
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
  transform: skewY(90%);
}


.upper-container span {
  font-size: 20px;
  font-family: 'ClashMed'

}

.upper-container h1 {
  font-size: 30px;
  line-height: 1;
}



.cardImage {
  opacity: 0;
  height: 50vw;
}



.center1 {
 
  width: 70%;
  height: 100vW;
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
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  

}

.cardImage {
  width: 100%;
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#2300FB,#05ae65);
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
  color: #FFF8EF;
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