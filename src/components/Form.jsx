import React, {useState} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Form = ({visibleModal, setVisibleModal, setPacientes, pacientes}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [fecha, setFecha] = useState(new Date());

  const changeFecha = date => {
    console.log('Nueva fecha', date);
    setFecha(date);
  };
  const handlerNewCita = () => {
    console.log('Entre a la varidacion jeje')
    //validacion 
    if([paciente, propietario, email, fecha, sintomas].includes('')){
      console.log('No paso la validacion papi')
      Alert.alert(
        'Error: esto no es coca, papi!', 
        'Todos los campos son obligatorios',
        [{text: 'Cancelar', style:'cancel'}, {text:'Entendí wey'}])
        return
    }

    console.log('agregando paciente che :D')
    const nuevoPaciente ={
      id: Date.now(),
      paciente,
      propietario,
      email,
      numero,
      fecha,
      sintomas
    }
    console.log(nuevoPaciente)
    setPacientes([...pacientes, nuevoPaciente])
    setPaciente('')
    setPropietario('')
    setEmail('')
    setNumero('')
    setFecha(new Date())
    setSintomas('')
    setVisibleModal(!visibleModal)
  };

  return (
    <Modal animationType="slide" visible={visibleModal}>
      <View style={style.container}>
        <ScrollView>
          <Text style={style.title}>
            {' '}
            Nueva
            <Text style={style.titleBold}> Cita</Text>
          </Text>

          <Pressable
            onLongPress={() => {
              setVisibleModal(!visibleModal);
            }}
            style={style.btnCancelar}>
            <Text style={style.btnCancelarTxt}>Cancelar</Text>
          </Pressable>

          {/* 1) INPUT NOMBRE DE PACIENTE */}
          <Text style={style.label}>Nombre Paciente</Text>
          <TextInput
            style={style.input}
            placeholder="Nombre Paciente"
            placeholderTextColor={'#666'}
            value={paciente}
            onChangeText={setPaciente}
          />

          {/* 2) INPUT NOMBRE DE PROPIETARIO */}
          <Text style={style.label}>Nombre Propietario</Text>
          <TextInput
            style={style.input}
            placeholder="Nombre Propietario"
            placeholderTextColor={'#666'}
            value={propietario}
            onChangeText={setPropietario}
          />

          {/* 3) INPUT EMAIL */}
          <Text style={style.label}>Email del Propietario</Text>
          <TextInput
            style={style.input}
            placeholder="Email"
            placeholderTextColor={'#666'}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* 4) INPUT NUMERO DE TELEFONO */}
          <Text style={style.label}>Numero de Telefono</Text>
          <TextInput
            style={style.input}
            placeholder="Numero de Telefono"
            placeholderTextColor={'#666'}
            keyboardType="number-pad"
            value={numero}
            onChangeText={setNumero}
            maxLength={12}
          />

          <Text style={style.label}>Fecha Alta</Text>
          <View style={style.fechaStyle}>
            <DatePicker
              date={fecha}
              locale="es"
              textColor="#000000"
              fadeToColor="none"
              onDateChange={date => {
                changeFecha(date);
              }}
            />
          </View>

          {/* 5) INPUT SINTOMAS */}
          <Text style={style.label}>Sintomas</Text>
          <TextInput
            style={[style.input, style.sintomasInput]}
            placeholder="Sintomas"
            placeholderTextColor={'#666'}
            value={sintomas}
            onChangeText={setSintomas}
            multiline={true}
            numberOfLines={3}
          />

          <Pressable style={style.btnNuevaCita} onPress={handlerNewCita}>
            <Text style={style.btnNuevaCitaTxt}>Agregar paciente </Text>
          </Pressable>
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
  sintomasInput: {
    height: 100,
  },
  fechaStyle: {
    backgroundColor: '#FFF',
    marginHorizontal: 45,
    borderRadius: 5,
    color: '#0c1116',
  },
  btnCancelar: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
  },
  btnCancelarTxt: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  btnNuevaCita: {
    marginVertical: 30,
    backgroundColor: '#f79c25',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnNuevaCitaTxt: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
  },
});

export default Form;
