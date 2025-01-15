<template>
<div class="card">
   
<div class="cover">
     <img src="./icons/IMG/Book_frente.png" alt="">
</div>
<forms/>
</div>
</template>
<script>
import forms from './forms.vue';
export default{
 name: 'book',
 components:{
    forms
 }
}
</script>
<style>
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: Arial, Helvetica, sans-serif;
}
body{  
    height: 100vh;
    width: 100%;
    background-image: url(/IMG/biblioteca.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

@keyframes abrirCarta {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(-135deg);
    }
}

.card{
    position: relative;
    width: 300px;
    height: 400px;
    background-color: #efdecc;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 10px 0 25px black;
    transform: perspective(2000px);
    transform-style: preserve-3d;
    transition: all 1s ease;
}


.cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-origin: left;
    transform-style: preserve-3d;


    animation: abrirCarta 2s ease forwards;
}
.cover img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.card:hover .cover{
    transform: rotateY(-135deg);
    
}
</style>