import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Directions, Gesture, GestureDetector } from "react-native-gesture-handler";
import { Easing, SharedValue, withTiming } from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

import SmallIconButton from "../../../ui/smallIconButton";
import { END_POSITION, TOUCH_DELTA } from "../constants";

interface StartOpenIconProps {
  icon: FunctionComponent<SvgProps>;
  animatedHeight: SharedValue<number>;
  isOverlayOpen: SharedValue<boolean>;
}

const OpenOverlayButton: React.FC<StartOpenIconProps> = ({icon, animatedHeight, isOverlayOpen}) => {

  const openGestureFling = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      if (!isOverlayOpen.value) {
        animatedHeight.value = withTiming(animatedHeight.value + 500, {duration: 100});
      }
    })
    .onEnd(() => {
      isOverlayOpen.value = true;
    });

  const openGesturePan = Gesture.Pan()
    .onUpdate((e) => {
      if (animatedHeight.value < END_POSITION) {
        animatedHeight.value  = e.y + TOUCH_DELTA;
      }
    })
    .onEnd(() => {
      if (animatedHeight.value < END_POSITION / 2) {
        animatedHeight.value = withTiming(0, {duration: 300});
      } else if (animatedHeight.value > END_POSITION / 2) {
        animatedHeight.value = withTiming(END_POSITION, {duration: 300, easing: Easing.elastic(1.1)});
      }
    });

  const gestures = Gesture.Race(openGesturePan, openGestureFling);


  return (
    <GestureDetector gesture={gestures}>
      <View style={{zIndex: 4, position: "relative"}}>
        <SmallIconButton Content={icon} onPress={() => console.log("hello world")}/>
      </View>
    </GestureDetector>
  );
};

export { OpenOverlayButton };
