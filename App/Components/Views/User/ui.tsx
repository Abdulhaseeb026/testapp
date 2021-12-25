import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { View } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'
import { Screen } from '@Templates'

const User = (props: StackScreenProps) => {
  const { loading, success, user, setRandomID } = useService(props)
  const { container, row, button, root } = useStyles()

  let renderLines = () => {
    if (!user) return null

    return Object.entries(user).map(([key, value], index) => {
      return (
        <View key={index} style={row}>
          <Text w3>{key.toUpperCase()}:</Text>
          <Text w5>{value}</Text>
        </View>
      )
    })
  }

  if (loading) {
    return (
      <View style={container}>
        <Text w5>Fetching data...</Text>
      </View>
    )
  }

  if (!success) {
    return (
      <View style={container}>
        <Text w5>Failed to fetch</Text>
      </View>
    )
  }

  return (
    <Screen>
      <View style={root}>
        <Text h3 w4>
          Random User:
        </Text>

        <View>{renderLines()}</View>

        <Button style={button} onPress={setRandomID}>
          Get Random User
        </Button>
      </View>
    </Screen>
  )
}

export default User
