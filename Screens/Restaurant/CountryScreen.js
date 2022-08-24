import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import categoryList from '../../config/categoryData';
import countryList from '../../config/countryData';

const CountryScreen = () => {
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
            <Text style={{ fontSize: 35, fontWeight: '700' }}>Countries</Text>
          </View>
          {countryList.map((item) => (
            <TouchableOpacity
              key={item.id}
              // onPress={() =>
              //   navigation.navigate('CategoryDetail', {
              //     name: item.name,
              //     img: item.imgPath,
              //   })
              // }
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

export default CountryScreen;
