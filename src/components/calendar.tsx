import React from "react";
import { StyleSheet } from "react-native";
import { CalendarList as WixCalendar } from "react-native-calendars";

import { useAppearanceStore } from "../store/appearanceStore.ts";
import { useDateStore } from "../store/dateStore.ts";

export const Calendar = () => {
  const { colors, theme } = useAppearanceStore();
  const { date, setDate } = useDateStore();

  return (
    <WixCalendar
      // calendar re-renders only on key prop change
      key={theme}
      hideExtraDays={false}
      showSixWeeks={true}
      horizontal={true}
      pagingEnabled={true}
      onDayPress={(day) => setDate(new Date(day.dateString))}
      disableAllTouchEventsForDisabledDays={true}
      markedDates={{
        [date.toISOString().split("T")[0]]: {
          selected: true,
          selectedColor: colors.orange,
        },
      }}
      style={styles.container}
      theme={{
        calendarBackground: "transparent",
        dayTextColor: colors.white,
        todayTextColor: colors.orange,
        arrowColor: colors.orange,
        monthTextColor: colors.orange,
        textSectionTitleColor: colors.white,
        textDisabledColor: colors.background,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        "stylesheet.calendar.main": {
          dayContainer: {
            flex: 1,
            height: 50,
            alignItems: "center",
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
