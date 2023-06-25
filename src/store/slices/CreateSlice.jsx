import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: []
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, name, email, phone, image,hobbies,description } = action.payload;
      return {
        ...state,
        userList: [...state.userList, { id, name, email, phone, image,hobbies,description }]
      };
    },
    updateUser: (state, action) => {
      const { id, name, email, phone, image,hobbies,description } = action.payload;
      const updatedUserList = state.userList.map(user => {
        if (user.id.toString() === id) {
          return { ...user, name, email, phone, image, hobbies, description };
        }
        return user;
      });
      return {
        ...state,
        userList: updatedUserList
      };
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatedUserList = state.userList.filter(user => user.id !== id);
      return {
        ...state,
        userList: updatedUserList
      };
    }
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
