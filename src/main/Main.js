import { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomAppbar from "../component/CustomAppbar";
import { Button, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./homeScreen";

const Stack = createStackNavigator();

export default class Main extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: (props) => <CustomAppbar {...props} />,
                    }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

function DetailsScreen() {
    const styles = useStyles();
    return (
        <View style={styles.root}>
            <Text>Details Screen</Text>
        </View>
    );
}

export function useStyles() {
    return StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor: 'rgb(93, 95, 222)',
            borderRadius: 8,
            height: 48,
            justifyContent: 'center',
        },
        buttonTitle: {
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: '600',
            lineHeight: 22,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingVertical: 32,
        },
        forgotPasswordContainer: {
            alignItems: 'flex-end',
        },
        form: {
            alignItems: 'center',
            backgroundColor: 'rgb(58, 58, 60)',
            borderRadius: 8,
            flexDirection: 'row',
            height: 48,
            paddingHorizontal: 16,
        },
        label: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
            width: 80,
        },
        root: {
            backgroundColor: '#FFFFFF',
            flex: 1,
            margin: 10,
            padding: 10,
        },
        safeAreaView: {
            flex: 1,
        },
        subtitle: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 22,
        },
        textButton: {
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
        },
        textInput: {
            color: '#FFFFFF',
            flex: 1,
        },
        title: {
            color: '#000000',
            fontSize: 28,
            fontWeight: '700',
            lineHeight: 34,
            textAlign: "center"
        },
    });
}