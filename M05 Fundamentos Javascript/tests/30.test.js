const retornarPerimetro = require('../ejercicios/30');

test('Debe retornar el perímetro correcto del cuadrado', function () {
  expect(retornarPerimetro(40)).toBe(160);
  expect(retornarPerimetro(30)).toBe(120);
  expect(retornarPerimetro(20)).toBe(80);
});
