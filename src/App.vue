<script setup lang="ts">

import HeaderView from "@/components/layout/HeaderView.vue";
// @ts-ignore
import FooterView from "@/components/layout/FooterView.vue";
import { RouterLink, RouterView } from "vue-router";
import Menu from "@/components/MenuLogo.vue";
import MenuOuvert from "./components/MenuOuvert.vue";
import { ref } from "@vue/reactivity";

let menuOuvert = ref();
menuOuvert.value = false;

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor') as HTMLElement;
  const radius = cursor.offsetHeight / 2;
  
  // Déplace le curseur
  document.addEventListener('mousemove', (e: MouseEvent) => {
    let top = e.clientY - radius,
    left = e.clientX - radius;
    cursor.setAttribute("style", `top: ${top}px; left: ${left}px;`);
  });
  
  // Agrandit le curseur au survol d'un élément cliquable
  const clickableElements = document.querySelectorAll(".clickable");
  for (let i = 0; i < clickableElements.length; i++) {
    clickableElements[i].addEventListener("mouseover", () => {
      cursor.classList.add("hover");
    });
    clickableElements[i].addEventListener("mouseout", () => {
      cursor.classList.remove("hover");
    });
  }
  
  // Réduit le curseur après un clic
  document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });
});








</script>

<template class="scroll-smooth">
  <div class="cursor hidden md:flex"></div>
  <div className="noise"></div>
  <header class="flex fixed mb-40 justify-between px-7 md:px-20 items-center h-32 w-full z-[20] top-0">
    <!--Logo du header-->
    <RouterLink to="/" class="clickable">
      <img src="../public/images/LogoS.svg"  />
       
    </RouterLink>

    <!--Bouton pour afficher menu-->
    <button class="clickable relative  w-fit" aria-controls="menu" :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']">
      <Menu />

    </button>

    <!--Bouton pour cacher menu-->


    <!--Menu hamburger déroulé-->
    <div class=" menu-container fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000 z-[60]"
      :class="[' bg-[#2300FB]  ', menuOuvert ? 'translate-x-0' : '']">
      <div class="flex justify-between md:px-20 px-7 items-center h-36 w-full">
        <RouterLink to="/accueil">
          <div class=" text-[25px] text-[#2300FB] ml-[30px]"></div>
        </RouterLink>

        <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']">
          <button aria-controls="menu" :aria-expanded="menuOuvert" class=" clickable h-fit w-fit">
            <MenuOuvert />
          </button>
        </div>
      </div>
      <div class="menu-items">
        <div class="menu-items-container">
        <RouterLink class="clickable" to="/">
          <span>
          <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']" class="clickable menu-item">
              <div class="menu-item-number">01</div>
              <div class="menu-item-name">Home</div>
              <div class="menu-item-sub hidden sm:flex">Briefly about the main thing</div>
              <div class="menu-item-icon">
                <img src="../public/images/arrowmenu.svg" class="hidden md:flex" alt="arrow" />
              </div>
            </div>
          </span>
          <div class="line"></div>
        </RouterLink>

            <RouterLink class="clickable" to="/contact">
          <span>
            <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']" class="menu-item">
              <div class="menu-item-number">02</div>
              <div  class="menu-item-name">About</div>
              <div class="menu-item-sub hidden sm:flex">Let's get to know each other</div>
              <div class="menu-item-icon">
                <img src="../public/images/arrowmenu.svg" class="hidden md:flex" alt="arrow" />
              </div>
            </div>
          </span>
          <div class="line"></div>
        </RouterLink>
         
       

        <RouterLink class="clickable" to="/projects">
          <span>
            <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']" class="menu-item">
              <div class="menu-item-number">03</div>
              <div class="menu-item-name">Projects</div>
              <div class="menu-item-sub hidden sm:flex">Discover my work</div>
              <div class="menu-item-icon">
                <img src="../public/images/arrowmenu.svg" class="hidden md:flex" alt="arrow" />
              </div>
            </div>
          </span>
          <div class="line"></div>
          
            
        </RouterLink>
        <RouterLink class="clickable" to="contact">
          <span>
            <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : '']" class="menu-item">
              <div class="menu-item-number">04</div>
              <div class="menu-item-name">Contact</div>
              <div class="menu-item-sub hidden sm:flex">Let's look together</div>
              <div class="menu-item-icon">
                <img src="../public/images/arrowmenu.svg" class="hidden md:flex" alt="arrow" />
              </div>
            </div>
          </span>
          <div class="line"></div>
          
        </RouterLink>

      </div>
    </div>
    </div>
  </header>
 





  <main>
    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-4 p-0 md:m-4 md:p-2" />
    </Suspense>
  </main>


</template>

<style>
.noise::before{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  /* opacity: 1; */
  opacity: .03;
  z-index: 1500;
  pointer-events: none;
  background: url(../public/images/noise.gif);
}
::-webkit-scrollbar{
  display: none;
}
html,body {
  overflow-x:hidden;
  user-select: none;
  cursor: none;
}
.menu-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #2b120b;
  z-index: 100;
  transform: translateX(500%);
  font-family: 'ArsenicaDemi';


}
.menu-close {
  position: absolute;
  right: 30px;
  top: 40px;
  transform: translate(-50%, -50%);
}
.menu-close ion-icon {
  font-size: 25px;
  color: #FFF8EF;
}
.menu-items {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.menu-items-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 70%;
  margin-left: 10%;
  margin-right: 20%;
}
.menu-items .menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  font-size: 40px;
  overflow: hidden;
  cursor: pointer;
  font-weight: lighter;
}

.menu-items .line {
  width: 100%;
  height: 1px;
  transform-origin: left;
  overflow: hidden;
  background-color: antiquewhite;
}

.menu-item .menu-item-number {
  font-style: italic;
  padding: 0px 20px;
  color: antiquewhite;
  font-size: 25px;
  font-family: 'ClashRegu';
}
.menu-item .menu-item-name {
  text-transform: uppercase;
  color: antiquewhite;
}
.menu-item .menu-item-sub {
  font-size: 15px;
  align-self: flex-start;
  padding: 25px 0px;
  color: antiquewhite;
}
.menu-item .menu-item-icon {
  padding: 0px 20px;
}

.menu-item .menu-item-icon ion-icon {
  font-size: 25px;
  transform: rotate(45deg);
  color: antiquewhite;
  font-weight: lighter;
}

span {
  overflow: hidden;
}
header .menu-open ion-icon {
  font-size: 25px;
  color: antiquewhite;
}

.logo {
  font-size: 25px;
  font-weight: 400;
  margin-left: 30px;
}
.container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
.container h1 {
  font-size: 350px;
  letter-spacing: 500px;
  font-weight: lighter;
  opacity: 0;
}
.bg-image p {
  text-align: center;
  margin-top: 10px;
}
.bg-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 700px;
  background-color: antiquewhite;
  display: block;
  overflow: hidden;
  transform: translate(-50%, -50%);
}
.image {
  width: 500px;
  height: 700px;
  background-image: url(./bg.jpg);
  background-position: center center;
  background-size: cover;
  transform: translateY(1000px);
}
.menu-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #2b120b;
  z-index: 100;
  transform: translateX(500%);
}
.menu-close {
  position: absolute;
  right: 30px;
  top: 40px;
  transform: translate(-50%, -50%);
}
.menu-close ion-icon {
  font-size: 25px;
  color: antiquewhite;
}
.menu-items {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.menu-items-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 70%;
  margin-left: 10%;
  margin-right: 20%;
}
.menu-items .menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  font-size: 40px;
  overflow: hidden;
  cursor: pointer;
  font-weight: lighter;
}

.menu-items .line {
  width: 100%;
  height: 1px;
  transform-origin: left;
  overflow: hidden;
  background-color: antiquewhite;
}

.menu-item .menu-item-number {
  font-style: italic;
  padding: 0px 20px;
  color: antiquewhite;
  font-size: 25px;
}
.menu-item .menu-item-name {
  text-transform: uppercase;
  color: antiquewhite;
}
.menu-item .menu-item-sub {
  font-size: 15px;
  align-self: flex-start;
  padding: 25px 0px;
  color: antiquewhite;
}
.menu-item .menu-item-icon {
  padding: 0px 20px;
}

.menu-item .menu-item-icon ion-icon {
  font-size: 25px;
  transform: rotate(45deg);
  color: antiquewhite;
  font-weight: lighter;
}

span {
  overflow: hidden;
}
.cursor {
 
  height: 20px;
  width: 20px;
  pointer-events: none;
  z-index: 100;
  position: fixed;
  background: #1D05AE;
  border-radius: 50%;
  box-shadow: 0 0 10px #1D05AE, 0 0 20px #1D05AE, 0 0 30px #1D05AE, 0 0 40px #1D05AE,
    0 0 70px #1D05AE, 0 0 80px #1D05AE, 0 0 100px #1D05AE, 0 0 150px #1D05AE;
}
:hover{
  cursor: none;
}
.hover{
  height: 70px;
  width: 70px;
  pointer-events: none;
  z-index: 100;
  position: fixed;
  background: transparent;
  border-radius:  50%;
  box-shadow: 0 0 10px #1D05AE, 0 0 20px #1D05AE, 0 0 30px #1D05AE, 0 0 40px #1D05AE,
    0 0 70px #1D05AE, 0 0 80px #1D05AE, 0 0 100px #1D05AE, 0 0 150px #1D05AE;
}

.cursor::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    border: 8px solid gray;
    border-radius: 50%;
    opacity: .5;
    top: -8px;
    left: -8px;
    animation: cursorAnim2 .5s infinite alternate;
}

@keyframes cursorAnim {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.7);
    }
}

@keyframes cursorAnim2 {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.4);
    }
}

@keyframes cursorAnim3 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(3);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}

.expand {
    animation: cursorAnim3 .5s forwards;
    border: 1px solid #2300FB;
}
</style>

