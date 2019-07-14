import React, {Component} from 'react';
import { StyleSheet, View,TextInput, Button, Alert} from 'react-native';



export default class FormLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        const account = {
            uname : this.state.username,
            pass  : this.state.password
        }
       Alert.alert('Account', `${account.uname} + ${account.pass}`)
    }
    render(){
        return(
            <View>
                <TextInput 
                    placeholder = 'Tên tài khoảng'
                    style = {styles.styleTextInput}
                    onChangeText = {(text) => this.state.username = text}/>
                <TextInput 
                    placeholder = 'Mật khẩu'
                    style = {styles.styleTextInput}
                    secureTextEntry = {true}
                    onChangeText = {(text) => this.state.password = text}/>
                <Button 
                    onPress = {this.handleSubmit}
                    title = 'Đăng nhập với'
                    style = {styles.styleSubmitButton}/>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    styleTextInput: {
        height: 40,
        width: 250,
        borderColor: 'white',
        borderBottomColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
    },
    styleSubmitButton: {
        marginTop: 40,
        color: 'gray'
    }
});