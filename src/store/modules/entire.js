import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {entire} from '@/services'

// 获取全部页面房间数据操作
export const fetchEntireDataAction = createAsyncThunk('fetchEntireData', async (extra=0, store) => {
  // console.log(extra, store)
  // 0.修改currentPage
  store.dispatch(changeCurrentPageAction(extra))
  store.dispatch(changeIsLoadingAction(true))

  // 1.根据页码获取最新的数据
  const currentPage = store.getState().entire.currentPage
  const res = await entire.getEntireRoomList(currentPage * 20)
  // console.log(res)
  store.dispatch(changeIsLoadingAction(false))
  return res
})

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0, // 当前页码
    roomList: [], // 房间列表
    totalCount: 0, // 总数据个数
    isLoading: false
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
    // 更改总计数操作
    changeTotalCountAction: (state, {payload}) => {
      state.totalCount = payload
    },
    changeIsLoadingAction: (state, {payload}) => {
      state.isLoading = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntireDataAction.fulfilled, (state, {payload}) => {
      // 2.把最新的数据 保存到state中
      state.roomList = payload.list
      state.totalCount = payload.totalCount
    })
  }
})

export const { changeCurrentPageAction, changeRoomListAction, changeTotalCountAction, changeIsLoadingAction } = entireSlice.actions;
export default entireSlice.reducer;
