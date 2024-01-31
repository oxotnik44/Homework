import { createSlice } from "@reduxjs/toolkit";

interface IHomeWork {
  namePair: string;
  dataDelivery: string;
  descriptionHomeWork: string;
  id: string;
}

interface iState {
  dataHomeWork: IHomeWork[];
}

export const initialHomeWorkState: iState = {
  dataHomeWork: [],
};

export const ListHomeWorkSlice = createSlice({
  name: "homeWork",
  initialState: initialHomeWorkState,
  reducers: {
    setHomeWork(state, action) {
      state.dataHomeWork = action.payload;
    },
    resetHomeWork(state, action) {
      state.dataHomeWork = state.dataHomeWork.filter(
        (item) => item.id !== action.payload
      );
    },
    addHomeWork(state, action) {
      state.dataHomeWork.push(action.payload);
    },
  },
});
export const { setHomeWork, resetHomeWork, addHomeWork } =
  ListHomeWorkSlice.actions;

export default ListHomeWorkSlice.reducer;
