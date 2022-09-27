import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CameraComp() {
  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const navigation = useNavigation();

  // console.log(photo);

  function toggleCameraType() {
    console.log('changed');
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
    return () => {
      console.log('demounted');
    };
  }, []);

  if (hasCameraPermission === undefined) {
    return (
      <SafeAreaView>
        <Text>Requesting permissions...</Text>
      </SafeAreaView>
    );
  } else if (!hasCameraPermission) {
    return (
      <SafeAreaView>
        <Text>
          Permission for camera not granted. Please change this in settings.
        </Text>
      </SafeAreaView>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
        />
        <View style={{ flexDirection: 'column' }}>
          {hasMediaLibraryPermission ? (
            <Button title='Save' onPress={savePhoto} />
          ) : undefined}
          <Button title='Discard' onPress={() => setPhoto(undefined)} />
          <Text>{'data:image/jpg;base64,' + photo.base64}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} type={type}>
      <TouchableOpacity
        onPress={toggleCameraType}
        style={{ position: 'absolute', top: 50, right: 20 }}
      >
        <MaterialIcons name='flip-camera-ios' size={34} color='tomato' />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={takePic}
          style={{ borderRadius: 20, marginLeft: 20 }}
        >
          <Entypo name='camera' size={44} color='white' />
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    // backgroundColor: '#fff',
    // alignSelf: 'center',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
  },
});
