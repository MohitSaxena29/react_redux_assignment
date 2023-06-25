import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: []
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
    },
    updateUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      console.log(action.payload);
      const updateUser = state.userList.find(user => user.id === id);
      if (updateUser) {
        updateUser.name = name;
        updateUser.email = email;
        updateUser.phone = phone;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      console.log(action.payload);
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
