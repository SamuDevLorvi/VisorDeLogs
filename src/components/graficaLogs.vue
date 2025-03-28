<script setup lang="ts">
import { ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',],
  datasets: [{ label: 'Datos del mes', backgroundColor: '#CE93D8', data: [40, 20, 12, 45, 70, 14, 234, 123, 18, 32, 121, 185] }]
});

const chartOptions = ref({
  responsive: true
});
</script>

<template>
  <main>
    <h1 style="text-align: center; background-color: #D500F9;">Grafica</h1>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" style="background-color: #F3E5F5" />
  </main>
</template>
