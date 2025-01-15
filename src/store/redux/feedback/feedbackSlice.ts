import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"

import { FeedbackStateSlice } from "./types"

const feedbackInitialState: FeedbackStateSlice = {
  likeCount: 0,
  disLikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackStateSlice, action:PayloadAction<number>) => {
      state.likeCount += action.payload;
    }),
    addDisLike: create.reducer((state: FeedbackStateSlice) => {
      state.disLikeCount += 1
    }),
    /* removeAll: create.reducer((state: FeedbackStateSlice) => {
      state.likeCount = 0
      state.disLikeCount = 0
    }), */
    //!Вместо перезаписи свойств можно просто вернуть initialState
    removeAll: create.reducer(() => feedbackInitialState),
  }),
  selectors: {
    likes: (state: FeedbackStateSlice) => state.likeCount,
    dislikes: (state: FeedbackStateSlice) => state.disLikeCount,
  },
  //!Если много свойств, то можно передавать весь state, и потом через деструктуризацию вытягивать свойсва
  /* selectors: {
    feedbackData: (state: FeedbackStateSlice) => state,
  }, */
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
