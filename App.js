import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Table from './components/Table';
import ProductInfo from './components/ProductInfo';
import Triangle from './components/Triangle';

const App = () => {
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [selectedPlateIndex, setSelectedPlateIndex] = useState(null);

  const plates = [
    {
      top: 20,
      left: 20,
      // position: new Animated.ValueXY({x: 20, y: 20}),
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 350,
      y: 40,
      centered: false,
      zIndex: 999,
    },

    {
      top: 20,
      left: 210,
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 60,
      y: 40,
      centered: false,
      zIndex: 999,
    },

    {
      top: 110,
      left: 215,
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 55,
      y: -50,
      centered: false,
      zIndex: 999,
    },

    {
      top: 110,
      left: 20,
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 250,
      y: -50,
      centered: false,
      zIndex: 999,
    },
  ];

  const plates2 = [
    {
      top: 20,
      left: 20,
      // position: new Animated.ValueXY({x: 20, y: 20}),
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: -250,
      y: 40,
      centered: false,
      zIndex: 999,
    },

    {
      top: 100,
      left: 20,
      // position: new Animated.ValueXY({x: 20, y: 20}),
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 250,
      y: 40,
      centered: false,
      zIndex: 999,
    },

    // {
    //   top: 20,
    //   left: 210,
    //   position: new Animated.ValueXY({x: 0, y: 0}),
    //   x: 60,
    //   y: 40,
    //   centered: false,
    // },

    // {
    //   top: 110,
    //   left: 215,
    //   position: new Animated.ValueXY({x: 0, y: 0}),
    //   x: 55,
    //   y: -50,
    //   centered: false,
    // },

    // {
    //   top: 110,
    //   left: 20,
    //   position: new Animated.ValueXY({x: 0, y: 0}),
    //   x: 250,
    //   y: -50,
    //   centered: false,
    // },
  ];

  return (
    <View style={styles.container}>
      <Table plates={plates} zIndex={1}></Table>
      <Table plates={plates2} zIndex={0}></Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to center content vertically and horizontally
    backgroundColor: 'gray',
    justifyContent: 'space-around', // Center vertically
    alignItems: 'center', // Center horizontally
    flexDirection: 'row',
  },
});

export default App;
