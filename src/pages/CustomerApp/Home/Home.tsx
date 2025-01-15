import { HomePageWrapper, UserName } from "./styles"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
  customerSliceAction,
  customerSliceSelectors,
} from "../../../store/redux/customer/customerSlice"

function Home() {
  const { data } = useAppSelector(customerSliceSelectors.personData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(customerSliceAction.getData())
  }, [])

  console.log(data);
  return (
    <HomePageWrapper>
      <UserName>Hello, {data.name}</UserName>
    </HomePageWrapper>
  )
}

export default Home
