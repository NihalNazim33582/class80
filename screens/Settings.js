import React from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class Settings extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:'',
        }
    }

    getUserDetails=()=>{
        var Email=firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',Email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    firstName:data.first_name,
                    lastName:data.last_name,
                    contact:data.contact,
                    address:data.address,
                    docId:doc.id,
                })
            })
        })
    }

    componentDidMount=()=>{
        this.getUserDetails()
    }

    render(){
        return(
            <View>
                <MyHeader Title='Settings'/>
                    <View>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"First Name"}
                            maxLength ={8}
                            onChangeText={(text)=>{
                                this.setState({
                                firstName: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Last Name"}
                            maxLength ={8}
                            onChangeText={(text)=>{
                                this.setState({
                                lastName: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Contact"}
                            maxLength ={10}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                this.setState({
                                contact: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Address"}
                            multiline = {true}
                            onChangeText={(text)=>{
                                this.setState({
                                address: text
                                })
                            }}
                        />

                        <TouchableOpacity onPress={()=>{
                            this.UpdateUserDeatils()
                        }}>
                            <Text>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}