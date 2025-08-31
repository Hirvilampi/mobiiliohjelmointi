import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);


  const pressedAdd = () => {
    if (item.length > 0) {
      setList([...list, {key: item}]);
      setItem("");
    }
  }

    const pressedClear = () => {
       setList([]);
       setItem("");
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <TextInput
           style={styles.input}
           onChangeText={setItem}
           value={item}
        />
      </View>
      
      <View style={{flex: 1, flexDirection:'row'}}>
           <Button onPress={pressedAdd} title="Add" />
           <Button onPress={pressedClear} title="Clear"/>
      </View>

      <View  style={{flex:6, justifyContent: 'flex-start', alignItems: 'center' }}>
               <Text style={{fontWeight: 'bold', color:'#212bafff'}}>Shopping List</Text>
               <FlatList 
                   data={list} 
                   renderItem={({item}) => <Text>{item.key}</Text>}
               />
               <StatusBar style="auto" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '60%',
  },
});
