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
            <h1>MMISCP</h1>
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
      <span><a  class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href="https://mmiscp.ilkaymenn.fr/">WEBSITE</a>-<a  class="clickable hover:text-[#2300FB] underline hover:text-[16px]" href=" https://www.figma.com/file/iPSMAxSFeMZKC0yVjEp13O/Untitled?node-id=0%3A1&t=MHbfQmd16kfq02JC-1">MOCKUP</a></span>


    
    </div>

    </div>
    <h3 class="item">Creation process</h3>
    <p class="text-[14px] md:text-[20px]">This group project was done during my second semester in my second year at BUT MMI. The objective was to create a website on wordpress exposing the horrific creations of our group. I did the website design, the graphic identity,the wordpress integration and SEO management.

</p></div>
  </div>
</body>
<RouterLink to="/projects">
<a
      href="#top"
      class="fixed bottom-20 right-[5vw] z-20 flex h-16 w-20 items-center justify-center bg-[#2300FB] text-xl font-['ArsenicaLi'] text-white opacity-50 transition-all hover:h-16 hover:w-24 hover:opacity-100"
      ><h2> Back ↞</h2></a></RouterLink>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'ArsenicaDemi';
  background-color: #e0e0e0;
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
  background-image: url(../assets/images/projet/MMISCP1.svg);
}
.img2{
  background-image: url(../assets/images/projet/MMISCP2.png);
}
.img3{
  background-image: url(../assets/images/projet/MMISCP3.png);
}
.img4{
  background-image: url(../assets/images/projet/MMISCP4.png);
}
.img5{
  background-image: url(../assets/images/projet/MMISCP5.png);
}</style>