function fetchStock(stockData, sku) {
  //filter and return elements in data where SKU matches, and map to stock value
  return stockData.filter((el) => el.sku === sku).map((el) => el.stock);
}
exports.fetchStock = fetchStock;
