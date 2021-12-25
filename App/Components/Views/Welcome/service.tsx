import React from 'react'
import {} from 'react-native'
import { StackScreenProps } from '@Navigation/Stack/types'

const useService = (props: StackScreenProps) => {
  const onContinue = () => {
    props.navigation.navigate('User')
  }

  return { onContinue }
}

export default useService
