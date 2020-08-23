const { reactiveProp } = window.VueChartJs.mixins

export default {
  extends: window.VueChartJs.Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData () {
      this._data._chart.update();
    }
  }
  
}
