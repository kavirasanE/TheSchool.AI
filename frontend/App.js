// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Setting from './Setting';

function App() {
    const Drawer =createDrawerNavigator();
  return (
    <NavigationContainer>
        
        <Drawer.Navigator>
            <Drawer.Screen name='Dashboard' component={Dashboard}/>
            <Drawer.Screen name='setting' component={Setting}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App