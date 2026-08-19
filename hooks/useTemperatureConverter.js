import { useState } from 'react';
import TemperatureManager from '../models/managers/TemperatureManager';
import TemperatureVO from '../models/valueobjects/TemperatureVO';

const useTemperatureConverter = () => {
  const [celsiusValue, setCelsiusValue] = useState('');
  const [fahrenheitValue, setFahrenheitValue] = useState('');
  const manager = TemperatureManager();

  const convertTemperature = () => {
    if (celsiusValue === '') {
      setFahrenheitValue('');
      return;
    }

    const celsiustemperature = new TemperatureVO(Number(celsiusValue), 'CELSIUS');
    const fahrenheittemperature = manager.convert(celsiustemperature, 'FAHRENHEIT');

    setFahrenheitValue(fahrenheittemperature.value.toString());
  };

  return {
    celsiusValue,
    setCelsiusValue,
    fahrenheitValue,
    setFahrenheitValue,
    convertTemperature,
  };
};

export default useTemperatureConverter;