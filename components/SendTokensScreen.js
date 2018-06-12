import React from 'react';
import { View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';

import BottomNavigator from './layouts/BottomNavigator';

export default class SendTokensScreen extends React.Component {
    constructor(props) {
        super(props);
	    this.state = {};
    }
    
    static navigationOptions = {
        title: 'Send tokens',
        headerLeft: null
    };

    scannerQR() {
        Alert.alert('123213')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View>
                    <Button
                        title="QR scanner"
                        onPress={this.scannerQR}
                        color="#34343e"
                    />
                </View>
                <View style={{ width: '100%', height: 60, position: 'absolute', 'bottom': 0, flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity
                        style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}
                        onPress={() => this.props.navigation.push('Wallets', { animation: null })}
                    >
                        <Image
                            style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                            source={{uri: 'https://cdn3.iconfinder.com/data/icons/business/16/wallet-512.png'}}
                        />
                        <Text
                            style={{ color: '#000000', textAlign: 'center' }}
                            onPress={() => this.props.navigation.push('Wallets', { animation: null })}
                        >
                            Wallets
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 60, backgroundColor: '#f8f8f8', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}
                        onPress={() => this.props.navigation.push('SendTokens', { animation: null })}
                    >
                        <Image
                            style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                            source={{uri: 'https://cdn2.iconfinder.com/data/icons/inverticons-fill-vol-2/32/paper_plane_document_send_sent_mail-512.png'}}
                        />
                        <Text
                            style={{ color: '#000000', textAlign: 'center' }}
                        >
                            Send
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}
                        onPress={() => this.props.navigation.push('ReceiveTokens', { animation: null })}
                    >
                        <Image
                            style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                            source={{uri: 'https://cdn2.iconfinder.com/data/icons/eldorado-mobile/40/inbox_receive-512.png'}}
                        />
                        <Text
                            style={{ color: '#000000', textAlign: 'center' }}
                        >
                            Receive
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}
                        onPress={() => this.props.navigation.push('Settings', { animation: null })}
                    >
                        <Image
                            style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                            source={{uri: 'https://cdn1.iconfinder.com/data/icons/flat-web-browser/100/settings-512.png'}}
                        />
                        <Text
                            style={{ color: '#000000', textAlign: 'center' }}
                        >
                            Settings
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}