import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Platform, KeyboardAvoidingView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [seePassword, setSeePassword] = useState(true);

  function permissionToSeePassword(){
    seePassword ? setSeePassword(false) : setSeePassword(true);
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? "padding" : "height"}
    style={styles.container}
    >
      <View style={styles.loginIcon}>
        <AntDesign name="login" size={90} color="black" />
      </View>

      <TouchableWithoutFeedback
      onPress = {Keyboard.dismiss}
      >
        <View style = {[styles.input, {justifyContent: 'center'}]}>
          
          <TextInput placeholder='Usuário'
          style={{fontSize: 15}}
          >
          </TextInput>

        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
      onPress = {Keyboard.dismiss}
      >
        <View style = {[styles.input, styles.password]}>
          
          <TextInput placeholder='Senha'
          style={{fontSize: 15}}
          secureTextEntry={seePassword ? true : false}
          >
          </TextInput>

          <TouchableWithoutFeedback
          onPress={()=> permissionToSeePassword()}
          style={styles.seePass}
          >
            {seePassword ? <Entypo name="eye-with-line" size={24} color="black" /> : <AntDesign name="eye" size={24} color="black" /> }

          </TouchableWithoutFeedback>

        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity style={styles.LoginButton}
      onPress={()=> null}
      >
        <Text
        style={{fontSize: 20, color: "white"}}
        >Entrar</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
  },
  input:{
    width : "78%",
    height: "7%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: "4%",
  },
  LoginButton:{
    width : "78%",
    height: "7%",
    borderRadius: 25,
    backgroundColor: "#03b1fc",
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: "4%",
    top: 20
  },
  seePass:{
    width: 10,
    height:10,
    borderRadius: 10 / 2,
    justifyContent: 'center',

  },
  password:{
    top:10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  loginIcon:{
    width: "100%", 
    height: "25%", 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }
});
