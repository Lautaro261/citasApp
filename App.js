
import React from 'react';
import { useState } from 'react';
import { 
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,

  } from 'react-native';
import Form from './src/components/Form';



const App = () => {
  const [ visibleModal, setVisibleModal ] = useState(false)

  const handlerPress = ()=>{
    console.log('Me presionaste wey')
    setVisibleModal(true)
}


  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>Administrador de citas {''}
        <Text style={style.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable 
      onPress={handlerPress}
      style={style.btnOnPress}
      >
        <Text style={style.btnText}>nueva cita</Text>
      </Pressable>


      <Form visibleModal={visibleModal}/>

      

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor:'#6b6e73',
    flex: 1,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight:'200',
    color: '#fefffe',
  
  },
  tituloBold:{
    fontWeight:'600',
    color:'#a535f1',
  },
  btnOnPress:{
    backgroundColor:'#a535f1',
    padding: 5,
    marginTop: 20,
    marginLeft: 20,  // o tambien se puede usar marginHorizontal: 20 
    marginRight: 20,
    borderRadius: 10
  },
  btnText:{
    textAlign:'center',
    color:'#fefffe',
    fontSize:15,
    fontWeight:'500',
    textTransform: 'uppercase'
  }

})


export default App;
