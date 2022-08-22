import React from 'react';
import { Button, View, Alert } from 'react-native';
import YoutubeVideoPlayer from './componets/YoutubeVideoPlayer';

export default function App() {
  return (
    <View style={{ marginTop: 50 }}>
      <YoutubeVideoPlayer
        videoUrl={'https://www.youtube.com/watch?v=D2gvhcf6occ'}
      />
    </View>
  );
}
