import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import TransparentView from "../../components/transparentView";
import DragIsland from "../../ui/dragIsland";

const SPRING_CONFIG = {
  damping: 80,
  stiffness: 500,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  reduceMotion: ReduceMotion.System,
};

const DRAWER_HEIGHT = Dimensions.get("window").height * 1.2;
const DRAWER_CLOSED_POSITION = -DRAWER_HEIGHT * (DeviceInfo.hasNotch() ? 0.9 : 0.94);
const DRAWER_OPENED_POSITION = -350;

const TopDrawerMenu: React.FC = () => {
  const offset = useSharedValue(DRAWER_CLOSED_POSITION);

  console.log(DRAWER_HEIGHT);
  console.log(DRAWER_CLOSED_POSITION);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: offset.value,
        },
      ],
    };
  }, []);

  const panGesture = Gesture.Pan()
    .onChange((event) => {
      offset.value = offset.value + event.changeY;
    })
    .onFinalize((event) => {
      const { velocityY } = event;

      if (velocityY > 3000) {
        offset.value = withSpring(DRAWER_OPENED_POSITION, SPRING_CONFIG);
      } else if (velocityY < -3000) {
        offset.value = withSpring(DRAWER_CLOSED_POSITION, SPRING_CONFIG);
      } else {
        if (Math.abs(offset.value) < 600) {
          offset.value = withSpring(DRAWER_OPENED_POSITION, SPRING_CONFIG);
        } else {
          offset.value = withSpring(DRAWER_CLOSED_POSITION, SPRING_CONFIG);
        }
      }
    });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TransparentView style={styles.background}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.touchArea}>
            <DragIsland width={70} />
          </View>
        </GestureDetector>
      </TransparentView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: DRAWER_HEIGHT,
    zIndex: 100,
    position: "absolute",
    top: 0,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  touchArea: {
    width: "100%",
    height: 38,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { TopDrawerMenu };
