import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  permissionGranted: null,
  token: null,
  notifications: [
    // {
    //   title: "Test",
    //   body: "INFO: STEP 5 traitement_ACtifs DONE",
    // },
  ],
  calculationCompletionCount: 0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialSlice,
  reducers: {
    setToken: (state, action) => {
      state.permissionGranted = true;
      state.token = action.payload;
    },
    onPermissionDenied: (state, _) => {
      state.permissionGranted = false;
    },
    onNewNotification: (state, action) => {
      state.notifications = [action.payload, ...state.notifications];
    },
    onCalculationCompletion: (state) => {
      state.calculationCompletionCount = state.calculationCompletionCount + 1;
    },
  },
});

export const {
  setToken,
  onPermissionDenied,
  onNewNotification,
  onCalculationCompletion,
} = notificationSlice.actions;

export default notificationSlice.reducer;
