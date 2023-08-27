import React, { FunctionComponent } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { Colors } from "../../../types/Colors";
import useStyles from "../../../hooks/useStyles";
import { font } from "../../../styles/font";


interface NavigationItemProps {
  icon: FunctionComponent<SvgProps>;
  iconWidth?: number;
  iconHeight?: number;
  caption: string;
  isActive: boolean;
  onPress?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({icon: Icon, iconWidth = 44, iconHeight = 44,  caption, isActive, onPress}) => {
  const {colors, styles} = useStyles(style);
  const fill = isActive ? colors.orange : colors.white;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon fill={fill} width={iconWidth} height={iconHeight}/>
      <Text style={[styles.caption, {color: fill}]}>
        {caption}
      </Text>
    </Pressable>
  );
};

const style = (colors: Colors) => StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 51,
    marginTop: 8
  },
  caption: {
    fontFamily: "Roboto",
    fontWeight: font.regular,
    color: colors.white,
    fontSize: 12
  }
});

export default NavigationItem;
