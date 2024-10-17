import yfinance as yf
import json
from datetime import datetime, timedelta

def get_stock_data(symbols):
    end_date = datetime.now()
    start_date = end_date - timedelta(days=365)
    
    all_data = {}
    
    for symbol in symbols:
        stock = yf.Ticker(symbol)
        hist = stock.history(start=start_date, end=end_date)
        
        data = []
        for date, row in hist.iterrows():
            data.append({
                'time': date.strftime('%Y-%m-%d'),
                'open': row['Open'],
                'high': row['High'],
                'low': row['Low'],
                'close': row['Close']
            })
        
        all_data[symbol] = data
    
    with open('../frontend/public/stock_data.json', 'w') as f:
        json.dump(all_data, f)

if __name__ == "__main__":
    symbols = ["AAPL", "GOOGL", "MSFT", "AMZN"]  # Add or remove stocks as needed
    get_stock_data(symbols)
    print("Stock data has been generated and saved to stock_data.json")