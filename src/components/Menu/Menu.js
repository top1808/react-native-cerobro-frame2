import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView
} from 'react-native';
import MenuItem from '../MenuItem/MenuItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Menu = () => {
  const [selectedId, setSelectedId] = useState(DATA[0].id);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#282734' : '#F1F5F6';
    const color = item.id === selectedId ? 'white' : '#9D9D9E';

    return (
      <MenuItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal
        style={{marginLeft: 12}}
      />
    </SafeAreaView>
  );
};

export default Menu;
