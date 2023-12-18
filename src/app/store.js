import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Components/Pages/UserDashboard/userSlice";

const store = configureStore({
  reducer: {
    userR: userSlice,
  },
});

export default store;
