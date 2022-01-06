const { checkTransactions } = require("./functions/checkTransactions");
const { fetchOrders } = require("./functions/fetchOrders");
const { fetchRefunds } = require("./functions/fetchRefunds");
const { fetchStock } = require("./functions/fetchStock");
const { stockData, transactionData } = require("./functions/rawData");
const sku = "YGH750695/17/53";

//begin
let promise = new Promise(function (resolve, reject) {
  //fetch stock information with SKU
  let stockInfo = fetchStock(stockData, sku);
  let transactionInfo = checkTransactions(transactionData, sku);

  //if no stock or transactions, reject promise
  if (stockInfo.length < 1 && transactionInfo.length < 1) {
    reject(new Error("SKU Not Found in stock OR transactions!"));
  }

  //SKU in transactions, but NOT stock
  if (stockInfo.length < 1 && transactionInfo.length) {
    stockInfo[0] = 0;
  }

  //fetch final numbers
  let orders = fetchOrders(transactionData, sku);
  let refunds = fetchRefunds(transactionData, sku);

  resolve({ sku: sku, qty: stockInfo - orders + refunds });
});

console.log(promise);
