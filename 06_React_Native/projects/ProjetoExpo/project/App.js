import React from "react";
import {StyleSheet, View, Text, Image, SafeAreaView, 
  StatusBar, Pressable, Linking, Alert} from 'react-native';

const ColorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/105802950?v=4';

const urlToMyGitHub = 'https://github.com/ViniciusBenevidesdaSilva';


const App = () => {

  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(urlToMyGitHub);
    console.log('Validando link');

    if(res){
      console.log('Abrindo link');
      await Linking.openURL(urlToMyGitHub);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      
      <StatusBar backgroundColor={ColorGitHub} barStyle='light-content'/>

      <View style={style.content}>
        
        <Image style={style.avatar} source={{uri: imageProfileGitHub}}
        accessibilityLabel='Avatar do app com Vinícius em um fundo Branco'/>
      

        <Text style={[style.defaultText, style.name, {marginTop:15}]}
        accessibilityLabel='Nome: Vinícius Benevides da Silva'>
          Vinícius Benevides da Silva
        </Text>
       
        <Text style={[style.defaultText, style.nickName]}
        accessibilityLabel='NickName: ViniciusBenevides'>
          ViniciusBenevides
        </Text>
        
        <Text style={[style.defaultText, style.description]}
        accessibilityLabel='Descrição: Estudante de Engenharia de Computação na FESA, C#, Python e JavaScript, HTML5 e CSS3.'>
          Estudante de Eng. Computação na FESA |
          C#, Python e JavaScript, HTML5 e CSS3.
        </Text>
      

        <Pressable onPress={AbrirGitHub}>
          <View style={[style.button, {marginTop:20}]}>
            <Text style={[style.defaultText, style.textButton]}>
              Abrir GitHub
            </Text>
          </View>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}


const AbrirGitHub = () => {
  console.log('Abrirei o git');

  Alert.alert(
    "Botão pressionado.",
    "O botão foi pressionado!",
    [
      { 
        text: "Fechar", 
        onPress: () => console.log("Fechar Pressed") 
      }
    ]
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: ColorGitHub,
    flex: 1,  // Expandir para a tela inteira

    justifyContent:'center',
    alignItems:'center',

    flexDirection:'row',
  },

  content:{
    alignItems:'center',
    padding:20,
  },

  avatar:{
    height: 150,
    width: 150,

    borderRadius:100,
    borderColor: 'white',
    borderWidth: 1,
  },

  defaultText:{
    color:colorFontGitHub,
  },

  name:{
    fontSize: 24,
    fontWeight:'bold',
  },

  nickName:{
    fontSize: 16,
    color:colorDarkFontGitHub,
  },

  description:{
    marginTop:5,

    fontSize: 14,
    fontWeight:'bold',

    padding:10,
    paddingTop:5,
  },

  button:{
    backgroundColor:colorDarkFontGitHub,
    borderRadius:10,
    padding:20,
  },

  textButton:{
    fontWeight: 'bold',
    fontSize: 16,
  },
});
