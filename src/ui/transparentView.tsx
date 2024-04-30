import React from "react";
import { StyleSheet, View, type ViewProps } from "react-native";

import useStyles from "../hooks/useStyles.ts";
import type { Colors } from "../types/Colors.ts";

const TransparentView: React.FC<ViewProps> = ({ children, style, ...rest }) => {
  const { styles } = useStyles(componentStyle);
  return (
    <View
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </View>
  );
};

const componentStyle = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.transparent,
    },
  });

export default TransparentView;
