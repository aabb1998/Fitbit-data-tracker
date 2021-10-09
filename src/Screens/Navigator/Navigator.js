import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Survey 1" component={Survey1} />
      <Stack.Screen name="Survey 2" component={Survey2} />
      <Stack.Screen name="Survey 3" component={Survey3} />
      <Stack.Screen name="Survey 4" component={Survey4} />
    </Stack.Navigator>
  );
}