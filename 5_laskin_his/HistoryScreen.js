import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function HistoryScreen({ navigation, route }) {
    const { historycalcs } = route.params;
    console.log(historycalcs);

    useLayoutEffect(() => {
       navigation.setOptions({
        title: ''
       });
    }, [navigation]
    );

    return (
        <View style={{ flex: 3, alignItems: 'center' }}>
            <Text style={{ marginTop: 20 }}>History</Text>
            <FlatList
                data={historycalcs}
                keyExtractor={(item) => item.id}     // <- unique key
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
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
});