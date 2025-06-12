// sumar.test.js
const sumar = require('../01-math');

describe("probando github action", () => {
  test('suma 2 + 3 debe dar 5', () => {
    expect(sumar(2, 3)).toBe(6);
  })
  test('suma 4 + 3 debe dar 7', () => {
    expect(sumar(4, 3)).toBe(5);
  })
})
