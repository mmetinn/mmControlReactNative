import React, { Component } from 'React';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class Logo extends Component {
    render() {
        return (
            
            <View style={styles.container}>                
                <Image style={{ width: 70, height: 70 }}
                    source={require('../images/logo.png')} />
                <Text style={styles.logoText}>MMControl'e Hoşgeldiniz</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(0,0,0,.6)',        
    }
})

export default Logo;