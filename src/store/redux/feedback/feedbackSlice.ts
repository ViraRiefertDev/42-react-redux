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
    addLike: create.reducer((state: FeedbackStateSlice) => {
      state.likeCount += 1
    }),
    addDisLike: create.reducer((state: FeedbackStateSlice) => {
      state.disLikeCount += 1
    }),
    removeAll: create.reducer((state: FeedbackStateSlice) => {
      state.likeCount = 0
      state.disLikeCount = 0
    }),
  }),
  selectors: {
    likes: (state: FeedbackStateSlice) => state.likeCount,
    dislikes: (state: FeedbackStateSlice) => state.disLikeCount,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
