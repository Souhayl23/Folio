

<script lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  setup() {
    onMounted(startAnimations); 
    {
    window.scrollTo(0,0)
  };
    

    function startAnimations() {
     

      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 })

        .to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
        .to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".big-text2", { opacity: 0 }, { opacity: 1, duration: 1 });

      // Your animation code here
    }

    return {
      startAnimations
    };
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
 
  <section id="top" class=" flex md:mt-20 flex-col mb-[-900px] gap-20 overflow-y-hidden">
    <!--Hero page accueil-->
    <div class="md:-m-8 p-2  md:p-6" >
     <!--HERO-->
  <section id="section1"
    class="m-auto mt-3 mb-96 sm:flex hidden max-w-6xl flex-col-reverse justify-center gap-10 md:flex-row"
  >
  <div  class="w-[499px] big-text2 clickable h-[285px] mt-[118px] mr-[300px] relative z-10">

    <img src="../assets/images/Round.svg" class="w-[10%] rotate z-10 ">
 
  <img src="../assets/images/Etoile.svg" class="rotate2">
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
      src="../assets/images/Homme.svg"
      alt="Exemples de montres"
      class="m-auto big-text hidden md:flex absolute "
    />    
    <img
      src="../assets/images/Homme.svg"
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
  
      src="../assets/images/HommeMiniM.svg"
      alt="Illustration Cyborg Noir"
      class=" h-fit -mt-32 -ml-2 sm:hidden  absolute "
    />
    <div>
</div>
  </section>
 

     
    </div>
   
    
   </section> 
   <a href="#sec-2" class="scroll  sm:hidden">
      <div class="scroll-down  "></div>
    </a>
    <a href="#sec-2" class="scroll hidden sm:flex sm:bottom-[20%] md:bottom-[10%] lg:bottom-[-1%] ">
      <div class="scroll-down  "></div>
    </a>
    <div class="h-20 lg:h-1"></div>
    <div class="marqueea mt-20 sm:mt-4">    <span>
      about me  /about me / about me / about me / about me /
      about me / about me / about me / about me / about me /
      about me / about me / about me /
    </span></div>
  <section id="about" >
  
    
							    
    <div class="upper-container  flex mt-56 sm:mt-20 ">
      <img src="../assets/images/Trois.svg" class="sm:flex  hidden md:ml-20 lg:ml-48 lg:-mr-44"/>
      <div>
      <span class="text-[#2300FB] px-7 lg:pl-[200px]" >(ABOUT ME)</span>
      <h3 class="text-[#FFF8EF]  px-7 lg:pl-[200px] lg:pr-[150px]">
        My name is Souhayl Sedira.<br>
        I am specialized in the field of webdesign and more precisely on UX/UI Design, the creation of website mock-ups, logos and everything related to graphic identity.

        <br>Besides design, I have learned to create websites, to manage social networks for a company for example but also to design from scratch a marketing strategy so that a company can have the necessary digital resources to start.<br>
        <RouterLink to="/contact" class="clickable underline  hover:text-[#2300FB]">Contact me</RouterLink> for more information.
</h3><img src="../assets/images/Trois.svg" class="sm:hidden w-[70vw] mt-[10vw] ml-[15vw] flex justify-center items-center "/></div>
    </div>    
  </section>

 <div class="marqueep">    <span>
      my projects  /my projects / my projects / my projects / my projects /
      my projects / my projects / my projects / my projects / my projects /
      my projects / my projects / my projects /
    </span></div>
    <img src="../assets/images/New.svg" class="my-[8vw] scale-150 md:scale-100" >
<section>
 <div>

				<section class="project">
					<div class="project-container">
						<div>
							<nav class="menu">
                <RouterLink to="/tiktak">
								<div class="menu__item">
									<a class="menu__item-link clickable">/ TikTak</a>
									<img class="menu__item-img" src="../assets/images/projet/TIKTAKMINISVG.svg" />
									<div class="marquee">
										<div class="marquee__inner ">
											<span>TikTak</span>
											<span>TikTak</span>
											<span>TikTak</span>
											<span>TikTak</span>
										</div>
									</div>
								</div>
              </RouterLink>
								<div class="divider"></div>

                <RouterLink to="mmiscp"> 
								<div class="menu__item">
									<a class="menu__item-link clickable">/ MMISCP</a>
									<img class="menu__item-img" src="../assets/images/projet/MMISCPMINI.svg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>MMISCP</span>
											<span>MMISCP</span>
											<span>MMISCP</span>
											<span>MMISCP</span>
										</div>
									</div>
								</div></RouterLink>

								<div class="divider"></div>

                <RouterLink to="/national">
                <div class="menu__item">
									<a class="menu__item-link clickable">/ National Geographic.</a>
									<img class="menu__item-img" src="../assets/images/projet/Nationmini.svg" />
									<div class="marquee">
										<div class="marquee__inner" aria-hidden="true">
											<span>National Geographic.</span>
											<span>National Geographic.</span>
											<span>National Geographic.</span>
											<span>National Geographic.</span>
										</div>
									</div>
								</div>
              </RouterLink>

                <div class="divider"></div>
                <RouterLink to="streamer"> 
								<div class="menu__item">
									<a class="menu__item-link clickable">/ Streamer Goal</a>
									<img class="menu__item-img" src="../assets/images/projet/STREAMERMINISVG.svg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Streamer Goal</span>
											<span>Streamer Goal</span>
											<span>Streamer Goal</span>
											<span>Streamer Goal</span>
										</div>
									</div>
								</div>
              </RouterLink>

								<div class="divider"></div>
                <RouterLink to="femme"> 
								<div class="menu__item">
									<a class="menu__item-link clickable">/ Parole d'une femme</a>
									<img class="menu__item-img" src="../assets/images/projet/PAROLEMINI.png" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Parole d'une femme</span>
											<span>Parole d'une femme</span>
											<span>Parole d'une femme</span>
											<span>Parole d'une femme</span>
										</div>
									</div>
								</div></RouterLink>

								<div class="divider"></div>



							</nav>
						</div>
					</div>

				</section>


            
        </div>
</section> 
<section>
  <div>
        <div class="get-in-touch h-[100vw] md:h-[50vw] ">
            <RouterLink to="contact" class="hover:text-[#2300FB] text-[#e0e0e0] z-10 hover:scale-110 md:text-[100px] text-[40px]"><h1 class=" underline">CONTACT ME</h1></RouterLink>
            <p class="text-[15px] text-center md:text-[20px] mx-3  mt-[-100px] md:mt-[-150px]">If you have a project or a general question, do not hesitate to contact me</p>
            <img class=" md:w-[40vw] w-[70vw] md:mt-[-10vw] mt-[-25vw] " src="../assets/images/✧.svg" alt="" />
        </div>
        </div>
</section>

  <a
      href="#top"
      class="fixed scroll-smooth bottom-20 right-[5vw] z-10 flex h-16 w-20 items-center justify-center bg-[#2300FB] text-xl font-normal text-white opacity-50 transition-all hover:h-16 hover:w-24 hover:opacity-100"
      ><h2>Top ↟</h2></a>
    
</template>


<style scoped>
html, body {
  width: 100%;
  height: 100%;
  color: #e0e0e0;

}
.get-in-touch{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
   
    margin-top: 15vw;
    flex-direction: column;
}
.get-in-touch h1 {
    
    font-weight: lighter;
    
}
.get-in-touch p{
    
    
    font-weight: 300;
    text-transform: uppercase;
    color: #e0e0e0;
}
.get-in-touch img{
  
    opacity: .1;
    animation: animate-rotate 30s linear infinite;

}
@keyframes animate-rotate {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
.marqueea {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  padding-top: 2em;
}

.marqueea span {
  font-family: 'ArsenicaDemi';;
  
  color: #2300FB;
  font-size: 6em;
  text-transform: uppercase;
  display: inline-block;
  padding: 6vw;
  padding-left: -10%;
  animation: marqueea-animation 80s linear infinite;
}

@keyframes marqueea-animation {
  0% {
    transform:translate(-50%, 0);
  
  }
  100% {
    transform: translate(50, 0);
  }
}
.marqueep {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  padding-top: 2em;
}

.marqueep span {
  font-family: 'ArsenicaDemi';;
  
  color: #2300FB;
  font-size: 6em;
  text-transform: uppercase;
  display: inline-block;
  padding: 6vw;
  padding-left: -10%;
  animation: marqueep-animation 80s linear infinite;
}

@keyframes marqueep-animation {
  0% {
    transform:translate(0, 0);
  
  }
  100% {
    transform: translate(-100%, 0);
  }
}

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
	height: 0.2vw;
	background: #e0e0e0;
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
	color: #e0e0e0;
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
  
  transform: translateY(-30%);
  transform: skewY(90%);
}


.upper-container span {
  font-size: 20px;
  font-family: 'ArsenicaDemi'

}

.upper-container h1 {
  
  line-height: 1;
}



.cardImage {
 
  
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