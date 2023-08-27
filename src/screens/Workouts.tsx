import React from "react";
import { ScrollView, Text, View } from "react-native";

const Workouts = () => {

  return (
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
  );
};

export default Workouts;
