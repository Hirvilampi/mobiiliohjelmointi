import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, 
  ActivityIndicator, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => {
      if (!response.ok)
        throw new Error("Error in fetch:"+response.statusText);
      return response.json()
    })
    .then(data => setRepositories(data.item))
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <TextInput
         style={{fontSize: 18, width: 200}}
         placeholder='keyword'
         value={keyword}
         onChangeText={text => setKeyword(text)}
      />
      <Button title="Find" onPress={handleFetch} />      

      {loading && <ActivityIndicator size="large" />}

      <FlatList 
      style={{margin: "3%"}}
        data={repositories}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 
          <View>
            <Text style={{fontSize:18, fontWeight: "bold"}}>
              {item.full_name}
            </Text>
            <Text style={{fontsize:16}}>
              {item.description}
            </Text>
          </View>}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
