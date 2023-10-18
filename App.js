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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const App = () => {
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [selectedPlateIndex, setSelectedPlateIndex] = useState(null);

  const handlePlateAnimation = plate => {
    Animated.timing(plate.position, {
      toValue: {x: plate.x, y: plate.y},
      duration: 1000,
      speed: 5,
      bounciness: 5,
      useNativeDriver: true,
    }).start();
  };

  const handlePlateReturn = plate => {
    Animated.timing(plate.position, {
      toValue: {x: 0, y: 0},
      duration: 1000,
      speed: 5,
      bounciness: 5,
      useNativeDriver: true,
    }).start();
  };

  const handlePlatePress = plate => {
    if (!plate.centered) {
      // Center the plate
      handlePlateAnimation(plate);
    } else {
      // Return the plate to its initial position
      handlePlateReturn(plate);
    }
    // Toggle the centered state of the plate
    plate.centered = !plate.centered;
  };

  const plates = [
    {
      top: -160,
      left: 60,
      // position: new Animated.ValueXY({x: 20, y: 20}),
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 255,
      y: 50,
      centered: false,
      zIndex: 999,
    },

    {
      top: -260,
      left: 60,
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 255,
      y: -50,
      centered: false,
      zIndex: 999,
    },

    {
      top: 20,
      left: -480,
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 85,
      y: -50,
      centered: false,
      zIndex: 999,
    },

    {
      top: -80,
      left: -480,
      position: new Animated.ValueXY({x: 0, y: 0}),
      x: 85,
      y: 50,
      centered: false,
      zIndex: 999,
    },
  ];

  const plates2 = [
    {
      top: -100,
      left: -550,
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
    <>
      <View style={styles.container}>
        <View style={styles.tableSpecs}></View>
        <View style={styles.tableSpecs}></View>
      </View>

      <View>
        {plates.map((plate, index) => (
          <Animated.View key={index}>
            <TouchableOpacity
              style={styles.plate(
                plate.top,
                plate.left,
                plate.position,
                plate.zIndex,
              )}
              onPress={() => {
                handlePlatePress(plate);
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                }}></View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </>
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

  tableSpecs: {
    width: width / 2.5,
    height: height / 2,
    backgroundColor: 'lightgrey',
    borderRadius: 12,
  },

  plate: (top, left, position, zIndex) => ({
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: top,
    left: left,
    transform: [{translateX: position.x}, {translateY: position.y}],
    zIndex: zIndex,
  }),
});

export default App;
