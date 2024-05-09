import React from "react";
import { StyleSheet } from "react-native";
import { Calendar as WixCalendar } from "react-native-calendars";

import { useAppearanceStore } from "../../store/appearanceStore.ts";

export const Calendar = () => {
  const { colors, theme } = useAppearanceStore();

  return (
    <WixCalendar
      // calendar re-renders only on key prop change
      key={theme}
      style={styles.container}
      enableSwipeMonths={true}
      theme={{
        calendarBackground: "transparent",
        dayTextColor: colors.white,
        todayTextColor: colors.orange,
        arrowColor: colors.orange,
        monthTextColor: colors.orange,
        textSectionTitleColor: colors.white,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        "stylesheet.calendar.main": {
          dayContainer: {
            height: 55,
          },
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 15,
  },
});
