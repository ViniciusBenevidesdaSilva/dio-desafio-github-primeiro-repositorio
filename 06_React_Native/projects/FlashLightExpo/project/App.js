import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import lightOn from './assets/icons/eco-light.png';
import lightOff from './assets/icons/eco-light-off.png';
import dioOff from './assets/icons/logo-dio-white.png';
import dioOn from './assets/icons/logo-dio.png';



const App = () => {
  //const toggle = false; // O react não vai atualizar o estado, mesmo que a variável em si mude
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //Alert.alert('Montou o componente'); Chama a cada montagem dos componentes
    //return () => Alert.alert('Desmontou o componente'); Chama a cada "desmontagem"
   
    //Alert.alert('Atualizou o componente ' + toggle);
    // Fica "ouvindo" o toggle e chama quando ele mudar 

    Torch.switchState(Boolean(toggle));
  }, [toggle]);

  useEffect(() => {
    const subcription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    // quando desmontar o componente
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

export default App;
