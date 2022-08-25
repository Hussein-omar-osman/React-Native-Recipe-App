import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  ActivityIndicator,
} from 'react-native';
import SPACING from '../../config/SPACING';
import colors from '../../config/Restaurant/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import ResultsFound from '../../componets/ResultsFound';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(false);

  const searchData = async () => {
    console.log(search);
    setShow(true);
    const options = {
      headers: { 'content-type': 'application/json' },
    };
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
        options
      );
      const json = await response.json();
      setResult(json);
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.light,
          marginVertical: SPACING * 3,
          padding: SPACING * 1.5,
          borderRadius: SPACING,
        }}
      >
        <TextInput
          placeholder='Search ...'
          placeholderTextColor={colors.gray}
          style={{
            color: 'black',
            fontSize: SPACING * 2,
            marginLeft: SPACING,
            marginTop: 20,
            borderWidth: 2,
            padding: 5,
            borderColor: 'grey',
            borderRadius: 10,
            width: '88%',
          }}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          style={{ marginLeft: 'auto', marginTop: 25 }}
          onPress={() => {
            Keyboard.dismiss();
            searchData();
          }}
        >
          <Ionicons name='search' color={colors.gray} size={SPACING * 2.7} />
        </TouchableOpacity>
      </View>

      {show && (
        <ActivityIndicator
          size={'large'}
          color='tomato'
          animating={show}
          style={{ marginBottom: 90, marginTop: 20 }}
        />
      )}

      {result && result.meals !== null ? (
        <ResultsFound result={result} goto='SearchDetails' />
      ) : (
        <Image
          source={require('../../assets/no_result.png')}
          style={{ borderRadius: 10 }}
        />
      )}
    </>
  );
};

export default SearchScreen;
