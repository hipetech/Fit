import React from "react";
import { StyleSheet, View } from "react-native";

import useStyles from "../hooks/useStyles";
import type { Colors } from "../types/Colors";

interface DragIslandProps {
  width: number;
}

const DragIsland: React.FC<DragIslandProps> = ({ width }) => {
  const { styles } = useStyles(style);

  return <View style={[{ width }, styles.island]} />;
};

const style = (colors: Colors) =>
  StyleSheet.create({
    island: {
      backgroundColor: colors.white,
      height: 6,
      borderRadius: 100,
    },
  });

export default DragIsland;
