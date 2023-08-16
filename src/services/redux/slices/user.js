import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  isAuthenticated: null,
  user: {},
  error: null,
  loading: true,
  isCurrentAppChosen: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialSlice,
  reducers: {
    onLogin: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    onUserUpdate: (state, action) => {
      state.user = action.payload;
    },
    onLogout: (state, _) => {
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.loading = false;
      state.isCurrentAppChosen = null;
    },
    onSignup: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    onAuthenticationRequest: (state) => {
      state.loading = true;
    },
    onAuthenticationFailure: (state) => {
      state.loading = false;
      state.user = {};
    },
    onCurrentAppChosen: (state) => {
      state.isCurrentAppChosen = true;
    },
  },
});

export const {
  onLogin,
  onLogout,
  onSignup,
  onAuthenticationRequest,
  onAuthenticationFailure,
  onUserUpdate,
  onCurrentAppChosen,
} = userSlice.actions;

export default userSlice.reducer;
