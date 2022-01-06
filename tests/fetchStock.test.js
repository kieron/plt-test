const { fetchStock } = require("../functions/fetchStock");
const { stockData } = require("../functions/rawData");
const sku = "YGH750695/17/53";

describe("fetchStock", () => {
  test("Valid SKU should return stock", () => {
    expect(fetchStock(stockData, sku).length).toBeGreaterThan(0);
  });
});
