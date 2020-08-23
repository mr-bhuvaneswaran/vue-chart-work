<template>
  <div id="app">
    <canvas id="myChart" width="1800" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data.js';

export default {
  name: 'App',
  data() {
    return {
      planetChartData
    }
  },
  mounted () {
    this.createChart('myChart', this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  }
}
</script>

<style>
#app {
  max-width: 1800px;
  max-height: 400px;
}
</style>
