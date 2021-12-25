import { GraphQLClient } from 'graphql-request'
import Config from 'react-native-config'

const client = new GraphQLClient(Config.API_URL, { headers: {} })

export default client
