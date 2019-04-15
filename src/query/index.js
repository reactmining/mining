import { gql } from 'graphql-tag';
export const queryFindUser = () => {
    return gql`{
        user(username:"nirma",password:"password"){
              username
          id
        }
      }`

}