import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import SPACING from '../../config/SPACING';
const { height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/Restaurant/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import SingleIngredient from '../../componets/SingleIngredient';
import YoutubeVideoPlayer from '../../componets/YoutubeVideoPlayer';

const FetchedDetail = () => {
  const route = useRoute();
  const recipeId = route.params.id;
  const [recipe, setRecipe] = useState([]);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const searchData = async () => {
    const options = {
      headers: { 'content-type': 'application/json' },
    };
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        options
      );
      const json = await response.json();
      setRecipe(json.meals[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4500);
  };

  useEffect(() => {
    searchData();
    toggleLoader();
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: SPACING * 2,
              height: height / 2.5,
              padding: SPACING * 2,
              paddingTop: SPACING * 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={{ uri: recipe.strMealThumb }}
          >
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2.5,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name='arrow-back'
                size={SPACING * 2.5}
                color={colors.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SPACING * 2.5,
              }}
            >
              <Ionicons name='share' size={SPACING * 2.5} color={colors.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: colors.white,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                marginBottom: SPACING * 3,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '70%' }}>
                <Text
                  style={{
                    fontSize: SPACING * 3,
                    color: colors.black,
                    fontWeight: '700',
                  }}
                >
                  {recipe.strMeal}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 25,
              }}
            >
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name='menu'
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                  {recipe.strCategory}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: SPACING,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name='location'
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: '600',
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                  {recipe.strArea}
                </Text>
              </View>
            </View>

            {show && (
              <ActivityIndicator
                size={'large'}
                color='tomato'
                animating={show}
                style={{ marginBottom: 90, marginTop: 20 }}
              />
            )}
            {recipe.strYoutube && !show && (
              <YoutubeVideoPlayer videoUrl={recipe.strYoutube} />
            )}
            <View style={{ marginVertical: SPACING * -7 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: '700',
                  color: colors.dark,
                }}
              >
                Ingredients
              </Text>
              <SingleIngredient ingredient={recipe.strIngredient1} />
              <SingleIngredient ingredient={recipe.strIngredient2} />
              <SingleIngredient ingredient={recipe.strIngredient3} />
              <SingleIngredient ingredient={recipe.strIngredient4} />
              <SingleIngredient ingredient={recipe.strIngredient5} />
            </View>
            <View style={{ marginTop: 85 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: '700',
                  color: colors.dark,
                  marginBottom: SPACING,
                }}
              >
                Instructions
              </Text>
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: '500',
                  color: colors.gray,
                }}
              >
                {recipe.strInstructions}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default FetchedDetail;
