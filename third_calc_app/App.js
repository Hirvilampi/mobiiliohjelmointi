import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TextInput, Pressable, FlatList } from 'react-native';
import {useState} from 'react';



export default function App() {

const [number, setNumber] = useState('');
const [number2, setNumber2] = useState('');
const sum = parseInt(number) + parseInt(number2);
const miinus = parseInt(number) - parseInt(number2);
const [total, setTotal] = useState(0);
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);

const handlePress = () => {
 setTotal(sum);
const addthis = String(number+" + "+number2+" = "+sum); 
   setTodos([...todos, { key: addthis }]);
  setTodo("");
//  Alert.alert("yhteensä: "+sum);
};

const handlePressMiinus = () => {
  setTotal(miinus);
  const minusthis = String(number+" - "+number2+" = "+miinus);
   setTodos([...todos, { key: minusthis }]);
  setTodo("");
//  Alert.alert("yhteensä: "+miinus);
};
 

return (
  <SafeAreaView style={styles.container}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 26}}> {"Result: "+total} </Text>
    <TextInput 
        placeholder='0' 
        keyboardType='numeric'
        onChangeText={setNumber} 
        value={number} 
        style={styles.input}
    />
        <TextInput 
        placeholder='0' 
        keyboardType='numeric'
        defaultValue='0'
        onChangeText={setNumber2}                                    
        value={number2} 
        style={styles.input}
    />
    

 

        <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>
     <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? 'darkblue' : 'blue', margin: 5},
      ]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText }>+</Text>
    </Pressable>

         <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? 'darkblue' : 'blue', margin: 5},
            ]}
            onPress={handlePressMiinus}
        >
      <Text style={styles.buttonText }>-</Text>
    </Pressable>
  </View>
  </View>

<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{marginTop:60}}>History</Text>
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}     // <- unique key
      renderItem={({ item }) => <Text>{item.key}</Text>}
/>


</View>



 
  </SafeAreaView>

);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
    button: {
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});
