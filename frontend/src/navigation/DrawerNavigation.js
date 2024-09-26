import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigation from './BottomTabNavigation';


const DrawerNavigation = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close it"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View >
      {/* style={styles.container} */}
        {/* <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        /> */}
        {/* <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text> */}
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      {/* <Icon name="chart" size={30} color="#900" /> */}
      <Icon name="home" size={30} color="#4F8EF7" />
      
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   display:'flex',
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  //   padding:16

  // },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default DrawerNavigation;