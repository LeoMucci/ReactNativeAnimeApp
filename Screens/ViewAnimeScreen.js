import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

function ViewAnimeScreen({ route }) {
  const { id } = route.params;
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetchAnime();
  }, []);

  const fetchAnime = async () => {
    try {
      const response = await axios.get(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/anime/${id}`);
      setAnime(response.data);
    } catch (error) {
      console.error("Erro ao buscar anime:", error);
    }
  };

  return (
    <View style={styles.container}>
      {anime && (
        <View style={styles.content}>

          <Text style={styles.nome}>{anime.nome}</Text>

          <Image source={{ uri: anime.capa }} style={styles.capa} />

          <Text>Estudio: {anime.estudio}</Text>

          <Text>Status: {anime.status}</Text>

          <Text>{anime.descricao}</Text>
          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1e23 ',
  },
  content: {
    backgroundColor: '#1b1e23 ',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  capa: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ViewAnimeScreen;
