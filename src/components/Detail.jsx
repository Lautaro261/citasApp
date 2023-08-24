import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import { formatearfecha } from '../helpers';

const Detail = ({
    paciente, 
    pacienteModal, 
    setPacienteModal,
    setPaciente
}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>
        Informacion {''}
        <Text style={style.titleBold}>Paciente</Text>
      </Text>

      <Pressable
        onPress={() => {
          setPacienteModal(!pacienteModal)
          setPaciente({})
        }}
        style={style.btnCerrar}>
        <Text style={style.btnCerrarTxt}>Cerrar</Text>
      </Pressable>

      <View style={style.contenido}>
        <View style={style.campo}>
        <Text style={style.label}>Nombre: </Text>
        <Text style={style.value}>{paciente.paciente}</Text>
        </View>

        <View style={style.campo}>
        <Text style={style.label}>Propietario: </Text>
        <Text style={style.value}>{paciente.propietario}</Text>
        </View>

        <View style={style.campo}>
        <Text style={style.label}>Email: </Text>
        <Text style={style.value}>{paciente.email}</Text>
        </View>

        <View style={style.campo}>
        <Text style={style.label}>Telefono: </Text>
        <Text style={style.value}>{paciente.numero}</Text>
        </View>

        <View style={style.campo}>
        <Text style={style.label}>Fecha: </Text>
        <Text style={style.value}>{formatearfecha(paciente.fecha)}</Text>
        </View>

        <View style={style.campo}>
        <Text style={style.label}>Sintomas: </Text>
        <Text style={style.value}>{paciente.sintomas}</Text>
        </View>


      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f59e0b',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  titleBold: {
    fontWeight: '700',
  },
  btnCerrar: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#d6350d',
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
  },
  btnCerrarTxt: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  campo:{
    marginBottom:18,

  },
  label:{
    color:'#6a6f75',
    fontWeight:'500',
  },
  value:{
    fontWeight:'400',
    fontSize:16,
    color:'#374151'
  }
});
export default Detail;
