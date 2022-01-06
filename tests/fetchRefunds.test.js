const { fetchRefunds } = require("../functions/fetchRefunds");
const { transactionData } = require("../functions/rawData");
const sku = "YGH750695/17/53";
let refunds = fetchRefunds(transactionData, sku);

describe("fetchRefunds", () => {
  test("Refunds pulled back using SKU should only result in required data, amount of refunds.", () => {
    expect(refunds).toEqual(expect.any(Number));
  });
});
