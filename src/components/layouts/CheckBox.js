import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';
import SVGImage from 'react-native-remote-svg';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class CheckBox extends React.Component {
	constructor(props) {
        super(props);
	    this.state = {};
    }

    render() {
        let isCheked = this.props.isCheked ? require('../../assets/images/icons/check-small.svg') : null;
    	return (
    		<TouchableOpacity
                onPress={this.props.toggleCheckBox}
                style={{ width: wp(70), display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20 }}
            >
                <View
                    style={styles.checkBoxContainer}
                >
                    <SVGImage
                        source={isCheked}
                        style={{ width: 15, height: 15 }}
                    />
                </View>
                <Text style={{ paddingLeft: 15 }}>{this.props.value}</Text>
            </TouchableOpacity>
    	)
    }
}

const styles = StyleSheet.create({
    checkBoxContainer: {
        width: 25,
        height: 25,
        backgroundColor: '#D1D8DD',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});