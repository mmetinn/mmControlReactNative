import React, { Component } from 'React';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    TextInput,
    Picker,

} from 'react-native';

import Logo from '../components/Logo';
import Axios from 'axios'
import { constants as CONSTS } from '../constants/constants'
import Loader from '../components/Loader';
import DropdownMenu from 'react-native-dropdown-menu';
import { Actions } from 'react-native-router-flux';
import CheckBoxGroup from "react-native-checkboxgroup"
import { CheckBox } from 'react-native';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            infoSelected: 'Doktor Kaydı Seçildi',
            text: '',
            ad: '',
            soyad: '',
            parola: '',
            parolaTekrar: '',
            email:'',
            phoneNumber: '',
            guvenlikCevabi: '',
            guvenlikSorusu: '',
            cinsiyet: '',
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

    signup = () => {
        const {
            ad, soyad, parola, parolaTekrar,email,
            phoneNumber, guvenlikCevabi, guvenlikSorusu, cinsiyet,selected,
        } = this.state
        if (parola === parolaTekrar) {
            const signupDatas={
                adi: ad,
                soyadi: soyad,
                parola: parola,
                email:email,
                telefon:phoneNumber,
                guvenlik_sorusu:guvenlikSorusu,
                guvenlik_cevabi:guvenlikCevabi,
                cinsiyet:cinsiyet,
                whichKind:(selected?'doctor':'patient'),
            }
            Axios.post(CONSTS.API_IP + '' + CONSTS.API_VERSION + '/signup', signupDatas)
                .then(response => {
                    console.log("response.data " + JSON.stringify(response.data));
                    const {
                        status,
                        token
                    } = response.data
                    console.log(typeof token);

                    this.setState({
                        loginStatus: status ? "LOGIN_SUCCESSFUL" : "LOGIN_FAILED",
                        loggedIn: status,
                        token: token
                    })
                    this.props.degistirSinifAd(this.state)
                })
                .catch(error => {
                    console.log(error);
                });
        }else{
            alert("parola ve parola tekrar uyuşmuyor.")
        }

    }

    goBack() {
        Actions.Login();
    }

    render() {
        var data = [["C", "Java", "JavaScript", "PHP"]];
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
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Ad *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(ad) => this.setState({ ad: ad })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Soyad *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(soyad) => this.setState({ soyad: soyad })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Parola *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(parola) => this.setState({ parola: parola })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Parola Tekrar *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(parolaTekrar) => this.setState({ parolaTekrar: parolaTekrar })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Email *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(email) => this.setState({ email: email })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Telefon Numarası *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber: phoneNumber })}
                        />
                    </View>
                    <Picker
                        selectedValue={this.state.guvenlikSorusu}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ guvenlikSorusu: itemValue })
                        }>
                        <Picker.Item label="Güvenlik sorusu seç *" value="start" />
                        <Picker.Item label="Doğum tarihiniz nedir?" value="birthday" />
                        <Picker.Item label="En sevdiğiniz öğretmenin adı nedir?" value="teacher" />
                        <Picker.Item label="En sevdiğiniz evcil hayvanın adı nedir?" value="pet" />

                    </Picker>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Güvenlik sorusunun cevabunu giriniz *' placeholderTextColor='#333'
                            selectionColor="#000"
                            onChangeText={(guvenlikCevabi) => this.setState({ guvenlikCevabi: guvenlikCevabi })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Picker
                            selectedValue={this.state.cinsiyet}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ cinsiyet: itemValue })
                            }>
                            <Picker.Item label="Cinsiyet *" value="start" />
                            <Picker.Item label="Kadın" value="woman" />
                            <Picker.Item label="Erkek" value="man" />

                        </Picker>
                    </View>
                    <TouchableOpacity onPress={this.signup} style={styles.button} >
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
    picker: {
        height: 50, width: 200,
        backgroundColor: 'rgb(255, 255,255)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        marginVertical: 10,
        overflow: 'hidden'
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
    inputBox: {
        flex: .8,
        backgroundColor: 'rgba(255,245,84,.8)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 18,
        color: '#333',
        margin: 8,
    },
});
