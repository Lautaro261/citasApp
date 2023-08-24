import React from 'react';
import {Text, View, StyleSheet, Pressable, Alert} from 'react-native';
import {formatearfecha} from '../helpers';

const Paciente = ({
  item,
  setVisibleModal,
  visibleModal,
  pacienteEditar,
  pacienteEliminar,
  setPacienteModal,
  pacienteModal,
  setPaciente,
}) => {
  const {paciente, fecha, id} = item;
  //console.log('desde pcientes', item);
  /* const formatearfecha = fecha => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  };
 */
  const editar = id => {
    pacienteEditar(id);
    setVisibleModal(!visibleModal);
  };
  /*  const eliminar =(id)=>{
    
    pacienteEliminar(id)
  } */

  return (
    <Pressable
      onPress={() => {
        setPacienteModal(!pacienteModal);
        setPaciente(item);
      }}>
      <View style={style.contenedor}>
        <Text style={style.label}>Paciente:</Text>
        <Text style={style.texto}>{paciente}</Text>
        <Text style={style.fecha}>{formatearfecha(fecha)}</Text>

        <View style={style.contenedorBtn}>
          <Pressable
            onPress={() => {
              editar(id);
            }}
            style={[style.btn, style.btnEditar]}>
            <Text style={style.textBtn}>Editar</Text>
          </Pressable>
          <Pressable
            onLongPress={() => {
              pacienteEliminar(id);
            }}
            style={[style.btn, style.btnEliminar]}>
            <Text style={style.textBtn}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    borderBottomColor: '#94a388',
    borderBottomWidth: 3,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginBottom: 10,
  },
  texto: {
    color: '#6e34cc',
    fontSize: 20,
    fontWeight: '500',
  },
  /* fecha:{
    } */
  contenedorBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textBtn: {
    color: '#FFF',
    fontWeight: '400',
  },
  btnEditar: {
    backgroundColor: '#f59f0bb5',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
});

export default Paciente;
