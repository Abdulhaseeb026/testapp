import { gql } from 'graphql-request'

export const FetchUsers = gql`
  query FETCH_USERS {
    users {
      data {
        id
        name
        username
        email
        phone
      }
    }
  }
`
