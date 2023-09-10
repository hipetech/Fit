import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import TransparentView from "../../../components/transparentView";
import { RootStackParamList } from "../../../types/RootStackParamList";
import DragIsland from "../../../ui/dragIsland";

interface CurtainOverlayProps {
  animatedHeight: SharedValue<number>;
  isOverlayOpen: SharedValue<boolean>;
}

const CurtainOverlay: React.FC<CurtainOverlayProps> = ({ animatedHeight, isOverlayOpen }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value
    };
  });

  const closeGesture = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      if (isOverlayOpen.value) {
        animatedHeight.value = withTiming(animatedHeight.value - 500, { duration: 100 });
      }
    })
    .onEnd(() => {
      isOverlayOpen.value = false;
    });

  const navigation = useNavigation<RootStackParamList>();

  useEffect(() => {
    animatedHeight.value = 0;
    isOverlayOpen.value = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TransparentView style={styles.background}>
        <GestureDetector gesture={closeGesture}>
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
    zIndex: 2,
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
