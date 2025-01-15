<template>
 <div class="comten">    

  <img src="./icons/login-sem.png" alt="">  
<form action="#" @submit.prevent="Autenticaçâo">

  <label for="nome" style="color: black;">Email:
  <input  v-model="nome" type="text" placeholder="E-mail">
  </label>
 <br>
 <label for="senha" style="color: black;">Senha:
 <input  v-model="senha" type="password" placeholder="Senha">
</label>
 <button type="submit">Enviar</button>
 </form>
 <p v-if="Error">{{  Error  }}</p>
 </div>
</template>
<script>

 import { setAuthentication  } from '@/routes';

export default{
 name: "formulario",
 data(){
  return{
    nome:'',
    senha:'',
    Error:''
  }
},
methods:{
    Autenticaçâo(){
             if(this.nome === 'levi' && this.senha === '1821'){
                   this.Error = "logado com sucesso"
                   setAuthentication (true)
                   this.$router.push('/Listagem')
             }else{
                this.Error = "login invalido"
                console.log("Erro")

             }    
    }
}
}
</script>

<style scoped >
*{
    margin: 0;
    padding: 0;
}
div{
    height: 400px;
    width: 300px;
    padding: 100px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
label > input{
    border-radius: 20px;
    height: 25px;
}
button{
    border-radius: 20px;
    margin-top: 20px;
    height: 30px;
    width: 60px;
}

img{
    width: 150px;
    height: 100px;
    position: relative;
    bottom: 25px;
}
</style>