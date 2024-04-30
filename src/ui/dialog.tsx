import React from "react";
import { StyleSheet, View } from "react-native";
import { Dialog as WixDialog } from "react-native-ui-lib";
import type { DialogProps as WixDialogProps } from "react-native-ui-lib/src/components/dialog";

import useStyles from "../hooks/useStyles.ts";
import type { Colors } from "../types/Colors.ts";
import { Dash } from "./dash.tsx";
import { Text } from "./text.tsx";

type DialogProps = {
  title?: string;
} & WixDialogProps;

export const Dialog: React.FC<DialogProps> = ({
  title,
  containerStyle,
  useSafeArea = true,
  overlayBackgroundColor,
  bottom = true,
  children,
  ...props
}) => {
  const { styles, colors } = useStyles(style);

  return (
    <WixDialog
      containerStyle={[containerStyle, styles.dialog]}
      useSafeArea={useSafeArea}
      bottom={bottom}
      overlayBackgroundColor={overlayBackgroundColor ?? colors.backdrop}
      {...props}
    >
      {title && (
        <View style={styles.header}>
          <Text fontSize={16}>{title}</Text>
        </View>
      )}
      {title && <Dash />}
      <View style={styles.children}>{children}</View>
    </WixDialog>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    dialog: {
      backgroundColor: colors.transparent,
      borderRadius: 20,
      marginBottom: 40,
      borderColor: colors.transparent,
      borderWidth: 5,
    },
    header: {
      padding: 13,
    },
    children: {
      padding: 13,
    },
  });
