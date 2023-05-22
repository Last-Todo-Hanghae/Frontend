import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const todoSlice = createSlice({
  name: "todoLogin",
  initialState,
  reducers: {
    changeIsLog: (state, action) => {
      state.isLogged = !!localStorage.getItem('accessToken');
    },
    login: (state, action) => {
      state.isLogged = true
    },
    logout: (state, action) => {
      state.isLogged = false;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { login, logout, changeIsLog } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
