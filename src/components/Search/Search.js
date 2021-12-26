import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSlidersH, faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [value, setValue] = useState();
    const onChangeText = (text) => {
        setValue(text)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.searchButton}>
                    <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} size={20} />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder={'Search.....'}
                    value={value}
                    onChangeText={(text) => onChangeText(text)}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <FontAwesomeIcon icon={faSlidersH} color={'#fff'} size={24}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 20
    },
    searchBar: {
        paddingVertical: 9,
        marginHorizontal: 12,
        backgroundColor: '#FAFBFC',
        borderRadius: 8,
        flex: 12,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchButton: {
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRightColor: '#ccc',
        flex: 1
    },
    searchInput: {
        height: '100%',
        padding: 10,
        borderRadius: 8,
        flex: 12,
    },
    button: {
        flex: 1,
        backgroundColor: '#F7854A',
        padding: 16,
        borderRadius: 12,
        transform: [{rotate: '90deg'}]
    },
})

export default Search