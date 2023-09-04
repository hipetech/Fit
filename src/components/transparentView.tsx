import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import useStyles from "../hooks/useStyles";
import { Colors } from "../types/Colors";

const TransparentView: React.FC<ViewProps> = ({children, style, ...rest}) => {

  const {styles} = useStyles(componentStyle);
  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
};

const componentStyle = (colors: Colors) => StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
  }
});

export default TransparentView;
