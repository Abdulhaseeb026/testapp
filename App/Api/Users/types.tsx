export interface USER_DATA {
  id: string
  name: string
  username: string
  email: string
  phone: string
}

export interface USERS_RESPONSE {
  users: {
    data: Array<USER_DATA>
  }
}
