import Button from "../Button/Button"
import {
  ButtonsContainer,
  ButtonWrapper,
  DislikeIMG,
  FeedbackContainer,
  ImgWrapper,
  LikeIMG,
  LikesAndDislikesCount,
  ResetResultWrapper,
} from "./styles"

import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "../../store/redux/feedback/feedbackSlice"

function Feedback() {
  //! const feedbackData = useAppSelector(feedbackSliceSelectors.feedbackData); 
  //! const {likeCount, dislikeCount} = useAppSelectors(feedbackSliceSelectors.feedbackData);
  const likeCount = useAppSelector(feedbackSliceSelectors.likes)
  const disLikeCount = useAppSelector(feedbackSliceSelectors.dislikes)
  const dispatch = useAppDispatch();
  const Pluslikes = 100

  const onLike = () => {
    dispatch(feedbackSliceActions.addLike(100))
  }

  const onDisLike = () => {
    dispatch(feedbackSliceActions.addDisLike())
  }

  const onReset = () => {
    dispatch(feedbackSliceActions.removeAll())
  }

  return (
    <FeedbackContainer>
      <ButtonsContainer>
        <ButtonWrapper>
          <LikesAndDislikesCount className="likes-count">
            {likeCount}
          </LikesAndDislikesCount>
          <Button onClick={onLike}>
            <ImgWrapper>
              <LikeIMG src={like} />
            </ImgWrapper>
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={onDisLike}>
            <ImgWrapper>
              <DislikeIMG src={dislike} />
            </ImgWrapper>
          </Button>

          <LikesAndDislikesCount>{disLikeCount}</LikesAndDislikesCount>
        </ButtonWrapper>
      </ButtonsContainer>
      {(likeCount || disLikeCount) > 0 && (
        <ResetResultWrapper className="reset-result-wrapper">
          <Button onClick={onReset} name="Reset Result" />
        </ResetResultWrapper>
      )}
    </FeedbackContainer>
  )
}

export default Feedback
