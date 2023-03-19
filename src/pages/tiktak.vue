<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<template>
    <body>
    <div class="header h-[40vw] md:h-[20vw] ">
        <div class="content ">
            <h1>TikTak</h1>
        </div>
    </div>
    <div class="slider-container">
        <div class="slider">
            <div class="img img1"></div>
            <div class="img img2"></div>
            <div class="img img3"></div>
            <div class="img img4"></div>
            <div class="img img5"></div>
        </div>
    </div>
    <div class="contact-section col flex  ">
    <div class="contact-details ">

    <div class=" contact-info flex">
      <div class=" social-media item ">
      <h3 >Links</h3>
      <span><a  class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://docs.google.com/document/d/1LV59d1Z6BJPO2WHa6Vjv9P_7ARGk5WR6wf9E8WhYeYo/edit">NUDGE MARKETING</a> - <a class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://www.figma.com/proto/Iunr0lV7Njun7MFrXCLiAH/SAE301-Souhayl-Sedira?node-id=20-121&starting-point-node-id=20%3A121&scaling=scale-down-width">MOCKUP</a> - <a href="https://tiktaksouhayl.netlify.app/" class="clickable hover:text-[#2300FB] underline hover:text-[16px]">WEB SITE</a></span>


    
    </div>

    </div>
    <h3 class="item">Creation process</h3>
    <p class="text-[14px] md:text-[20px]">This project was carried out as part of an SAE (examination) which lasted three and a half days. 
      The objective was to create a website allowing us to customise and order connected watches. So first I had to develop project management tools such as clockify or GANTT to allow me to organise my tasks with the limited time available. Then I had to develop a nudge marketing strategy. Then I started the design part with the creation of the customizable watch on illustrator then the website model on figma. And finally the development part with the data management and the creation of fonts and tables in sql on supabase, to finish with the integration in vuejs and talwindcss.

The site allows you to customise your own watch with a range of colours provided. The user has to connect via google to be able to register his orders and can find them in a dedicated page. This site is hosted by netlify and I created its domain name on infomaniak.
</p></div>
  </div>
</body>
<RouterLink to="/projects">
<a
      href="#top"
      class="fixed bottom-20 right-[5vw] z-10 flex h-16 w-20 items-center justify-center bg-[#2300FB] text-xl font-['ArsenicaLi'] text-white opacity-50 transition-all hover:h-16 hover:w-24 hover:opacity-100"
      ><h2> Back ↞</h2></a></RouterLink>
      <section>
  <div>
        <div class="get-in-touch h-[100vw] md:h-[50vw] ">
            <RouterLink to="contact" class="hover:text-[#2300FB] text-[#e0e0e0] z-10 hover:scale-110 md:text-[100px] text-[40px]"><h1 class=" underline">CONTACT ME</h1></RouterLink>
            <p class="text-[15px] text-center md:text-[20px] mx-3  mt-[-100px] md:mt-[-150px]">If you have a project or a general question, do not hesitate to contact me</p>
            <img class=" md:w-[40vw] w-[70vw] md:mt-[-10vw] mt-[-25vw] " src="../assets/images/✧.svg" alt="" />
        </div>
        </div>
</section>
</template>

<style scoped>

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
    font-family:'ArsenicaDemi';
}
.get-in-touch p{
    font-family:'ClashRegu';
    
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
html, body {
  width: 100%;
  height: 100%;
  color: #e0e0e0;

}
body{
  font-family: 'ArsenicaDemi';
  
  color: #e0e0e0;
}
.contact-section h3 {
  text-transform: uppercase;
  color: #747474;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
}
.col {
  width:100%;
  padding: 1em 3vw;
}
.contact-section span {
  text-transform: uppercase;
}

.contact-details p {
  
  
  padding-top: 0,8em;
  font-family: 'ClashRegu';
  color: white;
}
.contact-details2 p {
  font-size: 28px;
  line-height: 40px;
  padding-top: 0,8em;
  font-family: 'ClashMed';
  color: white;
}
.item {
  padding: 4em 0 0 0;
  font-family: 'ClashMed';
  font-size: 15px;
  color: #e0e0e0;
}

.item2 {
  padding: 2em 0 0 0;
  font-family: 'ClashRegu';
  font-size: 15px;
  color: #161616;
}

.contact-info {
  display: flex;
}

.header{
  display: flex;
  align-items: flex-end;
  
  width: 100%;
}
.header .content{
  font-size: 12vw;
  line-height: 90%;
  margin-left: 20px;
  font-weight: lighter;
  font-family: 'ArsenicaLi';
  color: white;
}
.slider-container{
  overflow: hidden;
}
.slider{
  height: 60vw;
  position: relative;
  width: 500%;
  overflow: hidden;
  left: 0;
  animation: 30s animate infinite;
}
@keyframes animate {
  0%{
    left: 0%;
  }
  10%{
    left: 0%;
  }
  25%{
    left: -100%;
  }
  30%{
    left: -100%;
  }
  55%{
    left: -200%;
  }
  60%{
    left: -200%;
  }
  85%{
    left: -300%;
  }
  90%{
    left: -400%;
  }
  100%{
    left: -400%;
  }
}
.img{
  width: 20%;
  float: left;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
}
.img1{
  background-image: url(../assets/images/projet/TIKTAKSVG.svg);
}
.img2{
  background-image: url(../assets/images/projet/TIKTAK2.png);
}
.img3{
  background-image: url(../assets/images/projet/TIKTAK3.png);
}
.img4{
  background-image: url(../assets/images/projet/TIKTAK4.png);
}
.img5{
  background-image: url(../assets/images/projet/TIKTAK5.png);
}</style>