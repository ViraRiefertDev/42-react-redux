interface CustomerData {
  name: string
  gender: string
  email: string
  tel: string
  pictureURL: string
}

export interface CustomerStateSlice {
  data: CustomerData
  error: any
  status: "default" | "loading" | "success" | "error"
}
