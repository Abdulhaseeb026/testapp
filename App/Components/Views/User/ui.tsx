import React from 'react'
import useService from './service'
import useStyles from './styles'
import { StackScreenProps } from '@Navigation/Stack/types'

import { StatusBar, View, FlatList } from 'react-native'
import { Text } from '@Atoms'
import { Button } from '@Molecules'
import { Screen } from '@Templates'
import { Colors } from '@Theme'

const User = (props: StackScreenProps) => {
  const { onContinue, isLoading, users } = useService(props)
  const { container, button } = useStyles()

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <Screen>
        <View style={container}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User Details</Text>
          </View>

          <View style={{ padding: 20 }}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <FlatList
                data={users}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                  <>
                    <Text>{item.name} </Text>
                    <Text>{item.email} </Text>
                  </>
                )}
              />
            )}
          </View>
          <Button style={button} onPress={onContinue}>
            Continue
          </Button>
        </View>
      </Screen>
    </>
  )
}

export default User
