<script setup lang="ts">
import { computed, ref } from 'vue'

const tabs = ref(null)

const rutas = [{ruta: '/', nombre: "home"},{ruta: 'tabla', nombre: "tabla"}, {ruta: 'grafica', nombre: "grafica"}]
</script>

<template>
  <v-app-bar color="indigo" absolute flat>

<v-app-bar-title>Visor de Logs</v-app-bar-title>

<template v-slot:extension>
  <v-tabs v-model="tabs" align-tabs="title" slider-color="pink">
    <v-tab v-for="enlace in rutas" :text=enlace.nombre :to=enlace.ruta></v-tab>
  </v-tabs>
</template>
</v-app-bar>
</template>
