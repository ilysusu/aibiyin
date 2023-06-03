import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {home} from "@/services";

// 创建异步Action
export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", (payload, store) => {
  // console.log(store.getState().home)
  home.getHomeGoodPriceData().then(res => {
    // console.log(res, '高性价比 房源数据')
    store.dispatch(changeGoodPriceInfoAction(res))
  })

  home.getHomeHeightScoreData().then(res => {
    // console.log(res, '高评分 房源数据')
    store.dispatch(changeHighScoreInfoAction(res))
  })

  home.getHomeDiscountData().then(res => {
    // console.log(res, '折扣 房源数据')
    store.dispatch(changeDiscountInfoAction(res))
  })

  home.getHomeHotplaceData().then(res => {
    // console.log(res4, '热门地数据')
    store.dispatch(changeHotplaceInfoAction(res))
  })

  home.getHomeLongForData().then(res => {
    // console.log(res, '可能想去的地方')
    store.dispatch(changeLongforInfoAction(res))
  })

  home.getHomePlusData().then(res => {
    console.log(res, '品质和设计经过验证的房源')
    store.dispatch(changePlusInfoAction(res))
  })

  // return [res, res2, ]
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 房源信息
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotplaceInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeHotplaceInfoAction(state, {payload}) {
      state.hotplaceInfo = payload
    },
    changeLongforInfoAction(state, {payload}) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
    //   // console.log(payload)
    //   state.goodPriceInfo = payload[0]
    //   state.highScoreInfo = payload[1]
    // })
  }
})


export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotplaceInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction,
  } = homeSlice.actions

export default homeSlice.reducer
