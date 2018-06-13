import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, Button, ScrollView} from 'react-native';

import BottomNavigator from './layouts/BottomNavigator';
import WalletsSlider from './layouts/WalletsSlider';

export default class WalletsScreen extends React.Component {
    constructor(props) {
        super(props);
	    this.state = {};
    }
    
    static navigationOptions = {
        title: 'My wallets',
        headerLeft: null,
        gesturesEnabled: false
    };

    test() {
        Alert.alert('123')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <WalletsSlider />
                <View style={{ width: '100%', height: 60, position: 'absolute', 'bottom': 0, flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity
                        style={{ width: '25%', height: 60, backgroundColor: '#f8f8f8', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}
                        onPress={() => this.props.navigation.push('Wallets', { animation: null })}
                    >
                        <Image
                            style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                            source={require('../assets/images/navigation/bottom/wallet.png')}
                        />
                        <Text
                            style={{ color: '#000000', textAlign: 'center' }}
                            onPress={() => this.props.navigation.push('Wallets', { animation: null })}
                        >
                            Wallets
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '25%', height: 60, backgroundColor: '#cccccc', flex: 1, flexDirection: 'column', maxHeight: 60, alignItems: 'center' }}
                        onPress={() => this.props.navigation.push('SendTokens', { animation: null })}
                    >
                        <Image
                            style={{width: 25, height: 25, marginTop: 10, marginBottom: 5 }}
                            source={require('../assets/images/navigation/bottom/send.png')}
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
                            source={require('../assets/images/navigation/bottom/receive.png')}
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
                            source={require('../assets/images/navigation/bottom/settings.png')}
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