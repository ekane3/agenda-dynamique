import React from 'react';
import { FlatList,TouchableOpacity, StyleSheet,Text, View } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';

function Screen(){
    return(
        <View>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={ this.props.navigation.openDrawer} 
                    activeOpacity={0.8}
                    style={styles.topacity}
                >  
                    <FontAwesome5 name="bars" size={24} color="#161924"/>
                </TouchableOpacity>
                <View style={{ flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                    <Text style={styles.text}>
                        {this.props.name}Screen
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color:"#161924",
        fontSize:20,
        fontWeight:"500"
    },
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  topacity:{
    alignItems: 'flex-end',
    margin:16
    
  },

});

export default Screen;