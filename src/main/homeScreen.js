import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useStyles } from "./Main";


function HomeScreen({ navigation }) {
    
    const [email, setEmail] = useState("");
    const styles = useStyles();

    return (
        <View style={styles.root}>
            <Text style={styles.title}>HOME SCREEN</Text>
            <Button
                title="Go to details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


export default HomeScreen;