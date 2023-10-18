import React from 'react';
import {View, StyleSheet} from 'react-native';

const Triangle = ({
  triangleTop,
  triangleRight,
  triangleLeft,
  triangleBottom,
  rotate,
}) => {
  return (
    <View
      style={styles.triangleContainer(
        triangleTop,
        triangleRight,
        triangleLeft,
        triangleBottom,
        rotate,
      )}></View>
  );
};

const styles = StyleSheet.create({
  triangleContainer: (
    triangleTop,
    triangleRight,
    triangleLeft,
    triangleBottom,
    rotate,
  ) => ({
    width: 0,
    height: 0,
    borderLeftWidth: 15, // Adjust this value to control the triangle's width
    borderRightWidth: 15, // Adjust this value to control the triangle's width
    borderBottomWidth: 30, // Adjust this value to control the triangle's height
    borderTopWidth: 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'white', // Change the border color to set the triangle's color
    borderRadius: 10,
    transform: [{rotate: rotate}],

    position: 'absolute',
    top: triangleTop,
    right: triangleRight,
    left: triangleLeft,
    bottom: triangleBottom,
  }),
});

export default Triangle;
