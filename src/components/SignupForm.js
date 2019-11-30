import React, { Component } from 'React';

import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    login = () => {
        alert('email:'+this.state.email+' password:'+this.state.password);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Email' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>                
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Password' placeholderTextColor='#333'
                        selectionColor="#000" keyboardType="email-address"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={styles.button}>
                        <Text onPress={this.login} style={styles.buttonText}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        flex: .8,
        backgroundColor: 'rgba(255,245,84,.8)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 18,
        color: '#333',
        margin: 8,
    },
    button: {
        flex: .2,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,245,84,.8)',
        //        backgroundColor: '#c79200',
        //backgroundColor:'rgba(199,146,0,.6)',

        margin: 8,
        borderRadius: 25,
        paddingVertical: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    }
})

export default SignupForm;