<script lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap';



</script>



<template> 
   <div class="projects">
      <div class="projects-contain">
        <div class="project-h1">
          <h1>Projects:</h1>
        </div>
        <div class="contain c1">
          <div class="hover">
            <ion-icon name="return-down-forward"></ion-icon>
          </div>
          <div class="c-title"><a href="">Glamour</a></div>
        </div>
        <div class="contain c2">
          <div class="hover">
            <ion-icon name="return-down-forward"></ion-icon>
          </div>
          <div class="c-title"><a href="">Fascinate</a></div>
        </div>
        <div class="contain c3">
          <div class="hover">
            <ion-icon name="return-down-forward"></ion-icon>
          </div>
          <div class="c-title"><a href="">Charm</a></div>
        </div>
        <div class="contain c4">
          <div class="hover">
            <ion-icon name="return-down-forward"></ion-icon>
          </div>
          <div class="c-title"><a href="">Delight</a></div>
        </div>
        <div class="contain c5">
          <div class="hover">
            <ion-icon name="return-down-forward"></ion-icon>
          </div>
          <div class="c-title"><a href="">Appeal</a></div>
        </div>
        <div class="contain c6">
          <div class="hover">
            <ion-icon name="return-down-forward"></ion-icon>
          </div>
          <div class="c-title"><a href="">Engage</a></div>
        </div>
      </div>
    </div>
    
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #161616;
    font-family: 'Monument';
    color: white;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
}
::-webkit-scrollbar{
    display: none;
}
.projects-contain{
    position: absolute;
    display: flex;
    top: 20%;
    align-items: center;
    justify-content: space-between;
    min-height: 300vh;
    width: 100%;
    flex-direction: column;
}
.contain{
    position: relative;
    width: 560px;
    height: 380px;
    margin: 50px 400px 120px 80px;
}
.contain .c-title{
    position: absolute;
    left: 40px;
    bottom: -40px;
    color: #fff;
    font-style: italic;
    text-transform: lowercase;
    font-size: 50px;
}
.contain .c-title a{
    transition: 1.6s;
    color: #fff;
    text-decoration: none;
}
.contain:hover .c-title a{
    transition: 1.6s;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px white;
    text-decoration: underline .5px;
}
.project-h1{
    position: relative;
    width: 660px;
    height: 10px;
    margin: 20px 400px 100px 80px;
}
.project-h1 h1{
    font-size: 80px;
    text-transform: uppercase;
    text-decoration: underline .5px;
    font-weight: lighter;
}
.hover{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.hover ion-icon{
    font-size: 150px;
    opacity: 0;
    transition: .6s;
}
.c1{
    background-image: url(../../public/images/projet/TIKTAKMINISVG.svg);
}
.c2{
    background-image: url(assets/img2.jpg);
}
.c3{
    background-image: url(assets/img3.jpg);
}
.c4{
    background-image: url(assets/img4.jpg);
}
.c5{
    background-image: url(assets/img5.jpg);
}
.c6{
    background-image: url(assets/img6.jpg);
}
.c1,
.c2,
.c3,
.c4,
.c5,
.c6{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: .6s;
}
.contain:hover .hover ion-icon{
    opacity: 1;
    z-index: 100;
    transition: .6s;
}
.contain:hover .hover{
    background-color: rgba(0, 0, 0, 0.5);
}
@media(max-width: 1150px){
    .contain,
    .project-h1{
        margin: 50px 230px 90px 95px;
    }
}
@media(max-width: 900px){
    .contain,
    .project-h1{
        width: 300px;
        height: 200px;
        margin: 50px 100px 70px 80px;
    }
    .contain .c-title{
        font-size: 25px;
        bottom: -20px;
    }
    .project-h1{
        margin-bottom: -100px;

    }
    .project-h1 h1{
        font-size: 35px;
    }
    .hover ion-icon{
        font-size: 70px;
    }
}
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f0eed7;
  color: #161616;
  overflow: hidden;
}
header {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  height: 80px;
  width: 100%;
}
header .img img {
  width: 60px;
  padding: 0px 20px;
  filter: invert(0.9);
}
header .heading {
  font-family: "Neutral Face";
}
header .menu img {
  width: 35px;
  padding: 0px 50px;
}
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.inner-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: transparent;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) ease-in-out;
}
.inner-container .inner-inner-container {
  width: 100%;
  height: 80%;
  margin-top: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-left: 1px solid rgba(39, 39, 39, 0.281);
}

.top-section h1 {
  font-size: 3rem;
  font-family: "Kenoky";
  font-weight: lighter;
  text-transform: uppercase;
}
.top-section p {
  padding: 0.5rem 0px;
  font-family: "Neutral Face";
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding-left: 2px;
}
.inner-container .bottom-section {
  font-size: 25rem;
  margin-bottom: 50px;
  font-family: "Kenoky";
  font-weight: lighter;
  color: #8f0000;
}
.inner-container:hover .top-section h1 {
  transition: color 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  color: white;
}
.inner-container:hover .top-section p {
  transition: color 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  color: white;
}

.inner-container:hover .bottom-section {
  transition: color 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  color: white;
}
.inner-container-1:hover {
  background-image: url(1.jpg);
}

.inner-container-2:hover {
  background-image: url(2.jpg);
}

.inner-container-3:hover {
  background-image: url(3.jpg);
}

.inner-container-4:hover {
  background-image: url(4.jpg);
}

</style>


