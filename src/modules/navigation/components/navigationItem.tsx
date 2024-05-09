import React, { type FunctionComponent } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import type { SvgProps } from "react-native-svg";
import { useShallow } from "zustand/react/shallow";

import { useAppearanceStore } from "../../../store/appearanceStore.ts";
import { FontWeight } from "../../../types/FontWeight.ts";
import { Text } from "../../../ui/text.tsx";

const SPRING_CONFIG = {
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 20,
};

interface NavigationItemProps {
  icon: FunctionComponent<SvgProps>;
  iconWidth: number;
  iconHeight: number;
  caption: string;
  isActive: boolean;
  onPress?: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  iconWidth,
  iconHeight,
  caption,
  isActive,
  onPress,
}) => {
  const colors = useAppearanceStore(useShallow((state) => state.colors));
  const fill = isActive ? colors.orange : colors.white;

  const offset = useSharedValue(0);

  const tap = Gesture.Tap().onEnd(() => {
    offset.value = withSequence(withSpring(-4, SPRING_CONFIG), withSpring(2, SPRING_CONFIG));
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: offset.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={tap}>
      <Pressable
        onPress={onPress}
        style={styles.container}
      >
        <Animated.View style={iconStyle}>
          <Icon
            fill={fill}
            width={iconWidth}
            height={iconHeight}
          />
        </Animated.View>
        <Text
          fontSize={13}
          fontWeight={FontWeight.MEDIUM}
          style={{ color: fill }}
        >
          {caption}
        </Text>
      </Pressable>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 47,
  },
});

export default NavigationItem;
