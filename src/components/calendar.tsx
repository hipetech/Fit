import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { CalendarList as WixCalendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars/src";

import uk from "../locales/calendar/uk.json";
import { useAppearanceStore } from "../store/appearanceStore.ts";
import { useDateStore } from "../store/dateStore.ts";

LocaleConfig.locales.en = LocaleConfig.locales[""];

LocaleConfig.locales.uk = uk;

export const Calendar = () => {
  const { colors, theme } = useAppearanceStore();
  const { date, setDate } = useDateStore();
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <WixCalendar
      // calendar re-renders only on key prop change
      key={theme + language}
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
