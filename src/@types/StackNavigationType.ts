import {ParamListBase} from '@react-navigation/native';

type StackParamType<T> = {
  screen?: keyof T;
  params?: T[keyof T];
};

export interface BottomTabStackWithParams extends ParamListBase {
  Home: undefined;
  Cart: undefined;
  Map: undefined;
  My: undefined;
}

export interface HomeStackWithParams extends ParamListBase {
  PopUpList: {
    PopUpId: number;
  };
}

export interface RootStackNavigationType extends ParamListBase {
  BottomTab: StackParamType<BottomTabStackWithParams>;
  Home: StackParamType<HomeStackWithParams>;
  Test: undefined;
}
