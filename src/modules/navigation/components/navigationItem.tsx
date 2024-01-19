import React, { FunctionComponent } from "react";
import { Pressable, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import { useShallow } from "zustand/react/shallow";

import Text from "../../../components/text";
import { useColorsStore } from "../../../store/colorsStore";

interface NavigationItemProps {
  icon: FunctionComponent<SvgProps>;
  iconWidth?: number;
  iconHeight?: number;
  caption: string;
  isActive: boolean;
  onPress?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  iconWidth = 44,
  iconHeight = 44,
  caption,
  isActive,
  onPress,
}) => {
  const colors = useColorsStore(useShallow((state) => state.colors));
  const fill = isActive ? colors.orange : colors.white;

  console.log("render items");

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Icon
        fill={fill}
        width={iconWidth}
        height={iconHeight}
      />
      <Text style={{ color: fill }}>{caption}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 51,
  },
});

export default NavigationItem;
