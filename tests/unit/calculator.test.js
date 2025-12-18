import { sum } from "../../models/calculator.js";

test("soma 1 + 2 e retorna 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("soma 5 + 100 e retorna 105", () => {
  const result = sum(5, 100);
  expect(result).toBe(105);
});

test("soma 'banana' + 100 e retorna 'Erro'", () => {
  const result = sum("banana", 100);
  expect(result).toBe("Error");
});
