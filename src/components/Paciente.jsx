import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";


const Paciente = ({item})=>{
    const {paciente, fecha} = item
    console.log('desde pcientes', item)
    const formatearfecha = (fecha) =>{
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'long',
            year:'numeric',
            month:'long',
            day:'numeric'
        }
        return nuevaFecha.toLocaleDateString('es-ES',opciones)
    }

    return(
        <View style={style.contenedor}>
            
            <Text style={style.label}>Paciente:</Text>
            <Text style={style.texto}>{paciente}</Text>
            <Text style={style.fecha}>{formatearfecha(fecha)}</Text>

            <View style={style.contenedorBtn}>
                <Pressable style={[style.btn, style.btnEditar]}>
                    <Text style={style.textBtn}>Editar</Text>
                </Pressable>
                <Pressable style={[style.btn, style.btnEliminar]}>
                    <Text style={style.textBtn}>
                        Eliminar
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    contenedor:{
        backgroundColor:'#FFF',
        padding: 20,
        borderRadius:10,
        borderBottomColor:'#94a388',
        borderBottomWidth:3

    },
    label:{
        color:'#374151',
        textTransform:'uppercase',
        fontWeight:'500',
        marginBottom:10
        
    },
    texto:{
        color:'#6e34cc',
        fontSize:20,
        fontWeight:'500'
    },
    /* fecha:{
    } */
    contenedorBtn:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    btn:{
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:5

    },
    textBtn:{
        color:'#FFF',
        fontWeight:'400'
    },
    btnEditar:{
        backgroundColor:'#f59f0bb5'

    },
    btnEliminar:{
        backgroundColor:'#EF4444'

    }

})

export default Paciente;