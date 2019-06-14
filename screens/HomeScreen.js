import * as WebBrowser from 'expo-web-browser';
import React ,{ Component }from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

class HiraganaTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [' ', 'あ段', 'い段', 'う段', 'え段', 'お段'],
      tableTitle: ['あ行', 'か行', 'さ行', 'た行', 'な行','は行','ま行','や行','ら行','わ行','撥音'],
      tableData: [
        ['あ', 'い', 'う','え','お'],
        ['か', 'き', 'く','け','こ'],
        ['さ', 'し', 'す','せ','そ'],
        ['た', 'ち', 'つ','て','と'],
        ['な', 'に', 'ぬ','ね','の'],
        ['は', 'ひ', 'ふ','へ','ほ'],
        ['ま', 'み', 'む','め','も'],
        ['や', 'い', 'ゆ','え','よ'],
        ['ら', 'り', 'る','れ','ろ'],
        ['わ', 'い', 'う','え','を'],
        ['ん']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} heightArr={[28,28,28,28,28]} style={styles.title} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HiraganaTable/>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Hiragana',
  //header: null,
  // headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});
