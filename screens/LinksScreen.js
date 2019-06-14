import React, { Component } from 'react';
import { ScrollView, StyleSheet, Button, Text,View,Image,TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import kana_json from '../hiragana/kana.json'
import { Audio } from 'expo-av'


class HiraganaChar extends Component {
  constructor(props) {
    super(props);
    this.state = { char: this._randomHiraganaChar(),  };
  }
  render() {
    return (
      // <View style={styles.charContainer}>
      //   <TouchableHighlight onPress={this._playHiraganaSound} underlayColor="white">
      //       <Text style={styles.titleText}>{this.state.char[1]}</Text>
      //   </TouchableHighlight>
      //   <Text style={styles.romanText}>
      //     {this.state.char[0]}
      //   </Text>
      // </View>
      <View style={{ flex: 1,
        justifyContent: 'center', // Used to set Text Component Vertically Center
        alignItems: 'center'}}>
        <Text>Vertically Centered Text</Text>
      </View>
    );
  }
  _randomHiraganaChar(){
    let FirstCharKeys = Object.keys(kana_json)
    let randFirstChar = FirstCharKeys[Math.floor(Math.random() * FirstCharKeys.length)];
    let SecondCharKeys = Object.keys(kana_json[randFirstChar])
    let randSecondChar = SecondCharKeys[Math.floor(Math.random() * SecondCharKeys.length)]
    console.log("00"+randFirstChar)
    console.log("01"+randSecondChar)
    let romaji = kana_json[randFirstChar][randSecondChar]["Seion"]["Romaji"]
    let hiragana = kana_json[randFirstChar][randSecondChar]["Seion"]["Hiragana"]
    return [romaji,hiragana]
  }
  async _playHiraganaSound(){
    const soundObject = new Audio.Sound()
    let char = this.children.props.children.props.children
    try {
      // let HiraganaMP3 = `../sounds/50yin/${char}.mp3`
      await soundObject.loadAsync({uri: `https://s3-ap-southeast-1.amazonaws.com/tmp-audio-higana/ko.mp3`});
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    } 
  }
}

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <HiraganaChar/>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Link',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 96,
    fontWeight: 'bold',
  },
  romanText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  charContainer: {
    alignContent: 'center',
    alignItems: 'center'
  }
});
