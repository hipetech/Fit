import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/themes";

const WorkoutStats = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: colors.white, fontSize: 15}}>
                5 exs
            </Text>
            <Text style={{color: colors.white, fontSize: 15}}>
                6 sets
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10
    }
});

export default WorkoutStats;
