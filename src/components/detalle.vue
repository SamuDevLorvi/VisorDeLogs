<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  detalles: Array[{}]
});
</script>

<template>
  <div class="detalle">
    <h2>Detalles del Registro</h2>
      <!-- <ul>
        <li v-for="item in props">
          {{ item.name }}
        </li>
      </ul> -->
        <p><strong>Nombre:</strong> {{ props.detalles.name }}</p>
        <p><strong>Location:</strong> {{ props.detalles.location }}</p>
        <p><strong>Fecha de construccion:</strong> {{ props.detalles.constructionDate }}</p>
        <p><strong>Tamaño:</strong> {{ props.detalles.height }}</p>
        <p><strong>Base:</strong> {{ props.detalles.base }}</p>
        <p><strong>Volumen:</strong> {{ props.detalles.volume }}</p>
  </div>
</template>

<style>
.detalle {
  background-color: #e8eaf6;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
