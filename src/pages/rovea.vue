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
            <h1>Rovea</h1>
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
      <span>
        <a  class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://www.roveaskin.fr">WEBSITE</a> - 
        <a  class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://www.tiktok.com/@roveaskin">TIKTOK</a>
    </span>


    
    </div>

    </div>
    <h3 class="item">Creation process</h3>
    <p class="text-[14px] md:text-[20px]">Rovea is a project I set up alongside my studies by opening my own business. It's an e-commerce store selling Korean cosmetics create on Shopify. This project enabled me to acquire many skills in different areas: creating a visual identity with strong branding to stay in the minds of my customers, developing nudge marketing strategies to have a store that converts as much as possible, learning copywriting to create striking product sheets and e-mails that convert, respecting the legal aspects of setting up a business and an online store, optimizing the SEO of my website so as to have a free and optimized source of traffic, but also paid sources of acquisition such as Tiktok ADS, Meta ADS or Google ADS, and above all meeting the expectations of my target customer by having defined a precise and optimized persona. Today, Rovea is a great success on my scale, generating an average of 2,000 euros a day, and I'm constantly learning about entrepreneurship and e-commerce store creation. It's a real challenge that makes me evolve every day, and I'm very proud of it.
</p></div>
  </div>
</body>
<RouterLink to="/projects">
<a
      href="#top"
      class="fixed bottom-20 right-[5vw] z-20 flex h-16 w-20 items-center justify-center bg-[#2300FB] text-xl font-['ArsenicaLi'] text-white opacity-50 transition-all hover:h-16 hover:w-24 hover:opacity-100"
      ><h2> Back ↞</h2></a></RouterLink>
<section>
  <div>
        <div class="get-in-touch h-[100vw] md:h-[50vw] ">
            <RouterLink to="contact" class="hover:text-[#2300FB] text-[#e0e0e0] z-10 hover:scale-110 md:text-[100px] text-[40px]"><h1 class=" underline">CONTACT ME</h1></RouterLink>
            <p class="text-[15px] text-center md:text-[20px] mx-3  mt-[-100px] md:mt-[-150px]">If you have a project or a general question, do not hesitate to contact me</p>
            <img class=" md:w-[40vw] w-[70vw] md:mt-[-10vw] mt-[-25vw] " src="../assets/images/✧.svg" alt="" />
            <div class=" social-media  font-['ClashMed']  text-white">
      <span><a  class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://stupendous-tiramisu-ed55ba.netlify.app/images/CV-SOUHAYL_SEDIRA.pdf">DOWNOALD CV FR ⇩</a> - <a class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://stupendous-tiramisu-ed55ba.netlify.app/images/CV-SOUHAYL_SEDIRA-ANGLAIS.pdf"> DOWNOALD CV ENG ⇩</a> </span>


    
    </div>
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
  background-image: url(../assets/images/projet/rovea1.svg);
}
.img2{
  background-image: url(../assets/images/projet/rovea2.png);
}
.img3{
  background-image: url(../assets/images/projet/rovea3.png);
}
.img4{
  background-image: url(../assets/images/projet/ROVEA4.png);
}
.img5{
  background-image: url(../assets/images/projet/rovea5.svg);
}</style>
