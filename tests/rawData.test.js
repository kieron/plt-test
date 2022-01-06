const fs = require("fs");
const { stockData, transactionData } = require("../functions/rawData");

describe("Stock Data", () => {
  test("Stock data should exist", () => {
    expect(stockData.length).toBeGreaterThan(0);
  });
});

describe("Transaction Data", () => {
  test("Transaction data should exist", () => {
    expect(transactionData.length).toBeGreaterThan(0);
  });
});
