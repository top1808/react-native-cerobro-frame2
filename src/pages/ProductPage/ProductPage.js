import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCartPlus,
  faLongArrowAltLeft,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

import {useRoute, useNavigation} from '@react-navigation/native';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const ProductPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {image, name, material, price, sizes} = route.params.item;
  console.log(route);
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBagButton}>
          <FontAwesomeIcon icon={faShoppingBag} size={16} color={'#F45926'} />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.image} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productMaterialTitle}>
        Materials:
        <Text style={styles.productMaterialDes}> {material}</Text>
      </Text>
      <View>
        <Text style={styles.sizeHeader}>Size:</Text>
        {sizes.map((size, i) => { 
          return <Text key={i} style={styles.sizeType}>{size}</Text>
        })}
      </View>
      <Text style={styles.productMaterialTitle}>
        Production Time:
        <Text style={styles.productMaterialDes}> Made to order, ships out in 5-6 weeks</Text>
      </Text>
      <Text
        style={styles.productDescription}
        numberOfLines={6}
        ellipsizeMode="tail">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic
      </Text>
      <TouchableOpacity style={styles.button}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faCartPlus} style={styles.icon} />
          <Text style={styles.text}>Add to cart</Text>
        </View>
        <Text style={styles.text}>{formatter.format(price)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingHorizontal: 22,
    paddingVertical: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: 0,
    right: 0,
  },
  headerBagButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 59,
    backgroundColor: '#F5E6E3',
  },
  image: {
    width: '85%',
    marginVertical: 20,
    height: '30%',
    left: 25
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  productMaterialTitle: {
    fontSize: 15,
    marginVertical: 8,
    fontWeight: '600'
  },
  productMaterialDes: {
    fontWeight: '500',
    color: '#555',
    fontSize: 12,
    height: 24,
  },
  sizeHeader: {
    fontWeight: '700',
    fontSize: 16
  },
  sizeType: {
    color: '#555',
    fontSize: 13,
    marginLeft: 40,
    marginBottom: 6
  },
  productDescription: {
    color: '#777',
    fontWeight: '500',
    marginVertical: 12,
    lineHeight: 20
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F56335',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 20,
  },
  icon: {
    color: '#fff',
    padding: 12,
    borderRightWidth: 12,
    marginRight: 24,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductPage;
