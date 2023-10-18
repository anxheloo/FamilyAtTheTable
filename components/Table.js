import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useState} from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Table = ({plates, zIndex}) => {
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

  return (
    <View style={styles.tableSpecs(zIndex)}>
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
  );
};

const styles = StyleSheet.create({
  tableSpecs: zIndex => ({
    width: width / 2.5,
    height: height / 2,
    backgroundColor: 'lightgrey',
    borderRadius: 12,
    zIndex: zIndex,
  }),

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

export default Table;
