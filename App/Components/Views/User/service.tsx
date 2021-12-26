import { StackScreenProps } from 'Navigation/Stack/types'
import { useEffect, useState } from 'react'

const useService = (props: StackScreenProps) => {
  const [isLoading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    setLoading(true)
    getUsers()
  }, [])

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      name: 'foo',
      email: 'bar@gmail.com',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json))

  return { isLoading, users }
}
export default useService
