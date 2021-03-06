import React from 'react';
import { Text, View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

export default class Pageloader extends React.Component {
	constructor(props) {
        super(props);
	    this.state = {};
    }

    render() {
    	return (
    		<View
                style={styles.loading}
            >
                <StatusBar
                    barStyle='dark-content'
                />
                <ActivityIndicator
                    size="large"
                    color="#CCCCCC" 
                    style={styles.spinner}
                />
                <Text
                    style={styles.loadingTitle}
                >
                    {this.props.title}
                </Text>
            </View>
    	)
    }
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        flex: 1,
        zIndex: 2,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingTitle: {
        fontSize: 18
    },
    spinner: {
        marginBottom: 20
    }
});