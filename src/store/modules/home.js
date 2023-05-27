import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {home} from "@/services";

// 创建异步Action
export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", async () => {
  const res = await home.getHomeGoodPriceData()
  console.log(res, 'resr')
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {} //房源信息
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
      state.goodPriceInfo = payload
    })
  }

})


export const {changeGoodPriceInfoAction} = homeSlice.actions
export default homeSlice.reducer
