function checkTransactions(stockData, sku) {
  //filter and return elements in data where SKU matches
  return stockData.filter((el) => el.sku === sku);
}
exports.checkTransactions = checkTransactions;
