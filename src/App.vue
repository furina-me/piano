<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Menu from "@/pages/Menu.vue";
import Game from "@/pages/Game.vue";
</script>

<template>
  <Menu/>
<!--  <Game/>-->
</template>

<style scoped>
.page{
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: aliceblue;
  top: 0;
  left: 0;
}
</style>
