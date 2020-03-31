import { DirectoryActionsTypes } from "./directory.types";

export const addAll = directories => ({
  type: DirectoryActionsTypes.ADD_ALL,
  payload: directories
});
