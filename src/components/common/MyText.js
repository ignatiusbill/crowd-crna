import React from 'react';
import { Text } from 'react-native';

const MyText = ({ children, style }) => {
    const { textStyle } = styles;

    return (
        <Text style={[textStyle, style]}>
            {children}
        </Text>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { MyText };
