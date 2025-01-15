import axios from "axios";
import { createAppSlice } from "../../createAppSlice";

import { CustomerStateSlice } from "./types";

const customer:CustomerStateSlice = {
  data:{name:'',
  gender:'',
  email:'',
  tel:'',
  pictureURL:''},
  error: undefined,
  status: 'default',
}

export const customerSlice = createAppSlice({
  name:'CUSTOMER',
  initialState: customer,
  reducers: create =>({
    getData: create.asyncThunk(
      async(arc, thunkApi) =>{
        try{
          const result = await axios.get(
            'https://randomuser.me/api/?results=1&name=${search}'
          )
          return result.data.results[0]
        }catch(error){
          thunkApi.rejectWithValue(error)
        }
      },
      {
        pending:(state:CustomerStateSlice) =>{
          state.status='loading'
          state.error = undefined
        },
        fulfilled: (state:CustomerStateSlice, action: any) => {
          state.status = 'success'
          state.data = {
            name: `${action.payload.name.title} ${action.payload.name.first} ${action.payload.name.title}`,
            gender: action.payload.gender,
            email: action.payload.email,
            tel: action. payload.phone,
            pictureURL: action.payload.picture.medium
          }
        },
        rejected: (state:CustomerStateSlice, action:any)=>{
          state.status = 'error',
          state.error = action.payload
        }
      }
    )
  }),
  selectors: {
    personData: (state: CustomerStateSlice) => state,
  },
})

export const customerSliceAction = customerSlice.actions;
export const customerSliceSelectors = customerSlice.selectors;