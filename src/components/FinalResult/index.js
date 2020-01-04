import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../Styles/Home';

class FinalResult extends Component {
    render() {
        return (
            <View style={Styles.mainContainer}>
                <View style={Styles.getStartedContainer}>
                    <View style={Styles.titleContainer}>
                        <Text style={Styles.title}>TEST YOURSELF Result </Text>
                    </View>
                    <View style={Styles.holder}>
                        <View style={Styles.holderDesc}>
                            <Text style={Styles.descText}>
                                Do you want to have some kind of an exams? is it so bad that you
                                want to take them. Here we are going to test you out by
                                involving you into a little tiny exam
              </Text>
                        </View>
                        <View style={Styles.holderButtons}>
                            <View style={Styles.buttons}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Home')}
                                    style={Styles.oneButton}>
                                    <View style={Styles.buttonTextWrapper}>
                                        <Text style={Styles.buttonText}> Go to Home </Text>
                                    </View>
                                    <View style={Styles.icon}>
                                        <Icon color="white" name="md-home" size={18} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default FinalResult;
