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
  },
});

export const { setToken, onPermissionDenied, onNewNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
