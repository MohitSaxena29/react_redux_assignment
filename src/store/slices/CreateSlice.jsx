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
      // console.log(name);
      const updateUser = state.userList.find(user => user.id.toString() === id);
      if (updateUser) {
        updateUser.name = name;
        updateUser.email = email;
        updateUser.phone = phone;
        // console.log(updateUser.name);
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




// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userList: []
// };

// const userSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     addUser: (state, action) => {
//       console.log(action.payload);
//       return {
//         ...state,
//         userList: [...state.userList, action.payload]
//       };
//     },
//     updateUser: (state, action) => {
//       const { id, name, email, phone } = action.payload;
//       const updatedUserList = state.userList.map(user => {
//         if (user.id.toString() === id) {
//           return { ...user, name, email, phone };
//         }
//         return user;
//       });
//       return {
//         ...state,
//         userList: updatedUserList
//       };
//     },
//     deleteUser: (state, action) => {
//       const { id } = action.payload;
//       console.log(action.payload);
//       const updatedUserList = state.userList.filter(user => user.id !== id);
//       return {
//         ...state,
//         userList: updatedUserList
//       };
//     }
//   }
// });

// export const { addUser, updateUser, deleteUser } = userSlice.actions;
// export default userSlice.reducer;
