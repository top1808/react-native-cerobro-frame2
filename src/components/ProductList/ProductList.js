import React, {useState} from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import Product from '../Product/Product'

import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../../../assets/images/puik-design-furniture-black-shunan-low-coffee-table-design-milk-shop.png'),
    name: 'Shunan Low Coffee Table',
    material: 'brass',
    sizes: [
      "(Small): DIA 36 x H 14",
      "(Large): DIA 42 x H 14",
    ],
    price: 259,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: require('../../../assets/images/hollis-morris-furniture-the-crescenttown-coffee-table-design-milk-shop.png'),
    name: 'Crescenttown Coffee Table',
    material: 'Leather',
    sizes: [
      "(Small): DIA 36 x H 14",
      "(Large): DIA 42 x H 14",
    ],
    price: 320,
  }
]


const Productlist = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <Product 
        item={item}
        onPress={() => navigation.navigate('Best Product', { item })}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Latest model</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -48
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20
  }
})

export default Productlist