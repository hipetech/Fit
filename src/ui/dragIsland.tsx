import React from "react";
import { StyleSheet, View } from "react-native";

import useStyles from "../hooks/useStyles";
import type { Colors } from "../types/Colors";

interface DragIslandProps {
  size: number;
  vertical?: boolean;
}

const DragIsland: React.FC<DragIslandProps> = ({ size, vertical = false }) => {
  const { styles } = useStyles(style);

  return (
    <View
      style={[vertical ? { height: size, width: 6 } : { width: size, height: 6 }, styles.island]}
    />
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    island: {
      backgroundColor: colors.white,
      borderRadius: 100,
    },
  });

export default DragIsland;
