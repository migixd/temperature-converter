const TemperatureVO = require('../models/valueobjects/TemperatureVO');
const TemperatureManager = require('../models/managers/TemperatureManager');

describe('TemperatureManager', () => {
  test('converts a 23 Celsius temperature to Fahrenheit', () => {
    // GIVEN
    const manager = TemperatureManager();
    const celsiusTemperature = new TemperatureVO(23, 'CELSIUS');

    // WHEN
    const result = manager.convert(celsiusTemperature, 'FAHRENHEIT');

    // THEN
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(73.4);
    expect(result.unit).toBe('FAHRENHEIT');
  });
});