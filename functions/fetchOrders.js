function fetchOrders(transactionData, sku) {
  return (
    transactionData
      //filter SKU & order
      .filter((el) => el.sku === sku)
      .filter((el) => el.type === "order")
      //map to qty
      .map((el) => el.qty)
      //sum values
      .reduce((a, b) => a + b, 0)
  );
}
exports.fetchOrders = fetchOrders;
