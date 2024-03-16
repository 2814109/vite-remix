export type TUser = {
  name: string;
  age: number;
};

export interface State {
  count: number;
}
export type Action =
  | { type: "SET_COUNT"; payload: number }
  | { type: "RESET_COUNT" };