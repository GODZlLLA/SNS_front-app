/**
 * react-navigation周りの型定義
 * https://reactnavigation.org/docs/typescript/?config=dynamic#type-checking-screens
 */

export type SuperRootStackParamList = {
  RootTab: undefined;
  Home: undefined;
  Detail: undefined;
};

export type RootStackParamList = {
  AuthStack: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: undefined;
};
