import React from "react";
import { StyleSheet, View } from "react-native";

import useStyles from "../hooks/useStyles";
import { Colors } from "../types/Colors";

interface DragIslandProps {
  width: number;
}

const DragIsland: React.FC<DragIslandProps> = ({ width }) => {

  const { styles } = useStyles(style);

  return (
    <View style={[{ width }, styles.island]}>

    </View>
  );
};

const style = (colors: Colors) => StyleSheet.create({
  island: {
    backgroundColor: colors.white,
    height: 8,
    borderRadius: 100
  }
});

export default DragIsland;
