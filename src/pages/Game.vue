<template>
  <div class="page page-game">
    <div class="key-container">
      <div class="key-button" :pressed="keyButtons[key]" v-for="key in Object.keys(keyButtons)">
        <div class="key-label">{{ key }}</div>
      </div>
      <button @click="music.play">
        play
      </button>
    </div>

  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import AudioPlayer from "@/utilities/AudioPlayer";

const keyButtons = reactive(
    {
      q: false,
      w: false,
      e: false,
      i: false,
      o: false,
      p: false
    }
)

const music = ref(new AudioPlayer())

const onKeyPress = (event) => {
  console.log(event)
  if (event.key === "q" || event.key === "w" || event.key === "e" || event.key === "i" || event.key === "o" || event.key === "p") {
    const newState = event.type === "keydown" ? true : event.type === "keyup" ? false : undefined
    if (newState !== undefined && keyButtons[event.key] !== newState) keyButtons[event.key] = newState
  }
}

onMounted(() => {
  document.addEventListener("keyup", onKeyPress)
  document.addEventListener("keydown", onKeyPress)
})


</script>

<style scoped>
.key-container {
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
}

.key-container > .key-button {
  width: 12vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #222222aa;
}

.key-container > .key-button:not(:last-child) {
  border-right: 2px solid #ffffffaa;
}

.key-container > .key-button[pressed=true] {
  opacity: 0.8;
}

.key-container > .key-button > .key-label {
  text-align: center;
  font-size: 6vw;
  font-weight: 100;
  color: #ffffff;
  text-transform: capitalize;
}
</style>