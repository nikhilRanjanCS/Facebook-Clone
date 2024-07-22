import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {},
    addAllPosts: (state, action) => {},
  },
});

export const { addPost, addAllPosts } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
