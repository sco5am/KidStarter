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

export const ADD_BUYER = gql`
  mutation addBuyer(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addBuyer(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      buyer {
        _id
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