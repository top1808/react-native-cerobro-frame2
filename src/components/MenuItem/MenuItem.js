import React from "react"
import {Text, TouchableOpacity, StyleSheet} from "react-native"

const MenuItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  )

const styles = StyleSheet.create({
    item: {
      padding: 12,
      paddingHorizontal: 24,
      marginVertical: 32,
      marginHorizontal: 8,
      borderRadius: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  })

export default MenuItem