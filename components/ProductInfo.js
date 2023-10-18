import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Triangle from './Triangle';

const ProductInfo = ({
  top,
  left,
  right,
  bottom,
  triangleTop,
  triangleRight,
  triangleBottom,
  triangleLeft,
  rotate,
}) => {
  return (
    <View style={styles.productInfo(top, left, right, bottom)}>
      <Triangle
        triangleTop={triangleTop}
        triangleRight={triangleRight}
        triangleBottom={triangleBottom}
        triangleLeft={triangleLeft}
        rotate={rotate}></Triangle>
    </View>
  );
};

const styles = StyleSheet.create({
  productInfo: (top, left, right, bottom) => ({
    width: 110,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    position: 'absolute',
    top: top,
    left: left,
    right: right,
    bottom: bottom,
  }),
});

export default ProductInfo;
