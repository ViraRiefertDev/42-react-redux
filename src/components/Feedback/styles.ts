import styled from "@emotion/styled"

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  margin: 0 auto;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const LikesAndDislikesCount = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin: 10px;
  min-width: 50px;
`

export const ResetResultWrapper = styled.div`
  width: 300px;
  margin-top: 20px;
`

export const ImgWrapper = styled.div`
  width: 50px;
  height:50px;
  border-radius: 50%;
`
export const LikeIMG = styled.img`
  width: 100%;
`
export const DislikeIMG = styled.img`
  width: 100%;
`
