import React, { useCallback } from 'react';
import { TextInput, View, TouchableOpacity, Text, Image, Keyboard } from 'react-native';
import { styles } from './styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onCancel: () => void;
  onSubmit: () => void;
};

export const SearchTextInput = ({ value, onChange, onClear, onCancel, onSubmit }: Props) => {
  const handlePressCancel = useCallback(() => {
    onCancel();
    Keyboard.dismiss();
  }, [onCancel]);

  return (
    <View style={styles.searchTextInputContainer}>
      <View style={styles.searchTextInputWrapper}>
        <Image source={require('assets/search-icon.png')} style={styles.searhIcon} />
        <TextInput
          value={value}
          placeholder="Search..."
          onChangeText={onChange}
          autoFocus
          onSubmitEditing={onSubmit}
          style={styles.searchTextInput}
        />
        <TouchableOpacity style={styles.clearButton} onPress={onClear}>
          <Image source={require('assets/close-icon-circle.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handlePressCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};
