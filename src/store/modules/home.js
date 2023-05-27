import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {home} from "@/services";

// 创建异步Action
export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", async (payload, store) => {
  // console.log(store.getState().home)
  const res = await home.getHomeGoodPriceData()
  // console.log(res, '高性价比 房源数据')

  const res2 = await home.getHomeHeightScoreData()
  // console.log(res2, '高评分 房源数据')
  store.dispatch(changeHighScoreInfoAction(res2))

  return [res, res2]
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 房源信息
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
      // console.log(payload)
      state.goodPriceInfo = payload[0]
      // state.highScoreInfo = payload[1]
    })
  }

})


export const {changeGoodPriceInfoAction ,changeHighScoreInfoAction} = homeSlice.actions
export default homeSlice.reducer
