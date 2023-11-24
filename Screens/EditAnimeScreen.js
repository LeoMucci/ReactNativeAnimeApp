import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function EditAnimeScreen({ route, navigation }) {
   
  const { id } = route.params;
  const [nome, setNome] = useState('');
  const [capa, setCapa] = useState('');
  const [estudio, setEstudio] = useState('');  
  const [status, setStatus] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {

    fetchAnime();

  }, []);

  const fetchAnime = async () => {
    try {
      const response = await axios.get(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/anime//${id}`);
      const anime = response.data;

      setNome(anime.nome);

      setCapa(anime.capa);

      setEstudio(anime.estudio);

      setStatus(anime.status);

      setDescricao(anime.descricao);

    } catch (error) {

      console.error("Erro ao buscar anime:", error);
    }
  };

  const editAnime = async () => {
    try {

      await axios.put(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/anime/${id}`, { nome, capa, estudio, status, descricao });
      navigation.goBack();

    } catch (error) {

      console.error("Erro ao editar anime:", error);

    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />

      <TextInput style={styles.input} placeholder="Capa" value={capa} onChangeText={setCapa} />

      <TextInput style={styles.input} placeholder="Estudio" value={estudio} onChangeText={setEstudio} />

      <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} />

      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />

      <Button title="Editar" onPress={editAnime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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

export default EditAnimeScreen;
