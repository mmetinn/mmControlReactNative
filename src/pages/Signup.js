import React, { Component } from 'React';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    Picker,
    RadioButtons,
    CheckBox,
    CheckboxGroup
} from 'react-native';

import Logo from '../components/Logo';
import Loader from '../components/Loader';
import { Actions } from 'react-native-router-flux';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            infoSelected: 'Doktor Kaydı Seçildi',
            language: '',
        }
    }
    

    changeSelected = () => {
        this.setState({
            selected: !this.state.selected,
        })
        if (this.state.selected) {
            this.setState({
                infoSelected: 'Hasta Kaydı Seçildi'
            })
        } else {
            this.setState({
                infoSelected: 'Doktor Kaydı Seçildi'
            })
        }
    }

    
    goBack() {
        Actions.Login();
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.container}>
                    <Logo />
                    <View style={styles.viewBox} >
                        <TouchableOpacity style={this.state.selected ? styles.btnSelected : styles.btnNotSelected} onPress={this.changeSelected} >
                            <Text>
                                Doktor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected ? styles.btnNotSelected : styles.btnSelected} onPress={this.changeSelected} >
                            <Text>
                                Hasta</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>{this.state.infoSelected}</Text>                   
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Signup</Text>
                    </TouchableOpacity>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Zaten bir hesabın var mı?</Text>
                        <TouchableOpacity onPress={this.goBack} ><Text style={styles.signupButton}> Giriş Yap</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        )
    }
}


export default (Signup);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdfdfd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        fontSize: 16
    },
    signupButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        flex: .2,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255,245,84,.8)',
        margin: 8,
        borderRadius: 25,
        paddingVertical: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center'
    },
    errorText: {
        color: "#000",
        fontSize: 14,
        paddingHorizontal: 16,
        paddingBottom: 8
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        marginVertical: 10
    },
    viewBox: {
        flexDirection: 'row', borderRadius: 25,
        backgroundColor: '#ecf0f1',
    },
    btnSelected: {
        flex: .2,
        paddingHorizontal: 20,
        backgroundColor: 'rgb(255,245,84)',
        paddingVertical: 16,
    },
    btnNotSelected: {
        flex: .2,
        paddingHorizontal: 20,
        paddingVertical: 16,

    },
    errorText: {
        color: 'red',
        fontSize: 12,
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    dropDown: {
        flex: 1,
        paddingHorizontal: 20,
        margin: 8,
        borderRadius: 25,
        paddingVertical: 16,

    },
    picker: {
        width: 300,
        backgroundColor: 'rgba(255,245,84,.8)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        marginVertical: 10
    },
    radioFrom: {
        backgroundColor: 'rgba(255,245,84,.8)',
        borderRadius: 25,
    },
});
