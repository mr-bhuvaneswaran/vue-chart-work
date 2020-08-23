<template>
  <div id="app">
    <line-chart :chart-data="chartData" :options="options"></line-chart>
  </div>
</template>

<script>

import LineChart from './components/LineChart';
import moment from 'moment';

export default {
  name: 'App',
  components: {
    LineChart
  },
  data () {
    const dataSource = {
      labels: [],
      data: []
    }
    let start = moment(0);
    for(let i = 0; i < 5000; i++) {
      dataSource.labels.push(start.add(1, 'minutes').format('LT'));
      dataSource.data.push(Math.random() * ((1000-20) + 20));
    }
    
    setInterval(() => {
      this.addPoints(start);
    }, 5000)


    return {
      chartData : {
      labels: dataSource.labels,
      datasets: [
        {
          backgroundColor: '#f87979',
          data: dataSource.data
        }
      ]
    },
      options: {
        responsive: true, 
        maintainAspectRatio: false,
        zoom : {
          enabled: true,
          mode: 'x',
          
        },
        legend: {display: false},
        events: ['click']
      }
    }
  },
  methods: {
    addPoints(start) {
      for(let i = 0; i < 20; i++) {
        this.chartData.labels.push(start.add(1, 'minutes').format('LT'));
        this.chartData.datasets[0].data.push(Math.random() * ((1000-20) + 20));
      }
      this.chartData = {
        labels: this.chartData.labels,
        datasets: [{
            backgroundColor: '#f87979',
            data: this.chartData.datasets[0].data
          }]
      }
    }
  }
}
</script>
