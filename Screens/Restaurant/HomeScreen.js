import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SPACING from '../../config/SPACING';
import colors from '../../config/Restaurant/colors';
import DATA from '../../config/Restaurant/DATA';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ marginTop: 15 }}>
      <View style={{ padding: SPACING * 2 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                width: SPACING * 4.5,
                height: SPACING * 4.5,
                borderRadius: SPACING * 3,
                marginRight: SPACING,
              }}
              source={require('../../assets/unknow.png')}
            />
            <Text
              style={{
                fontSize: SPACING * 1.7,
                fontWeight: '800',
                color: colors.dark,
              }}
            >
              Erika
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: SPACING }}>
              <Ionicons
                name='notifications-outline'
                size={SPACING * 3.5}
                color={colors.dark}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='menu' size={SPACING * 3.5} color={colors.dark} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          {DATA.map((category, index) => (
            <TouchableOpacity
              style={{ marginRight: SPACING * 3 }}
              key={index}
              onPress={() => setActiveCategory(index)}
            >
              <Text
                style={[
                  {
                    fontSize: SPACING * 1.7,
                    fontWeight: '600',
                    color: colors.gray,
                  },
                  activeCategory === index && {
                    color: colors.black,
                    fontWeight: '700',
                    fontSize: SPACING * 1.8,
                  },
                ]}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginVertical: SPACING * 2,
            }}
          >
            {DATA[activeCategory].recipes.map((item) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Details', { id: item.id })}
              >
                <Image
                  style={{
                    width: '100%',
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: '700',
                    marginTop: SPACING,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  {item.area} - {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
