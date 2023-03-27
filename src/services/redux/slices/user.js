import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  isAuthenticated: null,
  user: {},
  error: null,
  loading: true,
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
  },
});

export const {
  onLogin,
  onLogout,
  onSignup,
  onAuthenticationRequest,
  onAuthenticationFailure,
  onUserUpdate,
} = userSlice.actions;

export default userSlice.reducer;
