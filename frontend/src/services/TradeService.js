// src/services/TradeService.js

import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API endpoint

export const fetchTradeData = async (symbol) => {
  try {
    const response = await axios.get(`${API_URL}/trades?symbol=${symbol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trade data:', error);
    throw error;
  }
};
