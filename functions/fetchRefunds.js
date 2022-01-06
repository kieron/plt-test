function fetchRefunds(transactionData, sku) {
  return (
    transactionData
      //filter SKU & refund
      .filter((el) => el.sku === sku)
      .filter((el) => el.type === "refund")
      //map to qty
      .map((el) => el.qty)
      //sum values
      .reduce((a, b) => a + b, 0)
  );
}
exports.fetchRefunds = fetchRefunds;
