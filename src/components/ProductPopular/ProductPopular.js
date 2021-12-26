import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 1,
    image: require('../../../assets/images/puik-design-furniture-black-shunan-low-coffee-table-design-milk-shop.png'),
    name: 'Shunnan Low Coffee Table',
  },
  {
    id: 3,
    image: require('../../../assets/images/image-8.png'),
    name: 'Cafe Dinning Table',
  },
  {
    id: 2,
    image: require('../../../assets/images/image-9.png'),
    name: 'Terrazzo Coffee Table',
  },
];

const ProductPopular = () => {
  const [selectedId, setSelectedId] = useState(DATA[0].id);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.containerProduct}>
        <Image
          source={item.image}
          style={styles.image}
        />
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.nameProduct}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>
        Popular Products
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -64,
  },  
  containerProduct: {
    width: 120,
    height: 160,
    backgroundColor: '#fff',
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerTitle: {
    paddingHorizontal: 20,
    fontWeight: '700',
    fontSize: 16
  },
  image: {
    width: '100%',
    height: '62%'
  },
  nameProduct: {
    color: '#666',
    fontWeight: '600',
    fontSize: 14,
    padding: 8,
    lineHeight: 20,
  },
});

export default ProductPopular;
