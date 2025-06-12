// sumar.test.js
const sumar = require('../01-math');

test('suma 2 + 3 debe dar 5', () => {
  expect(sumar(2, 3)).toBe(6);
});
