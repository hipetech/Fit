import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import TransparentView from "../../components/transparentView";
import DragIsland from "../../ui/dragIsland";

const HEIGHT = 600;
const CLAMP = 20;


interface CurtainOverlayProps {
  content: ReactNode;
}

const CurtainOverlay: React.FC<CurtainOverlayProps> = ({ content }) => {
  const offset = useSharedValue(100);

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
    .onChange((e) => {
      const offsetDelta = e.changeY + offset.value;
      const clamp = Math.max(-CLAMP, offsetDelta);
      offset.value = offsetDelta;
    })
    .onFinalize(() => {
      if (offset.value < HEIGHT / 2) {
        offset.value = withSpring(0);
      }
    });

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}
      exiting={SlideOutDown}
    >
      <TransparentView style={styles.background}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.touchArea}>
            <DragIsland width={70}/>
          </View>
        </GestureDetector>
      </TransparentView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    zIndex: 100,
    position: "absolute",
    top: 0,
  },
  background: {
    width: "100%",
    height: "100%"
  },
  touchArea: {
    width: "100%",
    height: 38,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { CurtainOverlay };
