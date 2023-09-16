

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): JSX.Element {
        const [randomBackground , setrandomBackground] = useState("#FFFFFF");

        const generateColor = ()=>{
          const hex= '0123456789ABCDEF';
          let color = '#';// initially 3 will be there
          for(let i = 0;i<6;i++){
            color += hex[Math.floor(Math.random()*16)]; 
          }

          setrandomBackground(color);
        }

     return(
      <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container ,{backgroundColor:randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me </Text>
          </View>
        </TouchableOpacity>
      </View>

      </>
     )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
      alignItems:'center',
      justifyContent:'center',
   },
   actionBtn:{
    borderRadius:18,
    paddingHorizontal:40,
    paddingVertical:10,
    backgroundColor:'#6A4B4D'
   },
   actionBtnTxt:{
    fontSize:20,
    textTransform:'uppercase',
    color:'#FFFFFF'
   }
});

export default App;
