import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export default function RadioCustom() {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Male',
        value: 'male',
      },
      {
        id: '2',
        label: 'Female',
        value: 'female',
      },
      {
        id: '3',
        label: 'Prefer not to say',
        value: 'none',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
      layout="row"
    />
  );
}
