import { Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SPACING from '../config/SPACING';
import colors from '../config/Restaurant/colors';
const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - SPACING * 3;

const SingleIngredient = ({ ingredient }) => {
  return (
    <View
      style={{
        marginVertical: SPACING,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: SPACING,
          height: SPACING,
          backgroundColor: colors.light,
          borderRadius: SPACING,
        }}
      />
      <Text
        style={{
          fontSize: SPACING * 1.7,
          fontWeight: '600',
          color: colors.gray,
          marginLeft: SPACING,
        }}
      >
        {ingredient}
      </Text>
    </View>
  );
};

export default SingleIngredient;
