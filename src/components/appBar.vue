<script setup lang="ts">
import { computed, ref } from 'vue'

const tabs = ref(null)
const activeFab = computed(() => {
  switch (tabs.value) {
    case 'one': return { color: 'success', icon: 'mdi-share-variant' }
    case 'two': return { color: 'red', icon: 'mdi-pencil' }
    case 'three': return { color: 'green', icon: 'mdi-chevron-up' }
    default: return {}
  }
})
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="indigo" absolute flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Visor de Logs</v-app-bar-title>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical">
          <v-icon></v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tabs" align-tabs="title" slider-color="pink">
            <v-tab text="Home" value="one" to="/"></v-tab>

            <v-tab text="Tabla" value="two" to="/tablaLogs"></v-tab>

            <v-tab text="Grafica" value="three" to="graficaLogs"></v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-main>
        <v-sheet height="0"></v-sheet>
      </v-main>

      <v-fab :key="activeFab.icon" :color="activeFab.color" :icon="activeFab.icon" class="ms-4 mb-4"
        location="bottom start" size="64" absolute app appear></v-fab>
    </v-layout>
  </v-card>
</template>
