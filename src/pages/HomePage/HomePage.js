import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {Search, ProductList, ProductPopular, Menu } from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {


  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={styles.container}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBars} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Furniture</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/loading-iamge.png')}
          />
        </View>
      </View>
      <Search/>
      <Menu/>
      <ProductList/>
      <ProductPopular/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16
  },
  button: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },
  icon: {
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 20,
  },
});

export default HomePage;
