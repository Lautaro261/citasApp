import React from "react";
import { Text, View } from "react-native";


const Paciente = ({item})=>{
    const {paciente, fecha} = item
    console.log('desde pcientes', item)

    return(
        <Text>{paciente}</Text>
    )
}

export default Paciente;