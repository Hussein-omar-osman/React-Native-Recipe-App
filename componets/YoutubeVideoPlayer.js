import React, { useState, useCallback, useRef } from 'react';
import { Button, View, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import findId from '../utills/findYtId';

export default function YoutubeVideoPlayer({ videoUrl }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={findId(videoUrl)}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
    </View>
  );
}
