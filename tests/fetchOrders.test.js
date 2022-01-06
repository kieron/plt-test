const { fetchOrders } = require("../functions/fetchOrders");
const { transactionData } = require("../functions/rawData");
const sku = "YGH750695/17/53";
let orders = fetchOrders(transactionData, sku);

describe("fetchOrders", () => {
  test("Orders pulled back using SKU should only result in required data, amount of orders.", () => {
    expect(orders).toEqual(expect.any(Number));
  });
});
