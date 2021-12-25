import { client } from '@Api'
import { FetchUsers } from './queries'
import { USER_DATA, USERS_RESPONSE } from './types'

const fetchUsers = async (): Promise<USER_DATA[]> => {
  let variables = {}

  try {
    const response = await client.request<USERS_RESPONSE>(FetchUsers, variables)

    return response.users.data
  } catch (error) {
    return error.response
  }
}

export default fetchUsers
