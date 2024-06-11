import React, { type ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  ReduceMotion,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { SCREEN_HEIGHT, WINDOW_HEIGHT } from "../../constants.ts";
import { AppEvents } from "../../emmiter.ts";
import useEmmiter from "../../hooks/useEmitter.ts";
import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import DragIsland from "../../ui/dragIsland.tsx";
import TransparentView from "../../ui/transparentView.tsx";
import { HapticFeedback } from "../../utils/hapticFeedback.ts";
import { CurrentDate } from "./components/currentDate.tsx";
import { CurrentWorkout } from "./components/currentWorkout.tsx";

const SPRING_CONFIG = {
  duration: 950,
  dampingRatio: 0.8,
  stiffness: 300,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  reduceMotion: ReduceMotion.System,
};

const DRAWER_HEIGHT = WINDOW_HEIGHT * 1.2;

const DRAWER_CLOSED_POSITION = -DRAWER_HEIGHT * (DeviceInfo.hasNotch() ? 0.9 : 0.94);
const DRAWER_OPENED_POSITION = -(WINDOW_HEIGHT * 0.6);

const QUICK_OPEN_VELOCITY = 3000;
const OPEN_POINT = 750;

const gestureImpact = () => {
  HapticFeedback.mediumImpact();
};

interface TopDrawerProps {
  children?: ReactNode | ReactNode[];
}

const TopDrawer: React.FC<TopDrawerProps> = ({ children }) => {
  const { styles } = useStyles(style);

  const offset = useSharedValue(DRAWER_CLOSED_POSITION);
  const isOpened = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: offset.value,
        },
      ],
    };
  }, []);

  function toggleDrawer(open = true) {
    "worklet";
    isOpened.value = open;
    const position = open ? DRAWER_OPENED_POSITION : DRAWER_CLOSED_POSITION;
    offset.value = withSpring(position, SPRING_CONFIG);
  }

  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: isOpened.value ? 0.5 : 0,
    };
  }, []);

  const backdropProps = useAnimatedProps(() => {
    return {
      pointerEvents: isOpened.value ? "auto" : "none",
    } as ViewProps;
  }, []);

  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offset.value, [DRAWER_CLOSED_POSITION, DRAWER_OPENED_POSITION], [0, 1]),
    };
  }, []);

  const touchAreaItemStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offset.value, [DRAWER_CLOSED_POSITION, DRAWER_OPENED_POSITION], [1, 0]),
    };
  }, []);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      if (!isOpened.value) {
        runOnJS(gestureImpact)();
      }
    })
    .onChange((event) => {
      offset.value = offset.value + event.changeY;
    })
    .onFinalize((event) => {
      const { velocityY } = event;

      if (velocityY > QUICK_OPEN_VELOCITY) {
        toggleDrawer();
      } else if (velocityY < -QUICK_OPEN_VELOCITY) {
        toggleDrawer(false);
      } else {
        if (Math.abs(offset.value) < OPEN_POINT) {
          toggleDrawer();
        } else {
          toggleDrawer(false);
        }
      }
    });

  const tapGesture = Gesture.Tap().onStart(() => {
    toggleDrawer(false);
    runOnJS(gestureImpact)();
  });

  useEmmiter(AppEvents.OPEN_DRAWER, toggleDrawer);

  return (
    <>
      <Animated.View style={[styles.container, animatedStyle]}>
        <GestureDetector gesture={panGesture}>
          <TransparentView
            style={styles.background}
            accessible={true}
          >
            <Animated.View style={[styles.content, contentStyle]}>{children}</Animated.View>
            <View style={styles.touchArea}>
              <Animated.View style={[styles.currentWorkout, touchAreaItemStyle]}>
                <CurrentWorkout />
              </Animated.View>
              <Animated.View style={contentStyle}>
                <DragIsland size={70} />
              </Animated.View>
              <Animated.View style={[styles.currentDate, touchAreaItemStyle]}>
                <CurrentDate />
              </Animated.View>
            </View>
          </TransparentView>
        </GestureDetector>
      </Animated.View>
      <GestureDetector gesture={tapGesture}>
        <Animated.View
          animatedProps={backdropProps}
          style={[styles.backdrop, backdropStyle]}
        />
      </GestureDetector>
    </>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: DRAWER_HEIGHT,
      zIndex: 21,
      position: "absolute",
      top: 0,
    },
    background: {
      width: "100%",
      height: "100%",
      zIndex: 100,
    },
    touchArea: {
      width: "100%",
      height: 60,
      position: "absolute",
      bottom: -20,
      justifyContent: "flex-start",
      paddingTop: 20,
      alignItems: "center",
    },
    content: {
      flex: 1,
      zIndex: 22,
      paddingTop: "145%",
    },
    backdrop: {
      width: "100%",
      height: SCREEN_HEIGHT * 2,
      backgroundColor: colors.black,
      position: "absolute",
      bottom: -SCREEN_HEIGHT,
      zIndex: 20,
    },
    currentWorkout: {
      position: "absolute",
      left: 20,
      bottom: 30,
    },
    currentDate: {
      position: "absolute",
      right: 20,
      bottom: 30,
    },
  });

export { TopDrawer };
