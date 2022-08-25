import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import SPACING from '../config/SPACING';
import colors from '../config/Restaurant/colors';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - SPACING * 3;

const ResultsFound = ({ result, goto }) => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginVertical: SPACING * 2,
          padding: 20,
        }}
      >
        {result?.meals?.map((item) => (
          <TouchableOpacity
            style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
            key={item.idMeal}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(goto, { id: item.idMeal })}
          >
            <Image
              style={{
                width: '100%',
                height: ITEM_WIDTH + SPACING * 3,
                borderRadius: SPACING * 2,
              }}
              source={{ uri: item.strMealThumb }}
            />
            <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: '700',
                marginTop: SPACING,
              }}
            >
              {item.strMeal}
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.5,
                color: colors.gray,
                marginVertical: SPACING / 2,
              }}
            >
              {item?.strArea} - {item?.strCategory}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ResultsFound;
