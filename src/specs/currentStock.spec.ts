import { getCurrentSock } from "../controllers/currentStock.controller";
import { ICurrentStock } from "../@types/CurrentSock";

test("When sku is not found it will be return null", async () => {
  const sku = "LTV71944"; //no sku in stock.json
  const currentSock = await getCurrentSock(sku);
  expect(currentSock).toBe(null);
});

test("When sku is found it will be return object {sku:'',qty:}", async () => {
  const sku = "LTV719449/39/39";
  const currentSock = await getCurrentSock(sku);
  expect(currentSock).toBe(currentSock);
});
