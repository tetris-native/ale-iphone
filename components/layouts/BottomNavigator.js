import React from 'react';
import { Text, View, Image } from 'react-native';

export default class BottomNavigator extends React.Component {
	constructor(props) {
        super(props);
	    this.state = {};
    }


    render() {
    	return (
    		<View style={{ width: '100%', height: 60, position: 'absolute', 'bottom': 0, flexDirection: 'row', flex: 1 }}>
                <View style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}>
                    <Image
                        style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                        source={{uri: 'https://cdn3.iconfinder.com/data/icons/business/16/wallet-512.png'}}
                    />
                    <Text
                        style={{ color: '#000000', textAlign: 'center' }}
                        onPress={() => this.props.navigation.push('Wallets')}
                    >
                        Wallets
                    </Text>
                </View>
                <View style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}>
                    <Image
                        style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                        source={{uri: 'https://cdn2.iconfinder.com/data/icons/inverticons-fill-vol-2/32/paper_plane_document_send_sent_mail-512.png'}}
                    />
                    <Text
                        style={{ color: '#000000', textAlign: 'center' }}
                        onPress={() => this.props.navigation.push('SendTokens')}
                    >
                        Send
                    </Text>
                </View>
                <View style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}>
                    <Image
                        style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                        source={{uri: 'https://cdn2.iconfinder.com/data/icons/eldorado-mobile/40/inbox_receive-512.png'}}
                    />
                    <Text
                        style={{ color: '#000000', textAlign: 'center' }}
                        onPress={() => this.props.navigation.push('ReceiveTokens')}
                    >
                        Receive
                    </Text>
                </View>
                <View style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}>
                    <Image
                        style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                        source={{uri: 'https://cdn1.iconfinder.com/data/icons/flat-web-browser/100/settings-512.png'}}
                    />
                    <Text
                        style={{ color: '#000000', textAlign: 'center' }}
                        onPress={() => this.props.navigation.push('Settings')}
                    >
                        Settings
                    </Text>
                </View>
            </View>
    	)
    }
}