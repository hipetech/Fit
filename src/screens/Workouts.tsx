import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../types/Colors";
import useStyles from "../hooks/useStyles";
import NavigationWrapper from "../modules/navigation/components/navigationWrapper";

const Workouts = () => {
  const {styles} = useStyles(createStyles);

  return (
    <NavigationWrapper>
      <View style={styles.container}>
        <ScrollView>
          <View style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            marginVertical: 20,
            marginTop: 500
          }}>
            <Text>
              Placeholder
            </Text>
          </View><View style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            marginVertical: 20
          }}>
            <Text>
            Placeholder
            </Text>
          </View><View style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            marginVertical: 20
          }}>
            <Text>
            Placeholder
            </Text>
          </View>
        </ScrollView>
      </View>
    </NavigationWrapper>
  );
};

const createStyles = (colors: Colors) => StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: colors.background,
    width: "100%",
    height: "100%"
  }
});

export default Workouts;
