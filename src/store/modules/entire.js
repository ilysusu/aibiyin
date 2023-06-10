import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {entire} from '@/services'

export const fetchEntireDataAction = createAsyncThunk('fetchEntireData', async (extra, store) => {
  console.log(extra, store)
  // 根据页码获取最新的数据
  const currentPage = store.getState().entire.currentPage
  const res = await entire.getEntireRoomList(currentPage * 20)
  // console.log(res)
  return res
})

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 3, // 当前页码
    roomList: [], // 房间列表
    totalCount: 0, // 总数据个数
  },
  reducers: {
    // 更改当前页面操作
    changeCurrentPageAction: (state, action) => {
      state.currentPage = action.payload;
    },
    // 更改房间列表操作
    changeRoomListAction: (state, {payload}) => {
      state.roomList = payload
    },
    changeTotalCountAction: (state, {payload}) => {
      state.totalCount = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntireDataAction.fulfilled, (state, {payload}) => {
      // 把最新的数据 保存到state中
      state.roomList = payload.list
      state.totalCount = payload.totalCount
    })
  }
})

export const { changeCurrentPageAction, changeRoomListAction, changeTotalCountAction } = entireSlice.actions;
export default entireSlice.reducer;
