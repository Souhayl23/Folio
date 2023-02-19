<script setup lang="ts">
import { ref } from "vue";

import { Bars3Icon } from "@heroicons/vue/24/outline";


const menuState = ref(true);
</script>

<template class="fixed">
  
  <div
    class="flex justify-between  overflow-hidden py-4 light:border-0"
  >
    <div class="md:flex justify-start hidden items-center flex-grow-0 flex-shrink-0 w-[113px] gap-4">
    <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative hover:text-white   text-white gap-2 px-4 py-2 md:ml-[165px] rounded-[48px]"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm text-center  ">mes projets</p>
    </div>
  </div>
  <div class="h-fit flex ml-4 md:ml-[160px] box-align:center">
    <RouterLink class="" to="/">
      <img src="../../../public/images/Logo S.svg" class="h-fit w-8 md:w-12 place-content-center " />
      <span class="sr-only">Logo du site Portfolio</span>
    </RouterLink>
  </div>
    <!--Menu du header : MOBILE -->
    <div class="flex flex-col mr-4 md:hidden">
      <button id="btnMenu" @click="menuState = !menuState" aria-controls="menu">
        <Bars3Icon class="h-10 w-10 stroke-white" />
        <span class="sr-only">Menu hamburger</span>
      </button>
    </div>

    <!--Menu du header : TAB&ORDI -->
    <div class="hidden flex-row items-center justify-center gap-4 md:flex">





      <RouterLink
        
        to="/connexion"
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative hover:text-black text-white  hover:bg-[#2300FB] gap-4 px-4 py-2 mr-[165px] rounded-[60px] border border-white"
        @click="menuState = !menuState"
      >
        <p class="flex-grow-0 flex-shrink-0 text-sm text-center ">me contacter</p>
      </RouterLink>
      
    </div>
  </div>

  <!--Menu du header : CONTENU DU MENU MOBILE -->
  <!--Menu du header : CONTENU DU MENU MOBILE -->
  <!--Menu du header : CONTENU DU MENU MOBILE -->
  <section
    :class="{ hidden: menuState }"
    aria-labelledby="btnMenu"
    class="  w-full h-full bg-zinc-800 md:hidden  light:bg-zinc-100"
  >
    <div class="flex  items-center justify-center gap-4 p-4">






        <p class="w-fit">Se connecter</p>
 
    </div>
  </section>
</template>
<style scoped>

p { font-family: 'ArsenicaRegular';
    

}

</style>
