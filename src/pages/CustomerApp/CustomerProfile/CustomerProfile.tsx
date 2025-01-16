import { BildWrapper, CustomerCard, CustomerProfilePageWrapper, Gender, UserBild, UserEmail, UserName, UserTel } from "./styles"

import { useAppSelector } from "../../../store/hooks"
import { customerSliceSelectors } from "../../../store/redux/customer/customerSlice"

function CustomerProfile() {
  const {data} = useAppSelector(customerSliceSelectors.personData);

  return (
    <CustomerProfilePageWrapper>
      <CustomerCard>
        <BildWrapper>
          <UserBild src={data.pictureURL}/>
        </BildWrapper>
        <Gender>{data.gender}</Gender>
        <UserName>{data.name}</UserName>
        <UserEmail>Email: {data.email}</UserEmail>
        <UserTel>Tel: {data.tel}</UserTel>
      </CustomerCard>
    </CustomerProfilePageWrapper>
  )
}

export default CustomerProfile
