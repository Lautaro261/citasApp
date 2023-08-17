import React from 'react';
import {Modal, Text, StyleSheet, View, TextInput, ScrollView} from 'react-native';

const Form = ({visibleModal}) => {
  return (
    <Modal animationType="slide" visible={visibleModal}>
      <View style={style.container}>
        <ScrollView>
        <Text style={style.title}>
          {' '}
          Nueva
          <Text style={style.titleBold}> Cita</Text>
        </Text>
        <Text style={style.label}>Nombre Paciente</Text>
        <TextInput
          style={style.input}
          placeholder="Nombre Paciente"
          placeholderTextColor={'#666'}
        />

        <Text style={style.label}>Nombre Propietario</Text>
        <TextInput
          style={style.input}
          placeholder="Nombre Propietario"
          placeholderTextColor={'#666'}
        />

        <Text style={style.label}>Email del Propietario</Text>
        <TextInput
          style={style.input}
          placeholder="Email"
          placeholderTextColor={'#666'}
          keyboardType="email-address"
        />

        <Text style={style.label}>Numero de Telefono</Text>
        <TextInput
          style={style.input}
          placeholder="Numero de Telefono"
          placeholderTextColor={'#666'}
          keyboardType='number-pad'
        />
        <Text style={style.label}>Sintomas</Text>
        <TextInput
        style={style.input}
        placeholder='Sintomas'
        placeholderTextColor={'#666'}/>
        
        </ScrollView>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#6325d5',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
  },
  titleBold: {
    fontWeight: '900',
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    marginHorizontal: 30,
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 18,
    marginBottom: 15,
  },
});

export default Form;
