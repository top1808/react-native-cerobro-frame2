import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Product = ({
  item,
  onPress,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity
      style={[styles.container]}
    >
    <Image
        source={item.image}
        style={styles.image}
    />
    <Text
        ellipsizeMode="tail"
        numberOfLines={2}
        style={[styles.productName]}>
        {item.name}
    </Text>
    <View style={styles.productPrice}>
        <View>
            <Text style={{color: '#555', fontSize: 10}}>Price</Text>
            <Text style={[{fontWeight: '700', color: '#F58D6A'}]}>
            {formatter.format(item.price)}
            </Text>
        </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 240,
    backgroundColor: '#fff',
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    height: '60%',
    borderRadius: 14,
    width: '100%',
  },
  productName: {
    fontWeight: '600',
    color: '#555',
    fontSize: 16,
    marginHorizontal: 12,
    height: 46,
    lineHeight: 23
  },
  productPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#FBD546',
    padding: 10,
    borderRadius: 8,
    color: '#fff',
  },
});

export default Product;
