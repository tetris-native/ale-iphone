import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, Image, StatusBar, Clipboard, Button, Alert, TouchableOpacity } from 'react-native';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');
let screenWidth = wp(80);

import QRCode from 'react-native-qrcode-svg';

export default class RequestMoneyScreen extends React.Component {
    constructor(props) {
        super(props);
	    this.state = {
	    	receiverAddress: this.props.navigation.state.params.walletAddress,
	    };
    }
    
    static navigationOptions = {
        title: 'Request money'
    };

    copyToClipboard = async () => {
    	await Clipboard.setString(this.state.receiverAddress);
    	return Alert.alert('Copied to clipboard');
    };

    render() {
        return (
            <View style={styles.pageContainer}>
            	<StatusBar barStyle='dark-content' />
            	<View style={styles.qrCodeContainer}>
            		<View style={{ marginBottom: 20, display: 'flex', alignItems: 'center' }}>
                        <QRCode
                            value={this.state.receiverAddress}
                            size={wp(60)}
                        />
					</View>
					<View>
						<Text style={{ fontSize: wp(6), marginBottom: 10, textAlign: 'center' }}>RECEIVER ADDRESS:</Text>
						<Text style={{ textAlign: 'center' }}>{this.state.receiverAddress}</Text>
					</View>
					<View style={{ backgroundColor: '#d1d8dd', width: wp(70), padding: 5, borderRadius: 5, marginTop: 20 }}>
                        <Button
                            title="Copy to clipboard"
                            onPress={this.copyToClipboard}
                            color="#000000"
                        />
                    </View>
            	</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
      },
    pageContainer: {
        flex: 1,
        backgroundColor: '#e8ebee',
        alignItems: 'center',
        paddingTop: 50
    },
    qrCodeContainer: {
    	width: screenWidth,
    	backgroundColor: '#ffffff',
    	padding: wp(5),
    	borderRadius: 6
    }
});