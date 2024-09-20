import React, {ReactNode, useMemo, useState} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

interface Props {
  dataRender: Array<{
    id: string;
    label: string | ReactNode;
    value: string;
    borderSize?: number;
    size?: number;
    containerStyle?: ViewStyle;
    disabled?: boolean;
  }>;
  isColumn?: boolean;
  onPress?(id: any): void;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function RadioCustom(props: Props) {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  //click event happen in child , but will return id value to parent when parent call onPress(id:any)
  const hadleSelect = (id: any) => {
    setSelectedId(id);
    if (props.onPress) {
      props.onPress(id);
    }
  };
  return (
    <RadioGroup
      radioButtons={props.dataRender}
      onPress={hadleSelect}
      selectedId={selectedId}
      layout={props.isColumn ? 'column' : 'row'}
      containerStyle={props.containerStyle}
    />
  );
}
