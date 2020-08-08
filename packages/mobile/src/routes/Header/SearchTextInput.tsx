import React, { useState, useCallback } from 'react';
import { TextInput, View, TouchableOpacity, Text, Image, Keyboard } from 'react-native';
import { styles } from './styles';

export const SearchTextInput = () => {
  const [searchText, setSearchText] = useState('');
  const handleChangeSearchText = useCallback((value: string) => setSearchText(value), []);
  const handlePressClear = useCallback(() => setSearchText(''), []);
  const handlePressCancel = useCallback(() => {
    Keyboard.dismiss();
    setSearchText('');
  }, []);

  return (
    <View style={styles.searchTextInputContainer}>
      <View style={styles.searchTextInputWrapper}>
        <Image source={require('assets/search-icon.png')} style={styles.searhIcon} />
        <TextInput
          value={searchText}
          placeholder="Search..."
          onChangeText={handleChangeSearchText}
          autoFocus
          style={styles.searchTextInput}
        />
        <TouchableOpacity style={styles.clearButton} onPress={handlePressClear}>
          <Image source={require('assets/close-icon-circle.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handlePressCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};
