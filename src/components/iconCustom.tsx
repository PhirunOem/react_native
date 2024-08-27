import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, TouchableHighlight} from 'react-native';
interface Props {
  iconName: string;
  iconSize: number;
  onClick?: () => void;
  iconColor?: string;
  underlayColor?: string;
}

const IconCustom: React.FC<Props> = ({
  iconName = 'bulb-outline',
  iconSize = 20,
  onClick = void 0,
  iconColor = 'white',
  underlayColor = 'rgba(146,146,146,0.5)',
}) => {
  return (
    <TouchableHighlight
      onPress={onClick}
      underlayColor={underlayColor} //3, 161, 171
      style={{padding: 5, borderRadius: 50}}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableHighlight>
  );
};

export default IconCustom;
