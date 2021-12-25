import api from '@Api/api'

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

export default getUserService
