import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { View } from 'react-native';
import React from 'react';

export const DEFAULT_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackVisible: false,
  headerBackground: () =>
    React.createElement(View, {
      style: {
        flex: 1,
        backgroundColor: 'black',
        minHeight: 72,
      },
    }),
  contentStyle: {
    gap: 8,
    backgroundColor: 'black',
    overflow: 'visible',
  },
};

export const PADDING = 12;
export const SEARCH_SIZE = 6;

export const CALENDAR_THEME = {
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
    },
    monthText: {
      fontSize: 16,
      fontWeight: 600,
      color: '#FFFFFF',
      fontFamily: 'pretendard',
    },
    week: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#1B1B1C',
      marginBottom: 12,
    },
    weekText: {
      fontSize: 20,
      fontWeight: 700,
      color: '#BCBCBE',
    },
    dayHeader: {
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'pretendard',
      fontWeight: 'semibold',
      color: '#BCBCBE',
    },
  },
  'stylesheet.day.basic': {
    base: {
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginTop: 4,
      fontSize: 16,
      fontFamily: 'pretendard',
      fontWeight: '700',
      color: 'white',
      backgroundColor: 'transparent',
    },
    disabledText: {
      color: '#929292',
      fontWeight: '400',
    },
    inactiveText: {
      color: '#222222',
      opacity: 0.3,
    },
  },
  weekVerticalMargin: 10,
  backgroundColor: '#1B1B1C',
  calendarBackground: '#1B1B1C',
  todayTextColor: '#BFEFF4',
  monthTextColor: '#BCBCBE',
  textMonthFontFamily: 'pretendard',
  dayTextColor: 'white',
  textDisabledColor: '#929292',
  textDayFontWeight: '400',
} as any;
