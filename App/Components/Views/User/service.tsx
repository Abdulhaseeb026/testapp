// import React from 'react'
// import {} from 'react-native'
// import { StackScreenProps } from '@Navigation/Stack/types'

// const useService = (props: StackScreenProps) => {
//   const onContinue = () => {
//     props.navigation.navigate('User')
//   }

//   return { onContinue }
// }

// export default useService

import { StackScreenProps } from 'Navigation/Stack/types'
import React, { useEffect, useState } from 'react'

const useService = (props: StackScreenProps) => {
  const [isLoading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const onContinue = () => {
    props.navigation.navigate('User')
  }

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

  return { onContinue, isLoading, users }
}
export default useService
