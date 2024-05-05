import React, { type FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import type { SvgProps } from "react-native-svg";
import { TouchableOpacity } from "react-native-ui-lib";

import useStyles from "../../../hooks/useStyles.ts";
import Text from "../../../ui/text.tsx";

interface SettingsContainerProps {
  title: string;
  Icon: FunctionComponent<SvgProps>;
  onPress?: () => void;
}

export const SettingsItem: React.FC<SettingsContainerProps> = ({ title, Icon, onPress }) => {
  const { styles, colors } = useStyles(style);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Icon
        fill={colors.white}
        style={styles.icon}
      />
      <Text
        fontSize={16}
        color={colors.white}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const style = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 13,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: 15,
    },
  });
