import React from "react";
import { BlurView, BlurViewProps } from "@react-native-community/blur";
import { useThemeStore } from "../store/themeStore";
import { useColorsStore } from "../store/colorsStore";


const BlurredView: React.FC<BlurViewProps> = ({children, style, ...props}) => {
  const {theme} = useThemeStore();
  const {colors} = useColorsStore();

  return (
    <BlurView blurType={theme} blurAmount={10} {...props} style={[{backgroundColor: colors.black}, style]}>
      {children}
    </BlurView>
  );
};

export default BlurredView;
