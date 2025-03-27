<script setup lang="ts">
import AppBar from './components/appBar.vue';
</script>

<template>
  <div>
    <AppBar></AppBar>
  </div>
  <main>
    <RouterView></RouterView>
  </main>
</template>
