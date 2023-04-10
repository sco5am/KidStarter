import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_BUYER = gql`
  mutation addBuyer(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    addBuyer(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      buyer {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_SELLER = gql`
  mutation addSeller(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    addSeller(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      seller {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;