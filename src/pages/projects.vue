<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<template>
<div id="top"  class="marqueep">    <span>
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

    <a
      href="#top"
      class="fixed bottom-20 right-[5vw] z-10 flex h-16 w-20 items-center justify-center bg-[#2300FB] text-xl font-normal text-white opacity-50 transition-all hover:h-16 hover:w-24 hover:opacity-100"
      ><h2>Top ↟</h2></a>
        
    </div>
</section> 
</template>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  color: #e0e0e0;

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
  font-family: 'ClashMed'

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