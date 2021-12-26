import api from '@Api/api'
import Async from '@Async'

type UserData = {
  name: string
  email: string
}

type UserErrorResponse = {
  data: {
    name: string
    email: string
  }
}

async function getUserService() {
  try {
    const response = await api.get(
      'https://jsonplaceholder.typicode.com/users/',
    )

    if (response.status === 200) {
      return response.data
    }

    throw new Error()
  } catch (e: any) {
    console.log(
      '🚀 ~ file: index.tsx ~ line 11 ~ getUserService ~ e',
      e.response,
    )
    // throw parseError(e.response || e.message)
  }
}

async function userService({ name, email }: UserData) {
  try {
    const response = await api.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        name: name,
        email: email,
      },
    )

    if (response.status === 200) {
      return Async.setItem(Async.Item.Token, response.data).then(() => {
        return 200
      })
    }

    throw new Error()
  } catch (e: any) {
    throw parseError(e.response || e.message)
  }
}

export { getUserService, userService }

function parseError(error, UserErrorResponse) {
  let isNameError =
    error.status === 400 && error.data.name && error.data.name.length > 0
  let isEmailError =
    error.status === 400 && error.data.email && error.data.email.length > 0

  if (isNameError) {
    return {
      type: 'name',
      message: error.data.username[0],
    }
  }

  if (isEmailError) {
    return {
      type: 'email',
      message: error.data.email[0],
    }
  }
}
