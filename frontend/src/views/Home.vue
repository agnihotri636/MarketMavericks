<template>
  <div class="home">
    <h1>Welcome to Market Mavericks Agni!</h1>
    <p>YOUR JOURNEY TO BECOMING A DISCIPLINED TRADER AND INVESTOR STARTS HERE.</p>
    <p>Your personal trading journal and analysis tool</p>
    
    <div class="chart-container">
      <h2>Stock Price Chart - Last 30 Days</h2>
      <select v-model="selectedStock" @change="updateChart">
        <option v-for="stock in availableStocks" :key="stock" :value="stock">
          {{ stock }}
        </option>
      </select>
      <apexchart
        v-if="series.length > 0 && series[0].data.length > 0"
        type="candlestick"
        height="500"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <p v-else>Loading chart data...</p>
    </div>
    
    <div class="features">
      <h2>Features:</h2>
      <ul>
        <li>😄💰 Track your trades</li>
        <li>🤓📈 Analyze your performance</li>
        <li>😎📊 Set and monitor trading goals</li>
        <li>🛡️😊 Secure and private space</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import VueApexCharts from "vue3-apexcharts"

export default {
  name: 'Home',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const series = ref([])
    const selectedStock = ref('AAPL')
    const availableStocks = ref([])
    const allStockData = ref({})
    
    const chartOptions = ref({
      chart: {
        type: 'candlestick',
        height: 500,
        width: '100%',
      },
      title: {
        text: 'Stock Price',
        align: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          formatter: (value) => value.toFixed(2)
        }
      },
      tooltip: {
        enabled: true,
        custom: ({ seriesIndex, dataPointIndex, w }) => {
          const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
          const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
          const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
          const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
          return `
            <div class="apexcharts-tooltip-box">
              <div>Open: <span class="value">${o.toFixed(2)}</span></div>
              <div>High: <span class="value">${h.toFixed(2)}</span></div>
              <div>Low: <span class="value">${l.toFixed(2)}</span></div>
              <div>Close: <span class="value">${c.toFixed(2)}</span></div>
            </div>
          `
        }
      }
    })

    const updateChart = () => {
      const stockData = allStockData.value[selectedStock.value] || []
      series.value = [{
        data: stockData.map(item => ({
          x: new Date(item.time).getTime(),
          y: [item.open, item.high, item.low, item.close]
        }))
      }]
      chartOptions.value.title.text = `${selectedStock.value} Stock Price`
    }

    onMounted(async () => {
      try {
        const response = await fetch('/stock_data.json')
        allStockData.value = await response.json()
        availableStocks.value = Object.keys(allStockData.value)
        updateChart()
      } catch (error) {
        console.error('Error loading stock data:', error)
      }
    })

    return {
      series,
      chartOptions,
      selectedStock,
      availableStocks,
      updateChart
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: none;
  margin: 0;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
  color: #666;
}

p {
  margin-bottom: 15px;
}

.chart-container {
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
}

select {
  margin-bottom: 20px;
  padding: 5px;
  font-size: 16px;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

li {
  font-size: 1.2em;
  color: #555;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1 1 200px;
  max-width: 250px;
}

@media (max-width: 768px) {
  .home {
    padding: 10px;
  }

  h1 {
    font-size: 2em;
  }

  .chart-container {
    margin: 20px 0;
    padding: 10px;
  }

  ul {
    flex-direction: column;
  }

  li {
    max-width: none;
  }
}
</style>