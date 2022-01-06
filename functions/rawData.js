const fs = require("fs");

//Load stock data
let rawStockData = fs.readFileSync("store/stock.json");
let stockData = JSON.parse(rawStockData);
//load transaction data
let rawTransactionData = fs.readFileSync("store/transactions.json");
let transactionData = JSON.parse(rawTransactionData);

if (!stockData.length || !transactionData.length) {
  throw new Error("Data Store Empty");
}
//export data
exports.stockData = stockData;
exports.transactionData = transactionData;
