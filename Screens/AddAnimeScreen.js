import React, { useState } from 'react'; 

import { View, TextInput, Button, StyleSheet } from 'react-native'; 

import axios from 'axios'; 

function AddAnimeScreen({ navigation }) { 

    const [nome, setNome] = useState(''); 
   
    const [capa, setCapa] = useState(''); 

    const [estudio, setEstudio] = useState(''); 
   
    const [status, setStatus] = useState('');  

    const [descricao, setDescricao] = useState(''); 
    
     const addAnime = async () => { 
    
      try { 
    
       await axios.post('https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/anime', { nome, capa, estudio, status, descricao }); 
    
       navigation.goBack(); 
    
      } catch (error) { 
    
       console.error("Erro ao adicionar anime:", error); 
    
      } 
    
     }; 

      return ( 

          <View style={styles.container}> 
        
        <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} /> 
 

        <TextInput style={styles.input} placeholder="Estudio" value={estudio} onChangeText={setEstudio} />

        <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} /> 
        
        <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} /> 
        
           <Button title="Adicionar" onPress={addAnime} /> 
        
          </View> 
        
         ); 
        
        } 

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems: 'center',
              padding: 20,
            },
            input: {
              width: '100%',
              marginBottom: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            },
          });

    export default AddAnimeScreen; 