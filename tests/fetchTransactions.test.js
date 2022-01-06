const { checkTransactions } = require("../functions/checkTransactions");
const { transactionData } = require("../functions/rawData");
const sku = "YGH750695/17/53";

describe("checkTransactions", () => {
  test("Valid SKU should return transactions", () => {
    expect(checkTransactions(transactionData, sku).length).toBeGreaterThan(0);
  });
});
