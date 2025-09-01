import {graphql} from '../../gql'

export const verifyUserGoogleTokenQuery =graphql(`#graphql
  query verifyUserGoogleToken($token: String!){
  verifyGoogleToken(token: $token)
  }

`);

export const getCurrentUserQuery = graphql(`
  query GetCurrentUser {
  getCurrentUser {
    id
    email
    firstName
    lastName
    profileImageURL
    tweets {
    id
    content
    author{
    id
    firstName
    lastName
    profileImageURL
    }
    }
  }
}
  `);


export const getUserByIdQuery = graphql(`#graphql
  query GetuserByID($id: ID!) {
  getUserById(id: $id) {
    id
    firstName
    lastName
    profileImageURL
    tweets {
      content
      id
      author {
        firstName
        lastName
        profileImageURL
      }
    }
  }
}
  `)