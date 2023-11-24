import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetchAnime();
  }, []);

  const fetchAnime = async () => {
    try {
      const response = await axios.get('https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/anime');
      setAnime(response.data);
    } catch (error) {
      console.error("Erro ao buscar Anime:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAnime();
    }, [])
  );

  return (
    <View style={styles.container}>

        <View style={styles.addButtonContainer}>
            <Button
            title="Adicionar Novo Anime"
            onPress={() => navigation.navigate('AddAnime')}
            />
        </View>

      <FlatList
        data={anime}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>

            <Text style={styles.nome}>{item.nome}</Text>

            <Image source={{ uri: item.capa }} style={styles.capa} />

            <Text>Estudio: {item.estudio}</Text>

            <Text>Status: {item.status}</Text>

            <Text>{item.descricao}</Text>

            <View style={styles.buttonsContainer}>

              <Button
                title="Visualizar"
                onPress={() => navigation.navigate('ViewAnime', { id: item.id })}
              />

              <Button
                title="Editar"
                onPress={() => navigation.navigate('EditAnime', { id: item.id })}
              />

              <Button
                title="Remover"
                onPress={async () => {
                  await axios.delete(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/anime/${item.id}`);
                  fetchAnime();
                }}
              />

            </View>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1b1e23',
  },
  itemContainer: {
    backgroundColor: '#1b1e23 ',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  capa: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  addButtonContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
