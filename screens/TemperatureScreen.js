import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text, TextInput } from 'react-native-paper';

const TemperatureScreen = () => {
  return (
    <SafeAreaView>
      <Text variant="headlineMedium">Convertidor de temperaturas</Text>
      <Text>Grados Celsius:</Text>
      <TextInput id="celsiusInput" mode="default" />
      <Text>Grados Fahrenheit:</Text>
      <TextInput
        id="fahrenheitResult"
        mode="default"
        value=""
        editable={false}
        selectTextOnFocus={false}
      />

      <Button id="convertButton">CONVERTIR</Button>
    </SafeAreaView>
  );
};

export default TemperatureScreen;