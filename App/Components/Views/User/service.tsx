import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'
import { fetchUsers, selectUserById } from '@Redux/Users'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { RootState } from '@Redux'

const useService = (props: StackScreenProps) => {
  const [userID, setUserID] = useState('')

  const dispatch = useDispatch()

  const { loading, success } = useSelector((state: RootState) => state.Users)
  const user = useSelector((state: RootState) => selectUserById(state, userID))

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const setRandomID = () => {
    let randomID: string = (Math.floor(Math.random() * 10) + 1).toString()
    setUserID(randomID)
  }

  useEffect(() => {
    if (success) {
      setRandomID()
    }
  }, [loading, success])

  return { loading, success, user, setRandomID }
}

export default useService
