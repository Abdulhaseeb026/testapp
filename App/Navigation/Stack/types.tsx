import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Welcome: undefined
  User: undefined
}

export type StackScreenProps = NativeStackScreenProps<RootStackParamList>
