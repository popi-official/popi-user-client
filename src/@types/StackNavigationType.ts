import {ParamListBase} from '@react-navigation/native';
import {NavigatorScreenParams} from '@react-navigation/native';

export interface HomeStackWithParams extends ParamListBase {
  Home: undefined;
  PopUpList: {
    PopUpId: number;
  };
  Test: undefined;
}

export interface MapStackWithParams extends ParamListBase {
  Map: undefined;
}

export interface CartStackWithParams extends ParamListBase {
  Cart: undefined;
  Test: undefined;
}

export interface MyStackWithParams extends ParamListBase {
  My: undefined;
}

export interface BottomTabStackWithParams extends ParamListBase {
  HomeTab: NavigatorScreenParams<HomeStackWithParams>;
  CartTab: NavigatorScreenParams<CartStackWithParams>;
  MapTab: NavigatorScreenParams<MapStackWithParams>;
  MyTab: NavigatorScreenParams<MyStackWithParams>;
}

export interface RootStackNavigationType extends ParamListBase {
  BottomTab: NavigatorScreenParams<BottomTabStackWithParams>;
}
