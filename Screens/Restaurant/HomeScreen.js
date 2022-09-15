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
import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SPACING from '../../config/SPACING';
import colors from '../../config/Restaurant/colors';
import DATA from '../../config/Restaurant/DATA';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetContext } from '../../context/BottomSheetContext';
import BottomSheetComp from '../../componets/BottomSheetComp';
const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigation = useNavigation();
  const { isOpen, setIsOpen } = useContext(BottomSheetContext);

  return (
    <View style={{ backgroundColor: isOpen ? '#ccc' : 'white' }}>
      <SafeAreaView style={{ marginTop: 15 }}>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              activeOpacity={0.7}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    width: SPACING * 4.5,
                    height: SPACING * 4.5,
                    borderRadius: SPACING * 3,
                    marginRight: SPACING,
                    opacity: isOpen ? 0.2 : 1,
                  }}
                  source={require('../../assets/unknow.png')}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.7,
                    fontWeight: '800',
                    color: colors.dark,
                    opacity: isOpen ? 0.5 : 1,
                  }}
                >
                  unKnown
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ marginRight: SPACING, opacity: isOpen ? 0.3 : 1 }}
                onPress={() => setIsOpen((prev) => !prev)}
              >
                <Ionicons
                  name='notifications-outline'
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                activeOpacity={0.7}
                style={{ opacity: isOpen ? 0.3 : 1 }}
              >
                <Ionicons
                  name='menu'
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
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
                style={{ marginRight: SPACING * 3, opacity: isOpen ? 0.3 : 1 }}
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
                  onPress={() =>
                    navigation.navigate('Details', { id: item.id })
                  }
                >
                  <Image
                    style={{
                      width: '100%',
                      height: ITEM_WIDTH + SPACING * 3,
                      borderRadius: SPACING * 2,
                      opacity: isOpen ? 0.3 : 1,
                    }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      fontWeight: '700',
                      marginTop: SPACING,
                      opacity: isOpen ? 0.3 : 1,
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
        {isOpen && <BottomSheetComp />}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
