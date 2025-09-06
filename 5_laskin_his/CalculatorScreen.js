import { StyleSheet, Text, View, Button, TextInput, Pressable, FlatList } from "react-native";
import { useState } from 'react';

export default function CalculatorScreen({ navigation }) {

    const [number, setNumber] = useState('');
    const [number2, setNumber2] = useState('');
    const sum = parseInt(number) + parseInt(number2);
    const miinus = parseInt(number) - parseInt(number2);
    const [total, setTotal] = useState(0);
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handlePress = () => {
        setTotal(sum);
        const addthis = String(number + " + " + number2 + " = " + sum);
        setTodos([...todos, { key: addthis }]);
        setTodo("");
        console.log(todos);
        //  Alert.alert("yhteensä: "+sum);
    };

    const handlePressMiinus = () => {
        setTotal(miinus);
        const minusthis = String(number + " - " + number2 + " = " + miinus);
        setTodos([...todos, { key: minusthis }]);
        setTodo("");
        console.log(todos);
        //  Alert.alert("yhteensä: "+miinus);
    };

    return (

        <View style={ styles.container}>
         
                <Text style={{ fontSize: 26 }}> {"Result: " + total} </Text>
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

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            { backgroundColor: pressed ? 'darkblue' : 'blue', margin: 5 },
                        ]}
                        onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            { backgroundColor: pressed ? 'darkblue' : 'blue', margin: 5 },
                        ]}
                        onPress={handlePressMiinus}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            { backgroundColor: pressed ? 'darkblue' : 'blue', margin: 5 },
                        ]}
                        onPress={() => navigation.navigate('History', {historycalcs: todos})}
                                        >
                        <Text style={styles.buttonText}>History</Text>
                    </Pressable>
                </View>
   


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'
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