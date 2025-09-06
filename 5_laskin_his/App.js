import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculatorScreen from './CalculatorScreen'
import HistoryScreen from './HistoryScreen'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'left' }}>
        <Stack.Screen name="Calculator" component={CalculatorScreen}
          options={{
            headerTitleAlign: 'left',
          }} 
          />
        <Stack.Screen name="History" component={HistoryScreen} 
        options = {{
          title: '',
          headerBackTitle: '   History',
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}