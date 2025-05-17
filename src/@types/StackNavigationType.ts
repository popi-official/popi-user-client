import {ParamListBase} from '@react-navigation/native';
import {NavigatorScreenParams} from '@react-navigation/native';

export interface HomeStackWithParams extends ParamListBase {
  Home: undefined;
  PopUpList: {
    PopUpId: number;
  };
  Test: undefined;
}

export interface CartStackWithParams extends ParamListBase {
  Cart: undefined;
  Test: undefined;
}

export interface BottomTabStackWithParams extends ParamListBase {
  HomeTab: NavigatorScreenParams<HomeStackWithParams>;
  CartTab: NavigatorScreenParams<CartStackWithParams>;
  MapTab: undefined;
  MyTab: undefined;
}

export interface RootStackNavigationType extends ParamListBase {
  BottomTab: NavigatorScreenParams<BottomTabStackWithParams>;
}
