import React from 'react';
import {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
} from 'react-native';
import Form from './src/components/Form';
import Paciente from './src/components/Paciente';

const App = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [pacientes, setPacientes] = useState([
    {
      id: 1692501805499,
      paciente: 'Pepe',
      propietario: 'Guillermo',
      email: 'guille@gmail.com',
      numero: '444',
      fecha: 'Tue Sep 05 2023 00:23:00 GMT-0300',
      sintomas: 'vomito',
    },
    {
      id: 1692501805479,
      paciente: 'Luna',
      propietario: 'Jorge',
      email: 'jorge@gmail.com',
      numero: '111',
      fecha: 'Tue Sep 05 2023 00:23:00 GMT-0300',
      sintomas: 'no come',
    },
  ]);
  const [paciente, setPaciente] = useState({});

  const handlerPress = () => {
    console.log('Me presionaste wey');
    setVisibleModal(!visibleModal);
  };

  const pacienteEditar = (id)=>{
    console.log('soy el id: ',id)
    const pacienteEdit = pacientes.filter(paciente => paciente.id === id) //filter me devuelve un array

    console.log('LINE 46',pacienteEdit)
    setPaciente(pacienteEdit[0])
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>
        Administrador de citas {''}
        <Text style={style.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={handlerPress} style={style.btnOnPress}>
        <Text style={style.btnText}>nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={style.nop}>No hay pacientes aun</Text>
      ) : (
        <FlatList
          style={style.listado}
          data={pacientes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
           // console.log(item);
            return (
              <Paciente
                /* key={item.id} */
                item={item}
                setVisibleModal={setVisibleModal}
                visibleModal={visibleModal}
                pacienteEditar={pacienteEditar}
              />
            );
          }}
        />
      )}

      <Form
        pacientes={pacientes}
        setPacientes={setPacientes}
        setVisibleModal={setVisibleModal}
        visibleModal={visibleModal}
        paciente={paciente}
        setPaciente={setPaciente}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#6b6e73',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '200',
    color: '#fefffe',
  },
  tituloBold: {
    fontWeight: '600',
    color: '#a535f1',
  },
  btnOnPress: {
    backgroundColor: '#a535f1',
    padding: 5,
    marginTop: 20,
    marginLeft: 20, // o tambien se puede usar marginHorizontal: 20
    marginRight: 20,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#fefffe',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  yes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  nop: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
