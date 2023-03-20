
<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  mounted() {
    window.scrollTo(0,0)
  }
}

</script>



<template> 


<section >
  <div class="marquee">
    <span>
      contact me / contact me / contact me / contact me / contact me /
      contact me / contact me / contact me / contact me / contact me /
      contact me / contact me / contact me /
    </span>

  </div>
  <div class="contact-section col lg:flex hidden ">
    <div class="contact-details ">
      <p>Let's take the next step.<br />
      Contact me and <br />
    Let's work.</p>
    <div class=" social-media item">
      <h3 >Phone</h3>
      <span>07 71 01 77 61</span>
    
    </div>
    <div class=" contact-info">
      <div class="email item">
        <h3>Get in touch</h3>
        <span><a href="mailto:souhayl.sedira23@gmail.com">souhayl.sedira23@gmail.com</a></span>
      </div>
      <div class=" address item">
      <h3 >location</h3>
      <span>MONTBELIARD - FRANCE</span> 
    </div>
    </div>


    </div>
    <form class="contact-form col " accept-charset="UTF-8" action="https://www.formbackend.com/f/ff488827414008ca" method="POST">
    
    <div class="wrapper">
      <div class="row">
        <input type="text" id="First Name" name="First Name" placeholder="First Name">
        <input type="text" id="Last Name" name="Last Name" placeholder="Last Name">
        
      </div>
      <div class="row">
        <input type="text" id="Email" name="Email" placeholder="Email">
        <input type="tel" id="Phone" name="Phone" placeholder="Phone">
        
      </div>
      <div class="row">
        <textarea type="text" name="message" id="message"  placeholder="Message" cols="30" rows="5"></textarea>
      </div>
      <div class="row submit">
        <button type="submit">
          <a >Submit </a></button>
          <button type="submit"> <div class="send-icon">
         <img src="../assets/images/arrowmenu.svg"/>
        </div></button>
      </div>
    </div>
  </form>
  </div>
  <div class="contact-section lg:hidden flex col2  ">
    <div class="contact-details2 lg:hidden ">
      <p>Let's take the next step.<br />
      Contact me and <br />
    Let's work.</p>
    <div class=" social-media item2">
      <h3 >Get in touch</h3>
        <span>souhayl.sedira23@gmail.com</span>
    </div>
    
    <div class=" contact-info">
      <div class="email item2">
        <h3 >Phone</h3>
      <span>07 71 01 77 61</span>

      </div>


    </div>
    <div class=" address item2">
      <h3 >location</h3>
      <span>MONTBELIARD - FRANCE</span>
    </div>


    </div>

  </div>
  <form class="contact-form col2 lg:hidden flex " accept-charset="UTF-8" action="https://www.formbackend.com/f/ff488827414008ca" method="POST">
    
    <div class="wrapper2">
      <div class="row clickable">
        <input type="text" id="First Name" name="First Name" placeholder="First Name">
        <input type="text" id="Last Name" name="Last Name" placeholder="Last Name">
        
      </div>
      <div class="row clickable">
        <input type="text" id="Email" name="Email" placeholder="Email">
        <input type="tel" id="Phone" name="Phone" placeholder="Phone">
        
      </div>
      <div class="row">
        <textarea type="text" name="message" id="message"  placeholder="Message" cols="30" rows="5"></textarea>
      </div>
      <div class="row2 submit clickable">
        <button type="submit" >
          <a class="min-w-[125px] min-h-[50px]">Submit .</a></button>
          <button type="submit"> <div class="send-icon clickable">
         <img src="../assets/images/arrowmenu.svg"/>
        </div></button>
      </div>
    </div>
  </form>
</section>

    
</template>


<style scoped>
html, body {
  width: 100%;
  height: 100%;
  color: white;

}
.marquee {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  padding-top: 2em;
}

.marquee span {
  font-family: 'ArsenicaDemi';;
  
  color: #2300FB;
  font-size: 4em;
  text-transform: uppercase;
  display: inline-block;
  padding: 6vw;
  padding-left: -10%;
  animation: marquee-animation 80s linear infinite;
}

@keyframes marquee-animation {
  0% {
    transform:translate(0, 0);
  
  }
  100% {
    transform: translate(-100%, 0);
  }
}
.contact-form {
  margin-top: -4%;
  margin-left: 20px;
}
.col {
  width: 50%;
  padding: 1em 3em;
}
.col2 {
  width: 100%;
  padding: 1em  0 1em;
}



.wrapper2 {
  margin-left: -20px;
  margin-right: 20px;
}

.contact-section h3 {
  text-transform: uppercase;
  color: #747474;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
}

.contact-section span {
  text-transform: uppercase;
}

.contact-details p {
  font-size: 40px;
  line-height: 60px;
  padding-top: 0,8em;
  font-family: 'ClashMed';
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
  padding: 4em 1em 0 0;
  font-family: 'ClashRegu';
  font-size: 15px;
  color: white;
}

.item2 {
  padding: 2em 0 0 0;
  font-family: 'ClashRegu';
  font-size: 15px;
  color: white;
}

.contact-info {
  display: flex;
}



input {
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #747474;
  font-size: 24px;
  padding: 0.4em;
  width:  100%;
  color:white;
  font-family: "ClashRegu";
  margin-bottom: 0.4em;
}
.row {
  display: flex;
  margin: 2em 0 !important;
  
}
.row2 {
  display: flex;
  margin: 2em 0 !important;
 
}

.submit {
  width: 100%;
  justify-content: space-between;

}
.submit a {
  text-decoration: none;
  color: #2300FB;
  font-family: 'ArsenicaLi' ;
  font-weight: 600;
  font-size: 35px;
  text-transform: uppercase;
}


.send-icon {
  font-size: 60vw;
}

textarea#message {
  width: 100%;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #747474;
  font-size: 24px;
  padding: 0.4em;
  color:white;
  font-family: "ClashRegu";
}

@media (min-width: 900px) {
  html, body { height: 100%;}

  .contact-section { width: 100%;
  display: flex;}
}

</style>