import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import categoryList from '../../config/categoryData';

const CategoryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 35, fontWeight: '700' }}>Categories</Text>
          </View>
          {categoryList.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('CategoryDetail', {
                  url: item.endPoint,
                  img: item.imgPath,
                })
              }
              activeOpacity={0.8}
            >
              <View
                style={{
                  backgroundColor: '#f7f0ed',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
              >
                <View style={{ width: 360 }}>
                  <Image
                    source={item.imgPath}
                    style={{
                      borderRadius: 10,
                      height: 250,
                      width: '100%',
                      borderRadius: 15,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '500',
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const categoryList = [
//   {
//     id: 1,
//     name: 'Breakfast',
//     imgPath: require('../../assets/ct-breakfast.jpg'),
//     endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast',
//   },
//   {
//     id: 2,
//     name: 'Seafood',
//     imgPath: require('../../assets/ct-seafood.jpg'),
//     endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
//   },
//   {
//     id: 3,
//     name: 'Side',
//     imgPath: require('../../assets/ct-sideDish.jpg'),
//     endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side',
//   },
//   {
//     id: 4,
//     name: 'Dessert',
//     imgPath: require('../../assets/ct-dessert.jpg'),
//     endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert',
//   },
//   {
//     id: 5,
//     name: 'Beef',
//     imgPath: require('../../assets/ct-beef.jpg'),
//     endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
//   },
// ];

export default CategoryScreen;
