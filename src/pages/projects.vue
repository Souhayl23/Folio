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
    <div class="header">
        <div class="content">
            TikTak
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
</body>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'ArsenicaDemi';
  background-color: #e0e0e0;
  color: #161616;
}
.header{
  display: flex;
  align-items: flex-end;
  height: 40vh;
  width: 100%;
}
.header .content{
  font-size: 12vw;
  line-height: 90%;
  margin-left: 20px;
  font-weight: lighter;
}
.slider-container{
  overflow: hidden;
}
.slider{
  height: 70vh;
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
  background-image: url(../../public/images/projet/TIKTAKSVG.svg);
}
.img2{
  background-image: url(../../public/images/projet/TIKTAKSVG.svg);
}
.img3{
  background-image: url(../../public/images/projet/TIKTAKSVG.svg);
}
.img4{
  background-image: url(../../public/images/projet/TIKTAKSVG.svg);
}
.img5{
  background-image: url(../../public/images/projet/TIKTAKSVG.svg);
}</style>