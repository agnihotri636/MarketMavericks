<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <h2>Trading Dashboard</h2>
    <button @click="fetchTrades">Fetch Trades</button>
    <ul>
      <li v-for="trade in trades" :key="trade.id">
        {{ trade.symbol }} - {{ trade.profitLoss }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      trades: []
    }
  },
  methods: {
    fetchTrades() {
      // Implement trade fetching logic here
      console.log('Fetching trades...')
    }
  }
}
</script>