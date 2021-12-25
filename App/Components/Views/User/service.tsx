import { StackScreenProps } from 'Navigation/Stack/types'
import { useEffect, useState } from 'react'

const useService = (props: StackScreenProps) => {
  const [isLoading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  getUsers = () => {
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

  return { isLoading, users }
}
export default useService
