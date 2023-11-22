<template>
  <div class="page page-menu">
    <div v-for="music in musicList">
      {{music.title}}
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const musicList = ref([])

onMounted(() => {
  fetch("./audios/config.json")
      .then(resp => resp.json())
      .then((data) => musicList.value = data)
})
</script>

<style scoped>

</style>