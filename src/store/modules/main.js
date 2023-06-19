import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
    }
  },
  reducers: {
    // 更改头部配置操作
    changeHeaderConfigAction(state, {payload}) {
      state.headerConfig = payload
    }
  }
})

export const {changeHeaderConfigAction} = mainSlice.actions
export default mainSlice.reducer
