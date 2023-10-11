// Converter.test.js
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./Converter.js');

test('Converte 32°F para 0°C', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test('Converte 212°F para 100°C', () => {
  expect(fahrenheitToCelsius(212)).toBe(100);
});

test('Converte -40°F para -40°C', () => {
  expect(fahrenheitToCelsius(-40)).toBe(-40);
});
