import React, { ReactNode, useEffect } from "react";
import { Dimensions, StyleSheet, View, ViewProps } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  ReduceMotion,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AppEmitter, AppEvents } from "../emmiter.ts";
import useStyles from "../hooks/useStyles.ts";
import type { Colors } from "../types/Colors.ts";
import DragIsland from "../ui/dragIsland.tsx";
import TransparentView from "./transparentView.tsx";

const SPRING_CONFIG = {
  duration: 950,
  dampingRatio: 0.8,
  stiffness: 300,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  reduceMotion: ReduceMotion.System,
};

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const DRAWER_HEIGHT = WINDOW_HEIGHT * 1.2;

const DRAWER_CLOSED_POSITION = -DRAWER_HEIGHT * (DeviceInfo.hasNotch() ? 0.9 : 0.94);
const DRAWER_OPENED_POSITION = -(WINDOW_HEIGHT * 0.45);

const QUICK_OPEN_VELOCITY = 3000;
const OPEN_POINT = 600;

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

  const panGesture = Gesture.Pan()
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
  });

  useEffect(() => {
    AppEmitter.addListener(AppEvents.OPEN_DRAWER, toggleDrawer);
    return () => AppEmitter.removeAllListeners(AppEvents.OPEN_DRAWER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Animated.View style={[styles.container, animatedStyle]}>
        <GestureDetector gesture={panGesture}>
          <TransparentView
            style={styles.background}
            accessible={true}
          >
            <View style={styles.content}>{children}</View>
            <View style={styles.touchArea}>
              <DragIsland width={70} />
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
      zIndex: 100,
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
      paddingTop: 600,
    },
    backdrop: {
      width: "100%",
      height: SCREEN_HEIGHT * 2,
      backgroundColor: colors.black,
      position: "absolute",
      bottom: -SCREEN_HEIGHT,
    },
  });

export { TopDrawer };
