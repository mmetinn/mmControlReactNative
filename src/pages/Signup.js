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
import { Field, reduxForm } from 'redux-form';
import InputText from '../components/InputText';
import Loader from '../components/Loader';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { compose } from "redux";
import { createNewUser } from '../actions/auth.actions';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            infoSelected: 'Doktor Kaydı Seçildi',
            language: '',
        }
    }
    renderTextInput = (field) => {
        const { meta: { touched, error }, label, secureTextEntry, maxLength, keyboardType, placeholder, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
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

    createNewUser = async (values) => {
        try {
            const response = await this.props.dispatch(createNewUser(values));
            if (!response.success) {
                throw response;
            }
        } catch (error) {
            const newError = new ErrorUtils(error, "Signup Error");
            newError.showAlert();
        }
    }

    onSubmit = (values) => {
        this.createNewUser(values);
    }
    goBack() {
        Actions.Login();
    }

    render() {
        const radio_props = [
            { label: 'Erkek  ', value: 0 },
            { label: 'Kadın  ', value: 1 }
        ];
        const { handleSubmit, createUser } = this.props;
        return (
            <ScrollView>

                <View style={styles.container}>
                    {createUser.isLoading && <Loader />}
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
                    <Field
                        name="adi"
                        placeholder="Ad *"
                        component={this.renderTextInput} />
                    <Field
                        name="soyadi"
                        placeholder="Soyad *"
                        component={this.renderTextInput} />
                    <Field
                        name="parola"
                        placeholder="Parola *"
                        secureTextEntry={true}
                        component={this.renderTextInput} />
                    <Field
                        name="parolaTekrar"
                        placeholder="Parola Tekrar *"
                        secureTextEntry={true}
                        component={this.renderTextInput} />
                    <Field
                        name="email"
                        placeholder="Email *"
                        component={this.renderTextInput} />
                    <Field
                        name="telefon"
                        placeholder="Telefon Numarası *"
                        component={this.renderTextInput} />

                    <Field
                        initial={0}
                        onPress={(value) => { this.setState({ value: value }) }}
                        formHorizontal={true}
                        style={styles.radioFrom} name="sex"
                        component={RadioForm} radio_props={radio_props}
                        type="radio" value="male"
                        name={this.state.value} />

                    <Field
                        component={Picker}
                        selectedValue={this.state.language}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Field
                            name="guvenlik_cevabi_select_ask"
                            label="Lütfen güvenlik sorunuzu seçiniz?"
                            component={Picker.Item}
                            selectedButtonColor={'#fff554'}
                            value="dateBirtday"
                            selected disabled
                        />
                        <Field
                            name="guvenlik_cevabi_birtday"
                            label="Doğum tarihiniz nedir?"
                            component={Picker.Item}
                            selectedButtonColor={'#fff554'}
                            value="dateBirtday"
                        />
                        <Field
                            name="guvenlik_cevabi_teacher"
                            label="En sevdiğiniz öğretmenin adı nedir?"
                            component={Picker.Item}
                            selectedButtonColor={'#fff554'}
                            value="betterTeacher"
                        />
                        <Field
                            name="guvenlik_cevabi_pet"
                            label="En sevdiğiniz evcil hayvanın adı nedir?"
                            component={Picker.Item}
                            selectedButtonColor={'#fff554'}
                            value="betterPet"
                        />
                    </Field>

                    <Field
                        name="guvenlik_cevabi"
                        placeholder="Güvenlik Sorusunun Cevabı *"
                        label={this.state.language}
                        component={this.renderTextInput}
                        selectedButtonColor={'#fff554'}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
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

const validate = (values) => {
    const errors = {};
    console.log("values:::" + JSON.stringify(values));

    if (!values.name) {
        errors.name = "Ad Girilmedi";
    }
    if (!values.surname) {
        errors.surname = "Soyad Girilmedi";
    }
    if (!values.password) {
        errors.password = "Şifre Girilmedi";
    }
    if (!values.passwordAgain) {
        errors.passwordAgain = "Şifre Tekrar Girilmedi";
    }
    if (!values.email) {
        errors.email = "Email Girilmedi";
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = "Telefon Girilmedi";
    }
    if (!values.securityAsk) {
        errors.securityAsk = "Güvenlik Sorusu Seçilmedi";
    }
    if (!values.securityAnswer) {
        errors.securityAnswer = "Güvenlik Sorusu Cevaplanmadı";
    }
    return errors;
}

mapStateToProps = (state) => ({
    createUser: state.authReducer.createUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "register",
        validate
    })
)(Signup);
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
