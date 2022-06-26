import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import lightOn from './assets/icons/eco-light.png';
import lightOff from './assets/icons/eco-light-off.png';
import dioOff from './assets/icons/logo-dio-white.png';
import dioOn from './assets/icons/logo-dio.png';


const App = () => {

  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(Boolean(toggle));
  }, [toggle]);

  useEffect(() => {
    const subcription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    return () => subcription.remove();
  }, [])

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>

        <Image 
          style={toggle ? style.lightningOn : style.lightningOff} 
          source={toggle ? lightOn : lightOff} 
        />

        <Image 
          style={style.dioLogo} 
          source={toggle ? dioOn : dioOff} 
        />

      </TouchableOpacity>
      
    </View>

  );
}

export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',

    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight:{
    flex:1,
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },

  lightningOn:{
    resizeMode: 'contain',
    alignSelf:'center',
    width: 150,
    height: 150,
  },

  lightningOff:{
    resizeMode: 'contain',
    alignSelf:'center',
    width: 150,
    height: 150,

    tintColor:'white',
  },

  dioLogo:{
    resizeMode: 'contain',
    alignSelf:'center',
    width: 250,
    height: 250,
  },

});

