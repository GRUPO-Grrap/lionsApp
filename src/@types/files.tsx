export enum ScreenValues {
  INDEX = "index",
  HOME = "home",
  HISTORY = "history",
  LOGIN = "login",
  REGISTER = "register",
  USERS = "users",
}
export const ScreenView = {
  [ScreenValues.HOME]: { id: ScreenValues.HOME, name: "Home" },
  [ScreenValues.LOGIN]: { id: ScreenValues.INDEX, name: "Login" },

  [ScreenValues.HISTORY]: { id: ScreenValues.HISTORY, name: "History" },
  [ScreenValues.REGISTER]: { id: ScreenValues.REGISTER, name: "Registro" },
  [ScreenValues.USERS]: { id: ScreenValues.USERS, name: "User" },
};
