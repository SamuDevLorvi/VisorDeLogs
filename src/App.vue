<script setup lang="ts">
import appBar from './components/appBar.vue';
</script>

<template>
  <v-card>
    <v-layout>
      <appBar/>
      <v-main>
        <v-sheet>
          <RouterView/>
        </v-sheet>
      </v-main>
    </v-layout>
  </v-card>
    
</template>
