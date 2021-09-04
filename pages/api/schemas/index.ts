import {gql} from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Query {
    users: [User]
    user(name: String!): User!
  }
`;

export default typeDefs;
