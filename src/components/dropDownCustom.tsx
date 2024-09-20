import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownProps {
  data: Array<any>;
  placeholder: string;
  onChangeValue?(value: any): void;
  zIndex?: number;
  multiple?: boolean;
}
const DropDownCustom: React.FC<DropdownProps> = ({
  data,
  placeholder,
  onChangeValue,
  zIndex,
  multiple,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);
  return (
    <DropDownPicker
      multiple={multiple}
      placeholder={placeholder || 'Select item'}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      mode="BADGE"
      onChangeValue={onChangeValue}
      style={{borderColor: 'rgba(210, 210, 212,0.5)'}}
      containerStyle={{zIndex: zIndex || 1}}
      dropDownContainerStyle={{
        borderColor: 'rgba(210, 210, 212,0.5)',
        maxHeight: 250,
      }}
    />
  );
};

export default DropDownCustom;
