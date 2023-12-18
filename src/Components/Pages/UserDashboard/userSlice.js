import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    return res.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    });
  },
});

export default userSlice.reducer;
